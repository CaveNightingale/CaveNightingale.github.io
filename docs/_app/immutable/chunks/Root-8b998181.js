import{S as js,i as Os,s as Hs,e as o,t as b,c as a,a as U,h as $,d as t,b as x,g as s,J as _,K as Xs,j as cn,n as Ms,l as an,o as Ln,p as M,q as Dn,r as G,x as H,y as D,z as F,C as L,k as P,m as N,L as Vn,F as zn,G as qn,H as Mn,I as Gn,w as gn,M as tr,N as sr,O as nr,P as rr,f as pt,Q as fn,R as On,T as ir,U as Wn,V as $n,W as xn}from"./index-a6551832.js";import{s as pr,S as Ns,P as Vs,o as un,M as jn,N as br,a as $r}from"./MainContext-6617568b.js";function hn(){}hn.prototype={diff:function(e,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=l.callback;typeof l=="function"&&(u=l,l={}),this.options=l;var p=this;function c(A){return u?(setTimeout(function(){u(void 0,A)},0),!0):A}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var k=n.length,v=e.length,h=1,w=k+v;l.maxEditLength&&(w=Math.min(w,l.maxEditLength));var T=[{newPos:-1,components:[]}],S=this.extractCommon(T[0],n,e,0);if(T[0].newPos+1>=k&&S+1>=v)return c([{value:this.join(n),count:n.length}]);function j(){for(var A=-1*h;A<=h;A+=2){var O=void 0,W=T[A-1],q=T[A+1],I=(q?q.newPos:0)-A;W&&(T[A-1]=void 0);var V=W&&W.newPos+1<k,J=q&&0<=I&&I<v;if(!V&&!J){T[A]=void 0;continue}if(!V||J&&W.newPos<q.newPos?(O=hr(q),p.pushComponent(O.components,void 0,!0)):(O=W,O.newPos++,p.pushComponent(O.components,!0,void 0)),I=p.extractCommon(O,n,e,A),O.newPos+1>=k&&I+1>=v)return c(cr(p,O.components,n,e,p.useLongestToken));T[A]=O}h++}if(u)(function A(){setTimeout(function(){if(h>w)return u();j()||A()},0)})();else for(;h<=w;){var E=j();if(E)return E}},pushComponent:function(e,n,l){var u=e[e.length-1];u&&u.added===n&&u.removed===l?e[e.length-1]={count:u.count+1,added:n,removed:l}:e.push({count:1,added:n,removed:l})},extractCommon:function(e,n,l,u){for(var p=n.length,c=l.length,k=e.newPos,v=k-u,h=0;k+1<p&&v+1<c&&this.equals(n[k+1],l[v+1]);)k++,v++,h++;return h&&e.components.push({count:h}),e.newPos=k,v},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],l=0;l<e.length;l++)e[l]&&n.push(e[l]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function cr(m,e,n,l,u){for(var p=0,c=e.length,k=0,v=0;p<c;p++){var h=e[p];if(h.removed){if(h.value=m.join(l.slice(v,v+h.count)),v+=h.count,p&&e[p-1].added){var T=e[p-1];e[p-1]=e[p],e[p]=T}}else{if(!h.added&&u){var w=n.slice(k,k+h.count);w=w.map(function(j,E){var A=l[v+E];return A.length>j.length?A:j}),h.value=m.join(w)}else h.value=m.join(n.slice(k,k+h.count));k+=h.count,h.added||(v+=h.count)}}var S=e[c-1];return c>1&&typeof S.value=="string"&&(S.added||S.removed)&&m.equals("",S.value)&&(e[c-2].value+=S.value,e.pop()),e}function hr(m){return{newPos:m.newPos,components:m.components.slice(0)}}var Un=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,Jn=/\S/,lr=new hn;lr.equals=function(m,e){return this.options.ignoreCase&&(m=m.toLowerCase(),e=e.toLowerCase()),m===e||this.options.ignoreWhitespace&&!Jn.test(m)&&!Jn.test(e)};lr.tokenize=function(m){for(var e=m.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&Un.test(e[n])&&Un.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var fr=new hn;fr.tokenize=function(m){var e=[],n=m.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var l=0;l<n.length;l++){var u=n[l];l%2&&!this.options.newlineIsToken?e[e.length-1]+=u:(this.options.ignoreWhitespace&&(u=u.trim()),e.push(u))}return e};var vr=new hn;vr.tokenize=function(m){return m.split(/(\S.+?[.!?])(?=\s+|$)/)};var wr=new hn;wr.tokenize=function(m){return m.split(/([{}:;,]|\s+)/)};function En(m){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?En=function(e){return typeof e}:En=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},En(m)}var _r=Object.prototype.toString,Rn=new hn;Rn.useLongestToken=!0;Rn.tokenize=fr.tokenize;Rn.castInput=function(m){var e=this.options,n=e.undefinedReplacement,l=e.stringifyReplacer,u=l===void 0?function(p,c){return typeof c=="undefined"?n:c}:l;return typeof m=="string"?m:JSON.stringify(Hn(m,null,null,u),u,"  ")};Rn.equals=function(m,e){return hn.prototype.equals.call(Rn,m.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function Hn(m,e,n,l,u){e=e||[],n=n||[],l&&(m=l(u,m));var p;for(p=0;p<e.length;p+=1)if(e[p]===m)return n[p];var c;if(_r.call(m)==="[object Array]"){for(e.push(m),c=new Array(m.length),n.push(c),p=0;p<m.length;p+=1)c[p]=Hn(m[p],e,n,l,u);return e.pop(),n.pop(),c}if(m&&m.toJSON&&(m=m.toJSON()),En(m)==="object"&&m!==null){e.push(m),c={},n.push(c);var k=[],v;for(v in m)m.hasOwnProperty(v)&&k.push(v);for(k.sort(),p=0;p<k.length;p+=1)v=k[p],c[v]=Hn(m[v],e,n,l,v);e.pop(),n.pop()}else c=m;return c}var Fn=new hn;Fn.tokenize=function(m){return m.slice()};Fn.join=Fn.removeEmpty=function(m){return m};function yr(m){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=m.split(/\r\n|[\n\v\f\r\x85]/),l=m.match(/\r\n|[\n\v\f\r\x85]/g)||[],u=[],p=0;function c(){var h={};for(u.push(h);p<n.length;){var w=n[p];if(/^(\-\-\-|\+\+\+|@@)\s/.test(w))break;var T=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(w);T&&(h.index=T[1]),p++}for(k(h),k(h),h.hunks=[];p<n.length;){var S=n[p];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(S))break;if(/^@@/.test(S))h.hunks.push(v());else{if(S&&e.strict)throw new Error("Unknown line "+(p+1)+" "+JSON.stringify(S));p++}}}function k(h){var w=/^(---|\+\+\+)\s+(.*)$/.exec(n[p]);if(w){var T=w[1]==="---"?"old":"new",S=w[2].split("	",2),j=S[0].replace(/\\\\/g,"\\");/^".*"$/.test(j)&&(j=j.substr(1,j.length-2)),h[T+"FileName"]=j,h[T+"Header"]=(S[1]||"").trim(),p++}}function v(){var h=p,w=n[p++],T=w.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),S={oldStart:+T[1],oldLines:typeof T[2]=="undefined"?1:+T[2],newStart:+T[3],newLines:typeof T[4]=="undefined"?1:+T[4],lines:[],linedelimiters:[]};S.oldLines===0&&(S.oldStart+=1),S.newLines===0&&(S.newStart+=1);for(var j=0,E=0;p<n.length&&!(n[p].indexOf("--- ")===0&&p+2<n.length&&n[p+1].indexOf("+++ ")===0&&n[p+2].indexOf("@@")===0);p++){var A=n[p].length==0&&p!=n.length-1?" ":n[p][0];if(A==="+"||A==="-"||A===" "||A==="\\")S.lines.push(n[p]),S.linedelimiters.push(l[p]||`
`),A==="+"?j++:A==="-"?E++:A===" "&&(j++,E++);else break}if(!j&&S.newLines===1&&(S.newLines=0),!E&&S.oldLines===1&&(S.oldLines=0),e.strict){if(j!==S.newLines)throw new Error("Added line count did not match for hunk at line "+(h+1));if(E!==S.oldLines)throw new Error("Removed line count did not match for hunk at line "+(h+1))}return S}for(;p<n.length;)c();return u}function kr(m,e,n){var l=!0,u=!1,p=!1,c=1;return function k(){if(l&&!p){if(u?c++:l=!1,m+c<=n)return c;p=!0}if(!u)return p||(l=!0),e<=m-c?-c++:(u=!0,k())}}function Br(m,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string"&&(e=yr(e)),Array.isArray(e)){if(e.length>1)throw new Error("applyPatch only works with a single input.");e=e[0]}var l=m.split(/\r\n|[\n\v\f\r\x85]/),u=m.match(/\r\n|[\n\v\f\r\x85]/g)||[],p=e.hunks,c=n.compareLine||function(ee,Z,ne,ie){return Z===ie},k=0,v=n.fuzzFactor||0,h=0,w=0,T,S;function j(ee,Z){for(var ne=0;ne<ee.lines.length;ne++){var ie=ee.lines[ne],le=ie.length>0?ie[0]:" ",pe=ie.length>0?ie.substr(1):ie;if(le===" "||le==="-"){if(!c(Z+1,l[Z],le,pe)&&(k++,k>v))return!1;Z++}}return!0}for(var E=0;E<p.length;E++){for(var A=p[E],O=l.length-A.oldLines,W=0,q=w+A.oldStart-1,I=kr(q,h,O);W!==void 0;W=I())if(j(A,q+W)){A.offset=w+=W;break}if(W===void 0)return!1;h=A.offset+A.oldStart+A.oldLines}for(var V=0,J=0;J<p.length;J++){var X=p[J],y=X.oldStart+X.offset+V-1;V+=X.newLines-X.oldLines;for(var z=0;z<X.lines.length;z++){var K=X.lines[z],C=K.length>0?K[0]:" ",Y=K.length>0?K.substr(1):K,se=X.linedelimiters[z];if(C===" ")y++;else if(C==="-")l.splice(y,1),u.splice(y,1);else if(C==="+")l.splice(y,0,Y),u.splice(y,0,se),y++;else if(C==="\\"){var te=X.lines[z-1]?X.lines[z-1][0]:null;te==="+"?T=!0:te==="-"&&(S=!0)}}}if(T)for(;!l[l.length-1];)l.pop(),u.pop();else S&&(l.push(""),u.push(`
`));for(var re=0;re<l.length-1;re++)l[re]=l[re]+u[re];return l.join("")}function dr(m){let e,n,l,u,p;return{c(){e=o("div"),n=o("div"),l=b(m[0]),this.h()},l(c){e=a(c,"DIV",{class:!0});var k=U(e);n=a(k,"DIV",{class:!0});var v=U(n);l=$(v,m[0]),v.forEach(t),k.forEach(t),this.h()},h(){x(n,"class","inner svelte-1q30hbw"),x(e,"class","outer svelte-1q30hbw")},m(c,k){s(c,e,k),_(e,n),_(n,l),u||(p=Xs(e,"click",m[1]),u=!0)},p(c,[k]){k&1&&cn(l,c[0])},i:Ms,o:Ms,d(c){c&&t(e),u=!1,p()}}}function Rr(m,e,n){let{href:l}=e,{content:u}=e;function p(){typeof l=="string"?open(l,"_self"):l()}return m.$$set=c=>{"href"in c&&n(2,l=c.href),"content"in c&&n(0,u=c.content)},[u,p,l]}class An extends js{constructor(e){super(),Os(this,e,Rr,dr,Hs,{href:2,content:0})}}function Tr(m){let e,n;return e=new Ns({props:{$$slots:{default:[Er]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&130&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function gr(m){let e,n;return e=new Ns({props:{$$slots:{default:[Ar]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&131&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Cr(m){let e,n;return e=new Ns({props:{$$slots:{default:[Pr]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&128&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Ir(m){let e,n;return e=new Ns({props:{$$slots:{default:[Nr]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&129&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function xr(m){let e,n;return e=new An({props:{content:"\u5B89\u88C5\u7528\u6237\u811A\u672C",href:m[4]}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1&&(p.href=l[4]),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Er(m){let e,n,l,u;return{c(){e=o("p"),n=b("\u51FA\u73B0\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A"),l=P(),u=b(m[1]),this.h()},l(p){e=a(p,"P",{class:!0});var c=U(e);n=$(c,"\u51FA\u73B0\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A"),c.forEach(t),l=N(p),u=$(p,m[1]),this.h()},h(){x(e,"class","svelte-1y7n2nc")},m(p,c){s(p,e,c),_(e,n),s(p,l,c),s(p,u,c)},p(p,c){c&2&&cn(u,p[1])},d(p){p&&t(e),p&&t(l),p&&t(u)}}}function Ar(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A;return S=new Vs({props:{data:m[1]}}),{c(){e=o("p"),n=b("\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u2019\u9875\u9762\u4E2D\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"),l=P(),u=o("p"),p=o("button"),c=b("\u590D\u5236"),k=P(),v=o("button"),h=b("\u53D6\u6D88"),w=P(),T=o("p"),H(S.$$.fragment),this.h()},l(O){e=a(O,"P",{class:!0});var W=U(e);n=$(W,"\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u2019\u9875\u9762\u4E2D\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"),W.forEach(t),l=N(O),u=a(O,"P",{class:!0});var q=U(u);p=a(q,"BUTTON",{class:!0});var I=U(p);c=$(I,"\u590D\u5236"),I.forEach(t),k=N(q),v=a(q,"BUTTON",{class:!0});var V=U(v);h=$(V,"\u53D6\u6D88"),V.forEach(t),q.forEach(t),w=N(O),T=a(O,"P",{class:!0});var J=U(T);D(S.$$.fragment,J),J.forEach(t),this.h()},h(){x(e,"class","svelte-1y7n2nc"),x(p,"class","svelte-1y7n2nc"),x(v,"class","svelte-1y7n2nc"),x(u,"class","svelte-1y7n2nc"),x(T,"class","svelte-1y7n2nc")},m(O,W){s(O,e,W),_(e,n),s(O,l,W),s(O,u,W),_(u,p),_(p,c),_(u,k),_(u,v),_(v,h),s(O,w,W),s(O,T,W),F(S,T,null),j=!0,E||(A=[Xs(p,"click",m[3]),Xs(v,"click",m[6])],E=!0)},p(O,W){const q={};W&2&&(q.data=O[1]),S.$set(q)},i(O){j||(G(S.$$.fragment,O),j=!0)},o(O){M(S.$$.fragment,O),j=!1},d(O){O&&t(e),O&&t(l),O&&t(u),O&&t(w),O&&t(T),L(S),E=!1,Vn(A)}}}function Pr(m){let e;return{c(){e=b("\u4E0B\u8F7D\u4E2D\u3002\u3002\u3002")},l(n){e=$(n,"\u4E0B\u8F7D\u4E2D\u3002\u3002\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Nr(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K;return{c(){e=o("p"),n=b("\u5FEB\u4E50\u5C0F\u65B9\u7F16\u5199\u7684MCBBS CreditAnalysis\u662F\u95ED\u6E90\u8F6F\u4EF6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u76F4\u63A5\u63D0\u4F9B\u5E26\u6D1E\u7A74\u591C\u83BA\u8865\u4E01\u7684MCBBS CreditAnalysis\u3002"),l=P(),u=o("p"),p=b("\u5982\u679C\u9009\u62E9\u7EE7\u7EED\uFF0C\u5219\u672C\u9875\u9762\u4F1A\u5206\u522B\u4E0B\u8F7D"),c=o("a"),k=b("MCBBS CreditAnalysis"),v=b("\u548C"),h=o("a"),w=b("\u6D1E\u7A74\u591C\u83BA\u8865\u4E01"),T=b("\uFF0C\u7136\u540E\u5C06\u8865\u4E01\u6253\u5230MCBBS CreditAnalysis\u4E0A\u3002"),S=P(),j=o("p"),E=b("\u9700\u8981"),A=o("a"),O=b("TamperMonkey"),W=b("\u6D4F\u89C8\u5668\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528MCBBS CreditAnalysis\u3002\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C\u6B64\u7C7B\u7531\u7F51\u9875\u751F\u6210\u7684\u811A\u672C\u65E0\u6CD5\u6253\u5F00TamperMonkey\u7684\u5B89\u88C5\u754C\u9762\u3002\u56E0\u6B64\uFF0C\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u9700\u8981\u60A8\u624B\u52A8\u5C06\u811A\u672C\u590D\u5236\u7C98\u8D34\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u201D\u9875\u9762\uFF08\u53EF\u5728TamperMonkey\u4E3B\u83DC\u5355\u4E2D\u627E\u5230\uFF09\u4E2D\u53BB\u5B89\u88C5\u3002"),q=P(),I=o("button"),V=b("\u786E\u5B9A"),J=P(),X=o("button"),y=b("\u53D6\u6D88"),this.h()},l(C){e=a(C,"P",{class:!0});var Y=U(e);n=$(Y,"\u5FEB\u4E50\u5C0F\u65B9\u7F16\u5199\u7684MCBBS CreditAnalysis\u662F\u95ED\u6E90\u8F6F\u4EF6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u76F4\u63A5\u63D0\u4F9B\u5E26\u6D1E\u7A74\u591C\u83BA\u8865\u4E01\u7684MCBBS CreditAnalysis\u3002"),Y.forEach(t),l=N(C),u=a(C,"P",{class:!0});var se=U(u);p=$(se,"\u5982\u679C\u9009\u62E9\u7EE7\u7EED\uFF0C\u5219\u672C\u9875\u9762\u4F1A\u5206\u522B\u4E0B\u8F7D"),c=a(se,"A",{href:!0,class:!0});var te=U(c);k=$(te,"MCBBS CreditAnalysis"),te.forEach(t),v=$(se,"\u548C"),h=a(se,"A",{href:!0,class:!0});var re=U(h);w=$(re,"\u6D1E\u7A74\u591C\u83BA\u8865\u4E01"),re.forEach(t),T=$(se,"\uFF0C\u7136\u540E\u5C06\u8865\u4E01\u6253\u5230MCBBS CreditAnalysis\u4E0A\u3002"),se.forEach(t),S=N(C),j=a(C,"P",{class:!0});var ee=U(j);E=$(ee,"\u9700\u8981"),A=a(ee,"A",{href:!0,class:!0});var Z=U(A);O=$(Z,"TamperMonkey"),Z.forEach(t),W=$(ee,"\u6D4F\u89C8\u5668\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528MCBBS CreditAnalysis\u3002\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C\u6B64\u7C7B\u7531\u7F51\u9875\u751F\u6210\u7684\u811A\u672C\u65E0\u6CD5\u6253\u5F00TamperMonkey\u7684\u5B89\u88C5\u754C\u9762\u3002\u56E0\u6B64\uFF0C\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u9700\u8981\u60A8\u624B\u52A8\u5C06\u811A\u672C\u590D\u5236\u7C98\u8D34\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u201D\u9875\u9762\uFF08\u53EF\u5728TamperMonkey\u4E3B\u83DC\u5355\u4E2D\u627E\u5230\uFF09\u4E2D\u53BB\u5B89\u88C5\u3002"),ee.forEach(t),q=N(C),I=a(C,"BUTTON",{class:!0});var ne=U(I);V=$(ne,"\u786E\u5B9A"),ne.forEach(t),J=N(C),X=a(C,"BUTTON",{class:!0});var ie=U(X);y=$(ie,"\u53D6\u6D88"),ie.forEach(t),this.h()},h(){x(e,"class","svelte-1y7n2nc"),x(c,"href",or),x(c,"class","svelte-1y7n2nc"),x(h,"href",ar),x(h,"class","svelte-1y7n2nc"),x(u,"class","svelte-1y7n2nc"),x(A,"href","https://www.tampermonkey.net/"),x(A,"class","svelte-1y7n2nc"),x(j,"class","svelte-1y7n2nc"),x(I,"class","svelte-1y7n2nc"),x(X,"class","svelte-1y7n2nc")},m(C,Y){s(C,e,Y),_(e,n),s(C,l,Y),s(C,u,Y),_(u,p),_(u,c),_(c,k),_(u,v),_(u,h),_(h,w),_(u,T),s(C,S,Y),s(C,j,Y),_(j,E),_(j,A),_(A,O),_(j,W),s(C,q,Y),s(C,I,Y),_(I,V),s(C,J,Y),s(C,X,Y),_(X,y),z||(K=[Xs(I,"click",m[2]),Xs(X,"click",m[5])],z=!0)},p:Ms,d(C){C&&t(e),C&&t(l),C&&t(u),C&&t(S),C&&t(j),C&&t(q),C&&t(I),C&&t(J),C&&t(X),z=!1,Vn(K)}}}function Sr(m){let e,n,l,u;const p=[xr,Ir,Cr,gr,Tr],c=[];function k(v,h){return v[0]=="none"?0:v[0]=="confirm"?1:v[0]=="pending"?2:v[0]=="data"?3:v[0]=="error"?4:-1}return~(e=k(m))&&(n=c[e]=p[e](m)),{c(){n&&n.c(),l=an()},l(v){n&&n.l(v),l=an()},m(v,h){~e&&c[e].m(v,h),s(v,l,h),u=!0},p(v,[h]){let w=e;e=k(v),e===w?~e&&c[e].p(v,h):(n&&(Ln(),M(c[w],1,1,()=>{c[w]=null}),Dn()),~e?(n=c[e],n?n.p(v,h):(n=c[e]=p[e](v),n.c()),G(n,1),n.m(l.parentNode,l)):n=null)},i(v){u||(G(n),u=!0)},o(v){M(n),u=!1},d(v){~e&&c[e].d(v),v&&t(l)}}}const or="https://greasyfork.org/scripts/407846-mcbbs-creditanalysis/code/MCBBS%20CreditAnalysis.user.js",ar="/assets/creditchart/userscript.patch";function zr(m,e,n){let l="none",u="";function p(){return n(0,l="pending"),Promise.all([fetch(or).then(w=>w.text()),fetch(ar).then(w=>w.text())]).then(([w,T])=>{n(1,u=Br(w,T)),n(0,l="data")}).catch(w=>{n(0,l="error"),n(1,u=w.stack)})}function c(){navigator.clipboard.writeText(u),pr("\u5DF2\u590D\u5236\u811A\u672C")}return[l,u,p,c,()=>n(0,l="confirm"),()=>n(0,l="none"),()=>n(0,l="none")]}class qr extends js{constructor(e){super(),Os(this,e,zr,Sr,Hs,{})}}function Mr(m){let e,n;const l=m[1].default,u=zn(l,m,m[0],null);return{c(){e=o("footer"),u&&u.c(),this.h()},l(p){e=a(p,"FOOTER",{class:!0});var c=U(e);u&&u.l(c),c.forEach(t),this.h()},h(){x(e,"class","svelte-vofmx1")},m(p,c){s(p,e,c),u&&u.m(e,null),n=!0},p(p,[c]){u&&u.p&&(!n||c&1)&&qn(u,l,p,p[0],n?Gn(l,p[0],c,null):Mn(p[0]),null)},i(p){n||(G(u,p),n=!0)},o(p){M(u,p),n=!1},d(p){p&&t(e),u&&u.d(p)}}}function Gr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class ur extends js{constructor(e){super(),Os(this,e,Gr,Mr,Hs,{})}}function Qn(m,e,n){const l=m.slice();return l[20]=e[n],l}function Xn(m,e,n){const l=m.slice();return l[23]=e[n],l}function Zn(m){let e,n=m[0].userGroupEx,l=[];for(let u=0;u<n.length;u+=1)l[u]=Kn(Xn(m,n,u));return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=an()},l(u){for(let p=0;p<l.length;p+=1)l[p].l(u);e=an()},m(u,p){for(let c=0;c<l.length;c+=1)l[c].m(u,p);s(u,e,p)},p(u,p){if(p&1){n=u[0].userGroupEx;let c;for(c=0;c<n.length;c+=1){const k=Xn(u,n,c);l[c]?l[c].p(k,p):(l[c]=Kn(k),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(u){rr(l,u),u&&t(e)}}}function Kn(m){let e,n,l=m[23]+"",u;return{c(){e=b("\uFF0C"),n=new sr(!1),u=an(),this.h()},l(p){e=$(p,"\uFF0C"),n=nr(p,!1),u=an(),this.h()},h(){n.a=u},m(p,c){s(p,e,c),n.m(l,p,c),s(p,u,c)},p(p,c){c&1&&l!==(l=p[23]+"")&&n.p(l)},d(p){p&&t(e),p&&t(u),p&&n.d()}}}function er(m){let e,n,l,u,p,c=m[20][1]+"",k,v,h,w=m[5][m[20][1]]+"",T,S,j,E=(100*m[5][m[20][1]]*m[20][2]/m[1]).toFixed(2)+"",A,O,W,q,I=Pn(m[5][m[20][1]],m[20][3])+"",V,J,X,y,z;function K(){return m[13](m[20])}return{c(){e=o("div"),n=o("div"),l=o("div"),u=P(),p=o("div"),k=b(c),v=P(),h=o("div"),T=b(w),S=P(),j=o("div"),A=b(E),O=b("%"),W=P(),q=o("div"),V=b(I),J=P(),this.h()},l(C){e=a(C,"DIV",{class:!0,style:!0});var Y=U(e);n=a(Y,"DIV",{class:!0});var se=U(n);l=a(se,"DIV",{class:!0,style:!0}),U(l).forEach(t),se.forEach(t),u=N(Y),p=a(Y,"DIV",{class:!0});var te=U(p);k=$(te,c),te.forEach(t),v=N(Y),h=a(Y,"DIV",{class:!0});var re=U(h);T=$(re,w),re.forEach(t),S=N(Y),j=a(Y,"DIV",{class:!0});var ee=U(j);A=$(ee,E),O=$(ee,"%"),ee.forEach(t),W=N(Y),q=a(Y,"DIV",{class:!0});var Z=U(q);V=$(Z,I),Z.forEach(t),J=N(Y),Y.forEach(t),this.h()},h(){x(l,"class","color-example svelte-3f2djp"),pt(l,"background-color",m[20][0]),x(n,"class","color svelte-3f2djp"),x(p,"class","name svelte-3f2djp"),x(h,"class","count svelte-3f2djp"),x(j,"class","percent svelte-3f2djp"),x(q,"class","rank svelte-3f2djp"),x(e,"class","lines svelte-3f2djp"),x(e,"style",X=m[6]===m[20][1]?"background: #d8d8d8;":"")},m(C,Y){s(C,e,Y),_(e,n),_(n,l),_(e,u),_(e,p),_(p,k),_(e,v),_(e,h),_(h,T),_(e,S),_(e,j),_(j,A),_(j,O),_(e,W),_(e,q),_(q,V),_(e,J),y||(z=Xs(e,"click",K),y=!0)},p(C,Y){m=C,Y&32&&w!==(w=m[5][m[20][1]]+"")&&cn(T,w),Y&34&&E!==(E=(100*m[5][m[20][1]]*m[20][2]/m[1]).toFixed(2)+"")&&cn(A,E),Y&32&&I!==(I=Pn(m[5][m[20][1]],m[20][3])+"")&&cn(V,I),Y&64&&X!==(X=m[6]===m[20][1]?"background: #d8d8d8;":"")&&x(e,"style",X)},d(C){C&&t(e),y=!1,z()}}}function jr(m){let e,n,l=m[0].username+"",u,p,c,k,v=m[0].userGroup+"",h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z=Pn(m[1],m[7])+"",K,C,Y,se,te=m[0].userGroupEx&&Zn(m),re=m[8],ee=[];for(let Z=0;Z<re.length;Z+=1)ee[Z]=er(Qn(m,re,Z));return{c(){e=o("div"),n=o("a"),u=b(l),c=b(`
		(
			`),k=new sr(!1),h=an(),te&&te.c(),w=b(`
		)
		`),T=o("div"),S=o("div"),j=P(),E=o("div"),A=b("\u603B\u79EF\u5206"),O=P(),W=o("div"),q=b(m[1]),I=P(),V=o("div"),J=b("100.00%"),X=P(),y=o("div"),K=b(z),C=P();for(let Z=0;Z<ee.length;Z+=1)ee[Z].c();this.h()},l(Z){e=a(Z,"DIV",{class:!0});var ne=U(e);n=a(ne,"A",{style:!0,href:!0,target:!0});var ie=U(n);u=$(ie,l),ie.forEach(t),c=$(ne,`
		(
			`),k=nr(ne,!1),h=an(),te&&te.l(ne),w=$(ne,`
		)
		`),T=a(ne,"DIV",{class:!0});var le=U(T);S=a(le,"DIV",{class:!0}),U(S).forEach(t),j=N(le),E=a(le,"DIV",{class:!0});var pe=U(E);A=$(pe,"\u603B\u79EF\u5206"),pe.forEach(t),O=N(le),W=a(le,"DIV",{class:!0});var ue=U(W);q=$(ue,m[1]),ue.forEach(t),I=N(le),V=a(le,"DIV",{class:!0});var $e=U(V);J=$($e,"100.00%"),$e.forEach(t),X=N(le),y=a(le,"DIV",{class:!0});var Re=U(y);K=$(Re,z),Re.forEach(t),le.forEach(t),C=N(ne);for(let ce=0;ce<ee.length;ce+=1)ee[ce].l(ne);ne.forEach(t),this.h()},h(){pt(n,"font-size","24px"),pt(n,"color","black"),x(n,"href",p="https://www.mcbbs.net/home.php?mod=space&username="+m[0].username),x(n,"target","_blank"),k.a=h,x(S,"class","color svelte-3f2djp"),x(E,"class","name svelte-3f2djp"),x(W,"class","count svelte-3f2djp"),x(V,"class","percent svelte-3f2djp"),x(y,"class","rank svelte-3f2djp"),x(T,"class","lines svelte-3f2djp"),x(e,"class","parent svelte-3f2djp")},m(Z,ne){s(Z,e,ne),_(e,n),_(n,u),_(e,c),k.m(v,e),_(e,h),te&&te.m(e,null),_(e,w),_(e,T),_(T,S),_(T,j),_(T,E),_(E,A),_(T,O),_(T,W),_(W,q),_(T,I),_(T,V),_(V,J),_(T,X),_(T,y),_(y,K),_(e,C);for(let ie=0;ie<ee.length;ie+=1)ee[ie].m(e,null);Y||(se=Xs(T,"click",m[12]),Y=!0)},p(Z,ne){if(ne&1&&l!==(l=Z[0].username+"")&&cn(u,l),ne&1&&p!==(p="https://www.mcbbs.net/home.php?mod=space&username="+Z[0].username)&&x(n,"href",p),ne&1&&v!==(v=Z[0].userGroup+"")&&k.p(v),Z[0].userGroupEx?te?te.p(Z,ne):(te=Zn(Z),te.c(),te.m(e,w)):te&&(te.d(1),te=null),ne&2&&cn(q,Z[1]),ne&2&&z!==(z=Pn(Z[1],Z[7])+"")&&cn(K,z),ne&2402){re=Z[8];let ie;for(ie=0;ie<re.length;ie+=1){const le=Qn(Z,re,ie);ee[ie]?ee[ie].p(le,ne):(ee[ie]=er(le),ee[ie].c(),ee[ie].m(e,null))}for(;ie<ee.length;ie+=1)ee[ie].d(1);ee.length=re.length}},d(Z){Z&&t(e),te&&te.d(),rr(ee,Z),Y=!1,se()}}}function Or(m){let e,n,l,u,p;return{c(){e=o("div"),n=o("canvas"),l=b("\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\uFF01"),this.h()},l(c){e=a(c,"DIV",{class:!0});var k=U(e);n=a(k,"CANVAS",{width:!0,height:!0});var v=U(n);l=$(v,"\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\uFF01"),v.forEach(t),k.forEach(t),this.h()},h(){x(n,"width",m[4]),x(n,"height",m[4]),x(e,"class","canvas-parent svelte-3f2djp")},m(c,k){s(c,e,k),_(e,n),_(n,l),m[14](n),m[15](e),u||(p=Xs(e,"click",m[10]),u=!0)},p(c,k){k&16&&x(n,"width",c[4]),k&16&&x(n,"height",c[4])},d(c){c&&t(e),m[14](null),m[15](null),u=!1,p()}}}function Hr(m){let e,n,l,u,p,c;return e=new Ns({props:{$$slots:{default:[jr]},$$scope:{ctx:m}}}),l=new Ns({props:{$$slots:{default:[Or]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=P(),H(l.$$.fragment)},l(k){D(e.$$.fragment,k),n=N(k),D(l.$$.fragment,k)},m(k,v){F(e,k,v),s(k,n,v),F(l,k,v),u=!0,p||(c=Xs(window,"resize",m[9]),p=!0)},p(k,[v]){const h={};v&67108963&&(h.$$scope={dirty:v,ctx:k}),e.$set(h);const w={};v&67108892&&(w.$$scope={dirty:v,ctx:k}),l.$set(w)},i(k){u||(G(e.$$.fragment,k),G(l.$$.fragment,k),u=!0)},o(k){M(e.$$.fragment,k),M(l.$$.fragment,k),u=!1},d(k){L(e,k),k&&t(n),L(l,k),p=!1,c()}}}function Pn(m,e){return m>=e[0]?"A":m>=e[1]?"B":m>=e[2]?"C":m>=0?"D":"E"}function Fr(m){let e=(m+Math.PI/2)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI/2}function Lr(m,e,n){const l=[12564,7348,4827],u=[["#2dc6c8","\u4EBA\u6C14",3,[1770,829,395]],["#5daf7a","\u91D1\u7C92",0,[23372,14581,9110]],["#9c3a4b","\u91D1\u952D",0,[72,40,23]],["#3866b9","\u5B9D\u77F3",0,[20,9,5]],["#82de76","\u4E0B\u754C\u4E4B\u5FC3",0,[8,4,1]],["#b6a2dd","\u8D21\u732E",10,[61,21,6]],["#5ab1ee","\u7231\u5FC3",4,[139,51,18]],["#d7797f","\u94BB\u77F3",2,[2641,2014,1531]],["#e6399b","\u53D1\u5E16\u6570",1/3,[6677,3504,1911]],["#9f3ed5","\u4E3B\u9898\u6570",2,[262,166,103]],["#ff4040","\u7CBE\u534E\u6570",45,[20,3,0]]];let{renderingUser:p}=e,c,k,v=600,h=0,w={},T=0,S,j="",E;function A(){let y=getComputedStyle(c).width;n(4,v=Math.min(parseInt(/^([\s\S]+)px$/.exec(y)[1])-48,600)),O(),E=setInterval(O,30)}function O(y=!1){if(!k)return;y&&n(6,j=""),T===1&&(clearInterval(E),E=0),T+=.03,T>=1&&(T=1);let z=k.getContext("2d"),K=0,C=v/2;z.clearRect(0,0,v,v);for(let[Y,se,te]of u){if(te==0||w[se]==0)continue;z.fillStyle=Y,z.strokeStyle=Y,z.lineWidth=2,z.font="400 "+v/60+"px serif";let re=Math.abs(h),ee=2*Math.PI*(K/re*T-1/4),Z=2*Math.PI*((K+=w[se]*te)/re*T-1/4);ee>Z&&([ee,Z]=[Z,ee]);let ne=(ee+Z)/2;y&&S>ee&&S<Z&&n(6,j=se);let ie=se===j?v/2.7:v/3,le=C+Math.cos(ne)*v/2.5,pe=C+Math.sin(ne)*v/2.5,ue=(100*w[se]*te/h).toFixed(2)+"%";if(z.beginPath(),z.moveTo(C,C),z.arc(C,C,ie,ee,Z),z.closePath(),z.fill(),z.moveTo(C,C),z.lineTo(le,pe),z.stroke(),Fr(ne)>Math.PI/2){let $e=le-v/10;z.lineTo($e,pe),z.fillText(se+w[se],$e,pe-v/120),z.fillText(ue,$e,pe+v/40),z.stroke()}else{let $e=le+v/10;z.lineTo($e,pe),z.fillText(se+w[se],le,pe-v/120),z.fillText(ue,le,pe+v/40),z.stroke()}}}function W(y){let z=v/2,K=y.offsetX-z,C=y.offsetY-z,Y=(K**2+C**2)**.5;if(Y<=v/2.6){let se=K/Y;S=C/Y>=0?Math.acos(se):2*Math.PI-Math.acos(se),S=S>=3*Math.PI/2?S-2*Math.PI:S,O(!0)}else S=void 0,O(!0)}function q(y){n(6,j=y),O()}gn(A),tr(()=>E!=0?clearInterval(E):0);const I=()=>q(""),V=y=>q(y[1]);function J(y){fn[y?"unshift":"push"](()=>{k=y,n(3,k)})}function X(y){fn[y?"unshift":"push"](()=>{c=y,n(2,c)})}return m.$$set=y=>{"renderingUser"in y&&n(0,p=y.renderingUser)},m.$$.update=()=>{if(m.$$.dirty&3){n(1,h=p.credits.\u79EF\u5206);let y={},z=0;for(let K of u){let C;switch(K[1]){case"\u53D1\u5E16\u6570":C=p.posts+p.threads;break;case"\u4E3B\u9898\u6570":C=p.threads;break;case"\u7CBE\u534E\u6570":C=(h-z)/45;break;default:C=p.credits[K[1]]}y[K[1]]=C,z+=Math.floor(C*K[2]+.5)}n(5,w=y)}},[p,h,c,k,v,w,j,l,u,A,W,q,I,V,J,X]}class Dr extends js{constructor(e){super(),Os(this,e,Lr,Hr,Hs,{renderingUser:0})}}function Vr(m){let e,n,l,u;return{c(){e=o("a"),n=o("img"),this.h()},l(p){e=a(p,"A",{target:!0,href:!0});var c=U(e);n=a(c,"IMG",{src:!0,title:!0,width:!0,height:!0,alt:!0}),c.forEach(t),this.h()},h(){On(n.src,l="https://www.mcbbs.net/uc_server/avatar.php?uid="+m[1]+"&size=big")||x(n,"src",l),x(n,"title",m[0]),x(n,"width","50"),x(n,"height","50"),x(n,"alt",m[0]),x(e,"target","_blank"),x(e,"href",u="https://www.mcbbs.net/?"+m[1])},m(p,c){s(p,e,c),_(e,n)},p(p,[c]){c&2&&!On(n.src,l="https://www.mcbbs.net/uc_server/avatar.php?uid="+p[1]+"&size=big")&&x(n,"src",l),c&1&&x(n,"title",p[0]),c&1&&x(n,"alt",p[0]),c&2&&u!==(u="https://www.mcbbs.net/?"+p[1])&&x(e,"href",u)},i:Ms,o:Ms,d(p){p&&t(e)}}}function Yr(m,e,n){let{name:l}=e,{uid:u}=e;return m.$$set=p=>{"name"in p&&n(0,l=p.name),"uid"in p&&n(1,u=p.uid)},[l,u]}class ln extends js{constructor(e){super(),Os(this,e,Yr,Vr,Hs,{name:0,uid:1})}}function Wr(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K,C,Y,se,te,re,ee,Z,ne,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,Q,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee,f,g,Ss,Yt,It,xt,gt,Et,Fs;return We=new ln({props:{uid:"3467",name:"sjjklh"}}),Ue=new ln({props:{uid:"36116",name:"magicbear"}}),Je=new ln({props:{uid:"66971",name:"\u5996\u68A6\u7684\u8214\u72D7"}}),Qe=new ln({props:{uid:"84256",name:"bangbang93"}}),Xe=new ln({props:{uid:"2048697",name:"Zapic"}}),Ze=new ln({props:{uid:"2676420",name:"bbsmaster"}}),Ke=new ln({props:{uid:"165947",name:"\u51DB"}}),et=new ln({props:{uid:"1350847",name:"\u5E7F\u836F"}}),tt=new ln({props:{uid:"2153967",name:"SHEEP_REALMS"}}),st=new ln({props:{uid:"2999970",name:"\u58F0\u540D\u6211\u4E3B\u5BB0"}}),{c(){e=o("br"),n=o("br"),l=P(),u=o("nobr"),p=o("div"),c=o("h3"),k=b("\u83B7\u53D6\u4F60\u7684\u514D\u8D39MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01\u9650\u65F6\u4F9B\u5E94\uFF01"),v=P(),h=o("div"),w=o("div"),T=o("div"),S=o("div"),j=o("h1"),E=o("img"),O=P(),W=o("div"),q=o("h3"),I=b("\u4ECE\u6211\u4EEC\u8FD9\u91CC\u514D\u8D39\u83B7\u53D6MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01"),V=P(),J=o("p"),X=b("\u7533\u8BF7MCBBS\u7981\u8A00\u4EE3\u7801\u662F\u6709\u65F6\u95F4\u9650\u5236\u7684"),y=o("br"),z=b(`
						\u5728\u4F18\u60E0\u7ED3\u675F\u4E4B\u524D\uFF0C\u73B0\u5728\u5C31\u52A0\u5165\u5427\u3002
						`),K=o("br"),C=P(),Y=o("br"),se=b(`
						\u4E0D\u8981\u9519\u8FC7 - \u8FD9\u662F\u4E00\u4E2A\u9650\u65F6\u4F18\u60E0\u3002\u73B0\u5728\u5C31\u7533\u8BF7!`),te=P(),re=o("div"),ee=o("h5"),Z=b("\u83B7\u53D6MCBBS\u7981\u8A00\u4EE3\u7801"),ne=o("br"),ie=P(),le=o("strong"),pe=P(),ue=o("p"),$e=o("strong"),Re=b("\u539F\u4EF7\uFF1A"),ce=b(" \u591A\u6B21\u704C\u6C34\u3001\u7248\u6218\u548C\u5176\u4ED6\u4F5C\u6B7B\u884C\u4E3A"),Ae=o("br"),Ge=P(),Te=o("strong"),we=b("\u4F18\u60E0\uFF1A"),je=b(" 100%\u514D\u9664\u989D\u5916\u4F5C\u6B7B"),_e=o("br"),Oe=P(),ve=o("strong"),He=b("\u4F60\u82B1\u8D39\u7684\uFF1A"),ye=b(" \u6CA1\u6709\u4EC0\u4E48\uFF01\u5B83\u662F\u5B8C\u5168\u514D\u8D39\u7684\uFF01"),Pe=o("br"),d=b(`
					\u5728\u6D3B\u52A8\u8FC7\u671F\u4E4B\u524D\uFF0C\u6293\u4F4F\u4F60\u7684MCBBS\u7981\u8A00\u4EE3\u7801\uFF01`),Q=P(),Ce=o("div"),ge=o("p"),bt=b("\u6B64\u4F18\u60E0\u6BCF\u4E2A\u7528\u6237\u53EA\u80FD\u5151\u6362\u4E00\u6B21\u3002"),Ye=o("br"),$t=b(`
					\u4F60\u5C06\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u4F5C\u6B7B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B8C\u5168\u514D\u8D39\u7684\u7981\u8A00\u3002`),ct=P(),ae=o("div"),Ne=o("h4"),Ut=b("\u6309\u7167\u4E0B\u9762\u7684\u7B80\u5355\u6B65\u9AA4\u6765\u7533\u8BF7\u4F60\u7684\u514D\u8D39MCBBS\u7981\u8A00\u4EE3\u7801\uFF1A"),Jt=P(),At=o("br"),Qt=P(),ht=o("span"),Xt=b("Step 1: \u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u4E2D\u7684\u4E24\u4E2A & \u786E\u8BA4"),Zt=b(":"),Pt=o("br"),Kt=P(),Nt=o("br"),es=P(),be=o("div"),me=o("div"),H(We.$$.fragment),ts=P(),H(Ue.$$.fragment),ss=P(),H(Je.$$.fragment),ns=P(),H(Qe.$$.fragment),rs=P(),H(Xe.$$.fragment),is=P(),H(Ze.$$.fragment),ls=P(),St=o("br"),fs=P(),H(Ke.$$.fragment),os=P(),H(et.$$.fragment),as=P(),H(tt.$$.fragment),us=P(),H(st.$$.fragment),ms=P(),zt=o("br"),ps=P(),qt=o("br"),bs=P(),Ie=o("span"),$s=b("Step 2: \u628A\u8FD9\u4E2A\u6D88\u606F\u53D1\u4E2A\u4E09\u4E2A\u4E0D\u540C\u7684\u7248\u4E3B\u3002"),Mt=o("br"),cs=P(),Gt=o("br"),hs=P(),Ct=o("p"),vs=P(),nt=o("div"),Se=o("textarea"),ws=P(),jt=o("br"),_s=P(),Ot=o("br"),ys=P(),rt=o("div"),it=b("\xBB \u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E... \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002 \xAB"),ks=P(),vt=o("div"),lt=o("input"),Bs=P(),Ht=o("br"),ds=P(),Fe=o("br"),wt=P(),Ft=o("br"),Rs=P(),_t=o("div"),ze=o("span"),Ts=b("\u4E00\u65E6\u4F60\u5B8C\u6210\u4E86\u6B65\u9AA42..."),ft=P(),Lt=o("br"),yt=P(),Dt=o("br"),xe=P(),ot=o("div"),qe=b(`\u5982\u679C\u4F60\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u672B\u5730\u65C5\u6E38\uFF0C\u8FD9\u91CC\u6709\u4E2A\u66FF\u4EE3\u94FE\u63A5\uFF1A
		`),kt=o("span"),ke=o("a"),Bt=o("span"),dt=b("CLICK HERE"),gs=P(),Be=o("br"),Cs=P(),Le=o("br"),Is=P(),at=o("br"),Rt=P(),Vt=o("br"),xs=P(),ut=o("br"),Tt=P(),De=o("br"),mt=P(),Me=o("div"),Es=P(),he=o("footer"),Ee=b("\u672C\u9875\u9762\u4F7F\u7528\u5168\u90E8\u7684CSS\u548C\u90E8\u5206HTML\u4EE3\u7801\u6765\u81EA\u539F\u7248freegiftcode\uFF0C\u672C\u9875\u9762\u4E3A\u73A9\u6897\u7F51\u9875\uFF0C\u8BF7\u52FF\u5F53\u771F\u3002"),f=o("br"),g=b(`
		\u514D\u8D39\u6B63\u7248\u793C\u54C1\u7801\u7C7B\u7F51\u7AD9\u5C5E\u4E8E\u8BC8\u9A97\u6027\u8D28\uFF0C\u5411\u793E\u4EA4\u7F51\u7AD9\u53D1\u8868\u7C7B\u4F3C\u5185\u5BB9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7981\u8A00\u6216\u7981\u8BBF\uFF0C\u8BF7\u52FF\u4F5C\u6B7B\u3002`),Ss=o("br"),Yt=b(`
		\u53C2\u8003`),It=o("a"),xt=b("\u3010\u6B8B\u53F6\u6742\u8C08\u3011\u6252\u4E00\u6252\u6240\u8C13\u201C\u514D \u8D39 \u6B63 \u7248 \u793C \u54C1 \u7801\u201D\u7684\u80CC\u540E"),this.h()},l(oe){e=a(oe,"BR",{class:!0}),n=a(oe,"BR",{class:!0}),l=N(oe),u=a(oe,"NOBR",{id:!0,class:!0});var fe=U(u);p=a(fe,"DIV",{id:!0,class:!0});var Zs=U(p);c=a(Zs,"H3",{class:!0});var Ks=U(c);k=$(Ks,"\u83B7\u53D6\u4F60\u7684\u514D\u8D39MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01\u9650\u65F6\u4F9B\u5E94\uFF01"),Ks.forEach(t),Zs.forEach(t),v=N(fe),h=a(fe,"DIV",{id:!0,class:!0});var en=U(h);w=a(en,"DIV",{id:!0,class:!0});var As=U(w);T=a(As,"DIV",{id:!0,class:!0});var Ys=U(T);S=a(Ys,"DIV",{id:!0,class:!0});var tn=U(S);j=a(tn,"H1",{class:!0});var sn=U(j);E=a(sn,"IMG",{id:!0,src:!0,alt:!0,width:!0,height:!0,class:!0}),sn.forEach(t),tn.forEach(t),O=N(Ys),W=a(Ys,"DIV",{id:!0,class:!0});var Ws=U(W);q=a(Ws,"H3",{class:!0});var Ls=U(q);I=$(Ls,"\u4ECE\u6211\u4EEC\u8FD9\u91CC\u514D\u8D39\u83B7\u53D6MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01"),Ls.forEach(t),V=N(Ws),J=a(Ws,"P",{class:!0});var Ps=U(J);X=$(Ps,"\u7533\u8BF7MCBBS\u7981\u8A00\u4EE3\u7801\u662F\u6709\u65F6\u95F4\u9650\u5236\u7684"),y=a(Ps,"BR",{class:!0}),z=$(Ps,`
						\u5728\u4F18\u60E0\u7ED3\u675F\u4E4B\u524D\uFF0C\u73B0\u5728\u5C31\u52A0\u5165\u5427\u3002
						`),K=a(Ps,"BR",{class:!0}),C=N(Ps),Y=a(Ps,"BR",{class:!0}),se=$(Ps,`
						\u4E0D\u8981\u9519\u8FC7 - \u8FD9\u662F\u4E00\u4E2A\u9650\u65F6\u4F18\u60E0\u3002\u73B0\u5728\u5C31\u7533\u8BF7!`),Ps.forEach(t),Ws.forEach(t),Ys.forEach(t),te=N(As),re=a(As,"DIV",{id:!0,class:!0});var Gs=U(re);ee=a(Gs,"H5",{class:!0});var Qs=U(ee);Z=$(Qs,"\u83B7\u53D6MCBBS\u7981\u8A00\u4EE3\u7801"),ne=a(Qs,"BR",{class:!0}),Qs.forEach(t),ie=N(Gs),le=a(Gs,"STRONG",{class:!0}),U(le).forEach(t),pe=N(Gs),ue=a(Gs,"P",{class:!0});var Ve=U(ue);$e=a(Ve,"STRONG",{class:!0});var nn=U($e);Re=$(nn,"\u539F\u4EF7\uFF1A"),nn.forEach(t),ce=$(Ve," \u591A\u6B21\u704C\u6C34\u3001\u7248\u6218\u548C\u5176\u4ED6\u4F5C\u6B7B\u884C\u4E3A"),Ae=a(Ve,"BR",{class:!0}),Ge=N(Ve),Te=a(Ve,"STRONG",{class:!0});var Ds=U(Te);we=$(Ds,"\u4F18\u60E0\uFF1A"),Ds.forEach(t),je=$(Ve," 100%\u514D\u9664\u989D\u5916\u4F5C\u6B7B"),_e=a(Ve,"BR",{class:!0}),Oe=N(Ve),ve=a(Ve,"STRONG",{class:!0});var rn=U(ve);He=$(rn,"\u4F60\u82B1\u8D39\u7684\uFF1A"),rn.forEach(t),ye=$(Ve," \u6CA1\u6709\u4EC0\u4E48\uFF01\u5B83\u662F\u5B8C\u5168\u514D\u8D39\u7684\uFF01"),Pe=a(Ve,"BR",{class:!0}),d=$(Ve,`
					\u5728\u6D3B\u52A8\u8FC7\u671F\u4E4B\u524D\uFF0C\u6293\u4F4F\u4F60\u7684MCBBS\u7981\u8A00\u4EE3\u7801\uFF01`),Ve.forEach(t),Gs.forEach(t),Q=N(As),Ce=a(As,"DIV",{id:!0,class:!0});var Wt=U(Ce);ge=a(Wt,"P",{class:!0});var Us=U(ge);bt=$(Us,"\u6B64\u4F18\u60E0\u6BCF\u4E2A\u7528\u6237\u53EA\u80FD\u5151\u6362\u4E00\u6B21\u3002"),Ye=a(Us,"BR",{class:!0}),$t=$(Us,`
					\u4F60\u5C06\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u4F5C\u6B7B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B8C\u5168\u514D\u8D39\u7684\u7981\u8A00\u3002`),Us.forEach(t),Wt.forEach(t),ct=N(As),ae=a(As,"DIV",{class:!0,id:!0});var i=U(ae);Ne=a(i,"H4",{class:!0});var R=U(Ne);Ut=$(R,"\u6309\u7167\u4E0B\u9762\u7684\u7B80\u5355\u6B65\u9AA4\u6765\u7533\u8BF7\u4F60\u7684\u514D\u8D39MCBBS\u7981\u8A00\u4EE3\u7801\uFF1A"),R.forEach(t),Jt=N(i),At=a(i,"BR",{class:!0}),Qt=N(i),ht=a(i,"SPAN",{class:!0});var Js=U(ht);Xt=$(Js,"Step 1: \u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u4E2D\u7684\u4E24\u4E2A & \u786E\u8BA4"),Js.forEach(t),Zt=$(i,":"),Pt=a(i,"BR",{class:!0}),Kt=N(i),Nt=a(i,"BR",{class:!0}),es=N(i),be=a(i,"DIV",{id:!0,class:!0});var de=U(be);me=a(de,"DIV",{class:!0});var r=U(me);D(We.$$.fragment,r),ts=N(r),D(Ue.$$.fragment,r),ss=N(r),D(Je.$$.fragment,r),ns=N(r),D(Qe.$$.fragment,r),rs=N(r),D(Xe.$$.fragment,r),is=N(r),D(Ze.$$.fragment,r),ls=N(r),St=a(r,"BR",{class:!0}),fs=N(r),D(Ke.$$.fragment,r),os=N(r),D(et.$$.fragment,r),as=N(r),D(tt.$$.fragment,r),us=N(r),D(st.$$.fragment,r),r.forEach(t),ms=N(de),zt=a(de,"BR",{class:!0}),ps=N(de),qt=a(de,"BR",{class:!0}),bs=N(de),Ie=a(de,"SPAN",{class:!0});var B=U(Ie);$s=$(B,"Step 2: \u628A\u8FD9\u4E2A\u6D88\u606F\u53D1\u4E2A\u4E09\u4E2A\u4E0D\u540C\u7684\u7248\u4E3B\u3002"),B.forEach(t),Mt=a(de,"BR",{class:!0}),cs=N(de),Gt=a(de,"BR",{class:!0}),hs=N(de),Ct=a(de,"P",{class:!0}),U(Ct).forEach(t),vs=N(de),nt=a(de,"DIV",{id:!0,class:!0});var mn=U(nt);Se=a(mn,"TEXTAREA",{id:!0,rows:!0,cols:!0,class:!0}),U(Se).forEach(t),mn.forEach(t),ws=N(de),jt=a(de,"BR",{class:!0}),_s=N(de),Ot=a(de,"BR",{class:!0}),de.forEach(t),ys=N(i),rt=a(i,"DIV",{id:!0,class:!0});var pn=U(rt);it=$(pn,"\xBB \u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E... \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002 \xAB"),pn.forEach(t),ks=N(i),vt=a(i,"DIV",{class:!0});var bn=U(vt);lt=a(bn,"INPUT",{type:!0,class:!0}),bn.forEach(t),Bs=N(i),Ht=a(i,"BR",{class:!0}),ds=N(i),Fe=a(i,"BR",{class:!0}),wt=N(i),Ft=a(i,"BR",{class:!0}),i.forEach(t),As.forEach(t),en.forEach(t),Rs=N(fe),_t=a(fe,"DIV",{class:!0});var _n=U(_t);ze=a(_n,"SPAN",{class:!0});var yn=U(ze);Ts=$(yn,"\u4E00\u65E6\u4F60\u5B8C\u6210\u4E86\u6B65\u9AA42..."),yn.forEach(t),_n.forEach(t),ft=N(fe),Lt=a(fe,"BR",{class:!0}),yt=N(fe),Dt=a(fe,"BR",{class:!0}),xe=N(fe),ot=a(fe,"DIV",{class:!0});var wn=U(ot);qe=$(wn,`\u5982\u679C\u4F60\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u672B\u5730\u65C5\u6E38\uFF0C\u8FD9\u91CC\u6709\u4E2A\u66FF\u4EE3\u94FE\u63A5\uFF1A
		`),kt=a(wn,"SPAN",{class:!0});var kn=U(kt);ke=a(kn,"A",{href:!0,target:!0,class:!0});var Bn=U(ke);Bt=a(Bn,"SPAN",{class:!0});var dn=U(Bt);dt=$(dn,"CLICK HERE"),dn.forEach(t),Bn.forEach(t),kn.forEach(t),wn.forEach(t),gs=N(fe),Be=a(fe,"BR",{class:!0}),Cs=N(fe),Le=a(fe,"BR",{class:!0}),Is=N(fe),at=a(fe,"BR",{class:!0}),Rt=N(fe),Vt=a(fe,"BR",{class:!0}),xs=N(fe),ut=a(fe,"BR",{class:!0}),Tt=N(fe),De=a(fe,"BR",{class:!0}),mt=N(fe),Me=a(fe,"DIV",{class:!0}),U(Me).forEach(t),Es=N(fe),he=a(fe,"FOOTER",{style:!0,class:!0});var vn=U(he);Ee=$(vn,"\u672C\u9875\u9762\u4F7F\u7528\u5168\u90E8\u7684CSS\u548C\u90E8\u5206HTML\u4EE3\u7801\u6765\u81EA\u539F\u7248freegiftcode\uFF0C\u672C\u9875\u9762\u4E3A\u73A9\u6897\u7F51\u9875\uFF0C\u8BF7\u52FF\u5F53\u771F\u3002"),f=a(vn,"BR",{class:!0}),g=$(vn,`
		\u514D\u8D39\u6B63\u7248\u793C\u54C1\u7801\u7C7B\u7F51\u7AD9\u5C5E\u4E8E\u8BC8\u9A97\u6027\u8D28\uFF0C\u5411\u793E\u4EA4\u7F51\u7AD9\u53D1\u8868\u7C7B\u4F3C\u5185\u5BB9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7981\u8A00\u6216\u7981\u8BBF\uFF0C\u8BF7\u52FF\u4F5C\u6B7B\u3002`),Ss=a(vn,"BR",{class:!0}),Yt=$(vn,`
		\u53C2\u8003`),It=a(vn,"A",{href:!0,class:!0});var Yn=U(It);xt=$(Yn,"\u3010\u6B8B\u53F6\u6742\u8C08\u3011\u6252\u4E00\u6252\u6240\u8C13\u201C\u514D \u8D39 \u6B63 \u7248 \u793C \u54C1 \u7801\u201D\u7684\u80CC\u540E"),Yn.forEach(t),vn.forEach(t),fe.forEach(t),this.h()},h(){x(e,"class","svelte-2fkrle"),x(n,"class","svelte-2fkrle"),x(c,"class","svelte-2fkrle"),x(p,"id","top"),x(p,"class","svelte-2fkrle"),x(E,"id","mcbbs-icon"),On(E.src,A="../assets/freemutecode/block.gif")||x(E,"src",A),x(E,"alt","Free Minecraft Gift Codes"),x(E,"width","90px"),x(E,"height","100px"),x(E,"class","svelte-2fkrle"),x(j,"class","svelte-2fkrle"),x(S,"id","leftheaderleft"),x(S,"class","svelte-2fkrle"),x(q,"class","svelte-2fkrle"),x(y,"class","svelte-2fkrle"),x(K,"class","svelte-2fkrle"),x(Y,"class","svelte-2fkrle"),x(J,"class","svelte-2fkrle"),x(W,"id","leftheaderright"),x(W,"class","svelte-2fkrle"),x(T,"id","leftheader"),x(T,"class","svelte-2fkrle"),x(ne,"class","svelte-2fkrle"),x(ee,"class","svelte-2fkrle"),x(le,"class","svelte-2fkrle"),x($e,"class","svelte-2fkrle"),x(Ae,"class","svelte-2fkrle"),x(Te,"class","svelte-2fkrle"),x(_e,"class","svelte-2fkrle"),x(ve,"class","svelte-2fkrle"),x(Pe,"class","svelte-2fkrle"),x(ue,"class","svelte-2fkrle"),x(re,"id","leftheader2"),x(re,"class","svelte-2fkrle"),x(Ye,"class","svelte-2fkrle"),x(ge,"class","svelte-2fkrle"),x(Ce,"id","redeemed"),x(Ce,"class","svelte-2fkrle"),x(Ne,"class","svelte-2fkrle"),x(At,"class","svelte-2fkrle"),x(ht,"class","c1 svelte-2fkrle"),x(Pt,"class","svelte-2fkrle"),x(Nt,"class","svelte-2fkrle"),x(St,"class","svelte-2fkrle"),x(me,"class","svelte-2fkrle"),x(zt,"class","svelte-2fkrle"),x(qt,"class","svelte-2fkrle"),x(Ie,"class","c1 svelte-2fkrle"),x(Mt,"class","svelte-2fkrle"),x(Gt,"class","svelte-2fkrle"),x(Ct,"class","svelte-2fkrle"),x(Se,"id","comment"),x(Se,"rows","4"),x(Se,"cols","60"),Se.value="\u6700\u540E\uFF01\u6211\u5F97\u5230\u4E862-4-R\u8BBA\u575B\u7981\u8A00\u5F85\u9047\u7EDD\u5BF9\u514D\u8D39\uFF01\u4ECEhttps://cavenightingale.github.io/freemutecode\u90A3\u91CC\u5F97\u5230\u4F60\u7684",x(Se,"class","svelte-2fkrle"),x(nt,"id","comment"),x(nt,"class","svelte-2fkrle"),x(jt,"class","svelte-2fkrle"),x(Ot,"class","svelte-2fkrle"),x(be,"id","socialmedia"),x(be,"class","svelte-2fkrle"),x(rt,"id","after"),x(rt,"class","svelte-2fkrle"),x(lt,"type","button"),lt.value="\u7533\u8BF7\u4F60\u7684MCBSS\u7981\u8A00\u4EE3\u7801",x(lt,"class","svelte-2fkrle"),x(vt,"class","c4 svelte-2fkrle"),x(Ht,"class","svelte-2fkrle"),x(Fe,"class","svelte-2fkrle"),x(Ft,"class","svelte-2fkrle"),x(ae,"class","c4 svelte-2fkrle"),x(ae,"id","Features"),x(w,"id","left"),x(w,"class","svelte-2fkrle"),x(h,"id","containar"),x(h,"class","svelte-2fkrle"),x(ze,"class","c5 svelte-2fkrle"),x(_t,"class","separator c6 svelte-2fkrle"),x(Lt,"class","svelte-2fkrle"),x(Dt,"class","svelte-2fkrle"),x(Bt,"class","c7 svelte-2fkrle"),x(ke,"href","https://www.mcbbs.net/thread-968842-1-1.html"),x(ke,"target","_blank"),x(ke,"class","svelte-2fkrle"),x(kt,"class","Apple-style-span c8 svelte-2fkrle"),x(ot,"class","c4 svelte-2fkrle"),x(Be,"class","svelte-2fkrle"),x(Le,"class","svelte-2fkrle"),x(at,"class","svelte-2fkrle"),x(Vt,"class","svelte-2fkrle"),x(ut,"class","svelte-2fkrle"),x(De,"class","svelte-2fkrle"),x(Me,"class","separator c9 svelte-2fkrle"),x(f,"class","svelte-2fkrle"),x(Ss,"class","svelte-2fkrle"),x(It,"href","https://www.mcbbs.net/thread-1226924-1-1.html"),x(It,"class","svelte-2fkrle"),pt(he,"text-align","center"),x(he,"class","svelte-2fkrle"),x(u,"id","main"),x(u,"class","svelte-2fkrle")},m(oe,fe){s(oe,e,fe),s(oe,n,fe),s(oe,l,fe),s(oe,u,fe),_(u,p),_(p,c),_(c,k),_(u,v),_(u,h),_(h,w),_(w,T),_(T,S),_(S,j),_(j,E),_(T,O),_(T,W),_(W,q),_(q,I),_(W,V),_(W,J),_(J,X),_(J,y),_(J,z),_(J,K),_(J,C),_(J,Y),_(J,se),_(w,te),_(w,re),_(re,ee),_(ee,Z),_(ee,ne),_(re,ie),_(re,le),_(re,pe),_(re,ue),_(ue,$e),_($e,Re),_(ue,ce),_(ue,Ae),_(ue,Ge),_(ue,Te),_(Te,we),_(ue,je),_(ue,_e),_(ue,Oe),_(ue,ve),_(ve,He),_(ue,ye),_(ue,Pe),_(ue,d),_(w,Q),_(w,Ce),_(Ce,ge),_(ge,bt),_(ge,Ye),_(ge,$t),_(w,ct),_(w,ae),_(ae,Ne),_(Ne,Ut),_(ae,Jt),_(ae,At),_(ae,Qt),_(ae,ht),_(ht,Xt),_(ae,Zt),_(ae,Pt),_(ae,Kt),_(ae,Nt),_(ae,es),_(ae,be),_(be,me),F(We,me,null),_(me,ts),F(Ue,me,null),_(me,ss),F(Je,me,null),_(me,ns),F(Qe,me,null),_(me,rs),F(Xe,me,null),_(me,is),F(Ze,me,null),_(me,ls),_(me,St),_(me,fs),F(Ke,me,null),_(me,os),F(et,me,null),_(me,as),F(tt,me,null),_(me,us),F(st,me,null),_(be,ms),_(be,zt),_(be,ps),_(be,qt),_(be,bs),_(be,Ie),_(Ie,$s),_(be,Mt),_(be,cs),_(be,Gt),_(be,hs),_(be,Ct),_(be,vs),_(be,nt),_(nt,Se),_(be,ws),_(be,jt),_(be,_s),_(be,Ot),_(ae,ys),_(ae,rt),_(rt,it),_(ae,ks),_(ae,vt),_(vt,lt),_(ae,Bs),_(ae,Ht),_(ae,ds),_(ae,Fe),_(ae,wt),_(ae,Ft),_(u,Rs),_(u,_t),_(_t,ze),_(ze,Ts),_(u,ft),_(u,Lt),_(u,yt),_(u,Dt),_(u,xe),_(u,ot),_(ot,qe),_(ot,kt),_(kt,ke),_(ke,Bt),_(Bt,dt),_(u,gs),_(u,Be),_(u,Cs),_(u,Le),_(u,Is),_(u,at),_(u,Rt),_(u,Vt),_(u,xs),_(u,ut),_(u,Tt),_(u,De),_(u,mt),_(u,Me),_(u,Es),_(u,he),_(he,Ee),_(he,f),_(he,g),_(he,Ss),_(he,Yt),_(he,It),_(It,xt),gt=!0,Et||(Fs=Xs(lt,"click",m[4]),Et=!0)},p:Ms,i(oe){gt||(G(We.$$.fragment,oe),G(Ue.$$.fragment,oe),G(Je.$$.fragment,oe),G(Qe.$$.fragment,oe),G(Xe.$$.fragment,oe),G(Ze.$$.fragment,oe),G(Ke.$$.fragment,oe),G(et.$$.fragment,oe),G(tt.$$.fragment,oe),G(st.$$.fragment,oe),gt=!0)},o(oe){M(We.$$.fragment,oe),M(Ue.$$.fragment,oe),M(Je.$$.fragment,oe),M(Qe.$$.fragment,oe),M(Xe.$$.fragment,oe),M(Ze.$$.fragment,oe),M(Ke.$$.fragment,oe),M(et.$$.fragment,oe),M(tt.$$.fragment,oe),M(st.$$.fragment,oe),gt=!1},d(oe){oe&&t(e),oe&&t(n),oe&&t(l),oe&&t(u),L(We),L(Ue),L(Je),L(Qe),L(Xe),L(Ze),L(Ke),L(et),L(tt),L(st),Et=!1,Fs()}}}function Ur(m,e,n){const p="\u83B7\u53D6\u514D\u8D39\u7684MCBBS\u7981\u8A00\u4EE3\u7801",c=()=>un("/",In);return gn(()=>document.body.style.minWidth="800px"),tr(()=>{typeof document!="undefined"&&(document.body.style.minWidth="")}),[!0,!1,p,c,()=>alert("\u54CE\u5440! \u770B\u6765\u4F60\u6CA1\u6709\u5B8C\u6210\u6B65\u9AA42!")]}class Nn extends js{constructor(e){super(),Os(this,e,Ur,Wr,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function Jr(m){let e,n,l,u,p,c;const k=m[1].default,v=zn(k,m,m[0],null);return{c(){e=o("span"),n=o("br"),v&&v.c(),l=P(),u=b(":"),p=o("br"),this.h()},l(h){e=a(h,"SPAN",{style:!0});var w=U(e);n=a(w,"BR",{}),v&&v.l(w),l=N(w),w.forEach(t),u=$(h,":"),p=a(h,"BR",{}),this.h()},h(){pt(e,"color","green"),pt(e,"font-size","20px"),pt(e,"font-weight","900")},m(h,w){s(h,e,w),_(e,n),v&&v.m(e,null),_(e,l),s(h,u,w),s(h,p,w),c=!0},p(h,[w]){v&&v.p&&(!c||w&1)&&qn(v,k,h,h[0],c?Gn(k,h[0],w,null):Mn(h[0]),null)},i(h){c||(G(v,h),c=!0)},o(h){M(v,h),c=!1},d(h){h&&t(e),v&&v.d(h),h&&t(u),h&&t(p)}}}function Qr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class zs extends js{constructor(e){super(),Os(this,e,Qr,Jr,Hs,{})}}function Xr(m){let e,n,l,u,p,c;const k=m[1].default,v=zn(k,m,m[0],null);return{c(){e=o("span"),n=o("br"),v&&v.c(),l=P(),u=b(":"),p=o("br"),this.h()},l(h){e=a(h,"SPAN",{style:!0});var w=U(e);n=a(w,"BR",{}),v&&v.l(w),l=N(w),w.forEach(t),u=$(h,":"),p=a(h,"BR",{}),this.h()},h(){pt(e,"color","brown"),pt(e,"font-size","20px"),pt(e,"font-weight","900")},m(h,w){s(h,e,w),_(e,n),v&&v.m(e,null),_(e,l),s(h,u,w),s(h,p,w),c=!0},p(h,[w]){v&&v.p&&(!c||w&1)&&qn(v,k,h,h[0],c?Gn(k,h[0],w,null):Mn(h[0]),null)},i(h){c||(G(v,h),c=!0)},o(h){M(v,h),c=!1},d(h){h&&t(e),v&&v.d(h),h&&t(u),h&&t(p)}}}function Zr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class qs extends js{constructor(e){super(),Os(this,e,Zr,Xr,Hs,{})}}function Kr(m){let e,n;return{c(){e=o("div"),n=b("\u2714\uFE0F\u5BF9"),this.h()},l(l){e=a(l,"DIV",{class:!0});var u=U(e);n=$(u,"\u2714\uFE0F\u5BF9"),u.forEach(t),this.h()},h(){x(e,"class","svelte-1q52wzp")},m(l,u){s(l,e,u),_(e,n)},p:Ms,i:Ms,o:Ms,d(l){l&&t(e)}}}class Cn extends js{constructor(e){super(),Os(this,e,null,Kr,Hs,{})}}function ei(m){let e,n;return{c(){e=o("div"),n=b("\u274C\u9519"),this.h()},l(l){e=a(l,"DIV",{class:!0});var u=U(e);n=$(u,"\u274C\u9519"),u.forEach(t),this.h()},h(){x(e,"class","svelte-11myue2")},m(l,u){s(l,e,u),_(e,n)},p:Ms,i:Ms,o:Ms,d(l){l&&t(e)}}}class on extends js{constructor(e){super(),Os(this,e,null,ei,Hs,{})}}function ti(m){let e,n,l;const u=m[1].default,p=zn(u,m,m[0],null);return{c(){e=o("div"),n=b("\u2757"),p&&p.c(),this.h()},l(c){e=a(c,"DIV",{class:!0});var k=U(e);n=$(k,"\u2757"),p&&p.l(k),k.forEach(t),this.h()},h(){x(e,"class","svelte-1os5bmu")},m(c,k){s(c,e,k),_(e,n),p&&p.m(e,null),l=!0},p(c,[k]){p&&p.p&&(!l||k&1)&&qn(p,u,c,c[0],l?Gn(u,c[0],k,null):Mn(c[0]),null)},i(c){l||(G(p,c),l=!0)},o(c){M(p,c),l=!1},d(c){c&&t(e),p&&p.d(c)}}}function si(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class Tn extends js{constructor(e){super(),Os(this,e,si,ti,Hs,{})}}function ni(m){let e,n,l,u,p,c,k,v,h;return{c(){e=b("\u672C\u9875\u9762\u8BB0\u5F55\u4E862022\u5E7412\u67088\u65E5\u5BF9ChatGPT\u8FDB\u884C\u7684\u56FE\u7075\u6D4B\u8BD5\u3002\u770B\u770B\u524D\u6CBFAI\u80FD\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u8BA1\u7B97\u673A\u6559\u80B2\u3002"),n=o("br"),l=b(`
        \u592A\u957F\u4E0D\u770B\u7248\uFF1A`),u=o("br"),p=b(`
        \u524D\u56DB\u7EC4\u6D4B\u8BD5\u4E3A\u5373\u5174\u53D1\u6325\u7684\u8BB0\u5FC6\u6027\u57FA\u7840\u77E5\u8BC6\u95EE\u9898\uFF0C\u96BE\u5EA6\u9002\u4E2D\uFF0CChatGPT\u56DE\u7B54\u5F97\u975E\u5E38\u597D`),c=o("br"),k=b(`
        \u540E\u56DB\u7EC4\u6D4B\u8BD5\u542B\u6709\u4E00\u9053\u5373\u5174\u53D1\u6325\u7684\u51FD\u6570\u8BBE\u8BA1\u9898\uFF0C\u4EE5\u53CA\u4E09\u9053CF\u6700\u4F4E\u96BE\u5EA6\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9898\uFF0CChatGPT\u57FA\u672C\u5C31\u6CA1\u7B54\u5BF9\u7684`),v=o("br"),h=b(`
        \u7ED3\u8BBA\uFF1AChatGPT\u5BF9\u4FE1\u606F\u5B66\u57FA\u7840\u77E5\u8BC6\u7684\u638C\u63E1\u5DF2\u7ECF\u57FA\u672C\u8FBE\u5230\u4EBA\u7C7B\u6C34\u5E73\uFF0C\u4F46\u7A0B\u5E8F\u8BBE\u8BA1\u4ECD\u7136\u662F\u533A\u5206ChatGPT\u4E0E\u4EBA\u7C7B\u7A0B\u5E8F\u5458\u7684\u6709\u6548\u65B9\u6CD5\u3002`)},l(w){e=$(w,"\u672C\u9875\u9762\u8BB0\u5F55\u4E862022\u5E7412\u67088\u65E5\u5BF9ChatGPT\u8FDB\u884C\u7684\u56FE\u7075\u6D4B\u8BD5\u3002\u770B\u770B\u524D\u6CBFAI\u80FD\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u8BA1\u7B97\u673A\u6559\u80B2\u3002"),n=a(w,"BR",{}),l=$(w,`
        \u592A\u957F\u4E0D\u770B\u7248\uFF1A`),u=a(w,"BR",{}),p=$(w,`
        \u524D\u56DB\u7EC4\u6D4B\u8BD5\u4E3A\u5373\u5174\u53D1\u6325\u7684\u8BB0\u5FC6\u6027\u57FA\u7840\u77E5\u8BC6\u95EE\u9898\uFF0C\u96BE\u5EA6\u9002\u4E2D\uFF0CChatGPT\u56DE\u7B54\u5F97\u975E\u5E38\u597D`),c=a(w,"BR",{}),k=$(w,`
        \u540E\u56DB\u7EC4\u6D4B\u8BD5\u542B\u6709\u4E00\u9053\u5373\u5174\u53D1\u6325\u7684\u51FD\u6570\u8BBE\u8BA1\u9898\uFF0C\u4EE5\u53CA\u4E09\u9053CF\u6700\u4F4E\u96BE\u5EA6\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9898\uFF0CChatGPT\u57FA\u672C\u5C31\u6CA1\u7B54\u5BF9\u7684`),v=a(w,"BR",{}),h=$(w,`
        \u7ED3\u8BBA\uFF1AChatGPT\u5BF9\u4FE1\u606F\u5B66\u57FA\u7840\u77E5\u8BC6\u7684\u638C\u63E1\u5DF2\u7ECF\u57FA\u672C\u8FBE\u5230\u4EBA\u7C7B\u6C34\u5E73\uFF0C\u4F46\u7A0B\u5E8F\u8BBE\u8BA1\u4ECD\u7136\u662F\u533A\u5206ChatGPT\u4E0E\u4EBA\u7C7B\u7A0B\u5E8F\u5458\u7684\u6709\u6548\u65B9\u6CD5\u3002`)},m(w,T){s(w,e,T),s(w,n,T),s(w,l,T),s(w,u,T),s(w,p,T),s(w,c,T),s(w,k,T),s(w,v,T),s(w,h,T)},p:Ms,d(w){w&&t(e),w&&t(n),w&&t(l),w&&t(u),w&&t(p),w&&t(c),w&&t(k),w&&t(v),w&&t(h)}}}function ri(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ii(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function li(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K;return u=new zs({props:{$$slots:{default:[ri]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[ii]},$$scope:{ctx:m}}}),z=new on({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B91\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=P(),H(u.$$.fragment),p=b(`
        Explain how malloc in glibc work.`),c=o("br"),k=P(),H(v.$$.fragment),h=b(`
        In the GNU C Library (glibc), the malloc function is used to allocate memory
        dynamically. It is a type of memory management function that allows a program
        to request a block of memory from the operating system at runtime.`),w=o("br"),T=o("br"),S=b(`

        The malloc function takes a single argument, which is the size of the
        block of memory that the program would like to allocate. The function
        then returns a pointer to the start of the newly allocated block of
        memory.`),j=o("br"),E=o("br"),A=b(`

        The malloc function uses a data structure called a heap to manage the
        allocated memory. The heap is a section of memory that is set aside for
        dynamic allocation. When the malloc function is called, it searches the
        heap for a block of memory that is large enough to satisfy the request.
        If such a block is found, malloc returns a pointer to the start of the
        block and marks the memory as allocated. If no sufficiently large block
        can be found, malloc may request additional memory from the operating
        system in order to fulfill the request.`),O=o("br"),W=o("br"),q=b(`

        It is important to note that the memory returned by malloc is not
        initialized. This means that the values of the memory are indeterminate
        and should be set by the program before they are used. Failing to
        properly initialize the memory can lead to undefined behavior.`),I=o("br"),V=o("br"),J=b(`

        Once a block of memory has been allocated with malloc, it can be freed
        using the free function. This function takes a pointer to the start of
        the block of memory and marks it as available for future allocation. It
        is important to free memory that is no longer needed in order to avoid
        memory leaks.`),X=o("br"),y=P(),H(z.$$.fragment)},l(C){e=a(C,"H2",{});var Y=U(e);n=$(Y,"\u6D4B\u8BD5\u70B91\uFF1A\u57FA\u7840\u77E5\u8BC6"),Y.forEach(t),l=N(C),D(u.$$.fragment,C),p=$(C,`
        Explain how malloc in glibc work.`),c=a(C,"BR",{}),k=N(C),D(v.$$.fragment,C),h=$(C,`
        In the GNU C Library (glibc), the malloc function is used to allocate memory
        dynamically. It is a type of memory management function that allows a program
        to request a block of memory from the operating system at runtime.`),w=a(C,"BR",{}),T=a(C,"BR",{}),S=$(C,`

        The malloc function takes a single argument, which is the size of the
        block of memory that the program would like to allocate. The function
        then returns a pointer to the start of the newly allocated block of
        memory.`),j=a(C,"BR",{}),E=a(C,"BR",{}),A=$(C,`

        The malloc function uses a data structure called a heap to manage the
        allocated memory. The heap is a section of memory that is set aside for
        dynamic allocation. When the malloc function is called, it searches the
        heap for a block of memory that is large enough to satisfy the request.
        If such a block is found, malloc returns a pointer to the start of the
        block and marks the memory as allocated. If no sufficiently large block
        can be found, malloc may request additional memory from the operating
        system in order to fulfill the request.`),O=a(C,"BR",{}),W=a(C,"BR",{}),q=$(C,`

        It is important to note that the memory returned by malloc is not
        initialized. This means that the values of the memory are indeterminate
        and should be set by the program before they are used. Failing to
        properly initialize the memory can lead to undefined behavior.`),I=a(C,"BR",{}),V=a(C,"BR",{}),J=$(C,`

        Once a block of memory has been allocated with malloc, it can be freed
        using the free function. This function takes a pointer to the start of
        the block of memory and marks it as available for future allocation. It
        is important to free memory that is no longer needed in order to avoid
        memory leaks.`),X=a(C,"BR",{}),y=N(C),D(z.$$.fragment,C)},m(C,Y){s(C,e,Y),_(e,n),s(C,l,Y),F(u,C,Y),s(C,p,Y),s(C,c,Y),s(C,k,Y),F(v,C,Y),s(C,h,Y),s(C,w,Y),s(C,T,Y),s(C,S,Y),s(C,j,Y),s(C,E,Y),s(C,A,Y),s(C,O,Y),s(C,W,Y),s(C,q,Y),s(C,I,Y),s(C,V,Y),s(C,J,Y),s(C,X,Y),s(C,y,Y),F(z,C,Y),K=!0},p(C,Y){const se={};Y&16&&(se.$$scope={dirty:Y,ctx:C}),u.$set(se);const te={};Y&16&&(te.$$scope={dirty:Y,ctx:C}),v.$set(te)},i(C){K||(G(u.$$.fragment,C),G(v.$$.fragment,C),G(z.$$.fragment,C),K=!0)},o(C){M(u.$$.fragment,C),M(v.$$.fragment,C),M(z.$$.fragment,C),K=!1},d(C){C&&t(e),C&&t(l),L(u,C),C&&t(p),C&&t(c),C&&t(k),L(v,C),C&&t(h),C&&t(w),C&&t(T),C&&t(S),C&&t(j),C&&t(E),C&&t(A),C&&t(O),C&&t(W),C&&t(q),C&&t(I),C&&t(V),C&&t(J),C&&t(X),C&&t(y),L(z,C)}}}function fi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function oi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ai(m){let e,n,l,u,p,c,k,v,h,w,T,S,j;return u=new zs({props:{$$slots:{default:[fi]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[oi]},$$scope:{ctx:m}}}),S=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B92\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=P(),H(u.$$.fragment),p=b(`
        Why negative-weight edges can be handled by Floyd-Warshall algorithm?`),c=o("br"),k=P(),H(v.$$.fragment),h=b(`
        The Floyd-Warshall algorithm can handle negative-weight edges because it
        uses a dynamic programming approach to find the shortest path between all
        pairs of vertices in a weighted graph. This means that it considers all possible
        paths between each pair of vertices and selects the one with the minimum
        total weight. Since the algorithm considers all possible paths, it can handle
        negative-weight edges by simply treating them like any other type of edge.`),w=o("br"),T=P(),H(S.$$.fragment)},l(E){e=a(E,"H2",{});var A=U(e);n=$(A,"\u6D4B\u8BD5\u70B92\uFF1A\u57FA\u7840\u77E5\u8BC6"),A.forEach(t),l=N(E),D(u.$$.fragment,E),p=$(E,`
        Why negative-weight edges can be handled by Floyd-Warshall algorithm?`),c=a(E,"BR",{}),k=N(E),D(v.$$.fragment,E),h=$(E,`
        The Floyd-Warshall algorithm can handle negative-weight edges because it
        uses a dynamic programming approach to find the shortest path between all
        pairs of vertices in a weighted graph. This means that it considers all possible
        paths between each pair of vertices and selects the one with the minimum
        total weight. Since the algorithm considers all possible paths, it can handle
        negative-weight edges by simply treating them like any other type of edge.`),w=a(E,"BR",{}),T=N(E),D(S.$$.fragment,E)},m(E,A){s(E,e,A),_(e,n),s(E,l,A),F(u,E,A),s(E,p,A),s(E,c,A),s(E,k,A),F(v,E,A),s(E,h,A),s(E,w,A),s(E,T,A),F(S,E,A),j=!0},p(E,A){const O={};A&16&&(O.$$scope={dirty:A,ctx:E}),u.$set(O);const W={};A&16&&(W.$$scope={dirty:A,ctx:E}),v.$set(W)},i(E){j||(G(u.$$.fragment,E),G(v.$$.fragment,E),G(S.$$.fragment,E),j=!0)},o(E){M(u.$$.fragment,E),M(v.$$.fragment,E),M(S.$$.fragment,E),j=!1},d(E){E&&t(e),E&&t(l),L(u,E),E&&t(p),E&&t(c),E&&t(k),L(v,E),E&&t(h),E&&t(w),E&&t(T),L(S,E)}}}function ui(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function mi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function pi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X;return u=new zs({props:{$$slots:{default:[ui]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[mi]},$$scope:{ctx:m}}}),J=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B93\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=P(),H(u.$$.fragment),p=b(`
        Radix sort takes O(n) time, but why do people usually use quicksort or mergesort
        which takes O(nlgn) time on average?`),c=o("br"),k=P(),H(v.$$.fragment),h=b(`
        Radix sort is an efficient sorting algorithm that takes O(n) time in the
        best case, but it has some limitations that make it less commonly used than
        other algorithms like quicksort or mergesort.`),w=o("br"),T=o("br"),S=b(`

        One of the main reasons that radix sort is not used as often is that it
        is only effective for sorting integers or items that can be easily
        converted to integers. This is because the algorithm works by sorting
        the items based on their individual digits, starting from the least
        significant digit and working up to the most significant digit. This
        means that it is not well-suited for sorting items that do not have a
        natural order based on their digits, such as floating-point numbers or
        strings.`),j=o("br"),E=o("br"),A=b(`

        Another reason that radix sort is not used as often is that it can be
        slower than other algorithms in some cases. In particular, radix sort
        has a higher constant factor than quicksort or mergesort, which means
        that it may be slower for small inputs. Additionally, radix sort
        requires additional memory to store the items in each digit bucket,
        which can make it less efficient in cases where memory is limited.`),O=o("br"),W=o("br"),q=b(`

        Overall, while radix sort is an efficient algorithm in the best case,
        its limitations and potential drawbacks make it less commonly used than
        other algorithms like quicksort or mergesort.`),I=o("br"),V=P(),H(J.$$.fragment)},l(y){e=a(y,"H2",{});var z=U(e);n=$(z,"\u6D4B\u8BD5\u70B93\uFF1A\u57FA\u7840\u77E5\u8BC6"),z.forEach(t),l=N(y),D(u.$$.fragment,y),p=$(y,`
        Radix sort takes O(n) time, but why do people usually use quicksort or mergesort
        which takes O(nlgn) time on average?`),c=a(y,"BR",{}),k=N(y),D(v.$$.fragment,y),h=$(y,`
        Radix sort is an efficient sorting algorithm that takes O(n) time in the
        best case, but it has some limitations that make it less commonly used than
        other algorithms like quicksort or mergesort.`),w=a(y,"BR",{}),T=a(y,"BR",{}),S=$(y,`

        One of the main reasons that radix sort is not used as often is that it
        is only effective for sorting integers or items that can be easily
        converted to integers. This is because the algorithm works by sorting
        the items based on their individual digits, starting from the least
        significant digit and working up to the most significant digit. This
        means that it is not well-suited for sorting items that do not have a
        natural order based on their digits, such as floating-point numbers or
        strings.`),j=a(y,"BR",{}),E=a(y,"BR",{}),A=$(y,`

        Another reason that radix sort is not used as often is that it can be
        slower than other algorithms in some cases. In particular, radix sort
        has a higher constant factor than quicksort or mergesort, which means
        that it may be slower for small inputs. Additionally, radix sort
        requires additional memory to store the items in each digit bucket,
        which can make it less efficient in cases where memory is limited.`),O=a(y,"BR",{}),W=a(y,"BR",{}),q=$(y,`

        Overall, while radix sort is an efficient algorithm in the best case,
        its limitations and potential drawbacks make it less commonly used than
        other algorithms like quicksort or mergesort.`),I=a(y,"BR",{}),V=N(y),D(J.$$.fragment,y)},m(y,z){s(y,e,z),_(e,n),s(y,l,z),F(u,y,z),s(y,p,z),s(y,c,z),s(y,k,z),F(v,y,z),s(y,h,z),s(y,w,z),s(y,T,z),s(y,S,z),s(y,j,z),s(y,E,z),s(y,A,z),s(y,O,z),s(y,W,z),s(y,q,z),s(y,I,z),s(y,V,z),F(J,y,z),X=!0},p(y,z){const K={};z&16&&(K.$$scope={dirty:z,ctx:y}),u.$set(K);const C={};z&16&&(C.$$scope={dirty:z,ctx:y}),v.$set(C)},i(y){X||(G(u.$$.fragment,y),G(v.$$.fragment,y),G(J.$$.fragment,y),X=!0)},o(y){M(u.$$.fragment,y),M(v.$$.fragment,y),M(J.$$.fragment,y),X=!1},d(y){y&&t(e),y&&t(l),L(u,y),y&&t(p),y&&t(c),y&&t(k),L(v,y),y&&t(h),y&&t(w),y&&t(T),y&&t(S),y&&t(j),y&&t(E),y&&t(A),y&&t(O),y&&t(W),y&&t(q),y&&t(I),y&&t(V),L(J,y)}}}function bi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function $i(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ci(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X;return u=new zs({props:{$$slots:{default:[bi]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[$i]},$$scope:{ctx:m}}}),J=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B94\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=P(),H(u.$$.fragment),p=b(`
        Why do people randomize quicksort?`),c=o("br"),k=P(),H(v.$$.fragment),h=b(`
        Quicksort is a popular sorting algorithm that has an average time complexity
        of O(n log n), making it efficient for sorting large collections of items.
        However, in the worst case, quicksort can take O(n^2) time, which is significantly
        slower than the average case.`),w=o("br"),T=o("br"),S=b(`

        One way to improve the worst-case performance of quicksort is to
        randomly shuffle the items being sorted before running the algorithm.
        This can help to ensure that the pivot elements chosen by the algorithm
        are distributed more evenly, which can prevent the algorithm from
        degenerating into the worst-case scenario. By randomizing the input, the
        probability of the algorithm entering the worst-case scenario is
        reduced, which can make quicksort more efficient in practice.`),j=o("br"),E=o("br"),A=b(`

        Additionally, by randomizing the input, quicksort can become more
        resistant to malicious inputs that are designed to cause the algorithm
        to take the worst-case amount of time. This can be important in
        situations where the input may not be trusted, such as when sorting
        user-provided data.`),O=o("br"),W=o("br"),q=b(`

        Overall, while randomizing the input to quicksort is not strictly
        necessary, it can improve the worst-case performance of the algorithm
        and make it more resistant to malicious inputs.`),I=o("br"),V=P(),H(J.$$.fragment)},l(y){e=a(y,"H2",{});var z=U(e);n=$(z,"\u6D4B\u8BD5\u70B94\uFF1A\u57FA\u7840\u77E5\u8BC6"),z.forEach(t),l=N(y),D(u.$$.fragment,y),p=$(y,`
        Why do people randomize quicksort?`),c=a(y,"BR",{}),k=N(y),D(v.$$.fragment,y),h=$(y,`
        Quicksort is a popular sorting algorithm that has an average time complexity
        of O(n log n), making it efficient for sorting large collections of items.
        However, in the worst case, quicksort can take O(n^2) time, which is significantly
        slower than the average case.`),w=a(y,"BR",{}),T=a(y,"BR",{}),S=$(y,`

        One way to improve the worst-case performance of quicksort is to
        randomly shuffle the items being sorted before running the algorithm.
        This can help to ensure that the pivot elements chosen by the algorithm
        are distributed more evenly, which can prevent the algorithm from
        degenerating into the worst-case scenario. By randomizing the input, the
        probability of the algorithm entering the worst-case scenario is
        reduced, which can make quicksort more efficient in practice.`),j=a(y,"BR",{}),E=a(y,"BR",{}),A=$(y,`

        Additionally, by randomizing the input, quicksort can become more
        resistant to malicious inputs that are designed to cause the algorithm
        to take the worst-case amount of time. This can be important in
        situations where the input may not be trusted, such as when sorting
        user-provided data.`),O=a(y,"BR",{}),W=a(y,"BR",{}),q=$(y,`

        Overall, while randomizing the input to quicksort is not strictly
        necessary, it can improve the worst-case performance of the algorithm
        and make it more resistant to malicious inputs.`),I=a(y,"BR",{}),V=N(y),D(J.$$.fragment,y)},m(y,z){s(y,e,z),_(e,n),s(y,l,z),F(u,y,z),s(y,p,z),s(y,c,z),s(y,k,z),F(v,y,z),s(y,h,z),s(y,w,z),s(y,T,z),s(y,S,z),s(y,j,z),s(y,E,z),s(y,A,z),s(y,O,z),s(y,W,z),s(y,q,z),s(y,I,z),s(y,V,z),F(J,y,z),X=!0},p(y,z){const K={};z&16&&(K.$$scope={dirty:z,ctx:y}),u.$set(K);const C={};z&16&&(C.$$scope={dirty:z,ctx:y}),v.$set(C)},i(y){X||(G(u.$$.fragment,y),G(v.$$.fragment,y),G(J.$$.fragment,y),X=!0)},o(y){M(u.$$.fragment,y),M(v.$$.fragment,y),M(J.$$.fragment,y),X=!1},d(y){y&&t(e),y&&t(l),L(u,y),y&&t(p),y&&t(c),y&&t(k),L(v,y),y&&t(h),y&&t(w),y&&t(T),y&&t(S),y&&t(j),y&&t(E),y&&t(A),y&&t(O),y&&t(W),y&&t(q),y&&t(I),y&&t(V),L(J,y)}}}function hi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function vi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function wi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function _i(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function yi(m){let e;return{c(){e=b("\u8FD9\u4E2A\u7A0B\u5E8F\u5C3D\u7BA1\u5BF9\uFF0C\u4F46\u662F\u8BBE\u8BA1\u5F97\u5F88\u7CDF\u7CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u8FBEO(2^n)\uFF0C\u4E0D\u5177\u6709\u4EFB\u4F55\u5B9E\u7528\u6027")},l(n){e=$(n,"\u8FD9\u4E2A\u7A0B\u5E8F\u5C3D\u7BA1\u5BF9\uFF0C\u4F46\u662F\u8BBE\u8BA1\u5F97\u5F88\u7CDF\u7CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u8FBEO(2^n)\uFF0C\u4E0D\u5177\u6709\u4EFB\u4F55\u5B9E\u7528\u6027")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ki(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Bi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function di(m){let e;return{c(){e=b("\u4E8B\u4E0D\u8FC7\u4E09\uFF0C\u653E\u5F03\u8BE5\u6D4B\u8BD5\u70B9\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u4E8B\u4E0D\u8FC7\u4E09\uFF0C\u653E\u5F03\u8BE5\u6D4B\u8BD5\u70B9\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ri(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K,C,Y,se,te,re,ee,Z,ne,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe;return u=new zs({props:{$$slots:{default:[hi]},$$scope:{ctx:m}}}),w=new qs({props:{$$slots:{default:[vi]},$$scope:{ctx:m}}}),E=new Vs({props:{data:`  def steps_to_convert(A: str, B: str) -> int:
    # If either string is empty, we can simply return the length of the other string
    # as that is how many characters we need to add to it to get the other string.
    if not A:
      return len(B)
    if not B:
      return len(A)
  
    # If the first characters of the strings are the same, we don't need to do
    # anything to get from one string to the other, so we can simply recurse
    # on the remaining substrings.
    if A[0] == B[0]:
      return steps_to_convert(A[1:], B[1:])
  
    # If the first characters of the strings are different, we have three options:
    # 1. Add a character to the front of A to make it the same as B
    # 2. Remove a character from the front of A
    # 3. Change the character at the front of A to match B
    # We return the minimum number of steps required to do any of these operations.
    return 1 + min(
      steps_to_convert(A, B[1:]),  # Add a character
      steps_to_convert(A[1:], B),  # Remove a character
      steps_to_convert(A[1:], B[1:])  # Change a character
    )
          `}}),O=new Vs({props:{data:'steps_to_convert("hello", "world")'}}),V=new on({}),X=new zs({props:{$$slots:{default:[wi]},$$scope:{ctx:m}}}),C=new qs({props:{$$slots:{default:[_i]},$$scope:{ctx:m}}}),re=new Vs({props:{data:`  def steps_to_convert(A: str, B: str) -> int:
    # If either string is empty, we can simply return the length of the other string
    # as that is how many characters we need to add to it to get the other string.
    if not A:
      return len(B)
    if not B:
      return len(A)
  
    # If the first characters of the strings are the same, we don't need to do
    # anything to get from one string to the other, so we can simply recurse
    # on the remaining substrings.
    if A[0] == B[0]:
      return steps_to_convert(A[1:], B[1:])
  
    # If the first characters of the strings are different, we have three options:
    # 1. Add a character to the front of A to make it the same as B
    # 2. Remove a character from the front of A
    # 3. Change the character at the front of A to match B
    # We return the minimum number of steps required to do any of these operations.
    return 1 + min(
      steps_to_convert(A, B[1:]),  # Add a character
      steps_to_convert(A[1:], B)  # Remove a character
    )
          `}}),Z=new Vs({props:{data:'steps_to_convert("hello", "world")'}}),pe=new Tn({props:{$$slots:{default:[yi]},$$scope:{ctx:m}}}),$e=new Cn({}),ce=new zs({props:{$$slots:{default:[ki]},$$scope:{ctx:m}}}),we=new qs({props:{$$slots:{default:[Bi]},$$scope:{ctx:m}}}),_e=new Vs({props:{data:`  def steps_to_get_b_from_a(a: str, b: str) -> int:
    # We will use dynamic programming to solve this problem.
    # The steps to get from A to B can be divided into subproblems
    # where we get from a substring of A to a substring of B.
    # We will use a two-dimensional array dp to store the solutions
    # to these subproblems.
    dp = [[0 for _ in range(len(b) + 1)] for _ in range(len(a) + 1)]

    # We will iterate over the length of A and B, starting from 1
    # (since the empty string is a valid substring of A and B)
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            # If the last characters of the substrings of A and B are the same,
            # we don't need to do anything. The number of steps to get from
            # the substrings of A and B without their last characters
            # is the same as the number of steps to get from the substrings
            # of A and B with their last characters.
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                # If the last characters of the substrings of A and B are different,
                # we need to do one of the following operations:
                # 1. Remove the last character from A: dp[i][j] = dp[i - 1][j] + 1
                # 2. Remove the last character from B: dp[i][j] = dp[i][j - 1] + 1
                # 3. Add a character to the end of A: dp[i][j] = dp[i - 1][j] + 1
                # 4. Add a character to the end of B: dp[i][j] = dp[i][j - 1] + 1
                # We will take the minimum of these values as the number of steps
                # needed to get from the substrings of A and B.
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1

    # The number of steps to get from A to B is the solution to the subproblem
    # where we get from A to B using their entire lengths.
    return dp[len(a)][len(b)]
        `}}),ve=new on({}),ye=new Tn({props:{$$slots:{default:[di]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B95\uFF1A\u51FD\u6570\u8BBE\u8BA1"),l=P(),H(u.$$.fragment),p=b(`
        Program a function to solve the following problem.`),c=o("br"),k=b(`
        Given two strings, A and B, you are required to return how many steps are
        needed to get B from A. In each step, you can add or remove a letter in the
        string.`),v=o("br"),h=P(),H(w.$$.fragment),T=b(`
        Here is a possible solution to the problem using the Python programming language:`),S=o("br"),j=P(),H(E.$$.fragment),A=b(`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),H(O.$$.fragment),W=b(`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),q=o("br"),I=P(),H(V.$$.fragment),J=P(),H(X.$$.fragment),y=b(`
        You can only add or remove a character but can't change a character. Please
        retry.`),z=o("br"),K=P(),H(C.$$.fragment),Y=b(`
        Here is a revised solution to the problem that only allows adding or removing
        characters, but not changing them:`),se=o("br"),te=P(),H(re.$$.fragment),ee=b(`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),H(Z.$$.fragment),ne=b(`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),ie=o("br"),le=P(),H(pe.$$.fragment),ue=P(),H($e.$$.fragment),Re=P(),H(ce.$$.fragment),Ae=b(`
        Try again.`),Ge=o("br"),Te=P(),H(we.$$.fragment),je=b(`
        Here's one way to solve the problem:
        `),H(_e.$$.fragment),Oe=P(),H(ve.$$.fragment),He=P(),H(ye.$$.fragment)},l(d){e=a(d,"H2",{});var Q=U(e);n=$(Q,"\u6D4B\u8BD5\u70B95\uFF1A\u51FD\u6570\u8BBE\u8BA1"),Q.forEach(t),l=N(d),D(u.$$.fragment,d),p=$(d,`
        Program a function to solve the following problem.`),c=a(d,"BR",{}),k=$(d,`
        Given two strings, A and B, you are required to return how many steps are
        needed to get B from A. In each step, you can add or remove a letter in the
        string.`),v=a(d,"BR",{}),h=N(d),D(w.$$.fragment,d),T=$(d,`
        Here is a possible solution to the problem using the Python programming language:`),S=a(d,"BR",{}),j=N(d),D(E.$$.fragment,d),A=$(d,`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),D(O.$$.fragment,d),W=$(d,`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),q=a(d,"BR",{}),I=N(d),D(V.$$.fragment,d),J=N(d),D(X.$$.fragment,d),y=$(d,`
        You can only add or remove a character but can't change a character. Please
        retry.`),z=a(d,"BR",{}),K=N(d),D(C.$$.fragment,d),Y=$(d,`
        Here is a revised solution to the problem that only allows adding or removing
        characters, but not changing them:`),se=a(d,"BR",{}),te=N(d),D(re.$$.fragment,d),ee=$(d,`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),D(Z.$$.fragment,d),ne=$(d,`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),ie=a(d,"BR",{}),le=N(d),D(pe.$$.fragment,d),ue=N(d),D($e.$$.fragment,d),Re=N(d),D(ce.$$.fragment,d),Ae=$(d,`
        Try again.`),Ge=a(d,"BR",{}),Te=N(d),D(we.$$.fragment,d),je=$(d,`
        Here's one way to solve the problem:
        `),D(_e.$$.fragment,d),Oe=N(d),D(ve.$$.fragment,d),He=N(d),D(ye.$$.fragment,d)},m(d,Q){s(d,e,Q),_(e,n),s(d,l,Q),F(u,d,Q),s(d,p,Q),s(d,c,Q),s(d,k,Q),s(d,v,Q),s(d,h,Q),F(w,d,Q),s(d,T,Q),s(d,S,Q),s(d,j,Q),F(E,d,Q),s(d,A,Q),F(O,d,Q),s(d,W,Q),s(d,q,Q),s(d,I,Q),F(V,d,Q),s(d,J,Q),F(X,d,Q),s(d,y,Q),s(d,z,Q),s(d,K,Q),F(C,d,Q),s(d,Y,Q),s(d,se,Q),s(d,te,Q),F(re,d,Q),s(d,ee,Q),F(Z,d,Q),s(d,ne,Q),s(d,ie,Q),s(d,le,Q),F(pe,d,Q),s(d,ue,Q),F($e,d,Q),s(d,Re,Q),F(ce,d,Q),s(d,Ae,Q),s(d,Ge,Q),s(d,Te,Q),F(we,d,Q),s(d,je,Q),F(_e,d,Q),s(d,Oe,Q),F(ve,d,Q),s(d,He,Q),F(ye,d,Q),Pe=!0},p(d,Q){const Ce={};Q&16&&(Ce.$$scope={dirty:Q,ctx:d}),u.$set(Ce);const ge={};Q&16&&(ge.$$scope={dirty:Q,ctx:d}),w.$set(ge);const bt={};Q&16&&(bt.$$scope={dirty:Q,ctx:d}),X.$set(bt);const Ye={};Q&16&&(Ye.$$scope={dirty:Q,ctx:d}),C.$set(Ye);const $t={};Q&16&&($t.$$scope={dirty:Q,ctx:d}),pe.$set($t);const ct={};Q&16&&(ct.$$scope={dirty:Q,ctx:d}),ce.$set(ct);const ae={};Q&16&&(ae.$$scope={dirty:Q,ctx:d}),we.$set(ae);const Ne={};Q&16&&(Ne.$$scope={dirty:Q,ctx:d}),ye.$set(Ne)},i(d){Pe||(G(u.$$.fragment,d),G(w.$$.fragment,d),G(E.$$.fragment,d),G(O.$$.fragment,d),G(V.$$.fragment,d),G(X.$$.fragment,d),G(C.$$.fragment,d),G(re.$$.fragment,d),G(Z.$$.fragment,d),G(pe.$$.fragment,d),G($e.$$.fragment,d),G(ce.$$.fragment,d),G(we.$$.fragment,d),G(_e.$$.fragment,d),G(ve.$$.fragment,d),G(ye.$$.fragment,d),Pe=!0)},o(d){M(u.$$.fragment,d),M(w.$$.fragment,d),M(E.$$.fragment,d),M(O.$$.fragment,d),M(V.$$.fragment,d),M(X.$$.fragment,d),M(C.$$.fragment,d),M(re.$$.fragment,d),M(Z.$$.fragment,d),M(pe.$$.fragment,d),M($e.$$.fragment,d),M(ce.$$.fragment,d),M(we.$$.fragment,d),M(_e.$$.fragment,d),M(ve.$$.fragment,d),M(ye.$$.fragment,d),Pe=!1},d(d){d&&t(e),d&&t(l),L(u,d),d&&t(p),d&&t(c),d&&t(k),d&&t(v),d&&t(h),L(w,d),d&&t(T),d&&t(S),d&&t(j),L(E,d),d&&t(A),L(O,d),d&&t(W),d&&t(q),d&&t(I),L(V,d),d&&t(J),L(X,d),d&&t(y),d&&t(z),d&&t(K),L(C,d),d&&t(Y),d&&t(se),d&&t(te),L(re,d),d&&t(ee),L(Z,d),d&&t(ne),d&&t(ie),d&&t(le),L(pe,d),d&&t(ue),L($e,d),d&&t(Re),L(ce,d),d&&t(Ae),d&&t(Ge),d&&t(Te),L(we,d),d&&t(je),L(_e,d),d&&t(Oe),L(ve,d),d&&t(He),L(ye,d)}}}function Ti(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function gi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ci(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ii(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function xi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ei(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ai(m){let e;return{c(){e=b("\u9519\u8BEF\u4E24\u6B21\u540E\u7ED3\u675F\u4F1A\u8BDD\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u9519\u8BEF\u4E24\u6B21\u540E\u7ED3\u675F\u4F1A\u8BDD\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Pi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K,C,Y,se,te,re,ee,Z,ne,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,Q,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee;return u=new zs({props:{$$slots:{default:[Ti]},$$scope:{ctx:m}}}),it=new qs({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),yt=new Vs({props:{data:`# Test cases
tests = [
    ("11100", 9),  # cost = 3 * 2 = 6
    ("1100110", 12),  # cost = 4 * 3 = 12
    ("011110", 16),  # cost = 4^2 = 16
    ("1001010", 12),  # cost = 4 * 3 = 12
    ("1000", 9),  # cost = 3^2 = 9
    ("0", 1)  # cost = 1^2 = 1
]

# Loop through test cases
for test in tests:
    # Unpack test case
    binary_string, expected_cost = test

    # Count number of 0s and 1s in binary string
    num_zeros = binary_string.count("0")
    num_ones = binary_string.count("1")

    # Compute maximum cost
    if num_zeros > 0 and num_ones > 0:
        # If the binary string contains both 0s and 1s,
        # the maximum cost is the minimum of the number of 0s and 1s
        cost = min(num_zeros, num_ones)
    else:
        # If the binary string only contains 0s or only contains 1s,
        # the maximum cost is the square of the length of the string
        cost = len(binary_string) ** 2

    # Check if the computed cost is equal to the expected cost
    assert cost == expected_cost
`}}),xe=new Vs({props:{data:`# Test cases
tests = [
    ("11100", 9),  # cost = 3 * 2 = 6
    ("1100110", 12),  # cost = 4 * 3 = 12
    ("011110", 16),  # cost = 4^2 = 16
    ("1001010", 12),  # cost = 4 * 3 = 12
    ("1000", 9),  # cost = 3^2 = 9
    ("0", 1)  # cost = 1^2 = 1
]

# Loop through test cases
for test in tests:
    # Unpack test case
    binary_string, expected_cost = test

    # Count number of 0s and 1s in binary string
    num_zeros = binary_string.count("0")
    num_ones = binary_string.count("1")

    # Compute maximum cost
    if num_zeros > 0 and num_ones > 0:
        # If the binary string contains both 0s and 1s,
        # the maximum cost is the minimum of the number of 0s and 1s
        cost = min(num_zeros, num_ones)
    else:
        # If the binary string only contains 0s or only contains 1s,
        # the maximum cost is the square of the length of the string
        cost = len(binary_string) ** 2

    # Print the maximum cost
    print(cost)

    # Check if the computed cost is equal to the expected cost
    assert cost == expected_cost
        `}}),qe=new on({}),ke=new zs({props:{$$slots:{default:[Ci]},$$scope:{ctx:m}}}),Be=new qs({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),at=new Vs({props:{data:`# Read number of test cases
num_test_cases = int(input())

# Loop through test cases
for _ in range(num_test_cases):
    # Read length of binary string
    n = int(input())

    # Read binary string
    binary_string = input()

    # Count number of 0s and 1s in binary string
    num_zeros = binary_string.count("0")
    num_ones = binary_string.count("1")

    # Compute maximum cost
    if num_zeros > 0 and num_ones > 0:
        # If the binary string contains both 0s and 1s,
        # the maximum cost is the minimum of the number of 0s and 1s
        cost = min(num_zeros, num_ones)
    else:
        # If the binary string only contains 0s or only contains 1s,
        # the maximum cost is the square of the length of the string
        cost = len(binary_string) ** 2

    # Print the maximum cost
    print(cost)
        `}}),ut=new on({}),De=new zs({props:{$$slots:{default:[xi]},$$scope:{ctx:m}}}),Me=new qs({props:{$$slots:{default:[Ei]},$$scope:{ctx:m}}}),he=new Tn({props:{$$slots:{default:[Ai]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B96\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=P(),H(u.$$.fragment),p=b(`
        Solve the following Problem:`),c=o("br"),k=b(`
        B. Maximum Substring`),v=o("br"),h=b(`
        time limit per test: 1 second`),w=o("br"),T=b(`
        memory limit per test: 256 megabytes`),S=o("br"),j=b(`
        input: standard input`),E=o("br"),A=b(`
        output: standard output`),O=o("br"),W=o("br"),q=b(`

        A binary string is a string consisting only of the characters 0 and 1.
        You are given a binary string s.`),I=o("br"),V=o("br"),J=b(`

        For some non-empty substring\u2020 t of string s containing x characters 0
        and y characters 1, define its cost as:`),X=o("br"),y=b(`
        x\u22C5y, if x>0 and y>0; x2, if x>0 and y=0; y2, if x=0 and y>0. Given a binary
        string s of length n, find the maximum cost across all its non-empty substrings.`),z=o("br"),K=o("br"),C=b(`

        \u2020 A string a is a substring of a string b if a can be obtained from b by
        deletion of several (possibly, zero or all) characters from the
        beginning and several (possibly, zero or all) characters from the end.`),Y=o("br"),se=o("br"),te=b(`

        Input`),re=o("br"),ee=o("br"),Z=b(`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u2264105) \u2014 the number of test cases. The description
        of test cases follows.`),ne=o("br"),ie=o("br"),le=b(`

        The first line of each test case contains a single integer n (1\u2264n\u22642\u22C5105)
        \u2014 the length of the string s.`),pe=o("br"),ue=o("br"),$e=b(`

        The second line of each test case contains a binary string s of length
        n.`),Re=o("br"),ce=o("br"),Ae=b(`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Ge=o("br"),Te=o("br"),we=b(`

        Output`),je=o("br"),_e=o("br"),Oe=b(`

        For each test case, print a single integer \u2014 the maximum cost across all
        substrings.`),ve=o("br"),He=o("br"),ye=b(`

        Example`),Pe=o("br"),d=b(`
        Input`),Q=o("br"),Ce=b(`

        6`),ge=o("br"),bt=b(`
        5`),Ye=o("br"),$t=b(`
        11100`),ct=o("br"),ae=b(`
        7`),Ne=o("br"),Ut=b(`
        1100110`),Jt=o("br"),At=b(`
        6`),Qt=o("br"),ht=b(`
        011110`),Xt=o("br"),Zt=b(`
        7`),Pt=o("br"),Kt=b(`
        1001010`),Nt=o("br"),es=b(`
        4`),be=o("br"),me=b(`
        1000`),We=o("br"),ts=b(`
        1`),Ue=o("br"),ss=b(`
        0`),Je=o("br"),ns=o("br"),Qe=b(`

        Output`),rs=o("br"),Xe=b(`

        9`),is=o("br"),Ze=b(`
        12`),ls=o("br"),St=b(`
        16`),fs=o("br"),Ke=b(`
        12`),os=o("br"),et=b(`
        9`),as=o("br"),tt=b(`
        1`),us=o("br"),st=o("br"),ms=b(`

        Note`),zt=o("br"),ps=o("br"),qt=b(`

        In the first test case, we can take a substring 111. It contains 3
        characters 1 and 0 characters 0. So a=3, b=0 and its cost is 32=9.`),bs=o("br"),Ie=o("br"),$s=b(`

        In the second test case, we can take the whole string. It contains 4
        characters 1 and 3 characters 0. So a=4, b=3 and its cost is 4\u22C53=12.`),Mt=o("br"),cs=o("br"),Gt=b(`

        In the third test case, we can can take a substring 1111 and its cost is
        42=16.`),hs=o("br"),Ct=o("br"),vs=b(`

        In the fourth test case, we can take the whole string and cost is
        4\u22C53=12.`),nt=o("br"),Se=o("br"),ws=b(`

        In the fifth test case, we can take a substring 000 and its cost is
        3\u22C53=9.`),jt=o("br"),_s=o("br"),Ot=b(`

        In the sixth test case, we can only take the substring 0 and its cost is
        1\u22C51=1.`),ys=o("br"),rt=P(),H(it.$$.fragment),ks=b(`
        First, let's consider the case where the binary string contains both 0s and
        1s. In this case, we can choose the substring that contains the largest number
        of 0s and 1s to maximize the cost.`),vt=o("br"),lt=o("br"),Bs=b(`

        To find the largest number of 0s and 1s, we can simply count the number
        of 0s and 1s in the binary string and take the minimum of the two
        counts. For example, if the binary string is "11100", there are 3 0s and
        2 1s, so the largest number of 0s and 1s is 2.`),Ht=o("br"),ds=o("br"),Fe=b(`

        Now, let's consider the case where the binary string only contains 0s or
        only contains 1s. In this case, the maximum cost is simply the square of
        the length of the string.`),wt=o("br"),Ft=o("br"),Rs=b(`

        To find the maximum cost, we can simply check whether the binary string
        contains both 0s and 1s. If it does, we can use the method described
        above to find the maximum cost. Otherwise, we can find the maximum cost
        by taking the square of the length of the string.`),_t=o("br"),ze=o("br"),Ts=b(`

        Here is some sample Python code that implements this idea:`),ft=o("br"),Lt=P(),H(yt.$$.fragment),Dt=b(`
        Here is the complete solution to the problem:
        `),H(xe.$$.fragment),ot=P(),H(qe.$$.fragment),kt=P(),H(ke.$$.fragment),Bt=b(`
        Please read test cases from standard input.`),dt=o("br"),gs=P(),H(Be.$$.fragment),Cs=b(`
        Here is an updated solution to the problem that reads the test cases from
        standard input:`),Le=o("br"),Is=P(),H(at.$$.fragment),Rt=b(`
        This solution reads the number of test cases from standard input, then loops
        through each test case and reads the length of the binary string and the
        binary string itself from standard input. It then computes the maximum cost
        for the binary string and prints the result.`),Vt=o("br"),xs=P(),H(ut.$$.fragment),Tt=P(),H(De.$$.fragment),mt=b(`
        Please notice the definition of substring.
        `),H(Me.$$.fragment),Es=b(`
        Conversation lost.
        `),H(he.$$.fragment)},l(f){e=a(f,"H2",{});var g=U(e);n=$(g,"\u6D4B\u8BD5\u70B96\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),g.forEach(t),l=N(f),D(u.$$.fragment,f),p=$(f,`
        Solve the following Problem:`),c=a(f,"BR",{}),k=$(f,`
        B. Maximum Substring`),v=a(f,"BR",{}),h=$(f,`
        time limit per test: 1 second`),w=a(f,"BR",{}),T=$(f,`
        memory limit per test: 256 megabytes`),S=a(f,"BR",{}),j=$(f,`
        input: standard input`),E=a(f,"BR",{}),A=$(f,`
        output: standard output`),O=a(f,"BR",{}),W=a(f,"BR",{}),q=$(f,`

        A binary string is a string consisting only of the characters 0 and 1.
        You are given a binary string s.`),I=a(f,"BR",{}),V=a(f,"BR",{}),J=$(f,`

        For some non-empty substring\u2020 t of string s containing x characters 0
        and y characters 1, define its cost as:`),X=a(f,"BR",{}),y=$(f,`
        x\u22C5y, if x>0 and y>0; x2, if x>0 and y=0; y2, if x=0 and y>0. Given a binary
        string s of length n, find the maximum cost across all its non-empty substrings.`),z=a(f,"BR",{}),K=a(f,"BR",{}),C=$(f,`

        \u2020 A string a is a substring of a string b if a can be obtained from b by
        deletion of several (possibly, zero or all) characters from the
        beginning and several (possibly, zero or all) characters from the end.`),Y=a(f,"BR",{}),se=a(f,"BR",{}),te=$(f,`

        Input`),re=a(f,"BR",{}),ee=a(f,"BR",{}),Z=$(f,`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u2264105) \u2014 the number of test cases. The description
        of test cases follows.`),ne=a(f,"BR",{}),ie=a(f,"BR",{}),le=$(f,`

        The first line of each test case contains a single integer n (1\u2264n\u22642\u22C5105)
        \u2014 the length of the string s.`),pe=a(f,"BR",{}),ue=a(f,"BR",{}),$e=$(f,`

        The second line of each test case contains a binary string s of length
        n.`),Re=a(f,"BR",{}),ce=a(f,"BR",{}),Ae=$(f,`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Ge=a(f,"BR",{}),Te=a(f,"BR",{}),we=$(f,`

        Output`),je=a(f,"BR",{}),_e=a(f,"BR",{}),Oe=$(f,`

        For each test case, print a single integer \u2014 the maximum cost across all
        substrings.`),ve=a(f,"BR",{}),He=a(f,"BR",{}),ye=$(f,`

        Example`),Pe=a(f,"BR",{}),d=$(f,`
        Input`),Q=a(f,"BR",{}),Ce=$(f,`

        6`),ge=a(f,"BR",{}),bt=$(f,`
        5`),Ye=a(f,"BR",{}),$t=$(f,`
        11100`),ct=a(f,"BR",{}),ae=$(f,`
        7`),Ne=a(f,"BR",{}),Ut=$(f,`
        1100110`),Jt=a(f,"BR",{}),At=$(f,`
        6`),Qt=a(f,"BR",{}),ht=$(f,`
        011110`),Xt=a(f,"BR",{}),Zt=$(f,`
        7`),Pt=a(f,"BR",{}),Kt=$(f,`
        1001010`),Nt=a(f,"BR",{}),es=$(f,`
        4`),be=a(f,"BR",{}),me=$(f,`
        1000`),We=a(f,"BR",{}),ts=$(f,`
        1`),Ue=a(f,"BR",{}),ss=$(f,`
        0`),Je=a(f,"BR",{}),ns=a(f,"BR",{}),Qe=$(f,`

        Output`),rs=a(f,"BR",{}),Xe=$(f,`

        9`),is=a(f,"BR",{}),Ze=$(f,`
        12`),ls=a(f,"BR",{}),St=$(f,`
        16`),fs=a(f,"BR",{}),Ke=$(f,`
        12`),os=a(f,"BR",{}),et=$(f,`
        9`),as=a(f,"BR",{}),tt=$(f,`
        1`),us=a(f,"BR",{}),st=a(f,"BR",{}),ms=$(f,`

        Note`),zt=a(f,"BR",{}),ps=a(f,"BR",{}),qt=$(f,`

        In the first test case, we can take a substring 111. It contains 3
        characters 1 and 0 characters 0. So a=3, b=0 and its cost is 32=9.`),bs=a(f,"BR",{}),Ie=a(f,"BR",{}),$s=$(f,`

        In the second test case, we can take the whole string. It contains 4
        characters 1 and 3 characters 0. So a=4, b=3 and its cost is 4\u22C53=12.`),Mt=a(f,"BR",{}),cs=a(f,"BR",{}),Gt=$(f,`

        In the third test case, we can can take a substring 1111 and its cost is
        42=16.`),hs=a(f,"BR",{}),Ct=a(f,"BR",{}),vs=$(f,`

        In the fourth test case, we can take the whole string and cost is
        4\u22C53=12.`),nt=a(f,"BR",{}),Se=a(f,"BR",{}),ws=$(f,`

        In the fifth test case, we can take a substring 000 and its cost is
        3\u22C53=9.`),jt=a(f,"BR",{}),_s=a(f,"BR",{}),Ot=$(f,`

        In the sixth test case, we can only take the substring 0 and its cost is
        1\u22C51=1.`),ys=a(f,"BR",{}),rt=N(f),D(it.$$.fragment,f),ks=$(f,`
        First, let's consider the case where the binary string contains both 0s and
        1s. In this case, we can choose the substring that contains the largest number
        of 0s and 1s to maximize the cost.`),vt=a(f,"BR",{}),lt=a(f,"BR",{}),Bs=$(f,`

        To find the largest number of 0s and 1s, we can simply count the number
        of 0s and 1s in the binary string and take the minimum of the two
        counts. For example, if the binary string is "11100", there are 3 0s and
        2 1s, so the largest number of 0s and 1s is 2.`),Ht=a(f,"BR",{}),ds=a(f,"BR",{}),Fe=$(f,`

        Now, let's consider the case where the binary string only contains 0s or
        only contains 1s. In this case, the maximum cost is simply the square of
        the length of the string.`),wt=a(f,"BR",{}),Ft=a(f,"BR",{}),Rs=$(f,`

        To find the maximum cost, we can simply check whether the binary string
        contains both 0s and 1s. If it does, we can use the method described
        above to find the maximum cost. Otherwise, we can find the maximum cost
        by taking the square of the length of the string.`),_t=a(f,"BR",{}),ze=a(f,"BR",{}),Ts=$(f,`

        Here is some sample Python code that implements this idea:`),ft=a(f,"BR",{}),Lt=N(f),D(yt.$$.fragment,f),Dt=$(f,`
        Here is the complete solution to the problem:
        `),D(xe.$$.fragment,f),ot=N(f),D(qe.$$.fragment,f),kt=N(f),D(ke.$$.fragment,f),Bt=$(f,`
        Please read test cases from standard input.`),dt=a(f,"BR",{}),gs=N(f),D(Be.$$.fragment,f),Cs=$(f,`
        Here is an updated solution to the problem that reads the test cases from
        standard input:`),Le=a(f,"BR",{}),Is=N(f),D(at.$$.fragment,f),Rt=$(f,`
        This solution reads the number of test cases from standard input, then loops
        through each test case and reads the length of the binary string and the
        binary string itself from standard input. It then computes the maximum cost
        for the binary string and prints the result.`),Vt=a(f,"BR",{}),xs=N(f),D(ut.$$.fragment,f),Tt=N(f),D(De.$$.fragment,f),mt=$(f,`
        Please notice the definition of substring.
        `),D(Me.$$.fragment,f),Es=$(f,`
        Conversation lost.
        `),D(he.$$.fragment,f)},m(f,g){s(f,e,g),_(e,n),s(f,l,g),F(u,f,g),s(f,p,g),s(f,c,g),s(f,k,g),s(f,v,g),s(f,h,g),s(f,w,g),s(f,T,g),s(f,S,g),s(f,j,g),s(f,E,g),s(f,A,g),s(f,O,g),s(f,W,g),s(f,q,g),s(f,I,g),s(f,V,g),s(f,J,g),s(f,X,g),s(f,y,g),s(f,z,g),s(f,K,g),s(f,C,g),s(f,Y,g),s(f,se,g),s(f,te,g),s(f,re,g),s(f,ee,g),s(f,Z,g),s(f,ne,g),s(f,ie,g),s(f,le,g),s(f,pe,g),s(f,ue,g),s(f,$e,g),s(f,Re,g),s(f,ce,g),s(f,Ae,g),s(f,Ge,g),s(f,Te,g),s(f,we,g),s(f,je,g),s(f,_e,g),s(f,Oe,g),s(f,ve,g),s(f,He,g),s(f,ye,g),s(f,Pe,g),s(f,d,g),s(f,Q,g),s(f,Ce,g),s(f,ge,g),s(f,bt,g),s(f,Ye,g),s(f,$t,g),s(f,ct,g),s(f,ae,g),s(f,Ne,g),s(f,Ut,g),s(f,Jt,g),s(f,At,g),s(f,Qt,g),s(f,ht,g),s(f,Xt,g),s(f,Zt,g),s(f,Pt,g),s(f,Kt,g),s(f,Nt,g),s(f,es,g),s(f,be,g),s(f,me,g),s(f,We,g),s(f,ts,g),s(f,Ue,g),s(f,ss,g),s(f,Je,g),s(f,ns,g),s(f,Qe,g),s(f,rs,g),s(f,Xe,g),s(f,is,g),s(f,Ze,g),s(f,ls,g),s(f,St,g),s(f,fs,g),s(f,Ke,g),s(f,os,g),s(f,et,g),s(f,as,g),s(f,tt,g),s(f,us,g),s(f,st,g),s(f,ms,g),s(f,zt,g),s(f,ps,g),s(f,qt,g),s(f,bs,g),s(f,Ie,g),s(f,$s,g),s(f,Mt,g),s(f,cs,g),s(f,Gt,g),s(f,hs,g),s(f,Ct,g),s(f,vs,g),s(f,nt,g),s(f,Se,g),s(f,ws,g),s(f,jt,g),s(f,_s,g),s(f,Ot,g),s(f,ys,g),s(f,rt,g),F(it,f,g),s(f,ks,g),s(f,vt,g),s(f,lt,g),s(f,Bs,g),s(f,Ht,g),s(f,ds,g),s(f,Fe,g),s(f,wt,g),s(f,Ft,g),s(f,Rs,g),s(f,_t,g),s(f,ze,g),s(f,Ts,g),s(f,ft,g),s(f,Lt,g),F(yt,f,g),s(f,Dt,g),F(xe,f,g),s(f,ot,g),F(qe,f,g),s(f,kt,g),F(ke,f,g),s(f,Bt,g),s(f,dt,g),s(f,gs,g),F(Be,f,g),s(f,Cs,g),s(f,Le,g),s(f,Is,g),F(at,f,g),s(f,Rt,g),s(f,Vt,g),s(f,xs,g),F(ut,f,g),s(f,Tt,g),F(De,f,g),s(f,mt,g),F(Me,f,g),s(f,Es,g),F(he,f,g),Ee=!0},p(f,g){const Ss={};g&16&&(Ss.$$scope={dirty:g,ctx:f}),u.$set(Ss);const Yt={};g&16&&(Yt.$$scope={dirty:g,ctx:f}),it.$set(Yt);const It={};g&16&&(It.$$scope={dirty:g,ctx:f}),ke.$set(It);const xt={};g&16&&(xt.$$scope={dirty:g,ctx:f}),Be.$set(xt);const gt={};g&16&&(gt.$$scope={dirty:g,ctx:f}),De.$set(gt);const Et={};g&16&&(Et.$$scope={dirty:g,ctx:f}),Me.$set(Et);const Fs={};g&16&&(Fs.$$scope={dirty:g,ctx:f}),he.$set(Fs)},i(f){Ee||(G(u.$$.fragment,f),G(it.$$.fragment,f),G(yt.$$.fragment,f),G(xe.$$.fragment,f),G(qe.$$.fragment,f),G(ke.$$.fragment,f),G(Be.$$.fragment,f),G(at.$$.fragment,f),G(ut.$$.fragment,f),G(De.$$.fragment,f),G(Me.$$.fragment,f),G(he.$$.fragment,f),Ee=!0)},o(f){M(u.$$.fragment,f),M(it.$$.fragment,f),M(yt.$$.fragment,f),M(xe.$$.fragment,f),M(qe.$$.fragment,f),M(ke.$$.fragment,f),M(Be.$$.fragment,f),M(at.$$.fragment,f),M(ut.$$.fragment,f),M(De.$$.fragment,f),M(Me.$$.fragment,f),M(he.$$.fragment,f),Ee=!1},d(f){f&&t(e),f&&t(l),L(u,f),f&&t(p),f&&t(c),f&&t(k),f&&t(v),f&&t(h),f&&t(w),f&&t(T),f&&t(S),f&&t(j),f&&t(E),f&&t(A),f&&t(O),f&&t(W),f&&t(q),f&&t(I),f&&t(V),f&&t(J),f&&t(X),f&&t(y),f&&t(z),f&&t(K),f&&t(C),f&&t(Y),f&&t(se),f&&t(te),f&&t(re),f&&t(ee),f&&t(Z),f&&t(ne),f&&t(ie),f&&t(le),f&&t(pe),f&&t(ue),f&&t($e),f&&t(Re),f&&t(ce),f&&t(Ae),f&&t(Ge),f&&t(Te),f&&t(we),f&&t(je),f&&t(_e),f&&t(Oe),f&&t(ve),f&&t(He),f&&t(ye),f&&t(Pe),f&&t(d),f&&t(Q),f&&t(Ce),f&&t(ge),f&&t(bt),f&&t(Ye),f&&t($t),f&&t(ct),f&&t(ae),f&&t(Ne),f&&t(Ut),f&&t(Jt),f&&t(At),f&&t(Qt),f&&t(ht),f&&t(Xt),f&&t(Zt),f&&t(Pt),f&&t(Kt),f&&t(Nt),f&&t(es),f&&t(be),f&&t(me),f&&t(We),f&&t(ts),f&&t(Ue),f&&t(ss),f&&t(Je),f&&t(ns),f&&t(Qe),f&&t(rs),f&&t(Xe),f&&t(is),f&&t(Ze),f&&t(ls),f&&t(St),f&&t(fs),f&&t(Ke),f&&t(os),f&&t(et),f&&t(as),f&&t(tt),f&&t(us),f&&t(st),f&&t(ms),f&&t(zt),f&&t(ps),f&&t(qt),f&&t(bs),f&&t(Ie),f&&t($s),f&&t(Mt),f&&t(cs),f&&t(Gt),f&&t(hs),f&&t(Ct),f&&t(vs),f&&t(nt),f&&t(Se),f&&t(ws),f&&t(jt),f&&t(_s),f&&t(Ot),f&&t(ys),f&&t(rt),L(it,f),f&&t(ks),f&&t(vt),f&&t(lt),f&&t(Bs),f&&t(Ht),f&&t(ds),f&&t(Fe),f&&t(wt),f&&t(Ft),f&&t(Rs),f&&t(_t),f&&t(ze),f&&t(Ts),f&&t(ft),f&&t(Lt),L(yt,f),f&&t(Dt),L(xe,f),f&&t(ot),L(qe,f),f&&t(kt),L(ke,f),f&&t(Bt),f&&t(dt),f&&t(gs),L(Be,f),f&&t(Cs),f&&t(Le),f&&t(Is),L(at,f),f&&t(Rt),f&&t(Vt),f&&t(xs),L(ut,f),f&&t(Tt),L(De,f),f&&t(mt),L(Me,f),f&&t(Es),L(he,f)}}}function Ni(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Si(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function zi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function qi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Mi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Gi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ji(m){let e;return{c(){e=b("\u7ECF\u8FC7\u63D0\u9192\u540ECharGPT\u4ECD\u7136\u62D2\u7EDD\u6539\u6B63\u5176\u9519\u8BEF\uFF0C\u9519\u8BEF\u6B21\u6570\u8FBE\u5230\u4E09\u6B21\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u7ECF\u8FC7\u63D0\u9192\u540ECharGPT\u4ECD\u7136\u62D2\u7EDD\u6539\u6B63\u5176\u9519\u8BEF\uFF0C\u9519\u8BEF\u6B21\u6570\u8FBE\u5230\u4E09\u6B21\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Oi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K,C,Y,se,te,re,ee,Z,ne,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,Q,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee,f,g,Ss,Yt,It,xt,gt,Et,Fs,oe,fe,Zs,Ks,en,As,Ys,tn,sn,Ws,Ls,Ps,Gs,Qs,Ve,nn,Ds,rn,Wt,Us;return u=new zs({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),Fe=new qs({props:{$$slots:{default:[Si]},$$scope:{ctx:m}}}),qe=new Vs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),dt=new on({}),Be=new zs({props:{$$slots:{default:[zi]},$$scope:{ctx:m}}}),Le=new qs({props:{$$slots:{default:[qi]},$$scope:{ctx:m}}}),Ee=new Vs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Yt=new on({}),xt=new zs({props:{$$slots:{default:[Mi]},$$scope:{ctx:m}}}),Et=new qs({props:{$$slots:{default:[Gi]},$$scope:{ctx:m}}}),Ls=new Vs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Ds=new on({}),Wt=new Tn({props:{$$slots:{default:[ji]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B97\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=P(),H(u.$$.fragment),p=b(`
        A. Indirect Sort`),c=o("br"),k=b(`
        time limit per test: 1 second`),v=o("br"),h=b(`
        memory limit per test: 256 megabytes`),w=o("br"),T=b(`
        input: standard input`),S=o("br"),j=b(`
        output: standard output`),E=o("br"),A=b(`

        You are given a permutation a1,a2,\u2026,an of size n, where each integer
        from 1 to n appears exactly once.`),O=o("br"),W=b(`

        You can do the following operation any number of times (possibly, zero):`),q=o("br"),I=o("br"),V=b(`

        Choose any three indices i,j,k (1\u2264i`),J=o("j<k\u2264n)."),X=b(`
        If ai>ak, replace ai with ai+aj. Otherwise, swap aj and ak. `),y=o("br"),z=b(`

        Determine whether you can make the array a sorted in non-descending
        order.`),K=o("br"),C=b(`
        Input`),Y=o("br"),se=o("br"),te=b(`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22645000) \u2014 the number of test cases. The description
        of test cases follows.`),re=o("br"),ee=o("br"),Z=b(`

        The first line of each test case contains a single integer n (3\u2264n\u226410) \u2014
        the length of the array a.`),ne=o("br"),ie=o("br"),le=b(`

        The second line contains n integers a1,a2,\u2026,an (1\u2264ai\u2264n, ai\u2260aj if i\u2260j) \u2014
        the elements of the array a.`),pe=o("br"),ue=o("br"),$e=b(`
        Output For each test case, output "Yes" (without quotes) if the array can
        be sorted in non-descending order, and "No" (without quotes) otherwise.`),Re=o("br"),ce=o("br"),Ae=b(`

        You can output "Yes" and "No" in any case (for example, strings "YES",
        "yEs" and "yes" will be recognized as a positive response).`),Ge=o("br"),Te=o("br"),we=b(`

        Example`),je=o("br"),_e=b(`
        Input`),Oe=o("br"),ve=o("br"),He=b(`

        7`),ye=o("br"),Pe=b(`
        3`),d=o("br"),Q=b(`
        1 2 3`),Ce=o("br"),ge=b(`
        3`),bt=o("br"),Ye=b(`
        1 3 2`),$t=o("br"),ct=b(`
        7`),ae=o("br"),Ne=b(`
        5 3 4 7 6 2 1`),Ut=o("br"),Jt=b(`
        7`),At=o("br"),Qt=b(`
        7 6 5 4 3 2 1`),ht=o("br"),Xt=b(`
        5`),Zt=o("br"),Pt=b(`
        2 1 4 5 3`),Kt=o("br"),Nt=b(`
        5`),es=o("br"),be=b(`
        2 1 3 4 5`),me=o("br"),We=b(`
        7`),ts=o("br"),Ue=b(`
        1 2 6 7 4 3 5`),ss=o("br"),Je=o("br"),ns=b(`

        Output`),Qe=o("br"),rs=o("br"),Xe=b(`

        Yes`),is=o("br"),Ze=b(`
        Yes`),ls=o("br"),St=b(`
        No`),fs=o("br"),Ke=b(`
        No`),os=o("br"),et=b(`
        No`),as=o("br"),tt=b(`
        No`),us=o("br"),st=b(`
        Yes`),ms=o("br"),zt=o("br"),ps=b(`

        Note`),qt=o("br"),bs=o("br"),Ie=b(`

        In the first test case, [1,2,3] is already sorted in non-descending
        order.`),$s=o("br"),Mt=o("br"),cs=b(`

        In the second test case, we can choose i=1,j=2,k=3. Since a1\u2264a3, swap a2
        and a3, the array then becomes [1,2,3], which is sorted in
        non-descending order.`),Gt=o("br"),hs=o("br"),Ct=b(`

        In the seventh test case, we can do the following operations
        successively:`),vs=o("br"),nt=b(`
        Choose i=5,j=6,k=7. Since a5\u2264a7, swap a6 and a7, the array then becomes [1,2,6,7,4,5,3].`),Se=o("br"),ws=b(`
        Choose i=5,j=6,k=7. Since a5>a7, replace a5 with a5+a6=9, the array then
        becomes [1,2,6,7,9,5,3].`),jt=o("br"),_s=b(`
        Choose i=2,j=5,k=7. Since a2\u2264a7, swap a5 and a7, the array then becomes [1,2,6,7,3,5,9].`),Ot=o("br"),ys=b(`
        Choose i=2,j=4,k=6. Since a2\u2264a6, swap a4 and a6, the array then becomes [1,2,6,5,3,7,9].`),rt=o("br"),it=b(`
        Choose i=1,j=3,k=5. Since a1\u2264a5, swap a3 and a5, the array then becomes [1,2,3,5,6,7,9],
        which is sorted in non-descending order. `),ks=o("br"),vt=o("br"),lt=b(`

        In the third, the fourth, the fifth and the sixth test cases, it can be
        shown that the array cannot be sorted in non-descending order.`),Bs=o("br"),Ht=o("br"),ds=P(),H(Fe.$$.fragment),wt=b(`
        There is a simple way to determine whether a given permutation of the numbers
        1 through n can be sorted into non-descending order using the operations
        specified in the problem statement. To do this, we will use the following
        observation:`),Ft=o("br"),Rs=o("br"),_t=b(`

        If the permutation contains any number that is greater than the number
        that follows it, then it is impossible to sort the permutation into
        non-descending order using the given operations. This is because the
        operation that replaces a number with the sum of itself and the number
        that follows it can only increase the value of that number, so if there
        is any number that is already greater than the number that follows it,
        it will always remain greater than the number that follows it after any
        number of operations are applied.`),ze=o("br"),Ts=o("br"),ft=b(`

        With this observation in mind, we can simply scan the permutation from
        left to right and check if there is any number that is greater than the
        number that follows it. If there is, we can immediately output "No" and
        move on to the next test case. Otherwise, we can output "Yes" because we
        know that the permutation can be sorted into non-descending order using
        the given operations.`),Lt=o("br"),yt=o("br"),Dt=b(`

        Here is some sample pseudo-code that shows how this idea can be
        implemented:`),xe=o("br"),ot=P(),H(qe.$$.fragment),kt=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),ke=o("br"),Bt=P(),H(dt.$$.fragment),gs=P(),H(Be.$$.fragment),Cs=b(`
        Please output whether the array can be sorted into non-descending order using
        the given operation. I'm not asking if the array is already sorted.
        `),H(Le.$$.fragment),Is=b(`
        To determine whether a given permutation of the numbers 1 through n can be
        sorted into non-descending order using the operations specified in the problem
        statement, we can use the following approach:`),at=o("br"),Rt=o("br"),Vt=b(`

        Scan the permutation from left to right.`),xs=o("br"),ut=b(`
        For each number in the permutation, check if it is greater than the number
        that follows it. If it is, output "No" and move on to the next test case.`),Tt=o("br"),De=b(`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),mt=o("br"),Me=b(`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),Es=o("br"),he=P(),H(Ee.$$.fragment),f=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),g=o("br"),Ss=P(),H(Yt.$$.fragment),It=P(),H(xt.$$.fragment),gt=b(`
        Please retry.
        `),H(Et.$$.fragment),Fs=b(`
        I apologize if my previous answer was not clear or did not fully address
        your question. To determine whether a given permutation of the numbers 1
        through n can be sorted into non-descending order using the operations specified
        in the problem statement, we can use the following approach:`),oe=o("br"),fe=o("br"),Zs=b(`

        Scan the permutation from left to right. For each number in the
        permutation, check if it is greater than the number that follows it. If
        it is, output "No" and move on to the next test case.`),Ks=o("br"),en=b(`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),As=o("br"),Ys=o("br"),tn=b(`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),sn=o("br"),Ws=P(),H(Ls.$$.fragment),Ps=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),Gs=o("br"),Qs=b(`
        I hope this helps. Let me know if you have any other questions.`),Ve=o("br"),nn=P(),H(Ds.$$.fragment),rn=P(),H(Wt.$$.fragment),this.h()},l(i){e=a(i,"H2",{});var R=U(e);n=$(R,"\u6D4B\u8BD5\u70B97\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),R.forEach(t),l=N(i),D(u.$$.fragment,i),p=$(i,`
        A. Indirect Sort`),c=a(i,"BR",{}),k=$(i,`
        time limit per test: 1 second`),v=a(i,"BR",{}),h=$(i,`
        memory limit per test: 256 megabytes`),w=a(i,"BR",{}),T=$(i,`
        input: standard input`),S=a(i,"BR",{}),j=$(i,`
        output: standard output`),E=a(i,"BR",{}),A=$(i,`

        You are given a permutation a1,a2,\u2026,an of size n, where each integer
        from 1 to n appears exactly once.`),O=a(i,"BR",{}),W=$(i,`

        You can do the following operation any number of times (possibly, zero):`),q=a(i,"BR",{}),I=a(i,"BR",{}),V=$(i,`

        Choose any three indices i,j,k (1\u2264i`),J=a(i,"J<K\u2264N).",{"<br":!0}),U(J).forEach(t),X=$(i,`
        If ai>ak, replace ai with ai+aj. Otherwise, swap aj and ak. `),y=a(i,"BR",{}),z=$(i,`

        Determine whether you can make the array a sorted in non-descending
        order.`),K=a(i,"BR",{}),C=$(i,`
        Input`),Y=a(i,"BR",{}),se=a(i,"BR",{}),te=$(i,`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22645000) \u2014 the number of test cases. The description
        of test cases follows.`),re=a(i,"BR",{}),ee=a(i,"BR",{}),Z=$(i,`

        The first line of each test case contains a single integer n (3\u2264n\u226410) \u2014
        the length of the array a.`),ne=a(i,"BR",{}),ie=a(i,"BR",{}),le=$(i,`

        The second line contains n integers a1,a2,\u2026,an (1\u2264ai\u2264n, ai\u2260aj if i\u2260j) \u2014
        the elements of the array a.`),pe=a(i,"BR",{}),ue=a(i,"BR",{}),$e=$(i,`
        Output For each test case, output "Yes" (without quotes) if the array can
        be sorted in non-descending order, and "No" (without quotes) otherwise.`),Re=a(i,"BR",{}),ce=a(i,"BR",{}),Ae=$(i,`

        You can output "Yes" and "No" in any case (for example, strings "YES",
        "yEs" and "yes" will be recognized as a positive response).`),Ge=a(i,"BR",{}),Te=a(i,"BR",{}),we=$(i,`

        Example`),je=a(i,"BR",{}),_e=$(i,`
        Input`),Oe=a(i,"BR",{}),ve=a(i,"BR",{}),He=$(i,`

        7`),ye=a(i,"BR",{}),Pe=$(i,`
        3`),d=a(i,"BR",{}),Q=$(i,`
        1 2 3`),Ce=a(i,"BR",{}),ge=$(i,`
        3`),bt=a(i,"BR",{}),Ye=$(i,`
        1 3 2`),$t=a(i,"BR",{}),ct=$(i,`
        7`),ae=a(i,"BR",{}),Ne=$(i,`
        5 3 4 7 6 2 1`),Ut=a(i,"BR",{}),Jt=$(i,`
        7`),At=a(i,"BR",{}),Qt=$(i,`
        7 6 5 4 3 2 1`),ht=a(i,"BR",{}),Xt=$(i,`
        5`),Zt=a(i,"BR",{}),Pt=$(i,`
        2 1 4 5 3`),Kt=a(i,"BR",{}),Nt=$(i,`
        5`),es=a(i,"BR",{}),be=$(i,`
        2 1 3 4 5`),me=a(i,"BR",{}),We=$(i,`
        7`),ts=a(i,"BR",{}),Ue=$(i,`
        1 2 6 7 4 3 5`),ss=a(i,"BR",{}),Je=a(i,"BR",{}),ns=$(i,`

        Output`),Qe=a(i,"BR",{}),rs=a(i,"BR",{}),Xe=$(i,`

        Yes`),is=a(i,"BR",{}),Ze=$(i,`
        Yes`),ls=a(i,"BR",{}),St=$(i,`
        No`),fs=a(i,"BR",{}),Ke=$(i,`
        No`),os=a(i,"BR",{}),et=$(i,`
        No`),as=a(i,"BR",{}),tt=$(i,`
        No`),us=a(i,"BR",{}),st=$(i,`
        Yes`),ms=a(i,"BR",{}),zt=a(i,"BR",{}),ps=$(i,`

        Note`),qt=a(i,"BR",{}),bs=a(i,"BR",{}),Ie=$(i,`

        In the first test case, [1,2,3] is already sorted in non-descending
        order.`),$s=a(i,"BR",{}),Mt=a(i,"BR",{}),cs=$(i,`

        In the second test case, we can choose i=1,j=2,k=3. Since a1\u2264a3, swap a2
        and a3, the array then becomes [1,2,3], which is sorted in
        non-descending order.`),Gt=a(i,"BR",{}),hs=a(i,"BR",{}),Ct=$(i,`

        In the seventh test case, we can do the following operations
        successively:`),vs=a(i,"BR",{}),nt=$(i,`
        Choose i=5,j=6,k=7. Since a5\u2264a7, swap a6 and a7, the array then becomes [1,2,6,7,4,5,3].`),Se=a(i,"BR",{}),ws=$(i,`
        Choose i=5,j=6,k=7. Since a5>a7, replace a5 with a5+a6=9, the array then
        becomes [1,2,6,7,9,5,3].`),jt=a(i,"BR",{}),_s=$(i,`
        Choose i=2,j=5,k=7. Since a2\u2264a7, swap a5 and a7, the array then becomes [1,2,6,7,3,5,9].`),Ot=a(i,"BR",{}),ys=$(i,`
        Choose i=2,j=4,k=6. Since a2\u2264a6, swap a4 and a6, the array then becomes [1,2,6,5,3,7,9].`),rt=a(i,"BR",{}),it=$(i,`
        Choose i=1,j=3,k=5. Since a1\u2264a5, swap a3 and a5, the array then becomes [1,2,3,5,6,7,9],
        which is sorted in non-descending order. `),ks=a(i,"BR",{}),vt=a(i,"BR",{}),lt=$(i,`

        In the third, the fourth, the fifth and the sixth test cases, it can be
        shown that the array cannot be sorted in non-descending order.`),Bs=a(i,"BR",{}),Ht=a(i,"BR",{}),ds=N(i),D(Fe.$$.fragment,i),wt=$(i,`
        There is a simple way to determine whether a given permutation of the numbers
        1 through n can be sorted into non-descending order using the operations
        specified in the problem statement. To do this, we will use the following
        observation:`),Ft=a(i,"BR",{}),Rs=a(i,"BR",{}),_t=$(i,`

        If the permutation contains any number that is greater than the number
        that follows it, then it is impossible to sort the permutation into
        non-descending order using the given operations. This is because the
        operation that replaces a number with the sum of itself and the number
        that follows it can only increase the value of that number, so if there
        is any number that is already greater than the number that follows it,
        it will always remain greater than the number that follows it after any
        number of operations are applied.`),ze=a(i,"BR",{}),Ts=a(i,"BR",{}),ft=$(i,`

        With this observation in mind, we can simply scan the permutation from
        left to right and check if there is any number that is greater than the
        number that follows it. If there is, we can immediately output "No" and
        move on to the next test case. Otherwise, we can output "Yes" because we
        know that the permutation can be sorted into non-descending order using
        the given operations.`),Lt=a(i,"BR",{}),yt=a(i,"BR",{}),Dt=$(i,`

        Here is some sample pseudo-code that shows how this idea can be
        implemented:`),xe=a(i,"BR",{}),ot=N(i),D(qe.$$.fragment,i),kt=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),ke=a(i,"BR",{}),Bt=N(i),D(dt.$$.fragment,i),gs=N(i),D(Be.$$.fragment,i),Cs=$(i,`
        Please output whether the array can be sorted into non-descending order using
        the given operation. I'm not asking if the array is already sorted.
        `),D(Le.$$.fragment,i),Is=$(i,`
        To determine whether a given permutation of the numbers 1 through n can be
        sorted into non-descending order using the operations specified in the problem
        statement, we can use the following approach:`),at=a(i,"BR",{}),Rt=a(i,"BR",{}),Vt=$(i,`

        Scan the permutation from left to right.`),xs=a(i,"BR",{}),ut=$(i,`
        For each number in the permutation, check if it is greater than the number
        that follows it. If it is, output "No" and move on to the next test case.`),Tt=a(i,"BR",{}),De=$(i,`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),mt=a(i,"BR",{}),Me=$(i,`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),Es=a(i,"BR",{}),he=N(i),D(Ee.$$.fragment,i),f=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),g=a(i,"BR",{}),Ss=N(i),D(Yt.$$.fragment,i),It=N(i),D(xt.$$.fragment,i),gt=$(i,`
        Please retry.
        `),D(Et.$$.fragment,i),Fs=$(i,`
        I apologize if my previous answer was not clear or did not fully address
        your question. To determine whether a given permutation of the numbers 1
        through n can be sorted into non-descending order using the operations specified
        in the problem statement, we can use the following approach:`),oe=a(i,"BR",{}),fe=a(i,"BR",{}),Zs=$(i,`

        Scan the permutation from left to right. For each number in the
        permutation, check if it is greater than the number that follows it. If
        it is, output "No" and move on to the next test case.`),Ks=a(i,"BR",{}),en=$(i,`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),As=a(i,"BR",{}),Ys=a(i,"BR",{}),tn=$(i,`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),sn=a(i,"BR",{}),Ws=N(i),D(Ls.$$.fragment,i),Ps=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),Gs=a(i,"BR",{}),Qs=$(i,`
        I hope this helps. Let me know if you have any other questions.`),Ve=a(i,"BR",{}),nn=N(i),D(Ds.$$.fragment,i),rn=N(i),D(Wt.$$.fragment,i),this.h()},h(){x(J,"<br","")},m(i,R){s(i,e,R),_(e,n),s(i,l,R),F(u,i,R),s(i,p,R),s(i,c,R),s(i,k,R),s(i,v,R),s(i,h,R),s(i,w,R),s(i,T,R),s(i,S,R),s(i,j,R),s(i,E,R),s(i,A,R),s(i,O,R),s(i,W,R),s(i,q,R),s(i,I,R),s(i,V,R),s(i,J,R),s(i,X,R),s(i,y,R),s(i,z,R),s(i,K,R),s(i,C,R),s(i,Y,R),s(i,se,R),s(i,te,R),s(i,re,R),s(i,ee,R),s(i,Z,R),s(i,ne,R),s(i,ie,R),s(i,le,R),s(i,pe,R),s(i,ue,R),s(i,$e,R),s(i,Re,R),s(i,ce,R),s(i,Ae,R),s(i,Ge,R),s(i,Te,R),s(i,we,R),s(i,je,R),s(i,_e,R),s(i,Oe,R),s(i,ve,R),s(i,He,R),s(i,ye,R),s(i,Pe,R),s(i,d,R),s(i,Q,R),s(i,Ce,R),s(i,ge,R),s(i,bt,R),s(i,Ye,R),s(i,$t,R),s(i,ct,R),s(i,ae,R),s(i,Ne,R),s(i,Ut,R),s(i,Jt,R),s(i,At,R),s(i,Qt,R),s(i,ht,R),s(i,Xt,R),s(i,Zt,R),s(i,Pt,R),s(i,Kt,R),s(i,Nt,R),s(i,es,R),s(i,be,R),s(i,me,R),s(i,We,R),s(i,ts,R),s(i,Ue,R),s(i,ss,R),s(i,Je,R),s(i,ns,R),s(i,Qe,R),s(i,rs,R),s(i,Xe,R),s(i,is,R),s(i,Ze,R),s(i,ls,R),s(i,St,R),s(i,fs,R),s(i,Ke,R),s(i,os,R),s(i,et,R),s(i,as,R),s(i,tt,R),s(i,us,R),s(i,st,R),s(i,ms,R),s(i,zt,R),s(i,ps,R),s(i,qt,R),s(i,bs,R),s(i,Ie,R),s(i,$s,R),s(i,Mt,R),s(i,cs,R),s(i,Gt,R),s(i,hs,R),s(i,Ct,R),s(i,vs,R),s(i,nt,R),s(i,Se,R),s(i,ws,R),s(i,jt,R),s(i,_s,R),s(i,Ot,R),s(i,ys,R),s(i,rt,R),s(i,it,R),s(i,ks,R),s(i,vt,R),s(i,lt,R),s(i,Bs,R),s(i,Ht,R),s(i,ds,R),F(Fe,i,R),s(i,wt,R),s(i,Ft,R),s(i,Rs,R),s(i,_t,R),s(i,ze,R),s(i,Ts,R),s(i,ft,R),s(i,Lt,R),s(i,yt,R),s(i,Dt,R),s(i,xe,R),s(i,ot,R),F(qe,i,R),s(i,kt,R),s(i,ke,R),s(i,Bt,R),F(dt,i,R),s(i,gs,R),F(Be,i,R),s(i,Cs,R),F(Le,i,R),s(i,Is,R),s(i,at,R),s(i,Rt,R),s(i,Vt,R),s(i,xs,R),s(i,ut,R),s(i,Tt,R),s(i,De,R),s(i,mt,R),s(i,Me,R),s(i,Es,R),s(i,he,R),F(Ee,i,R),s(i,f,R),s(i,g,R),s(i,Ss,R),F(Yt,i,R),s(i,It,R),F(xt,i,R),s(i,gt,R),F(Et,i,R),s(i,Fs,R),s(i,oe,R),s(i,fe,R),s(i,Zs,R),s(i,Ks,R),s(i,en,R),s(i,As,R),s(i,Ys,R),s(i,tn,R),s(i,sn,R),s(i,Ws,R),F(Ls,i,R),s(i,Ps,R),s(i,Gs,R),s(i,Qs,R),s(i,Ve,R),s(i,nn,R),F(Ds,i,R),s(i,rn,R),F(Wt,i,R),Us=!0},p(i,R){const Js={};R&16&&(Js.$$scope={dirty:R,ctx:i}),u.$set(Js);const de={};R&16&&(de.$$scope={dirty:R,ctx:i}),Fe.$set(de);const r={};R&16&&(r.$$scope={dirty:R,ctx:i}),Be.$set(r);const B={};R&16&&(B.$$scope={dirty:R,ctx:i}),Le.$set(B);const mn={};R&16&&(mn.$$scope={dirty:R,ctx:i}),xt.$set(mn);const pn={};R&16&&(pn.$$scope={dirty:R,ctx:i}),Et.$set(pn);const bn={};R&16&&(bn.$$scope={dirty:R,ctx:i}),Wt.$set(bn)},i(i){Us||(G(u.$$.fragment,i),G(Fe.$$.fragment,i),G(qe.$$.fragment,i),G(dt.$$.fragment,i),G(Be.$$.fragment,i),G(Le.$$.fragment,i),G(Ee.$$.fragment,i),G(Yt.$$.fragment,i),G(xt.$$.fragment,i),G(Et.$$.fragment,i),G(Ls.$$.fragment,i),G(Ds.$$.fragment,i),G(Wt.$$.fragment,i),Us=!0)},o(i){M(u.$$.fragment,i),M(Fe.$$.fragment,i),M(qe.$$.fragment,i),M(dt.$$.fragment,i),M(Be.$$.fragment,i),M(Le.$$.fragment,i),M(Ee.$$.fragment,i),M(Yt.$$.fragment,i),M(xt.$$.fragment,i),M(Et.$$.fragment,i),M(Ls.$$.fragment,i),M(Ds.$$.fragment,i),M(Wt.$$.fragment,i),Us=!1},d(i){i&&t(e),i&&t(l),L(u,i),i&&t(p),i&&t(c),i&&t(k),i&&t(v),i&&t(h),i&&t(w),i&&t(T),i&&t(S),i&&t(j),i&&t(E),i&&t(A),i&&t(O),i&&t(W),i&&t(q),i&&t(I),i&&t(V),i&&t(J),i&&t(X),i&&t(y),i&&t(z),i&&t(K),i&&t(C),i&&t(Y),i&&t(se),i&&t(te),i&&t(re),i&&t(ee),i&&t(Z),i&&t(ne),i&&t(ie),i&&t(le),i&&t(pe),i&&t(ue),i&&t($e),i&&t(Re),i&&t(ce),i&&t(Ae),i&&t(Ge),i&&t(Te),i&&t(we),i&&t(je),i&&t(_e),i&&t(Oe),i&&t(ve),i&&t(He),i&&t(ye),i&&t(Pe),i&&t(d),i&&t(Q),i&&t(Ce),i&&t(ge),i&&t(bt),i&&t(Ye),i&&t($t),i&&t(ct),i&&t(ae),i&&t(Ne),i&&t(Ut),i&&t(Jt),i&&t(At),i&&t(Qt),i&&t(ht),i&&t(Xt),i&&t(Zt),i&&t(Pt),i&&t(Kt),i&&t(Nt),i&&t(es),i&&t(be),i&&t(me),i&&t(We),i&&t(ts),i&&t(Ue),i&&t(ss),i&&t(Je),i&&t(ns),i&&t(Qe),i&&t(rs),i&&t(Xe),i&&t(is),i&&t(Ze),i&&t(ls),i&&t(St),i&&t(fs),i&&t(Ke),i&&t(os),i&&t(et),i&&t(as),i&&t(tt),i&&t(us),i&&t(st),i&&t(ms),i&&t(zt),i&&t(ps),i&&t(qt),i&&t(bs),i&&t(Ie),i&&t($s),i&&t(Mt),i&&t(cs),i&&t(Gt),i&&t(hs),i&&t(Ct),i&&t(vs),i&&t(nt),i&&t(Se),i&&t(ws),i&&t(jt),i&&t(_s),i&&t(Ot),i&&t(ys),i&&t(rt),i&&t(it),i&&t(ks),i&&t(vt),i&&t(lt),i&&t(Bs),i&&t(Ht),i&&t(ds),L(Fe,i),i&&t(wt),i&&t(Ft),i&&t(Rs),i&&t(_t),i&&t(ze),i&&t(Ts),i&&t(ft),i&&t(Lt),i&&t(yt),i&&t(Dt),i&&t(xe),i&&t(ot),L(qe,i),i&&t(kt),i&&t(ke),i&&t(Bt),L(dt,i),i&&t(gs),L(Be,i),i&&t(Cs),L(Le,i),i&&t(Is),i&&t(at),i&&t(Rt),i&&t(Vt),i&&t(xs),i&&t(ut),i&&t(Tt),i&&t(De),i&&t(mt),i&&t(Me),i&&t(Es),i&&t(he),L(Ee,i),i&&t(f),i&&t(g),i&&t(Ss),L(Yt,i),i&&t(It),L(xt,i),i&&t(gt),L(Et,i),i&&t(Fs),i&&t(oe),i&&t(fe),i&&t(Zs),i&&t(Ks),i&&t(en),i&&t(As),i&&t(Ys),i&&t(tn),i&&t(sn),i&&t(Ws),L(Ls,i),i&&t(Ps),i&&t(Gs),i&&t(Qs),i&&t(Ve),i&&t(nn),L(Ds,i),i&&t(rn),L(Wt,i)}}}function Hi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Fi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Li(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Di(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Vi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Yi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Wi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ui(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ji(m){let e;return{c(){e=b("ChatGPT\u5411\u4EBA\u7C7B\u6D4B\u8BD5\u8005\u8BE2\u95EE\u7B97\u6CD5\uFF0C\u5E76\u4EC5\u5728\u6D4B\u8BD5\u4EBA\u7ED9\u51FA\u6838\u5FC3\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u6B63\u786E\u5199\u51FA\u4EE3\u7801\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"ChatGPT\u5411\u4EBA\u7C7B\u6D4B\u8BD5\u8005\u8BE2\u95EE\u7B97\u6CD5\uFF0C\u5E76\u4EC5\u5728\u6D4B\u8BD5\u4EBA\u7ED9\u51FA\u6838\u5FC3\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u6B63\u786E\u5199\u51FA\u4EE3\u7801\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Qi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q,I,V,J,X,y,z,K,C,Y,se,te,re,ee,Z,ne,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,Q,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee,f,g,Ss,Yt,It,xt,gt,Et,Fs,oe,fe,Zs,Ks,en,As,Ys,tn,sn,Ws,Ls,Ps,Gs,Qs,Ve,nn,Ds,rn,Wt,Us,i,R,Js,de;return u=new zs({props:{$$slots:{default:[Hi]},$$scope:{ctx:m}}}),Ie=new qs({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),wt=new Vs({props:{data:`for each test case:
sort the array in non-descending order
initialize group1 and group2 to be empty
initialize sum1 and sum2 to be 0
for each number in the array:
    if sum1 <= sum2:
        put the number in group1
        update sum1
    else:
        put the number in group2
        update sum2
print the absolute difference between sum1 and sum2
`}}),ze=new on({}),ft=new zs({props:{$$slots:{default:[Li]},$$scope:{ctx:m}}}),xe=new qs({props:{$$slots:{default:[Di]},$$scope:{ctx:m}}}),Rt=new Vs({props:{data:`for each test case:
    sort the array in non-descending order
    initialize group1 and group2 to be empty
    initialize sum1 and sum2 to be 0
    for each number in the array:
        if sum1 <= sum2:
            put the number in group1
            update sum1
        else:
            put the number in group2
            update sum2
    print the absolute difference between sum1 and sum2
`}}),Tt=new on({}),mt=new zs({props:{$$slots:{default:[Vi]},$$scope:{ctx:m}}}),Ee=new qs({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),gt=new zs({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),fe=new qs({props:{$$slots:{default:[Ui]},$$scope:{ctx:m}}}),Wt=new Vs({props:{data:`for each test case:
    sum up all the numbers in the array
    take the absolute value of the result
    print the result
`}}),i=new Cn({}),Js=new Tn({props:{$$slots:{default:[Ji]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B98\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=P(),H(u.$$.fragment),p=b(`
        Solve the following problem:`),c=o("br"),k=b(`
        A. Two Groups`),v=o("br"),h=b(`
        time limit per test: 1 second`),w=o("br"),T=b(`
        memory limit per test: 256 megabytes`),S=o("br"),j=b(`
        input: standard input`),E=o("br"),A=b(`
        output: standard output`),O=o("br"),W=b(`

        You are given an array a consisting of n integers. You want to
        distribute these n integers into two groups s1 and s2 (groups can be
        empty) so that the following conditions are satisfied:`),q=o("br"),I=o("br"),V=b(`

        For each i (1\u2264i\u2264n), ai goes into exactly one group. The value
        |sum(s1)|\u2212|sum(s2)| is the maximum possible among all such ways to
        distribute the integers.`),J=o("br"),X=o("br"),y=b(`

        Here sum(s1) denotes the sum of the numbers in the group s1, and sum(s2)
        denotes the sum of the numbers in the group s2.`),z=o("br"),K=o("br"),C=b(`

        Determine the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),Y=o("br"),se=o("br"),te=b(`

        Input`),re=o("br"),ee=o("br"),Z=b(`

        The input consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22642\u22C5104)\xA0\u2014 the number of test cases. The description
        of the test cases follows.`),ne=o("br"),ie=o("br"),le=b(`

        The first line of each test case contains a single integer n (1\u2264n\u2264105) \u2014
        the length of the array a.`),pe=o("br"),ue=o("br"),$e=b(`

        The second line of each test case contains n integers a1,a2\u2026an
        (\u2212109\u2264ai\u2264109) \u2014 elements of the array a.`),Re=o("br"),ce=o("br"),Ae=b(`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Ge=o("br"),Te=o("br"),we=b(`

        Output`),je=o("br"),_e=o("br"),Oe=b(`

        For each test case, output a single integer \u2014 the maximum possible value
        of |sum(s1)|\u2212|sum(s2)|.`),ve=o("br"),He=o("br"),ye=b(`

        Example`),Pe=o("br"),d=b(`
        Input`),Q=o("br"),Ce=o("br"),ge=b(`

        4`),bt=o("br"),Ye=b(`
        2`),$t=o("br"),ct=b(`
        10 -10`),ae=o("br"),Ne=b(`
        4`),Ut=o("br"),Jt=b(`
        -2 -1 11 0`),At=o("br"),Qt=b(`
        3`),ht=o("br"),Xt=b(`
        2 3 2`),Zt=o("br"),Pt=b(`
        5`),Kt=o("br"),Nt=b(`
        -9 2 0 0 -4`),es=o("br"),be=o("br"),me=b(`

        Output`),We=o("br"),ts=o("br"),Ue=b(`

        0`),ss=o("br"),Je=b(`
        8`),ns=o("br"),Qe=b(`
        7`),rs=o("br"),Xe=b(`
        11`),is=o("br"),Ze=b(`

        Note`),ls=o("br"),St=o("br"),fs=b(`

        In the first testcase, we can distribute as s1={10},
        s2={\u221210}. Then the value will be |10|\u2212|\u221210|=0.`),Ke=o("br"),os=o("br"),et=b(`

        In the second testcase, we can distribute as s1={0,11,\u22121},
        s2={\u22122}. Then the value will be |0+11\u22121|\u2212|\u22122|=10\u22122=8.`),as=o("br"),tt=o("br"),us=b(`

        In the third testcase, we can distribute as s1={2,3,2},
        s2={}. Then the value will be |2+3+2|\u2212|0|=7.`),st=o("br"),ms=o("br"),zt=b(`

        In the fourth testcase, we can distribute as s1={\u22129,\u22124,0},
        s2={2,0}. Then the value will be |\u22129\u22124+0|\u2212|2+0|=13\u22122=11.`),ps=o("br"),qt=o("br"),bs=P(),H(Ie.$$.fragment),$s=b(`
        To solve this problem, we can use a greedy approach. The idea is to put the
        numbers into the two groups in such a way that the absolute difference between
        the sums of the two groups is maximized.`),Mt=o("br"),cs=o("br"),Gt=b(`

        Here is how we can do it:`),hs=o("br"),Ct=o("br"),vs=b(`

        Sort the numbers in the array in non-descending order.`),nt=o("br"),Se=b(`
        Start with empty groups.`),ws=o("br"),jt=b(`
        Take the first number from the sorted array and put it in group 1.`),_s=o("br"),Ot=b(`
        Take the second number from the sorted array and put it in group 2.`),ys=o("br"),rt=b(`
        Repeat steps 3 and 4 until there are no more numbers in the array.`),it=o("br"),ks=o("br"),vt=b(`

        After doing this, the absolute difference between the sums of the two
        groups will be the maximum possible value.`),lt=o("br"),Bs=o("br"),Ht=b(`

        Here is the pseudocode for the solution:`),ds=o("br"),Fe=P(),H(wt.$$.fragment),Ft=b(`
        We can implement this solution in any programming language of our choice.`),Rs=o("br"),_t=P(),H(ze.$$.fragment),Ts=P(),H(ft.$$.fragment),Lt=b(`
        Notice that we are finding the maximum value instead of the minimum one.`),yt=o("br"),Dt=P(),H(xe.$$.fragment),ot=b(`
        Yes, you are right. In the original problem statement, the goal is to maximize
        the absolute difference between the sums of the two groups. This means that
        we want to find the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),qe=o("br"),kt=o("br"),ke=b(`

        To do this, we can use a greedy approach, as described in the previous
        answer. This approach will ensure that the absolute difference between
        the sums of the two groups is maximized.`),Bt=o("br"),dt=o("br"),gs=b(`

        In the solution, we sort the numbers in the array in non-descending
        order and then put the numbers into the two groups in such a way that
        the absolute difference between the sums of the two groups is maximized.
        This is achieved by always putting the next number from the sorted array
        into the group with the smaller sum.`),Be=o("br"),Cs=o("br"),Le=b(`

        Here is the pseudocode for the solution:`),Is=o("br"),at=P(),H(Rt.$$.fragment),Vt=b(`
        We can implement this solution in any programming language of our choice.`),xs=o("br"),ut=P(),H(Tt.$$.fragment),De=P(),H(mt.$$.fragment),Me=b(`
        However, your answer is incorrect and does not pass the test. Please try
        again. The correct solution is far simpler.`),Es=o("br"),he=P(),H(Ee.$$.fragment),f=b(`
        I apologize if my previous answer did not fully address your question. Can
        you please provide more information about what is incorrect in my solution,
        or what is missing in it? This will help me understand where I went wrong
        and provide a better answer.`),g=o("br"),Ss=o("br"),Yt=b(`

        As for the correct solution, if you have it, I would be happy to review
        and discuss it. I would also be happy to provide a new solution that is
        simpler and correct. To do that, I would need more information about the
        problem and the correct approach to solving it. Can you please provide
        this information?`),It=o("br"),xt=P(),H(gt.$$.fragment),Et=b(`
        The solution is simply to sum all the numbers up. This can be proved using
        some math skills.`),Fs=o("br"),oe=P(),H(fe.$$.fragment),Zs=b(`
        You are correct that the solution to this problem is simply to sum up all
        the numbers in the array and take the absolute value of the result.`),Ks=o("br"),en=o("br"),As=b(`

        To prove this, we can consider the following:`),Ys=o("br"),tn=o("br"),sn=b(`

        The sum of the numbers in the two groups must be equal to the sum of all
        the numbers in the array.`),Ws=o("br"),Ls=b(`
        Therefore, the absolute difference between the sums of the two groups must
        be equal to the absolute value of the sum of all the numbers in the array.`),Ps=o("br"),Gs=o("br"),Qs=b(`

        This means that, in order to maximize the absolute difference between
        the sums of the two groups, we need to maximize the absolute value of
        the sum of all the numbers in the array. This can be achieved by summing
        up all the numbers in the array and taking the absolute value of the
        result.`),Ve=o("br"),nn=b(`

        Here is the pseudocode for the solution:`),Ds=o("br"),rn=P(),H(Wt.$$.fragment),Us=b(`
        We can implement this solution in any programming language of our choice.
        `),H(i.$$.fragment),R=P(),H(Js.$$.fragment)},l(r){e=a(r,"H2",{});var B=U(e);n=$(B,"\u6D4B\u8BD5\u70B98\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),B.forEach(t),l=N(r),D(u.$$.fragment,r),p=$(r,`
        Solve the following problem:`),c=a(r,"BR",{}),k=$(r,`
        A. Two Groups`),v=a(r,"BR",{}),h=$(r,`
        time limit per test: 1 second`),w=a(r,"BR",{}),T=$(r,`
        memory limit per test: 256 megabytes`),S=a(r,"BR",{}),j=$(r,`
        input: standard input`),E=a(r,"BR",{}),A=$(r,`
        output: standard output`),O=a(r,"BR",{}),W=$(r,`

        You are given an array a consisting of n integers. You want to
        distribute these n integers into two groups s1 and s2 (groups can be
        empty) so that the following conditions are satisfied:`),q=a(r,"BR",{}),I=a(r,"BR",{}),V=$(r,`

        For each i (1\u2264i\u2264n), ai goes into exactly one group. The value
        |sum(s1)|\u2212|sum(s2)| is the maximum possible among all such ways to
        distribute the integers.`),J=a(r,"BR",{}),X=a(r,"BR",{}),y=$(r,`

        Here sum(s1) denotes the sum of the numbers in the group s1, and sum(s2)
        denotes the sum of the numbers in the group s2.`),z=a(r,"BR",{}),K=a(r,"BR",{}),C=$(r,`

        Determine the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),Y=a(r,"BR",{}),se=a(r,"BR",{}),te=$(r,`

        Input`),re=a(r,"BR",{}),ee=a(r,"BR",{}),Z=$(r,`

        The input consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22642\u22C5104)\xA0\u2014 the number of test cases. The description
        of the test cases follows.`),ne=a(r,"BR",{}),ie=a(r,"BR",{}),le=$(r,`

        The first line of each test case contains a single integer n (1\u2264n\u2264105) \u2014
        the length of the array a.`),pe=a(r,"BR",{}),ue=a(r,"BR",{}),$e=$(r,`

        The second line of each test case contains n integers a1,a2\u2026an
        (\u2212109\u2264ai\u2264109) \u2014 elements of the array a.`),Re=a(r,"BR",{}),ce=a(r,"BR",{}),Ae=$(r,`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Ge=a(r,"BR",{}),Te=a(r,"BR",{}),we=$(r,`

        Output`),je=a(r,"BR",{}),_e=a(r,"BR",{}),Oe=$(r,`

        For each test case, output a single integer \u2014 the maximum possible value
        of |sum(s1)|\u2212|sum(s2)|.`),ve=a(r,"BR",{}),He=a(r,"BR",{}),ye=$(r,`

        Example`),Pe=a(r,"BR",{}),d=$(r,`
        Input`),Q=a(r,"BR",{}),Ce=a(r,"BR",{}),ge=$(r,`

        4`),bt=a(r,"BR",{}),Ye=$(r,`
        2`),$t=a(r,"BR",{}),ct=$(r,`
        10 -10`),ae=a(r,"BR",{}),Ne=$(r,`
        4`),Ut=a(r,"BR",{}),Jt=$(r,`
        -2 -1 11 0`),At=a(r,"BR",{}),Qt=$(r,`
        3`),ht=a(r,"BR",{}),Xt=$(r,`
        2 3 2`),Zt=a(r,"BR",{}),Pt=$(r,`
        5`),Kt=a(r,"BR",{}),Nt=$(r,`
        -9 2 0 0 -4`),es=a(r,"BR",{}),be=a(r,"BR",{}),me=$(r,`

        Output`),We=a(r,"BR",{}),ts=a(r,"BR",{}),Ue=$(r,`

        0`),ss=a(r,"BR",{}),Je=$(r,`
        8`),ns=a(r,"BR",{}),Qe=$(r,`
        7`),rs=a(r,"BR",{}),Xe=$(r,`
        11`),is=a(r,"BR",{}),Ze=$(r,`

        Note`),ls=a(r,"BR",{}),St=a(r,"BR",{}),fs=$(r,`

        In the first testcase, we can distribute as s1={10},
        s2={\u221210}. Then the value will be |10|\u2212|\u221210|=0.`),Ke=a(r,"BR",{}),os=a(r,"BR",{}),et=$(r,`

        In the second testcase, we can distribute as s1={0,11,\u22121},
        s2={\u22122}. Then the value will be |0+11\u22121|\u2212|\u22122|=10\u22122=8.`),as=a(r,"BR",{}),tt=a(r,"BR",{}),us=$(r,`

        In the third testcase, we can distribute as s1={2,3,2},
        s2={}. Then the value will be |2+3+2|\u2212|0|=7.`),st=a(r,"BR",{}),ms=a(r,"BR",{}),zt=$(r,`

        In the fourth testcase, we can distribute as s1={\u22129,\u22124,0},
        s2={2,0}. Then the value will be |\u22129\u22124+0|\u2212|2+0|=13\u22122=11.`),ps=a(r,"BR",{}),qt=a(r,"BR",{}),bs=N(r),D(Ie.$$.fragment,r),$s=$(r,`
        To solve this problem, we can use a greedy approach. The idea is to put the
        numbers into the two groups in such a way that the absolute difference between
        the sums of the two groups is maximized.`),Mt=a(r,"BR",{}),cs=a(r,"BR",{}),Gt=$(r,`

        Here is how we can do it:`),hs=a(r,"BR",{}),Ct=a(r,"BR",{}),vs=$(r,`

        Sort the numbers in the array in non-descending order.`),nt=a(r,"BR",{}),Se=$(r,`
        Start with empty groups.`),ws=a(r,"BR",{}),jt=$(r,`
        Take the first number from the sorted array and put it in group 1.`),_s=a(r,"BR",{}),Ot=$(r,`
        Take the second number from the sorted array and put it in group 2.`),ys=a(r,"BR",{}),rt=$(r,`
        Repeat steps 3 and 4 until there are no more numbers in the array.`),it=a(r,"BR",{}),ks=a(r,"BR",{}),vt=$(r,`

        After doing this, the absolute difference between the sums of the two
        groups will be the maximum possible value.`),lt=a(r,"BR",{}),Bs=a(r,"BR",{}),Ht=$(r,`

        Here is the pseudocode for the solution:`),ds=a(r,"BR",{}),Fe=N(r),D(wt.$$.fragment,r),Ft=$(r,`
        We can implement this solution in any programming language of our choice.`),Rs=a(r,"BR",{}),_t=N(r),D(ze.$$.fragment,r),Ts=N(r),D(ft.$$.fragment,r),Lt=$(r,`
        Notice that we are finding the maximum value instead of the minimum one.`),yt=a(r,"BR",{}),Dt=N(r),D(xe.$$.fragment,r),ot=$(r,`
        Yes, you are right. In the original problem statement, the goal is to maximize
        the absolute difference between the sums of the two groups. This means that
        we want to find the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),qe=a(r,"BR",{}),kt=a(r,"BR",{}),ke=$(r,`

        To do this, we can use a greedy approach, as described in the previous
        answer. This approach will ensure that the absolute difference between
        the sums of the two groups is maximized.`),Bt=a(r,"BR",{}),dt=a(r,"BR",{}),gs=$(r,`

        In the solution, we sort the numbers in the array in non-descending
        order and then put the numbers into the two groups in such a way that
        the absolute difference between the sums of the two groups is maximized.
        This is achieved by always putting the next number from the sorted array
        into the group with the smaller sum.`),Be=a(r,"BR",{}),Cs=a(r,"BR",{}),Le=$(r,`

        Here is the pseudocode for the solution:`),Is=a(r,"BR",{}),at=N(r),D(Rt.$$.fragment,r),Vt=$(r,`
        We can implement this solution in any programming language of our choice.`),xs=a(r,"BR",{}),ut=N(r),D(Tt.$$.fragment,r),De=N(r),D(mt.$$.fragment,r),Me=$(r,`
        However, your answer is incorrect and does not pass the test. Please try
        again. The correct solution is far simpler.`),Es=a(r,"BR",{}),he=N(r),D(Ee.$$.fragment,r),f=$(r,`
        I apologize if my previous answer did not fully address your question. Can
        you please provide more information about what is incorrect in my solution,
        or what is missing in it? This will help me understand where I went wrong
        and provide a better answer.`),g=a(r,"BR",{}),Ss=a(r,"BR",{}),Yt=$(r,`

        As for the correct solution, if you have it, I would be happy to review
        and discuss it. I would also be happy to provide a new solution that is
        simpler and correct. To do that, I would need more information about the
        problem and the correct approach to solving it. Can you please provide
        this information?`),It=a(r,"BR",{}),xt=N(r),D(gt.$$.fragment,r),Et=$(r,`
        The solution is simply to sum all the numbers up. This can be proved using
        some math skills.`),Fs=a(r,"BR",{}),oe=N(r),D(fe.$$.fragment,r),Zs=$(r,`
        You are correct that the solution to this problem is simply to sum up all
        the numbers in the array and take the absolute value of the result.`),Ks=a(r,"BR",{}),en=a(r,"BR",{}),As=$(r,`

        To prove this, we can consider the following:`),Ys=a(r,"BR",{}),tn=a(r,"BR",{}),sn=$(r,`

        The sum of the numbers in the two groups must be equal to the sum of all
        the numbers in the array.`),Ws=a(r,"BR",{}),Ls=$(r,`
        Therefore, the absolute difference between the sums of the two groups must
        be equal to the absolute value of the sum of all the numbers in the array.`),Ps=a(r,"BR",{}),Gs=a(r,"BR",{}),Qs=$(r,`

        This means that, in order to maximize the absolute difference between
        the sums of the two groups, we need to maximize the absolute value of
        the sum of all the numbers in the array. This can be achieved by summing
        up all the numbers in the array and taking the absolute value of the
        result.`),Ve=a(r,"BR",{}),nn=$(r,`

        Here is the pseudocode for the solution:`),Ds=a(r,"BR",{}),rn=N(r),D(Wt.$$.fragment,r),Us=$(r,`
        We can implement this solution in any programming language of our choice.
        `),D(i.$$.fragment,r),R=N(r),D(Js.$$.fragment,r)},m(r,B){s(r,e,B),_(e,n),s(r,l,B),F(u,r,B),s(r,p,B),s(r,c,B),s(r,k,B),s(r,v,B),s(r,h,B),s(r,w,B),s(r,T,B),s(r,S,B),s(r,j,B),s(r,E,B),s(r,A,B),s(r,O,B),s(r,W,B),s(r,q,B),s(r,I,B),s(r,V,B),s(r,J,B),s(r,X,B),s(r,y,B),s(r,z,B),s(r,K,B),s(r,C,B),s(r,Y,B),s(r,se,B),s(r,te,B),s(r,re,B),s(r,ee,B),s(r,Z,B),s(r,ne,B),s(r,ie,B),s(r,le,B),s(r,pe,B),s(r,ue,B),s(r,$e,B),s(r,Re,B),s(r,ce,B),s(r,Ae,B),s(r,Ge,B),s(r,Te,B),s(r,we,B),s(r,je,B),s(r,_e,B),s(r,Oe,B),s(r,ve,B),s(r,He,B),s(r,ye,B),s(r,Pe,B),s(r,d,B),s(r,Q,B),s(r,Ce,B),s(r,ge,B),s(r,bt,B),s(r,Ye,B),s(r,$t,B),s(r,ct,B),s(r,ae,B),s(r,Ne,B),s(r,Ut,B),s(r,Jt,B),s(r,At,B),s(r,Qt,B),s(r,ht,B),s(r,Xt,B),s(r,Zt,B),s(r,Pt,B),s(r,Kt,B),s(r,Nt,B),s(r,es,B),s(r,be,B),s(r,me,B),s(r,We,B),s(r,ts,B),s(r,Ue,B),s(r,ss,B),s(r,Je,B),s(r,ns,B),s(r,Qe,B),s(r,rs,B),s(r,Xe,B),s(r,is,B),s(r,Ze,B),s(r,ls,B),s(r,St,B),s(r,fs,B),s(r,Ke,B),s(r,os,B),s(r,et,B),s(r,as,B),s(r,tt,B),s(r,us,B),s(r,st,B),s(r,ms,B),s(r,zt,B),s(r,ps,B),s(r,qt,B),s(r,bs,B),F(Ie,r,B),s(r,$s,B),s(r,Mt,B),s(r,cs,B),s(r,Gt,B),s(r,hs,B),s(r,Ct,B),s(r,vs,B),s(r,nt,B),s(r,Se,B),s(r,ws,B),s(r,jt,B),s(r,_s,B),s(r,Ot,B),s(r,ys,B),s(r,rt,B),s(r,it,B),s(r,ks,B),s(r,vt,B),s(r,lt,B),s(r,Bs,B),s(r,Ht,B),s(r,ds,B),s(r,Fe,B),F(wt,r,B),s(r,Ft,B),s(r,Rs,B),s(r,_t,B),F(ze,r,B),s(r,Ts,B),F(ft,r,B),s(r,Lt,B),s(r,yt,B),s(r,Dt,B),F(xe,r,B),s(r,ot,B),s(r,qe,B),s(r,kt,B),s(r,ke,B),s(r,Bt,B),s(r,dt,B),s(r,gs,B),s(r,Be,B),s(r,Cs,B),s(r,Le,B),s(r,Is,B),s(r,at,B),F(Rt,r,B),s(r,Vt,B),s(r,xs,B),s(r,ut,B),F(Tt,r,B),s(r,De,B),F(mt,r,B),s(r,Me,B),s(r,Es,B),s(r,he,B),F(Ee,r,B),s(r,f,B),s(r,g,B),s(r,Ss,B),s(r,Yt,B),s(r,It,B),s(r,xt,B),F(gt,r,B),s(r,Et,B),s(r,Fs,B),s(r,oe,B),F(fe,r,B),s(r,Zs,B),s(r,Ks,B),s(r,en,B),s(r,As,B),s(r,Ys,B),s(r,tn,B),s(r,sn,B),s(r,Ws,B),s(r,Ls,B),s(r,Ps,B),s(r,Gs,B),s(r,Qs,B),s(r,Ve,B),s(r,nn,B),s(r,Ds,B),s(r,rn,B),F(Wt,r,B),s(r,Us,B),F(i,r,B),s(r,R,B),F(Js,r,B),de=!0},p(r,B){const mn={};B&16&&(mn.$$scope={dirty:B,ctx:r}),u.$set(mn);const pn={};B&16&&(pn.$$scope={dirty:B,ctx:r}),Ie.$set(pn);const bn={};B&16&&(bn.$$scope={dirty:B,ctx:r}),ft.$set(bn);const _n={};B&16&&(_n.$$scope={dirty:B,ctx:r}),xe.$set(_n);const yn={};B&16&&(yn.$$scope={dirty:B,ctx:r}),mt.$set(yn);const wn={};B&16&&(wn.$$scope={dirty:B,ctx:r}),Ee.$set(wn);const kn={};B&16&&(kn.$$scope={dirty:B,ctx:r}),gt.$set(kn);const Bn={};B&16&&(Bn.$$scope={dirty:B,ctx:r}),fe.$set(Bn);const dn={};B&16&&(dn.$$scope={dirty:B,ctx:r}),Js.$set(dn)},i(r){de||(G(u.$$.fragment,r),G(Ie.$$.fragment,r),G(wt.$$.fragment,r),G(ze.$$.fragment,r),G(ft.$$.fragment,r),G(xe.$$.fragment,r),G(Rt.$$.fragment,r),G(Tt.$$.fragment,r),G(mt.$$.fragment,r),G(Ee.$$.fragment,r),G(gt.$$.fragment,r),G(fe.$$.fragment,r),G(Wt.$$.fragment,r),G(i.$$.fragment,r),G(Js.$$.fragment,r),de=!0)},o(r){M(u.$$.fragment,r),M(Ie.$$.fragment,r),M(wt.$$.fragment,r),M(ze.$$.fragment,r),M(ft.$$.fragment,r),M(xe.$$.fragment,r),M(Rt.$$.fragment,r),M(Tt.$$.fragment,r),M(mt.$$.fragment,r),M(Ee.$$.fragment,r),M(gt.$$.fragment,r),M(fe.$$.fragment,r),M(Wt.$$.fragment,r),M(i.$$.fragment,r),M(Js.$$.fragment,r),de=!1},d(r){r&&t(e),r&&t(l),L(u,r),r&&t(p),r&&t(c),r&&t(k),r&&t(v),r&&t(h),r&&t(w),r&&t(T),r&&t(S),r&&t(j),r&&t(E),r&&t(A),r&&t(O),r&&t(W),r&&t(q),r&&t(I),r&&t(V),r&&t(J),r&&t(X),r&&t(y),r&&t(z),r&&t(K),r&&t(C),r&&t(Y),r&&t(se),r&&t(te),r&&t(re),r&&t(ee),r&&t(Z),r&&t(ne),r&&t(ie),r&&t(le),r&&t(pe),r&&t(ue),r&&t($e),r&&t(Re),r&&t(ce),r&&t(Ae),r&&t(Ge),r&&t(Te),r&&t(we),r&&t(je),r&&t(_e),r&&t(Oe),r&&t(ve),r&&t(He),r&&t(ye),r&&t(Pe),r&&t(d),r&&t(Q),r&&t(Ce),r&&t(ge),r&&t(bt),r&&t(Ye),r&&t($t),r&&t(ct),r&&t(ae),r&&t(Ne),r&&t(Ut),r&&t(Jt),r&&t(At),r&&t(Qt),r&&t(ht),r&&t(Xt),r&&t(Zt),r&&t(Pt),r&&t(Kt),r&&t(Nt),r&&t(es),r&&t(be),r&&t(me),r&&t(We),r&&t(ts),r&&t(Ue),r&&t(ss),r&&t(Je),r&&t(ns),r&&t(Qe),r&&t(rs),r&&t(Xe),r&&t(is),r&&t(Ze),r&&t(ls),r&&t(St),r&&t(fs),r&&t(Ke),r&&t(os),r&&t(et),r&&t(as),r&&t(tt),r&&t(us),r&&t(st),r&&t(ms),r&&t(zt),r&&t(ps),r&&t(qt),r&&t(bs),L(Ie,r),r&&t($s),r&&t(Mt),r&&t(cs),r&&t(Gt),r&&t(hs),r&&t(Ct),r&&t(vs),r&&t(nt),r&&t(Se),r&&t(ws),r&&t(jt),r&&t(_s),r&&t(Ot),r&&t(ys),r&&t(rt),r&&t(it),r&&t(ks),r&&t(vt),r&&t(lt),r&&t(Bs),r&&t(Ht),r&&t(ds),r&&t(Fe),L(wt,r),r&&t(Ft),r&&t(Rs),r&&t(_t),L(ze,r),r&&t(Ts),L(ft,r),r&&t(Lt),r&&t(yt),r&&t(Dt),L(xe,r),r&&t(ot),r&&t(qe),r&&t(kt),r&&t(ke),r&&t(Bt),r&&t(dt),r&&t(gs),r&&t(Be),r&&t(Cs),r&&t(Le),r&&t(Is),r&&t(at),L(Rt,r),r&&t(Vt),r&&t(xs),r&&t(ut),L(Tt,r),r&&t(De),L(mt,r),r&&t(Me),r&&t(Es),r&&t(he),L(Ee,r),r&&t(f),r&&t(g),r&&t(Ss),r&&t(Yt),r&&t(It),r&&t(xt),L(gt,r),r&&t(Et),r&&t(Fs),r&&t(oe),L(fe,r),r&&t(Zs),r&&t(Ks),r&&t(en),r&&t(As),r&&t(Ys),r&&t(tn),r&&t(sn),r&&t(Ws),r&&t(Ls),r&&t(Ps),r&&t(Gs),r&&t(Qs),r&&t(Ve),r&&t(nn),r&&t(Ds),r&&t(rn),L(Wt,r),r&&t(Us),L(i,r),r&&t(R),L(Js,r)}}}function Xi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,E,A,O,W,q;return e=new Ns({props:{$$slots:{default:[ni]},$$scope:{ctx:m}}}),l=new Ns({props:{$$slots:{default:[li]},$$scope:{ctx:m}}}),p=new Ns({props:{$$slots:{default:[ai]},$$scope:{ctx:m}}}),k=new Ns({props:{$$slots:{default:[pi]},$$scope:{ctx:m}}}),h=new Ns({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),T=new Ns({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),j=new Ns({props:{$$slots:{default:[Pi]},$$scope:{ctx:m}}}),A=new Ns({props:{$$slots:{default:[Oi]},$$scope:{ctx:m}}}),W=new Ns({props:{$$slots:{default:[Qi]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=P(),H(l.$$.fragment),u=P(),H(p.$$.fragment),c=P(),H(k.$$.fragment),v=P(),H(h.$$.fragment),w=P(),H(T.$$.fragment),S=P(),H(j.$$.fragment),E=P(),H(A.$$.fragment),O=P(),H(W.$$.fragment)},l(I){D(e.$$.fragment,I),n=N(I),D(l.$$.fragment,I),u=N(I),D(p.$$.fragment,I),c=N(I),D(k.$$.fragment,I),v=N(I),D(h.$$.fragment,I),w=N(I),D(T.$$.fragment,I),S=N(I),D(j.$$.fragment,I),E=N(I),D(A.$$.fragment,I),O=N(I),D(W.$$.fragment,I)},m(I,V){F(e,I,V),s(I,n,V),F(l,I,V),s(I,u,V),F(p,I,V),s(I,c,V),F(k,I,V),s(I,v,V),F(h,I,V),s(I,w,V),F(T,I,V),s(I,S,V),F(j,I,V),s(I,E,V),F(A,I,V),s(I,O,V),F(W,I,V),q=!0},p(I,V){const J={};V&16&&(J.$$scope={dirty:V,ctx:I}),e.$set(J);const X={};V&16&&(X.$$scope={dirty:V,ctx:I}),l.$set(X);const y={};V&16&&(y.$$scope={dirty:V,ctx:I}),p.$set(y);const z={};V&16&&(z.$$scope={dirty:V,ctx:I}),k.$set(z);const K={};V&16&&(K.$$scope={dirty:V,ctx:I}),h.$set(K);const C={};V&16&&(C.$$scope={dirty:V,ctx:I}),T.$set(C);const Y={};V&16&&(Y.$$scope={dirty:V,ctx:I}),j.$set(Y);const se={};V&16&&(se.$$scope={dirty:V,ctx:I}),A.$set(se);const te={};V&16&&(te.$$scope={dirty:V,ctx:I}),W.$set(te)},i(I){q||(G(e.$$.fragment,I),G(l.$$.fragment,I),G(p.$$.fragment,I),G(k.$$.fragment,I),G(h.$$.fragment,I),G(T.$$.fragment,I),G(j.$$.fragment,I),G(A.$$.fragment,I),G(W.$$.fragment,I),q=!0)},o(I){M(e.$$.fragment,I),M(l.$$.fragment,I),M(p.$$.fragment,I),M(k.$$.fragment,I),M(h.$$.fragment,I),M(T.$$.fragment,I),M(j.$$.fragment,I),M(A.$$.fragment,I),M(W.$$.fragment,I),q=!1},d(I){L(e,I),I&&t(n),L(l,I),I&&t(u),L(p,I),I&&t(c),L(k,I),I&&t(v),L(h,I),I&&t(w),L(T,I),I&&t(S),L(j,I),I&&t(E),L(A,I),I&&t(O),L(W,I)}}}function Zi(m){let e,n;return e=new jn({props:{$$slots:{default:[Xi]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&16&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Ki(m,e,n){return[!1,!0,"ChatGPT\u56FE\u7075\u6D4B\u8BD5\u8BB0\u5F55",()=>un("/",In)]}class mr extends js{constructor(e){super(),Os(this,e,Ki,Zi,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function el(m){let e,n,l,u,p,c,k;return{c(){e=b("\u672C\u7F51\u7AD9\u662F\u6D1E\u7A74\u591C\u83BA\u7684\u6574\u6D3B\u7F51\u7AD9\uFF0C\u80CC\u666F\u56FE\u7247\u6765\u81EA"),n=o("a"),l=b("klpbbs.com"),u=b("\uFF0Cfreemutecode\u9875\u9762\u4E2Dcss\uFF08assets/freemutecode/style.css\uFF09\u6765\u81EAfreegiftcode\uFF0C\u5176\u4F59\u5185\u5BB9\u4EE5CC-0\u534F\u8BAE\u5F00\u6E90\u4E8E"),p=o("a"),c=b("github"),k=b("\u3002"),this.h()},l(v){e=$(v,"\u672C\u7F51\u7AD9\u662F\u6D1E\u7A74\u591C\u83BA\u7684\u6574\u6D3B\u7F51\u7AD9\uFF0C\u80CC\u666F\u56FE\u7247\u6765\u81EA"),n=a(v,"A",{href:!0,target:!0,style:!0});var h=U(n);l=$(h,"klpbbs.com"),h.forEach(t),u=$(v,"\uFF0Cfreemutecode\u9875\u9762\u4E2Dcss\uFF08assets/freemutecode/style.css\uFF09\u6765\u81EAfreegiftcode\uFF0C\u5176\u4F59\u5185\u5BB9\u4EE5CC-0\u534F\u8BAE\u5F00\u6E90\u4E8E"),p=a(v,"A",{href:!0,target:!0,style:!0});var w=U(p);c=$(w,"github"),w.forEach(t),k=$(v,"\u3002"),this.h()},h(){x(n,"href","https://klpbbs.com"),x(n,"target","_blank"),pt(n,"color","white"),x(p,"href","https://github.com/CaveNightingale/CaveNightingale.github.io"),x(p,"target","_blank"),pt(p,"color","white")},m(v,h){s(v,e,h),s(v,n,h),_(n,l),s(v,u,h),s(v,p,h),_(p,c),s(v,k,h)},p:Ms,d(v){v&&t(e),v&&t(n),v&&t(u),v&&t(p),v&&t(k)}}}function tl(m){let e,n,l,u,p,c,k,v;return e=new An({props:{href:m[4],content:"\u514D\u8D39\u7981\u8A00\u4EE3\u7801"}}),l=new An({props:{href:m[5],content:"MCBBS\u79EF\u5206\u5206\u6790"}}),p=new An({props:{href:m[6],content:"ChatGPT\u56FE\u7075\u6D4B\u8BD5\u8BB0\u5F55"}}),k=new ur({props:{$$slots:{default:[el]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=P(),H(l.$$.fragment),u=P(),H(p.$$.fragment),c=P(),H(k.$$.fragment)},l(h){D(e.$$.fragment,h),n=N(h),D(l.$$.fragment,h),u=N(h),D(p.$$.fragment,h),c=N(h),D(k.$$.fragment,h)},m(h,w){F(e,h,w),s(h,n,w),F(l,h,w),s(h,u,w),F(p,h,w),s(h,c,w),F(k,h,w),v=!0},p(h,w){const T={};w&128&&(T.$$scope={dirty:w,ctx:h}),k.$set(T)},i(h){v||(G(e.$$.fragment,h),G(l.$$.fragment,h),G(p.$$.fragment,h),G(k.$$.fragment,h),v=!0)},o(h){M(e.$$.fragment,h),M(l.$$.fragment,h),M(p.$$.fragment,h),M(k.$$.fragment,h),v=!1},d(h){L(e,h),h&&t(n),L(l,h),h&&t(u),L(p,h),h&&t(c),L(k,h)}}}function sl(m){let e,n;return e=new jn({props:{$$slots:{default:[tl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&128&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function nl(m,e,n){return[!1,!0,"\u76EE\u5F55",null,()=>un("/freemutecode",Nn),()=>un("/creditchart",Sn),()=>un("/turingtest",mr)]}class In extends js{constructor(e){super(),Os(this,e,nl,sl,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function rl(m){let e,n,l,u,p,c;return{c(){e=b(`\u8F93\u5165\u7528\u6237\u7684UID\uFF1A
		`),n=o("input"),l=o("button"),u=b("\u786E\u5B9A"),this.h()},l(k){e=$(k,`\u8F93\u5165\u7528\u6237\u7684UID\uFF1A
		`),n=a(k,"INPUT",{type:!0,class:!0}),l=a(k,"BUTTON",{class:!0});var v=U(l);u=$(v,"\u786E\u5B9A"),v.forEach(t),this.h()},h(){x(n,"type","number"),x(n,"class","svelte-xqojua"),x(l,"class","svelte-xqojua")},m(k,v){s(k,e,v),s(k,n,v),Wn(n,m[1]),s(k,l,v),_(l,u),p||(c=[Xs(n,"input",m[8]),Xs(l,"click",m[2])],p=!0)},p(k,v){v&2&&ir(n.value)!==k[1]&&Wn(n,k[1])},d(k){k&&t(e),k&&t(n),k&&t(l),p=!1,Vn(c)}}}function il(m){let e,n;return e=new Dr({props:{renderingUser:m[0]}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1&&(p.renderingUser=l[0]),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function ll(m){let e,n;return e=new qr({}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p:Ms,i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function fl(m){let e,n;return e=new Ns({props:{$$slots:{default:[al]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1024&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function ol(m){let e,n;return e=new Ns({props:{$$slots:{default:[ul]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1024&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function al(m){let e;return{c(){e=b("\u52A0\u8F7D\u4E2D\u3002\u3002\u3002")},l(n){e=$(n,"\u52A0\u8F7D\u4E2D\u3002\u3002\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ul(m){let e,n;return{c(){e=o("span"),n=b("\u627E\u4E0D\u5230\u8FD9\u4E2A\u7528\u6237"),this.h()},l(l){e=a(l,"SPAN",{style:!0});var u=U(e);n=$(u,"\u627E\u4E0D\u5230\u8FD9\u4E2A\u7528\u6237"),u.forEach(t),this.h()},h(){pt(e,"color","red")},m(l,u){s(l,e,u),_(e,n)},p:Ms,d(l){l&&t(e)}}}function ml(m){let e;return{c(){e=b("\u8BF4\u660E\uFF1A\u7B49\u7EA7\u5224\u5B9A\u4E0E\u6392\u4F4D\u6709\u5173\uFF0C\u524D150\u540D\u5224\u4E3AA\u7EA7\uFF0C\u524D400\u540D\u5224\u4E3AB\u7EA7\uFF0C\u524D1000\u540D\u5224\u4E3AC\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u5224D\u7EA7\uFF0C\u5C0F\u4E8E\u96F6\u7684\u5224E\u7EA7\u3002\u91C7\u75282022\u5E744\u6708xmdhs\u7EDF\u8BA1\u6570\u636E\u3002\u9875\u9762\u4F7F\u7528\u7684\u8DE8\u57DF\u4EE3\u7406\u4E3Ahttps://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=\uFF0CNetlify\u8D85\u65F6\u65F6\u95F4\u957F\u8FBE10\u79D2\u800C\u4E14\u8BBF\u95EEMCBBS\u901F\u5EA6\u8F83\u6162\uFF0C\u6545\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u518D\u6B21\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u3002")},l(n){e=$(n,"\u8BF4\u660E\uFF1A\u7B49\u7EA7\u5224\u5B9A\u4E0E\u6392\u4F4D\u6709\u5173\uFF0C\u524D150\u540D\u5224\u4E3AA\u7EA7\uFF0C\u524D400\u540D\u5224\u4E3AB\u7EA7\uFF0C\u524D1000\u540D\u5224\u4E3AC\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u5224D\u7EA7\uFF0C\u5C0F\u4E8E\u96F6\u7684\u5224E\u7EA7\u3002\u91C7\u75282022\u5E744\u6708xmdhs\u7EDF\u8BA1\u6570\u636E\u3002\u9875\u9762\u4F7F\u7528\u7684\u8DE8\u57DF\u4EE3\u7406\u4E3Ahttps://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=\uFF0CNetlify\u8D85\u65F6\u65F6\u95F4\u957F\u8FBE10\u79D2\u800C\u4E14\u8BBF\u95EEMCBBS\u901F\u5EA6\u8F83\u6162\uFF0C\u6545\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u518D\u6B21\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function pl(m){let e,n,l,u,p,c,k;e=new Ns({props:{$$slots:{default:[rl]},$$scope:{ctx:m}}});const v=[ol,fl,ll,il],h=[];function w(T,S){return T[0]==="error"?0:T[0]==="pending"?1:T[0]==="none"?2:3}return l=w(m),u=h[l]=v[l](m),c=new ur({props:{$$slots:{default:[ml]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=P(),u.c(),p=P(),H(c.$$.fragment)},l(T){D(e.$$.fragment,T),n=N(T),u.l(T),p=N(T),D(c.$$.fragment,T)},m(T,S){F(e,T,S),s(T,n,S),h[l].m(T,S),s(T,p,S),F(c,T,S),k=!0},p(T,S){const j={};S&1026&&(j.$$scope={dirty:S,ctx:T}),e.$set(j);let E=l;l=w(T),l===E?h[l].p(T,S):(Ln(),M(h[E],1,1,()=>{h[E]=null}),Dn(),u=h[l],u?u.p(T,S):(u=h[l]=v[l](T),u.c()),G(u,1),u.m(p.parentNode,p));const A={};S&1024&&(A.$$scope={dirty:S,ctx:T}),c.$set(A)},i(T){k||(G(e.$$.fragment,T),G(u),G(c.$$.fragment,T),k=!0)},o(T){M(e.$$.fragment,T),M(u),M(c.$$.fragment,T),k=!1},d(T){L(e,T),T&&t(n),h[l].d(T),T&&t(p),L(c,T)}}}function bl(m){let e,n;return e=new jn({props:{$$slots:{default:[pl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&1027&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}const $l="https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=";async function cl(m){let e,n=0;for(;!e&&n++<3;)try{e=await(await fetch($l+m)).json()}catch{}if(e){if(e.error)throw new Error(e.error);if(e.username)return e;throw new Error("Function returns improper data")}else throw new Error("Cannot connect to proxy")}function hl(m,e,n){let{title:l="MCBBS\u79EF\u5206\u5206\u6790"}=e;const u=!0,p=!1,c=()=>{h!="none"?(n(0,h="none"),history.pushState({},"","/creditchart")):un("/",In)},k=T;let v="",h="none";async function w(j,E=!0){let A=parseInt(v);if(isFinite(A)&&A>0){n(0,h="pending");try{n(0,h=await cl(A)),E&&history.pushState({},"",location.pathname+"?uid="+A)}catch{n(0,h="error")}}else n(0,h="error")}function T(){n(1,v=new URLSearchParams(location.search).get("uid")||""),v!=""?w(0,!1):n(0,h="none")}gn(T);function S(){v=ir(this.value),n(1,v)}return m.$$set=j=>{"title"in j&&n(3,l=j.title)},m.$$.update=()=>{if(m.$$.dirty&1)switch(h){case"none":case"pending":case"error":n(3,l="MCBBS\u79EF\u5206\u5206\u6790");break;default:n(3,l="MCBBS\u79EF\u5206\u5206\u6790 - "+h.username)}},[h,v,w,l,u,p,c,k,S]}class Sn extends js{constructor(e){super(),Os(this,e,hl,bl,Hs,{title:3,background:4,scalable:5,back:6,reload:7})}get background(){return this.$$.ctx[4]}get scalable(){return this.$$.ctx[5]}get back(){return this.$$.ctx[6]}get reload(){return this.$$.ctx[7]}}function vl(m){let e,n,l,u,p,c,k,v,h;return{c(){e=o("span"),n=b("\u627E\u4E0D\u5230\u9875\u9762"),l=P(),u=o("br"),p=P(),c=o("span"),k=b("\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u8F93\u5165\u7684\u7F51\u5740"),v=P(),h=o("br"),this.h()},l(w){e=a(w,"SPAN",{style:!0});var T=U(e);n=$(T,"\u627E\u4E0D\u5230\u9875\u9762"),T.forEach(t),l=N(w),u=a(w,"BR",{}),p=N(w),c=a(w,"SPAN",{style:!0});var S=U(c);k=$(S,"\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u8F93\u5165\u7684\u7F51\u5740"),S.forEach(t),v=N(w),h=a(w,"BR",{}),this.h()},h(){pt(e,"font-size","100px"),pt(e,"color","white"),pt(e,"position","relative"),pt(e,"font-weight","1000"),pt(e,"user-select","none"),pt(c,"color","white"),pt(c,"position","relative"),pt(c,"font-weight","bolder"),pt(c,"user-select","none")},m(w,T){s(w,e,T),_(e,n),s(w,l,T),s(w,u,T),s(w,p,T),s(w,c,T),_(c,k),s(w,v,T),s(w,h,T)},p:Ms,d(w){w&&t(e),w&&t(l),w&&t(u),w&&t(p),w&&t(c),w&&t(v),w&&t(h)}}}function wl(m){let e,n;return e=new jn({props:{$$slots:{default:[vl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&64&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function _l(m,e,n){const p="\u627E\u4E0D\u5230\u9875\u9762",c=()=>un("/",In),k={"/freemutecode/":["/freemutecode",Nn],"/freegiftcode/":["/freemutecode",Nn],"/creditchart/":["/creditchart",Sn]};function v(){let h=k[location.pathname];if(h)un(h[0],h[1]);else{let w=/^\/creditchart\/([0-9]+)$/.exec(location.pathname);w&&un("/creditchart?uid="+w[1],Sn)}}return gn(()=>setTimeout(v,0)),[!1,!0,p,c]}class yl extends js{constructor(e){super(),Os(this,e,_l,wl,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function kl(m){let e,n,l,u,p,c,k,v,h,w,T;e=new br({props:{back:m[3],title:m[1],background:m[2]}});function S(q){m[7](q)}function j(q){m[8](q)}function E(q){m[9](q)}function A(q){m[10](q)}var O=m[0];function W(q){let I={};return q[2]!==void 0&&(I.background=q[2]),q[1]!==void 0&&(I.title=q[1]),q[3]!==void 0&&(I.back=q[3]),q[4]!==void 0&&(I.reload=q[4]),{props:I}}return O&&(l=new O(W(m)),fn.push(()=>$n(l,"background",S)),fn.push(()=>$n(l,"title",j)),fn.push(()=>$n(l,"back",E)),fn.push(()=>$n(l,"reload",A))),{c(){H(e.$$.fragment),n=P(),l&&H(l.$$.fragment),v=an()},l(q){D(e.$$.fragment,q),n=N(q),l&&D(l.$$.fragment,q),v=an()},m(q,I){F(e,q,I),s(q,n,I),l&&F(l,q,I),s(q,v,I),h=!0,w||(T=Xs(window,"popstate",m[5]),w=!0)},p(q,[I]){const V={};I&8&&(V.back=q[3]),I&2&&(V.title=q[1]),I&4&&(V.background=q[2]),e.$set(V);const J={};if(!u&&I&4&&(u=!0,J.background=q[2],xn(()=>u=!1)),!p&&I&2&&(p=!0,J.title=q[1],xn(()=>p=!1)),!c&&I&8&&(c=!0,J.back=q[3],xn(()=>c=!1)),!k&&I&16&&(k=!0,J.reload=q[4],xn(()=>k=!1)),O!==(O=q[0])){if(l){Ln();const X=l;M(X.$$.fragment,1,0,()=>{L(X,1)}),Dn()}O?(l=new O(W(q)),fn.push(()=>$n(l,"background",S)),fn.push(()=>$n(l,"title",j)),fn.push(()=>$n(l,"back",E)),fn.push(()=>$n(l,"reload",A)),H(l.$$.fragment),G(l.$$.fragment,1),F(l,v.parentNode,v)):l=null}else O&&l.$set(J)},i(q){h||(G(e.$$.fragment,q),l&&G(l.$$.fragment,q),h=!0)},o(q){M(e.$$.fragment,q),l&&M(l.$$.fragment,q),h=!1},d(q){L(e,q),q&&t(n),q&&t(v),l&&L(l,q),w=!1,T()}}}function Bl(m,e,n){let{component:l}=e,u,p,c,k,v={"/":In,"/creditchart":Sn,"/freemutecode":Nn,"/turingtest":mr};function h(A){n(0,l=A)}gn(()=>{$r(A=>h(A))});function w(A){let O=v[location.pathname];O?(h(O),k&&k()):h(yl)}function T(A){p=A,n(2,p)}function S(A){u=A,n(1,u)}function j(A){c=A,n(3,c)}function E(A){k=A,n(4,k)}return m.$$set=A=>{"component"in A&&n(0,l=A.component)},[l,u,p,c,k,w,h,T,S,j,E]}class Tl extends js{constructor(e){super(),Os(this,e,Bl,kl,Hs,{component:0,changeContent:6})}get changeContent(){return this.$$.ctx[6]}}export{yl as P,Tl as R,Sn as a,Nn as b,In as c,mr as d};
