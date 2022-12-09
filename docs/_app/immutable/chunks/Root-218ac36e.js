import{S as js,i as Os,s as Hs,e as o,t as b,c as a,a as U,h as $,d as t,b as I,g as s,J as _,K as Us,j as vn,n as qs,l as an,o as Fn,p as M,q as Dn,r as G,x as H,y as D,z as L,C as F,k as E,m as A,L as Vn,F as zn,G as qn,H as Mn,I as Gn,w as gn,M as tr,N as sr,O as nr,P as rr,f as mt,Q as fn,R as On,T as ir,U as Wn,V as hn,W as xn}from"./index-a6551832.js";import{s as pr,S as zs,P as Fs,o as un,M as jn,N as br,a as $r}from"./MainContext-6617568b.js";function wn(){}wn.prototype={diff:function(e,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=l.callback;typeof l=="function"&&(u=l,l={}),this.options=l;var p=this;function c(N){return u?(setTimeout(function(){u(void 0,N)},0),!0):N}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var B=n.length,v=e.length,h=1,w=B+v;l.maxEditLength&&(w=Math.min(w,l.maxEditLength));var T=[{newPos:-1,components:[]}],S=this.extractCommon(T[0],n,e,0);if(T[0].newPos+1>=B&&S+1>=v)return c([{value:this.join(n),count:n.length}]);function j(){for(var N=-1*h;N<=h;N+=2){var O=void 0,W=T[N-1],q=T[N+1],C=(q?q.newPos:0)-N;W&&(T[N-1]=void 0);var Y=W&&W.newPos+1<B,Q=q&&0<=C&&C<v;if(!Y&&!Q){T[N]=void 0;continue}if(!Y||Q&&W.newPos<q.newPos?(O=hr(q),p.pushComponent(O.components,void 0,!0)):(O=W,O.newPos++,p.pushComponent(O.components,!0,void 0)),C=p.extractCommon(O,n,e,N),O.newPos+1>=B&&C+1>=v)return c(cr(p,O.components,n,e,p.useLongestToken));T[N]=O}h++}if(u)(function N(){setTimeout(function(){if(h>w)return u();j()||N()},0)})();else for(;h<=w;){var x=j();if(x)return x}},pushComponent:function(e,n,l){var u=e[e.length-1];u&&u.added===n&&u.removed===l?e[e.length-1]={count:u.count+1,added:n,removed:l}:e.push({count:1,added:n,removed:l})},extractCommon:function(e,n,l,u){for(var p=n.length,c=l.length,B=e.newPos,v=B-u,h=0;B+1<p&&v+1<c&&this.equals(n[B+1],l[v+1]);)B++,v++,h++;return h&&e.components.push({count:h}),e.newPos=B,v},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],l=0;l<e.length;l++)e[l]&&n.push(e[l]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function cr(m,e,n,l,u){for(var p=0,c=e.length,B=0,v=0;p<c;p++){var h=e[p];if(h.removed){if(h.value=m.join(l.slice(v,v+h.count)),v+=h.count,p&&e[p-1].added){var T=e[p-1];e[p-1]=e[p],e[p]=T}}else{if(!h.added&&u){var w=n.slice(B,B+h.count);w=w.map(function(j,x){var N=l[v+x];return N.length>j.length?N:j}),h.value=m.join(w)}else h.value=m.join(n.slice(B,B+h.count));B+=h.count,h.added||(v+=h.count)}}var S=e[c-1];return c>1&&typeof S.value=="string"&&(S.added||S.removed)&&m.equals("",S.value)&&(e[c-2].value+=S.value,e.pop()),e}function hr(m){return{newPos:m.newPos,components:m.components.slice(0)}}var Un=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,Jn=/\S/,lr=new wn;lr.equals=function(m,e){return this.options.ignoreCase&&(m=m.toLowerCase(),e=e.toLowerCase()),m===e||this.options.ignoreWhitespace&&!Jn.test(m)&&!Jn.test(e)};lr.tokenize=function(m){for(var e=m.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&Un.test(e[n])&&Un.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var fr=new wn;fr.tokenize=function(m){var e=[],n=m.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var l=0;l<n.length;l++){var u=n[l];l%2&&!this.options.newlineIsToken?e[e.length-1]+=u:(this.options.ignoreWhitespace&&(u=u.trim()),e.push(u))}return e};var vr=new wn;vr.tokenize=function(m){return m.split(/(\S.+?[.!?])(?=\s+|$)/)};var wr=new wn;wr.tokenize=function(m){return m.split(/([{}:;,]|\s+)/)};function En(m){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?En=function(e){return typeof e}:En=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},En(m)}var _r=Object.prototype.toString,Tn=new wn;Tn.useLongestToken=!0;Tn.tokenize=fr.tokenize;Tn.castInput=function(m){var e=this.options,n=e.undefinedReplacement,l=e.stringifyReplacer,u=l===void 0?function(p,c){return typeof c=="undefined"?n:c}:l;return typeof m=="string"?m:JSON.stringify(Hn(m,null,null,u),u,"  ")};Tn.equals=function(m,e){return wn.prototype.equals.call(Tn,m.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function Hn(m,e,n,l,u){e=e||[],n=n||[],l&&(m=l(u,m));var p;for(p=0;p<e.length;p+=1)if(e[p]===m)return n[p];var c;if(_r.call(m)==="[object Array]"){for(e.push(m),c=new Array(m.length),n.push(c),p=0;p<m.length;p+=1)c[p]=Hn(m[p],e,n,l,u);return e.pop(),n.pop(),c}if(m&&m.toJSON&&(m=m.toJSON()),En(m)==="object"&&m!==null){e.push(m),c={},n.push(c);var B=[],v;for(v in m)m.hasOwnProperty(v)&&B.push(v);for(B.sort(),p=0;p<B.length;p+=1)v=B[p],c[v]=Hn(m[v],e,n,l,v);e.pop(),n.pop()}else c=m;return c}var Ln=new wn;Ln.tokenize=function(m){return m.slice()};Ln.join=Ln.removeEmpty=function(m){return m};function yr(m){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=m.split(/\r\n|[\n\v\f\r\x85]/),l=m.match(/\r\n|[\n\v\f\r\x85]/g)||[],u=[],p=0;function c(){var h={};for(u.push(h);p<n.length;){var w=n[p];if(/^(\-\-\-|\+\+\+|@@)\s/.test(w))break;var T=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(w);T&&(h.index=T[1]),p++}for(B(h),B(h),h.hunks=[];p<n.length;){var S=n[p];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(S))break;if(/^@@/.test(S))h.hunks.push(v());else{if(S&&e.strict)throw new Error("Unknown line "+(p+1)+" "+JSON.stringify(S));p++}}}function B(h){var w=/^(---|\+\+\+)\s+(.*)$/.exec(n[p]);if(w){var T=w[1]==="---"?"old":"new",S=w[2].split("	",2),j=S[0].replace(/\\\\/g,"\\");/^".*"$/.test(j)&&(j=j.substr(1,j.length-2)),h[T+"FileName"]=j,h[T+"Header"]=(S[1]||"").trim(),p++}}function v(){var h=p,w=n[p++],T=w.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),S={oldStart:+T[1],oldLines:typeof T[2]=="undefined"?1:+T[2],newStart:+T[3],newLines:typeof T[4]=="undefined"?1:+T[4],lines:[],linedelimiters:[]};S.oldLines===0&&(S.oldStart+=1),S.newLines===0&&(S.newStart+=1);for(var j=0,x=0;p<n.length&&!(n[p].indexOf("--- ")===0&&p+2<n.length&&n[p+1].indexOf("+++ ")===0&&n[p+2].indexOf("@@")===0);p++){var N=n[p].length==0&&p!=n.length-1?" ":n[p][0];if(N==="+"||N==="-"||N===" "||N==="\\")S.lines.push(n[p]),S.linedelimiters.push(l[p]||`
`),N==="+"?j++:N==="-"?x++:N===" "&&(j++,x++);else break}if(!j&&S.newLines===1&&(S.newLines=0),!x&&S.oldLines===1&&(S.oldLines=0),e.strict){if(j!==S.newLines)throw new Error("Added line count did not match for hunk at line "+(h+1));if(x!==S.oldLines)throw new Error("Removed line count did not match for hunk at line "+(h+1))}return S}for(;p<n.length;)c();return u}function kr(m,e,n){var l=!0,u=!1,p=!1,c=1;return function B(){if(l&&!p){if(u?c++:l=!1,m+c<=n)return c;p=!0}if(!u)return p||(l=!0),e<=m-c?-c++:(u=!0,B())}}function Br(m,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string"&&(e=yr(e)),Array.isArray(e)){if(e.length>1)throw new Error("applyPatch only works with a single input.");e=e[0]}var l=m.split(/\r\n|[\n\v\f\r\x85]/),u=m.match(/\r\n|[\n\v\f\r\x85]/g)||[],p=e.hunks,c=n.compareLine||function(te,ee,re,ie){return ee===ie},B=0,v=n.fuzzFactor||0,h=0,w=0,T,S;function j(te,ee){for(var re=0;re<te.lines.length;re++){var ie=te.lines[re],oe=ie.length>0?ie[0]:" ",pe=ie.length>0?ie.substr(1):ie;if(oe===" "||oe==="-"){if(!c(ee+1,l[ee],oe,pe)&&(B++,B>v))return!1;ee++}}return!0}for(var x=0;x<p.length;x++){for(var N=p[x],O=l.length-N.oldLines,W=0,q=w+N.oldStart-1,C=kr(q,h,O);W!==void 0;W=C())if(j(N,q+W)){N.offset=w+=W;break}if(W===void 0)return!1;h=N.offset+N.oldStart+N.oldLines}for(var Y=0,Q=0;Q<p.length;Q++){var Z=p[Q],k=Z.oldStart+Z.offset+Y-1;Y+=Z.newLines-Z.oldLines;for(var z=0;z<Z.lines.length;z++){var se=Z.lines[z],V=se.length>0?se[0]:" ",K=se.length>0?se.substr(1):se,P=Z.linedelimiters[z];if(V===" ")k++;else if(V==="-")l.splice(k,1),u.splice(k,1);else if(V==="+")l.splice(k,0,K),u.splice(k,0,P),k++;else if(V==="\\"){var J=Z.lines[z-1]?Z.lines[z-1][0]:null;J==="+"?T=!0:J==="-"&&(S=!0)}}}if(T)for(;!l[l.length-1];)l.pop(),u.pop();else S&&(l.push(""),u.push(`
`));for(var ne=0;ne<l.length-1;ne++)l[ne]=l[ne]+u[ne];return l.join("")}function dr(m){let e,n,l,u,p;return{c(){e=o("div"),n=o("div"),l=b(m[0]),this.h()},l(c){e=a(c,"DIV",{class:!0});var B=U(e);n=a(B,"DIV",{class:!0});var v=U(n);l=$(v,m[0]),v.forEach(t),B.forEach(t),this.h()},h(){I(n,"class","inner svelte-1q30hbw"),I(e,"class","outer svelte-1q30hbw")},m(c,B){s(c,e,B),_(e,n),_(n,l),u||(p=Us(e,"click",m[1]),u=!0)},p(c,[B]){B&1&&vn(l,c[0])},i:qs,o:qs,d(c){c&&t(e),u=!1,p()}}}function Rr(m,e,n){let{href:l}=e,{content:u}=e;function p(){typeof l=="string"?open(l,"_self"):l()}return m.$$set=c=>{"href"in c&&n(2,l=c.href),"content"in c&&n(0,u=c.content)},[u,p,l]}class An extends js{constructor(e){super(),Os(this,e,Rr,dr,Hs,{href:2,content:0})}}function Tr(m){let e,n;return e=new zs({props:{$$slots:{default:[Er]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&130&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function gr(m){let e,n;return e=new zs({props:{$$slots:{default:[Ar]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&131&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Cr(m){let e,n;return e=new zs({props:{$$slots:{default:[Nr]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&128&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Ir(m){let e,n;return e=new zs({props:{$$slots:{default:[Pr]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&129&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function xr(m){let e,n;return e=new An({props:{content:"\u5B89\u88C5\u7528\u6237\u811A\u672C",href:m[4]}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&1&&(p.href=l[4]),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function Er(m){let e,n,l,u;return{c(){e=o("p"),n=b("\u51FA\u73B0\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A"),l=E(),u=b(m[1]),this.h()},l(p){e=a(p,"P",{class:!0});var c=U(e);n=$(c,"\u51FA\u73B0\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A"),c.forEach(t),l=A(p),u=$(p,m[1]),this.h()},h(){I(e,"class","svelte-1y7n2nc")},m(p,c){s(p,e,c),_(e,n),s(p,l,c),s(p,u,c)},p(p,c){c&2&&vn(u,p[1])},d(p){p&&t(e),p&&t(l),p&&t(u)}}}function Ar(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N;return S=new Fs({props:{data:m[1]}}),{c(){e=o("p"),n=b("\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u2019\u9875\u9762\u4E2D\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"),l=E(),u=o("p"),p=o("button"),c=b("\u590D\u5236"),B=E(),v=o("button"),h=b("\u53D6\u6D88"),w=E(),T=o("p"),H(S.$$.fragment),this.h()},l(O){e=a(O,"P",{class:!0});var W=U(e);n=$(W,"\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u2019\u9875\u9762\u4E2D\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"),W.forEach(t),l=A(O),u=a(O,"P",{class:!0});var q=U(u);p=a(q,"BUTTON",{class:!0});var C=U(p);c=$(C,"\u590D\u5236"),C.forEach(t),B=A(q),v=a(q,"BUTTON",{class:!0});var Y=U(v);h=$(Y,"\u53D6\u6D88"),Y.forEach(t),q.forEach(t),w=A(O),T=a(O,"P",{class:!0});var Q=U(T);D(S.$$.fragment,Q),Q.forEach(t),this.h()},h(){I(e,"class","svelte-1y7n2nc"),I(p,"class","svelte-1y7n2nc"),I(v,"class","svelte-1y7n2nc"),I(u,"class","svelte-1y7n2nc"),I(T,"class","svelte-1y7n2nc")},m(O,W){s(O,e,W),_(e,n),s(O,l,W),s(O,u,W),_(u,p),_(p,c),_(u,B),_(u,v),_(v,h),s(O,w,W),s(O,T,W),L(S,T,null),j=!0,x||(N=[Us(p,"click",m[3]),Us(v,"click",m[6])],x=!0)},p(O,W){const q={};W&2&&(q.data=O[1]),S.$set(q)},i(O){j||(G(S.$$.fragment,O),j=!0)},o(O){M(S.$$.fragment,O),j=!1},d(O){O&&t(e),O&&t(l),O&&t(u),O&&t(w),O&&t(T),F(S),x=!1,Vn(N)}}}function Nr(m){let e;return{c(){e=b("\u4E0B\u8F7D\u4E2D\u3002\u3002\u3002")},l(n){e=$(n,"\u4E0B\u8F7D\u4E2D\u3002\u3002\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Pr(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se;return{c(){e=o("p"),n=b("\u5FEB\u4E50\u5C0F\u65B9\u7F16\u5199\u7684MCBBS CreditAnalysis\u662F\u95ED\u6E90\u8F6F\u4EF6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u76F4\u63A5\u63D0\u4F9B\u5E26\u6D1E\u7A74\u591C\u83BA\u8865\u4E01\u7684MCBBS CreditAnalysis\u3002"),l=E(),u=o("p"),p=b("\u5982\u679C\u9009\u62E9\u7EE7\u7EED\uFF0C\u5219\u672C\u9875\u9762\u4F1A\u5206\u522B\u4E0B\u8F7D"),c=o("a"),B=b("MCBBS CreditAnalysis"),v=b("\u548C"),h=o("a"),w=b("\u6D1E\u7A74\u591C\u83BA\u8865\u4E01"),T=b("\uFF0C\u7136\u540E\u5C06\u8865\u4E01\u6253\u5230MCBBS CreditAnalysis\u4E0A\u3002"),S=E(),j=o("p"),x=b("\u9700\u8981"),N=o("a"),O=b("TamperMonkey"),W=b("\u6D4F\u89C8\u5668\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528MCBBS CreditAnalysis\u3002\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C\u6B64\u7C7B\u7531\u7F51\u9875\u751F\u6210\u7684\u811A\u672C\u65E0\u6CD5\u6253\u5F00TamperMonkey\u7684\u5B89\u88C5\u754C\u9762\u3002\u56E0\u6B64\uFF0C\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u9700\u8981\u60A8\u624B\u52A8\u5C06\u811A\u672C\u590D\u5236\u7C98\u8D34\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u201D\u9875\u9762\uFF08\u53EF\u5728TamperMonkey\u4E3B\u83DC\u5355\u4E2D\u627E\u5230\uFF09\u4E2D\u53BB\u5B89\u88C5\u3002"),q=E(),C=o("button"),Y=b("\u786E\u5B9A"),Q=E(),Z=o("button"),k=b("\u53D6\u6D88"),this.h()},l(V){e=a(V,"P",{class:!0});var K=U(e);n=$(K,"\u5FEB\u4E50\u5C0F\u65B9\u7F16\u5199\u7684MCBBS CreditAnalysis\u662F\u95ED\u6E90\u8F6F\u4EF6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u76F4\u63A5\u63D0\u4F9B\u5E26\u6D1E\u7A74\u591C\u83BA\u8865\u4E01\u7684MCBBS CreditAnalysis\u3002"),K.forEach(t),l=A(V),u=a(V,"P",{class:!0});var P=U(u);p=$(P,"\u5982\u679C\u9009\u62E9\u7EE7\u7EED\uFF0C\u5219\u672C\u9875\u9762\u4F1A\u5206\u522B\u4E0B\u8F7D"),c=a(P,"A",{href:!0,class:!0});var J=U(c);B=$(J,"MCBBS CreditAnalysis"),J.forEach(t),v=$(P,"\u548C"),h=a(P,"A",{href:!0,class:!0});var ne=U(h);w=$(ne,"\u6D1E\u7A74\u591C\u83BA\u8865\u4E01"),ne.forEach(t),T=$(P,"\uFF0C\u7136\u540E\u5C06\u8865\u4E01\u6253\u5230MCBBS CreditAnalysis\u4E0A\u3002"),P.forEach(t),S=A(V),j=a(V,"P",{class:!0});var te=U(j);x=$(te,"\u9700\u8981"),N=a(te,"A",{href:!0,class:!0});var ee=U(N);O=$(ee,"TamperMonkey"),ee.forEach(t),W=$(te,"\u6D4F\u89C8\u5668\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528MCBBS CreditAnalysis\u3002\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C\u6B64\u7C7B\u7531\u7F51\u9875\u751F\u6210\u7684\u811A\u672C\u65E0\u6CD5\u6253\u5F00TamperMonkey\u7684\u5B89\u88C5\u754C\u9762\u3002\u56E0\u6B64\uFF0C\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u9700\u8981\u60A8\u624B\u52A8\u5C06\u811A\u672C\u590D\u5236\u7C98\u8D34\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u201D\u9875\u9762\uFF08\u53EF\u5728TamperMonkey\u4E3B\u83DC\u5355\u4E2D\u627E\u5230\uFF09\u4E2D\u53BB\u5B89\u88C5\u3002"),te.forEach(t),q=A(V),C=a(V,"BUTTON",{class:!0});var re=U(C);Y=$(re,"\u786E\u5B9A"),re.forEach(t),Q=A(V),Z=a(V,"BUTTON",{class:!0});var ie=U(Z);k=$(ie,"\u53D6\u6D88"),ie.forEach(t),this.h()},h(){I(e,"class","svelte-1y7n2nc"),I(c,"href",or),I(c,"class","svelte-1y7n2nc"),I(h,"href",ar),I(h,"class","svelte-1y7n2nc"),I(u,"class","svelte-1y7n2nc"),I(N,"href","https://www.tampermonkey.net/"),I(N,"class","svelte-1y7n2nc"),I(j,"class","svelte-1y7n2nc"),I(C,"class","svelte-1y7n2nc"),I(Z,"class","svelte-1y7n2nc")},m(V,K){s(V,e,K),_(e,n),s(V,l,K),s(V,u,K),_(u,p),_(u,c),_(c,B),_(u,v),_(u,h),_(h,w),_(u,T),s(V,S,K),s(V,j,K),_(j,x),_(j,N),_(N,O),_(j,W),s(V,q,K),s(V,C,K),_(C,Y),s(V,Q,K),s(V,Z,K),_(Z,k),z||(se=[Us(C,"click",m[2]),Us(Z,"click",m[5])],z=!0)},p:qs,d(V){V&&t(e),V&&t(l),V&&t(u),V&&t(S),V&&t(j),V&&t(q),V&&t(C),V&&t(Q),V&&t(Z),z=!1,Vn(se)}}}function Sr(m){let e,n,l,u;const p=[xr,Ir,Cr,gr,Tr],c=[];function B(v,h){return v[0]=="none"?0:v[0]=="confirm"?1:v[0]=="pending"?2:v[0]=="data"?3:v[0]=="error"?4:-1}return~(e=B(m))&&(n=c[e]=p[e](m)),{c(){n&&n.c(),l=an()},l(v){n&&n.l(v),l=an()},m(v,h){~e&&c[e].m(v,h),s(v,l,h),u=!0},p(v,[h]){let w=e;e=B(v),e===w?~e&&c[e].p(v,h):(n&&(Fn(),M(c[w],1,1,()=>{c[w]=null}),Dn()),~e?(n=c[e],n?n.p(v,h):(n=c[e]=p[e](v),n.c()),G(n,1),n.m(l.parentNode,l)):n=null)},i(v){u||(G(n),u=!0)},o(v){M(n),u=!1},d(v){~e&&c[e].d(v),v&&t(l)}}}const or="https://greasyfork.org/scripts/407846-mcbbs-creditanalysis/code/MCBBS%20CreditAnalysis.user.js",ar="/assets/creditchart/userscript.patch";function zr(m,e,n){let l="none",u="";function p(){return n(0,l="pending"),Promise.all([fetch(or).then(w=>w.text()),fetch(ar).then(w=>w.text())]).then(([w,T])=>{n(1,u=Br(w,T)),n(0,l="data")}).catch(w=>{n(0,l="error"),n(1,u=w.stack)})}function c(){navigator.clipboard.writeText(u),pr("\u5DF2\u590D\u5236\u811A\u672C")}return[l,u,p,c,()=>n(0,l="confirm"),()=>n(0,l="none"),()=>n(0,l="none")]}class qr extends js{constructor(e){super(),Os(this,e,zr,Sr,Hs,{})}}function Mr(m){let e,n;const l=m[1].default,u=zn(l,m,m[0],null);return{c(){e=o("footer"),u&&u.c(),this.h()},l(p){e=a(p,"FOOTER",{class:!0});var c=U(e);u&&u.l(c),c.forEach(t),this.h()},h(){I(e,"class","svelte-vofmx1")},m(p,c){s(p,e,c),u&&u.m(e,null),n=!0},p(p,[c]){u&&u.p&&(!n||c&1)&&qn(u,l,p,p[0],n?Gn(l,p[0],c,null):Mn(p[0]),null)},i(p){n||(G(u,p),n=!0)},o(p){M(u,p),n=!1},d(p){p&&t(e),u&&u.d(p)}}}function Gr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class ur extends js{constructor(e){super(),Os(this,e,Gr,Mr,Hs,{})}}function Qn(m,e,n){const l=m.slice();return l[20]=e[n],l}function Xn(m,e,n){const l=m.slice();return l[23]=e[n],l}function Zn(m){let e,n=m[0].userGroupEx,l=[];for(let u=0;u<n.length;u+=1)l[u]=Kn(Xn(m,n,u));return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=an()},l(u){for(let p=0;p<l.length;p+=1)l[p].l(u);e=an()},m(u,p){for(let c=0;c<l.length;c+=1)l[c].m(u,p);s(u,e,p)},p(u,p){if(p&1){n=u[0].userGroupEx;let c;for(c=0;c<n.length;c+=1){const B=Xn(u,n,c);l[c]?l[c].p(B,p):(l[c]=Kn(B),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(u){rr(l,u),u&&t(e)}}}function Kn(m){let e,n,l=m[23]+"",u;return{c(){e=b("\uFF0C"),n=new sr(!1),u=an(),this.h()},l(p){e=$(p,"\uFF0C"),n=nr(p,!1),u=an(),this.h()},h(){n.a=u},m(p,c){s(p,e,c),n.m(l,p,c),s(p,u,c)},p(p,c){c&1&&l!==(l=p[23]+"")&&n.p(l)},d(p){p&&t(e),p&&t(u),p&&n.d()}}}function er(m){let e,n,l,u,p,c=m[20][1]+"",B,v,h,w=m[5][m[20][1]]+"",T,S,j,x=(100*m[5][m[20][1]]*m[20][2]/m[1]).toFixed(2)+"",N,O,W,q,C=Nn(m[5][m[20][1]],m[20][3])+"",Y,Q,Z,k,z;function se(){return m[13](m[20])}return{c(){e=o("div"),n=o("div"),l=o("div"),u=E(),p=o("div"),B=b(c),v=E(),h=o("div"),T=b(w),S=E(),j=o("div"),N=b(x),O=b("%"),W=E(),q=o("div"),Y=b(C),Q=E(),this.h()},l(V){e=a(V,"DIV",{class:!0,style:!0});var K=U(e);n=a(K,"DIV",{class:!0});var P=U(n);l=a(P,"DIV",{class:!0,style:!0}),U(l).forEach(t),P.forEach(t),u=A(K),p=a(K,"DIV",{class:!0});var J=U(p);B=$(J,c),J.forEach(t),v=A(K),h=a(K,"DIV",{class:!0});var ne=U(h);T=$(ne,w),ne.forEach(t),S=A(K),j=a(K,"DIV",{class:!0});var te=U(j);N=$(te,x),O=$(te,"%"),te.forEach(t),W=A(K),q=a(K,"DIV",{class:!0});var ee=U(q);Y=$(ee,C),ee.forEach(t),Q=A(K),K.forEach(t),this.h()},h(){I(l,"class","color-example svelte-3f2djp"),mt(l,"background-color",m[20][0]),I(n,"class","color svelte-3f2djp"),I(p,"class","name svelte-3f2djp"),I(h,"class","count svelte-3f2djp"),I(j,"class","percent svelte-3f2djp"),I(q,"class","rank svelte-3f2djp"),I(e,"class","lines svelte-3f2djp"),I(e,"style",Z=m[6]===m[20][1]?"background: #d8d8d8;":"")},m(V,K){s(V,e,K),_(e,n),_(n,l),_(e,u),_(e,p),_(p,B),_(e,v),_(e,h),_(h,T),_(e,S),_(e,j),_(j,N),_(j,O),_(e,W),_(e,q),_(q,Y),_(e,Q),k||(z=Us(e,"click",se),k=!0)},p(V,K){m=V,K&32&&w!==(w=m[5][m[20][1]]+"")&&vn(T,w),K&34&&x!==(x=(100*m[5][m[20][1]]*m[20][2]/m[1]).toFixed(2)+"")&&vn(N,x),K&32&&C!==(C=Nn(m[5][m[20][1]],m[20][3])+"")&&vn(Y,C),K&64&&Z!==(Z=m[6]===m[20][1]?"background: #d8d8d8;":"")&&I(e,"style",Z)},d(V){V&&t(e),k=!1,z()}}}function jr(m){let e,n,l=m[0].username+"",u,p,c,B,v=m[0].userGroup+"",h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z=Nn(m[1],m[7])+"",se,V,K,P,J=m[0].userGroupEx&&Zn(m),ne=m[8],te=[];for(let ee=0;ee<ne.length;ee+=1)te[ee]=er(Qn(m,ne,ee));return{c(){e=o("div"),n=o("a"),u=b(l),c=b(`
		(
			`),B=new sr(!1),h=an(),J&&J.c(),w=b(`
		)
		`),T=o("div"),S=o("div"),j=E(),x=o("div"),N=b("\u603B\u79EF\u5206"),O=E(),W=o("div"),q=b(m[1]),C=E(),Y=o("div"),Q=b("100.00%"),Z=E(),k=o("div"),se=b(z),V=E();for(let ee=0;ee<te.length;ee+=1)te[ee].c();this.h()},l(ee){e=a(ee,"DIV",{class:!0});var re=U(e);n=a(re,"A",{style:!0,href:!0,target:!0});var ie=U(n);u=$(ie,l),ie.forEach(t),c=$(re,`
		(
			`),B=nr(re,!1),h=an(),J&&J.l(re),w=$(re,`
		)
		`),T=a(re,"DIV",{class:!0});var oe=U(T);S=a(oe,"DIV",{class:!0}),U(S).forEach(t),j=A(oe),x=a(oe,"DIV",{class:!0});var pe=U(x);N=$(pe,"\u603B\u79EF\u5206"),pe.forEach(t),O=A(oe),W=a(oe,"DIV",{class:!0});var ue=U(W);q=$(ue,m[1]),ue.forEach(t),C=A(oe),Y=a(oe,"DIV",{class:!0});var ce=U(Y);Q=$(ce,"100.00%"),ce.forEach(t),Z=A(oe),k=a(oe,"DIV",{class:!0});var Re=U(k);se=$(Re,z),Re.forEach(t),oe.forEach(t),V=A(re);for(let he=0;he<te.length;he+=1)te[he].l(re);re.forEach(t),this.h()},h(){mt(n,"font-size","24px"),mt(n,"color","black"),I(n,"href",p="https://www.mcbbs.net/home.php?mod=space&username="+m[0].username),I(n,"target","_blank"),B.a=h,I(S,"class","color svelte-3f2djp"),I(x,"class","name svelte-3f2djp"),I(W,"class","count svelte-3f2djp"),I(Y,"class","percent svelte-3f2djp"),I(k,"class","rank svelte-3f2djp"),I(T,"class","lines svelte-3f2djp"),I(e,"class","parent svelte-3f2djp")},m(ee,re){s(ee,e,re),_(e,n),_(n,u),_(e,c),B.m(v,e),_(e,h),J&&J.m(e,null),_(e,w),_(e,T),_(T,S),_(T,j),_(T,x),_(x,N),_(T,O),_(T,W),_(W,q),_(T,C),_(T,Y),_(Y,Q),_(T,Z),_(T,k),_(k,se),_(e,V);for(let ie=0;ie<te.length;ie+=1)te[ie].m(e,null);K||(P=Us(T,"click",m[12]),K=!0)},p(ee,re){if(re&1&&l!==(l=ee[0].username+"")&&vn(u,l),re&1&&p!==(p="https://www.mcbbs.net/home.php?mod=space&username="+ee[0].username)&&I(n,"href",p),re&1&&v!==(v=ee[0].userGroup+"")&&B.p(v),ee[0].userGroupEx?J?J.p(ee,re):(J=Zn(ee),J.c(),J.m(e,w)):J&&(J.d(1),J=null),re&2&&vn(q,ee[1]),re&2&&z!==(z=Nn(ee[1],ee[7])+"")&&vn(se,z),re&2402){ne=ee[8];let ie;for(ie=0;ie<ne.length;ie+=1){const oe=Qn(ee,ne,ie);te[ie]?te[ie].p(oe,re):(te[ie]=er(oe),te[ie].c(),te[ie].m(e,null))}for(;ie<te.length;ie+=1)te[ie].d(1);te.length=ne.length}},d(ee){ee&&t(e),J&&J.d(),rr(te,ee),K=!1,P()}}}function Or(m){let e,n,l,u,p;return{c(){e=o("div"),n=o("canvas"),l=b("\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\uFF01"),this.h()},l(c){e=a(c,"DIV",{class:!0});var B=U(e);n=a(B,"CANVAS",{width:!0,height:!0});var v=U(n);l=$(v,"\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\uFF01"),v.forEach(t),B.forEach(t),this.h()},h(){I(n,"width",m[4]),I(n,"height",m[4]),I(e,"class","canvas-parent svelte-3f2djp")},m(c,B){s(c,e,B),_(e,n),_(n,l),m[14](n),m[15](e),u||(p=Us(e,"click",m[10]),u=!0)},p(c,B){B&16&&I(n,"width",c[4]),B&16&&I(n,"height",c[4])},d(c){c&&t(e),m[14](null),m[15](null),u=!1,p()}}}function Hr(m){let e,n,l,u,p,c;return e=new zs({props:{$$slots:{default:[jr]},$$scope:{ctx:m}}}),l=new zs({props:{$$slots:{default:[Or]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=E(),H(l.$$.fragment)},l(B){D(e.$$.fragment,B),n=A(B),D(l.$$.fragment,B)},m(B,v){L(e,B,v),s(B,n,v),L(l,B,v),u=!0,p||(c=Us(window,"resize",m[9]),p=!0)},p(B,[v]){const h={};v&67108963&&(h.$$scope={dirty:v,ctx:B}),e.$set(h);const w={};v&67108892&&(w.$$scope={dirty:v,ctx:B}),l.$set(w)},i(B){u||(G(e.$$.fragment,B),G(l.$$.fragment,B),u=!0)},o(B){M(e.$$.fragment,B),M(l.$$.fragment,B),u=!1},d(B){F(e,B),B&&t(n),F(l,B),p=!1,c()}}}function Nn(m,e){return m>=e[0]?"A":m>=e[1]?"B":m>=e[2]?"C":m>=0?"D":"E"}function Lr(m){let e=(m+Math.PI/2)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI/2}function Fr(m,e,n){const l=[12564,7348,4827],u=[["#2dc6c8","\u4EBA\u6C14",3,[1770,829,395]],["#5daf7a","\u91D1\u7C92",0,[23372,14581,9110]],["#9c3a4b","\u91D1\u952D",0,[72,40,23]],["#3866b9","\u5B9D\u77F3",0,[20,9,5]],["#82de76","\u4E0B\u754C\u4E4B\u5FC3",0,[8,4,1]],["#b6a2dd","\u8D21\u732E",10,[61,21,6]],["#5ab1ee","\u7231\u5FC3",4,[139,51,18]],["#d7797f","\u94BB\u77F3",2,[2641,2014,1531]],["#e6399b","\u53D1\u5E16\u6570",1/3,[6677,3504,1911]],["#9f3ed5","\u4E3B\u9898\u6570",2,[262,166,103]],["#ff4040","\u7CBE\u534E\u6570",45,[20,3,0]]];let{renderingUser:p}=e,c,B,v=600,h=0,w={},T=0,S,j="",x;function N(){let k=getComputedStyle(c).width;n(4,v=Math.min(parseInt(/^([\s\S]+)px$/.exec(k)[1])-48,600)),O(),x=setInterval(O,30)}function O(k=!1){if(!B)return;k&&n(6,j=""),T===1&&(clearInterval(x),x=0),T+=.03,T>=1&&(T=1);let z=B.getContext("2d"),se=0,V=v/2;z.clearRect(0,0,v,v);for(let[K,P,J]of u){if(J==0||w[P]==0)continue;z.fillStyle=K,z.strokeStyle=K,z.lineWidth=2,z.font="400 "+v/60+"px serif";let ne=Math.abs(h),te=2*Math.PI*(se/ne*T-1/4),ee=2*Math.PI*((se+=w[P]*J)/ne*T-1/4);te>ee&&([te,ee]=[ee,te]);let re=(te+ee)/2;k&&S>te&&S<ee&&n(6,j=P);let ie=P===j?v/2.7:v/3,oe=V+Math.cos(re)*v/2.5,pe=V+Math.sin(re)*v/2.5,ue=(100*w[P]*J/h).toFixed(2)+"%";if(z.beginPath(),z.moveTo(V,V),z.arc(V,V,ie,te,ee),z.closePath(),z.fill(),z.moveTo(V,V),z.lineTo(oe,pe),z.stroke(),Lr(re)>Math.PI/2){let ce=oe-v/10;z.lineTo(ce,pe),z.fillText(P+w[P],ce,pe-v/120),z.fillText(ue,ce,pe+v/40),z.stroke()}else{let ce=oe+v/10;z.lineTo(ce,pe),z.fillText(P+w[P],oe,pe-v/120),z.fillText(ue,oe,pe+v/40),z.stroke()}}}function W(k){let z=v/2,se=k.offsetX-z,V=k.offsetY-z,K=(se**2+V**2)**.5;if(K<=v/2.6){let P=se/K;S=V/K>=0?Math.acos(P):2*Math.PI-Math.acos(P),S=S>=3*Math.PI/2?S-2*Math.PI:S,O(!0)}else S=void 0,O(!0)}function q(k){n(6,j=k),O()}gn(N),tr(()=>x!=0?clearInterval(x):0);const C=()=>q(""),Y=k=>q(k[1]);function Q(k){fn[k?"unshift":"push"](()=>{B=k,n(3,B)})}function Z(k){fn[k?"unshift":"push"](()=>{c=k,n(2,c)})}return m.$$set=k=>{"renderingUser"in k&&n(0,p=k.renderingUser)},m.$$.update=()=>{if(m.$$.dirty&3){n(1,h=p.credits.\u79EF\u5206);let k={},z=0;for(let se of u){let V;switch(se[1]){case"\u53D1\u5E16\u6570":V=p.posts+p.threads;break;case"\u4E3B\u9898\u6570":V=p.threads;break;case"\u7CBE\u534E\u6570":V=(h-z)/45;break;default:V=p.credits[se[1]]}k[se[1]]=V,z+=Math.floor(V*se[2]+.5)}n(5,w=k)}},[p,h,c,B,v,w,j,l,u,N,W,q,C,Y,Q,Z]}class Dr extends js{constructor(e){super(),Os(this,e,Fr,Hr,Hs,{renderingUser:0})}}function Vr(m){let e,n,l,u;return{c(){e=o("a"),n=o("img"),this.h()},l(p){e=a(p,"A",{target:!0,href:!0});var c=U(e);n=a(c,"IMG",{src:!0,title:!0,width:!0,height:!0,alt:!0}),c.forEach(t),this.h()},h(){On(n.src,l="https://www.mcbbs.net/uc_server/avatar.php?uid="+m[1]+"&size=big")||I(n,"src",l),I(n,"title",m[0]),I(n,"width","50"),I(n,"height","50"),I(n,"alt",m[0]),I(e,"target","_blank"),I(e,"href",u="https://www.mcbbs.net/?"+m[1])},m(p,c){s(p,e,c),_(e,n)},p(p,[c]){c&2&&!On(n.src,l="https://www.mcbbs.net/uc_server/avatar.php?uid="+p[1]+"&size=big")&&I(n,"src",l),c&1&&I(n,"title",p[0]),c&1&&I(n,"alt",p[0]),c&2&&u!==(u="https://www.mcbbs.net/?"+p[1])&&I(e,"href",u)},i:qs,o:qs,d(p){p&&t(e)}}}function Yr(m,e,n){let{name:l}=e,{uid:u}=e;return m.$$set=p=>{"name"in p&&n(0,l=p.name),"uid"in p&&n(1,u=p.uid)},[l,u]}class ln extends js{constructor(e){super(),Os(this,e,Yr,Vr,Hs,{name:0,uid:1})}}function Wr(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se,V,K,P,J,ne,te,ee,re,ie,oe,pe,ue,ce,Re,he,Ae,Me,Te,_e,Ge,ye,je,we,Oe,ke,Ne,R,X,Ie,ge,pt,Ve,bt,$t,ae,Pe,Jt,Qt,At,Xt,ct,Zt,Kt,Nt,es,Pt,ts,be,me,Ye,ss,We,ns,Ue,rs,Je,is,Qe,ls,Xe,fs,St,os,Ze,as,Ke,us,et,ms,tt,ps,zt,bs,qt,$s,xe,cs,Mt,hs,Gt,vs,Ct,ws,st,Se,_s,jt,ys,Ot,ks,nt,rt,Bs,ht,it,ds,Ht,Rs,He,vt,Lt,Ts,wt,ze,gs,lt,Ft,_t,Dt,Ee,ft,qe,yt,Be,kt,Bt,Cs,de,Is,Vt,xs,Ce,dt,Yt,Es,ot,Rt,Le,at,It,As,ve,ut,Fe,Tt,f,g,xt,Wt,gt,Et,Ls;return Ye=new ln({props:{uid:"3467",name:"sjjklh"}}),We=new ln({props:{uid:"36116",name:"magicbear"}}),Ue=new ln({props:{uid:"66971",name:"\u5996\u68A6\u7684\u8214\u72D7"}}),Je=new ln({props:{uid:"84256",name:"bangbang93"}}),Qe=new ln({props:{uid:"2048697",name:"Zapic"}}),Xe=new ln({props:{uid:"2676420",name:"bbsmaster"}}),Ze=new ln({props:{uid:"165947",name:"\u51DB"}}),Ke=new ln({props:{uid:"1350847",name:"\u5E7F\u836F"}}),et=new ln({props:{uid:"2153967",name:"SHEEP_REALMS"}}),tt=new ln({props:{uid:"2999970",name:"\u58F0\u540D\u6211\u4E3B\u5BB0"}}),{c(){e=o("br"),n=o("br"),l=E(),u=o("nobr"),p=o("div"),c=o("h3"),B=b("\u83B7\u53D6\u4F60\u7684\u514D\u8D39MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01\u9650\u65F6\u4F9B\u5E94\uFF01"),v=E(),h=o("div"),w=o("div"),T=o("div"),S=o("div"),j=o("h1"),x=o("img"),O=E(),W=o("div"),q=o("h3"),C=b("\u4ECE\u6211\u4EEC\u8FD9\u91CC\u514D\u8D39\u83B7\u53D6MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01"),Y=E(),Q=o("p"),Z=b("\u7533\u8BF7MCBBS\u7981\u8A00\u4EE3\u7801\u662F\u6709\u65F6\u95F4\u9650\u5236\u7684"),k=o("br"),z=b(`
						\u5728\u4F18\u60E0\u7ED3\u675F\u4E4B\u524D\uFF0C\u73B0\u5728\u5C31\u52A0\u5165\u5427\u3002
						`),se=o("br"),V=E(),K=o("br"),P=b(`
						\u4E0D\u8981\u9519\u8FC7 - \u8FD9\u662F\u4E00\u4E2A\u9650\u65F6\u4F18\u60E0\u3002\u73B0\u5728\u5C31\u7533\u8BF7!`),J=E(),ne=o("div"),te=o("h5"),ee=b("\u83B7\u53D6MCBBS\u7981\u8A00\u4EE3\u7801"),re=o("br"),ie=E(),oe=o("strong"),pe=E(),ue=o("p"),ce=o("strong"),Re=b("\u539F\u4EF7\uFF1A"),he=b(" \u591A\u6B21\u704C\u6C34\u3001\u7248\u6218\u548C\u5176\u4ED6\u4F5C\u6B7B\u884C\u4E3A"),Ae=o("br"),Me=E(),Te=o("strong"),_e=b("\u4F18\u60E0\uFF1A"),Ge=b(" 100%\u514D\u9664\u989D\u5916\u4F5C\u6B7B"),ye=o("br"),je=E(),we=o("strong"),Oe=b("\u4F60\u82B1\u8D39\u7684\uFF1A"),ke=b(" \u6CA1\u6709\u4EC0\u4E48\uFF01\u5B83\u662F\u5B8C\u5168\u514D\u8D39\u7684\uFF01"),Ne=o("br"),R=b(`
					\u5728\u6D3B\u52A8\u8FC7\u671F\u4E4B\u524D\uFF0C\u6293\u4F4F\u4F60\u7684MCBBS\u7981\u8A00\u4EE3\u7801\uFF01`),X=E(),Ie=o("div"),ge=o("p"),pt=b("\u6B64\u4F18\u60E0\u6BCF\u4E2A\u7528\u6237\u53EA\u80FD\u5151\u6362\u4E00\u6B21\u3002"),Ve=o("br"),bt=b(`
					\u4F60\u5C06\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u4F5C\u6B7B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B8C\u5168\u514D\u8D39\u7684\u7981\u8A00\u3002`),$t=E(),ae=o("div"),Pe=o("h4"),Jt=b("\u6309\u7167\u4E0B\u9762\u7684\u7B80\u5355\u6B65\u9AA4\u6765\u7533\u8BF7\u4F60\u7684\u514D\u8D39MCBBS\u7981\u8A00\u4EE3\u7801\uFF1A"),Qt=E(),At=o("br"),Xt=E(),ct=o("span"),Zt=b("Step 1: \u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u4E2D\u7684\u4E24\u4E2A & \u786E\u8BA4"),Kt=b(":"),Nt=o("br"),es=E(),Pt=o("br"),ts=E(),be=o("div"),me=o("div"),H(Ye.$$.fragment),ss=E(),H(We.$$.fragment),ns=E(),H(Ue.$$.fragment),rs=E(),H(Je.$$.fragment),is=E(),H(Qe.$$.fragment),ls=E(),H(Xe.$$.fragment),fs=E(),St=o("br"),os=E(),H(Ze.$$.fragment),as=E(),H(Ke.$$.fragment),us=E(),H(et.$$.fragment),ms=E(),H(tt.$$.fragment),ps=E(),zt=o("br"),bs=E(),qt=o("br"),$s=E(),xe=o("span"),cs=b("Step 2: \u628A\u8FD9\u4E2A\u6D88\u606F\u53D1\u4E2A\u4E09\u4E2A\u4E0D\u540C\u7684\u7248\u4E3B\u3002"),Mt=o("br"),hs=E(),Gt=o("br"),vs=E(),Ct=o("p"),ws=E(),st=o("div"),Se=o("textarea"),_s=E(),jt=o("br"),ys=E(),Ot=o("br"),ks=E(),nt=o("div"),rt=b("\xBB \u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E... \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002 \xAB"),Bs=E(),ht=o("div"),it=o("input"),ds=E(),Ht=o("br"),Rs=E(),He=o("br"),vt=E(),Lt=o("br"),Ts=E(),wt=o("div"),ze=o("span"),gs=b("\u4E00\u65E6\u4F60\u5B8C\u6210\u4E86\u6B65\u9AA42..."),lt=E(),Ft=o("br"),_t=E(),Dt=o("br"),Ee=E(),ft=o("div"),qe=b(`\u5982\u679C\u4F60\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u672B\u5730\u65C5\u6E38\uFF0C\u8FD9\u91CC\u6709\u4E2A\u66FF\u4EE3\u94FE\u63A5\uFF1A
		`),yt=o("span"),Be=o("a"),kt=o("span"),Bt=b("CLICK HERE"),Cs=E(),de=o("br"),Is=E(),Vt=o("br"),xs=E(),Ce=o("br"),dt=E(),Yt=o("br"),Es=E(),ot=o("br"),Rt=E(),Le=o("br"),at=E(),It=o("div"),As=E(),ve=o("footer"),ut=b("\u672C\u9875\u9762\u4F7F\u7528\u5168\u90E8\u7684CSS\u548C\u90E8\u5206HTML\u4EE3\u7801\u6765\u81EA\u539F\u7248freegiftcode\uFF0C\u672C\u9875\u9762\u4E3A\u73A9\u6897\u7F51\u9875\uFF0C\u8BF7\u52FF\u5F53\u771F\u3002"),Fe=o("br"),Tt=b(`
		\u514D\u8D39\u6B63\u7248\u793C\u54C1\u7801\u7C7B\u7F51\u7AD9\u5C5E\u4E8E\u8BC8\u9A97\u6027\u8D28\uFF0C\u5411\u793E\u4EA4\u7F51\u7AD9\u53D1\u8868\u7C7B\u4F3C\u5185\u5BB9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7981\u8A00\u6216\u7981\u8BBF\uFF0C\u8BF7\u52FF\u4F5C\u6B7B\u3002`),f=o("br"),g=b(`
		\u53C2\u8003`),xt=o("a"),Wt=b("\u3010\u6B8B\u53F6\u6742\u8C08\u3011\u6252\u4E00\u6252\u6240\u8C13\u201C\u514D \u8D39 \u6B63 \u7248 \u793C \u54C1 \u7801\u201D\u7684\u80CC\u540E"),this.h()},l(le){e=a(le,"BR",{class:!0}),n=a(le,"BR",{class:!0}),l=A(le),u=a(le,"NOBR",{id:!0,class:!0});var fe=U(u);p=a(fe,"DIV",{id:!0,class:!0});var Js=U(p);c=a(Js,"H3",{class:!0});var Qs=U(c);B=$(Qs,"\u83B7\u53D6\u4F60\u7684\u514D\u8D39MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01\u9650\u65F6\u4F9B\u5E94\uFF01"),Qs.forEach(t),Js.forEach(t),v=A(fe),h=a(fe,"DIV",{id:!0,class:!0});var Xs=U(h);w=a(Xs,"DIV",{id:!0,class:!0});var Ns=U(w);T=a(Ns,"DIV",{id:!0,class:!0});var Ds=U(T);S=a(Ds,"DIV",{id:!0,class:!0});var Zs=U(S);j=a(Zs,"H1",{class:!0});var Ks=U(j);x=a(Ks,"IMG",{id:!0,src:!0,alt:!0,width:!0,height:!0,class:!0}),Ks.forEach(t),Zs.forEach(t),O=A(Ds),W=a(Ds,"DIV",{id:!0,class:!0});var Vs=U(W);q=a(Vs,"H3",{class:!0});var en=U(q);C=$(en,"\u4ECE\u6211\u4EEC\u8FD9\u91CC\u514D\u8D39\u83B7\u53D6MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01"),en.forEach(t),Y=A(Vs),Q=a(Vs,"P",{class:!0});var Ps=U(Q);Z=$(Ps,"\u7533\u8BF7MCBBS\u7981\u8A00\u4EE3\u7801\u662F\u6709\u65F6\u95F4\u9650\u5236\u7684"),k=a(Ps,"BR",{class:!0}),z=$(Ps,`
						\u5728\u4F18\u60E0\u7ED3\u675F\u4E4B\u524D\uFF0C\u73B0\u5728\u5C31\u52A0\u5165\u5427\u3002
						`),se=a(Ps,"BR",{class:!0}),V=A(Ps),K=a(Ps,"BR",{class:!0}),P=$(Ps,`
						\u4E0D\u8981\u9519\u8FC7 - \u8FD9\u662F\u4E00\u4E2A\u9650\u65F6\u4F18\u60E0\u3002\u73B0\u5728\u5C31\u7533\u8BF7!`),Ps.forEach(t),Vs.forEach(t),Ds.forEach(t),J=A(Ns),ne=a(Ns,"DIV",{id:!0,class:!0});var Ut=U(ne);te=a(Ut,"H5",{class:!0});var Ws=U(te);ee=$(Ws,"\u83B7\u53D6MCBBS\u7981\u8A00\u4EE3\u7801"),re=a(Ws,"BR",{class:!0}),Ws.forEach(t),ie=A(Ut),oe=a(Ut,"STRONG",{class:!0}),U(oe).forEach(t),pe=A(Ut),ue=a(Ut,"P",{class:!0});var De=U(ue);ce=a(De,"STRONG",{class:!0});var tn=U(ce);Re=$(tn,"\u539F\u4EF7\uFF1A"),tn.forEach(t),he=$(De," \u591A\u6B21\u704C\u6C34\u3001\u7248\u6218\u548C\u5176\u4ED6\u4F5C\u6B7B\u884C\u4E3A"),Ae=a(De,"BR",{class:!0}),Me=A(De),Te=a(De,"STRONG",{class:!0});var sn=U(Te);_e=$(sn,"\u4F18\u60E0\uFF1A"),sn.forEach(t),Ge=$(De," 100%\u514D\u9664\u989D\u5916\u4F5C\u6B7B"),ye=a(De,"BR",{class:!0}),je=A(De),we=a(De,"STRONG",{class:!0});var nn=U(we);Oe=$(nn,"\u4F60\u82B1\u8D39\u7684\uFF1A"),nn.forEach(t),ke=$(De," \u6CA1\u6709\u4EC0\u4E48\uFF01\u5B83\u662F\u5B8C\u5168\u514D\u8D39\u7684\uFF01"),Ne=a(De,"BR",{class:!0}),R=$(De,`
					\u5728\u6D3B\u52A8\u8FC7\u671F\u4E4B\u524D\uFF0C\u6293\u4F4F\u4F60\u7684MCBBS\u7981\u8A00\u4EE3\u7801\uFF01`),De.forEach(t),Ut.forEach(t),X=A(Ns),Ie=a(Ns,"DIV",{id:!0,class:!0});var Ss=U(Ie);ge=a(Ss,"P",{class:!0});var Ys=U(ge);pt=$(Ys,"\u6B64\u4F18\u60E0\u6BCF\u4E2A\u7528\u6237\u53EA\u80FD\u5151\u6362\u4E00\u6B21\u3002"),Ve=a(Ys,"BR",{class:!0}),bt=$(Ys,`
					\u4F60\u5C06\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u4F5C\u6B7B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B8C\u5168\u514D\u8D39\u7684\u7981\u8A00\u3002`),Ys.forEach(t),Ss.forEach(t),$t=A(Ns),ae=a(Ns,"DIV",{class:!0,id:!0});var $e=U(ae);Pe=a($e,"H4",{class:!0});var rn=U(Pe);Jt=$(rn,"\u6309\u7167\u4E0B\u9762\u7684\u7B80\u5355\u6B65\u9AA4\u6765\u7533\u8BF7\u4F60\u7684\u514D\u8D39MCBBS\u7981\u8A00\u4EE3\u7801\uFF1A"),rn.forEach(t),Qt=A($e),At=a($e,"BR",{class:!0}),Xt=A($e),ct=a($e,"SPAN",{class:!0});var i=U(ct);Zt=$(i,"Step 1: \u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u4E2D\u7684\u4E24\u4E2A & \u786E\u8BA4"),i.forEach(t),Kt=$($e,":"),Nt=a($e,"BR",{class:!0}),es=A($e),Pt=a($e,"BR",{class:!0}),ts=A($e),be=a($e,"DIV",{id:!0,class:!0});var y=U(be);me=a(y,"DIV",{class:!0});var r=U(me);D(Ye.$$.fragment,r),ss=A(r),D(We.$$.fragment,r),ns=A(r),D(Ue.$$.fragment,r),rs=A(r),D(Je.$$.fragment,r),is=A(r),D(Qe.$$.fragment,r),ls=A(r),D(Xe.$$.fragment,r),fs=A(r),St=a(r,"BR",{class:!0}),os=A(r),D(Ze.$$.fragment,r),as=A(r),D(Ke.$$.fragment,r),us=A(r),D(et.$$.fragment,r),ms=A(r),D(tt.$$.fragment,r),r.forEach(t),ps=A(y),zt=a(y,"BR",{class:!0}),bs=A(y),qt=a(y,"BR",{class:!0}),$s=A(y),xe=a(y,"SPAN",{class:!0});var d=U(xe);cs=$(d,"Step 2: \u628A\u8FD9\u4E2A\u6D88\u606F\u53D1\u4E2A\u4E09\u4E2A\u4E0D\u540C\u7684\u7248\u4E3B\u3002"),d.forEach(t),Mt=a(y,"BR",{class:!0}),hs=A(y),Gt=a(y,"BR",{class:!0}),vs=A(y),Ct=a(y,"P",{class:!0}),U(Ct).forEach(t),ws=A(y),st=a(y,"DIV",{id:!0,class:!0});var mn=U(st);Se=a(mn,"TEXTAREA",{id:!0,rows:!0,cols:!0,class:!0}),U(Se).forEach(t),mn.forEach(t),_s=A(y),jt=a(y,"BR",{class:!0}),ys=A(y),Ot=a(y,"BR",{class:!0}),y.forEach(t),ks=A($e),nt=a($e,"DIV",{id:!0,class:!0});var pn=U(nt);rt=$(pn,"\xBB \u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E... \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002 \xAB"),pn.forEach(t),Bs=A($e),ht=a($e,"DIV",{class:!0});var bn=U(ht);it=a(bn,"INPUT",{type:!0,class:!0}),bn.forEach(t),ds=A($e),Ht=a($e,"BR",{class:!0}),Rs=A($e),He=a($e,"BR",{class:!0}),vt=A($e),Lt=a($e,"BR",{class:!0}),$e.forEach(t),Ns.forEach(t),Xs.forEach(t),Ts=A(fe),wt=a(fe,"DIV",{class:!0});var $n=U(wt);ze=a($n,"SPAN",{class:!0});var cn=U(ze);gs=$(cn,"\u4E00\u65E6\u4F60\u5B8C\u6210\u4E86\u6B65\u9AA42..."),cn.forEach(t),$n.forEach(t),lt=A(fe),Ft=a(fe,"BR",{class:!0}),_t=A(fe),Dt=a(fe,"BR",{class:!0}),Ee=A(fe),ft=a(fe,"DIV",{class:!0});var yn=U(ft);qe=$(yn,`\u5982\u679C\u4F60\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u672B\u5730\u65C5\u6E38\uFF0C\u8FD9\u91CC\u6709\u4E2A\u66FF\u4EE3\u94FE\u63A5\uFF1A
		`),yt=a(yn,"SPAN",{class:!0});var Bn=U(yt);Be=a(Bn,"A",{href:!0,target:!0,class:!0});var dn=U(Be);kt=a(dn,"SPAN",{class:!0});var Rn=U(kt);Bt=$(Rn,"CLICK HERE"),Rn.forEach(t),dn.forEach(t),Bn.forEach(t),yn.forEach(t),Cs=A(fe),de=a(fe,"BR",{class:!0}),Is=A(fe),Vt=a(fe,"BR",{class:!0}),xs=A(fe),Ce=a(fe,"BR",{class:!0}),dt=A(fe),Yt=a(fe,"BR",{class:!0}),Es=A(fe),ot=a(fe,"BR",{class:!0}),Rt=A(fe),Le=a(fe,"BR",{class:!0}),at=A(fe),It=a(fe,"DIV",{class:!0}),U(It).forEach(t),As=A(fe),ve=a(fe,"FOOTER",{style:!0,class:!0});var _n=U(ve);ut=$(_n,"\u672C\u9875\u9762\u4F7F\u7528\u5168\u90E8\u7684CSS\u548C\u90E8\u5206HTML\u4EE3\u7801\u6765\u81EA\u539F\u7248freegiftcode\uFF0C\u672C\u9875\u9762\u4E3A\u73A9\u6897\u7F51\u9875\uFF0C\u8BF7\u52FF\u5F53\u771F\u3002"),Fe=a(_n,"BR",{class:!0}),Tt=$(_n,`
		\u514D\u8D39\u6B63\u7248\u793C\u54C1\u7801\u7C7B\u7F51\u7AD9\u5C5E\u4E8E\u8BC8\u9A97\u6027\u8D28\uFF0C\u5411\u793E\u4EA4\u7F51\u7AD9\u53D1\u8868\u7C7B\u4F3C\u5185\u5BB9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7981\u8A00\u6216\u7981\u8BBF\uFF0C\u8BF7\u52FF\u4F5C\u6B7B\u3002`),f=a(_n,"BR",{class:!0}),g=$(_n,`
		\u53C2\u8003`),xt=a(_n,"A",{href:!0,class:!0});var Yn=U(xt);Wt=$(Yn,"\u3010\u6B8B\u53F6\u6742\u8C08\u3011\u6252\u4E00\u6252\u6240\u8C13\u201C\u514D \u8D39 \u6B63 \u7248 \u793C \u54C1 \u7801\u201D\u7684\u80CC\u540E"),Yn.forEach(t),_n.forEach(t),fe.forEach(t),this.h()},h(){I(e,"class","svelte-2fkrle"),I(n,"class","svelte-2fkrle"),I(c,"class","svelte-2fkrle"),I(p,"id","top"),I(p,"class","svelte-2fkrle"),I(x,"id","mcbbs-icon"),On(x.src,N="../assets/freemutecode/block.gif")||I(x,"src",N),I(x,"alt","Free Minecraft Gift Codes"),I(x,"width","90px"),I(x,"height","100px"),I(x,"class","svelte-2fkrle"),I(j,"class","svelte-2fkrle"),I(S,"id","leftheaderleft"),I(S,"class","svelte-2fkrle"),I(q,"class","svelte-2fkrle"),I(k,"class","svelte-2fkrle"),I(se,"class","svelte-2fkrle"),I(K,"class","svelte-2fkrle"),I(Q,"class","svelte-2fkrle"),I(W,"id","leftheaderright"),I(W,"class","svelte-2fkrle"),I(T,"id","leftheader"),I(T,"class","svelte-2fkrle"),I(re,"class","svelte-2fkrle"),I(te,"class","svelte-2fkrle"),I(oe,"class","svelte-2fkrle"),I(ce,"class","svelte-2fkrle"),I(Ae,"class","svelte-2fkrle"),I(Te,"class","svelte-2fkrle"),I(ye,"class","svelte-2fkrle"),I(we,"class","svelte-2fkrle"),I(Ne,"class","svelte-2fkrle"),I(ue,"class","svelte-2fkrle"),I(ne,"id","leftheader2"),I(ne,"class","svelte-2fkrle"),I(Ve,"class","svelte-2fkrle"),I(ge,"class","svelte-2fkrle"),I(Ie,"id","redeemed"),I(Ie,"class","svelte-2fkrle"),I(Pe,"class","svelte-2fkrle"),I(At,"class","svelte-2fkrle"),I(ct,"class","c1 svelte-2fkrle"),I(Nt,"class","svelte-2fkrle"),I(Pt,"class","svelte-2fkrle"),I(St,"class","svelte-2fkrle"),I(me,"class","svelte-2fkrle"),I(zt,"class","svelte-2fkrle"),I(qt,"class","svelte-2fkrle"),I(xe,"class","c1 svelte-2fkrle"),I(Mt,"class","svelte-2fkrle"),I(Gt,"class","svelte-2fkrle"),I(Ct,"class","svelte-2fkrle"),I(Se,"id","comment"),I(Se,"rows","4"),I(Se,"cols","60"),Se.value="\u6700\u540E\uFF01\u6211\u5F97\u5230\u4E862-4-R\u8BBA\u575B\u7981\u8A00\u5F85\u9047\u7EDD\u5BF9\u514D\u8D39\uFF01\u4ECEhttps://cavenightingale.github.io/freemutecode\u90A3\u91CC\u5F97\u5230\u4F60\u7684",I(Se,"class","svelte-2fkrle"),I(st,"id","comment"),I(st,"class","svelte-2fkrle"),I(jt,"class","svelte-2fkrle"),I(Ot,"class","svelte-2fkrle"),I(be,"id","socialmedia"),I(be,"class","svelte-2fkrle"),I(nt,"id","after"),I(nt,"class","svelte-2fkrle"),I(it,"type","button"),it.value="\u7533\u8BF7\u4F60\u7684MCBSS\u7981\u8A00\u4EE3\u7801",I(it,"class","svelte-2fkrle"),I(ht,"class","c4 svelte-2fkrle"),I(Ht,"class","svelte-2fkrle"),I(He,"class","svelte-2fkrle"),I(Lt,"class","svelte-2fkrle"),I(ae,"class","c4 svelte-2fkrle"),I(ae,"id","Features"),I(w,"id","left"),I(w,"class","svelte-2fkrle"),I(h,"id","containar"),I(h,"class","svelte-2fkrle"),I(ze,"class","c5 svelte-2fkrle"),I(wt,"class","separator c6 svelte-2fkrle"),I(Ft,"class","svelte-2fkrle"),I(Dt,"class","svelte-2fkrle"),I(kt,"class","c7 svelte-2fkrle"),I(Be,"href","https://www.mcbbs.net/thread-968842-1-1.html"),I(Be,"target","_blank"),I(Be,"class","svelte-2fkrle"),I(yt,"class","Apple-style-span c8 svelte-2fkrle"),I(ft,"class","c4 svelte-2fkrle"),I(de,"class","svelte-2fkrle"),I(Vt,"class","svelte-2fkrle"),I(Ce,"class","svelte-2fkrle"),I(Yt,"class","svelte-2fkrle"),I(ot,"class","svelte-2fkrle"),I(Le,"class","svelte-2fkrle"),I(It,"class","separator c9 svelte-2fkrle"),I(Fe,"class","svelte-2fkrle"),I(f,"class","svelte-2fkrle"),I(xt,"href","https://www.mcbbs.net/thread-1226924-1-1.html"),I(xt,"class","svelte-2fkrle"),mt(ve,"text-align","center"),I(ve,"class","svelte-2fkrle"),I(u,"id","main"),I(u,"class","svelte-2fkrle")},m(le,fe){s(le,e,fe),s(le,n,fe),s(le,l,fe),s(le,u,fe),_(u,p),_(p,c),_(c,B),_(u,v),_(u,h),_(h,w),_(w,T),_(T,S),_(S,j),_(j,x),_(T,O),_(T,W),_(W,q),_(q,C),_(W,Y),_(W,Q),_(Q,Z),_(Q,k),_(Q,z),_(Q,se),_(Q,V),_(Q,K),_(Q,P),_(w,J),_(w,ne),_(ne,te),_(te,ee),_(te,re),_(ne,ie),_(ne,oe),_(ne,pe),_(ne,ue),_(ue,ce),_(ce,Re),_(ue,he),_(ue,Ae),_(ue,Me),_(ue,Te),_(Te,_e),_(ue,Ge),_(ue,ye),_(ue,je),_(ue,we),_(we,Oe),_(ue,ke),_(ue,Ne),_(ue,R),_(w,X),_(w,Ie),_(Ie,ge),_(ge,pt),_(ge,Ve),_(ge,bt),_(w,$t),_(w,ae),_(ae,Pe),_(Pe,Jt),_(ae,Qt),_(ae,At),_(ae,Xt),_(ae,ct),_(ct,Zt),_(ae,Kt),_(ae,Nt),_(ae,es),_(ae,Pt),_(ae,ts),_(ae,be),_(be,me),L(Ye,me,null),_(me,ss),L(We,me,null),_(me,ns),L(Ue,me,null),_(me,rs),L(Je,me,null),_(me,is),L(Qe,me,null),_(me,ls),L(Xe,me,null),_(me,fs),_(me,St),_(me,os),L(Ze,me,null),_(me,as),L(Ke,me,null),_(me,us),L(et,me,null),_(me,ms),L(tt,me,null),_(be,ps),_(be,zt),_(be,bs),_(be,qt),_(be,$s),_(be,xe),_(xe,cs),_(be,Mt),_(be,hs),_(be,Gt),_(be,vs),_(be,Ct),_(be,ws),_(be,st),_(st,Se),_(be,_s),_(be,jt),_(be,ys),_(be,Ot),_(ae,ks),_(ae,nt),_(nt,rt),_(ae,Bs),_(ae,ht),_(ht,it),_(ae,ds),_(ae,Ht),_(ae,Rs),_(ae,He),_(ae,vt),_(ae,Lt),_(u,Ts),_(u,wt),_(wt,ze),_(ze,gs),_(u,lt),_(u,Ft),_(u,_t),_(u,Dt),_(u,Ee),_(u,ft),_(ft,qe),_(ft,yt),_(yt,Be),_(Be,kt),_(kt,Bt),_(u,Cs),_(u,de),_(u,Is),_(u,Vt),_(u,xs),_(u,Ce),_(u,dt),_(u,Yt),_(u,Es),_(u,ot),_(u,Rt),_(u,Le),_(u,at),_(u,It),_(u,As),_(u,ve),_(ve,ut),_(ve,Fe),_(ve,Tt),_(ve,f),_(ve,g),_(ve,xt),_(xt,Wt),gt=!0,Et||(Ls=Us(it,"click",m[4]),Et=!0)},p:qs,i(le){gt||(G(Ye.$$.fragment,le),G(We.$$.fragment,le),G(Ue.$$.fragment,le),G(Je.$$.fragment,le),G(Qe.$$.fragment,le),G(Xe.$$.fragment,le),G(Ze.$$.fragment,le),G(Ke.$$.fragment,le),G(et.$$.fragment,le),G(tt.$$.fragment,le),gt=!0)},o(le){M(Ye.$$.fragment,le),M(We.$$.fragment,le),M(Ue.$$.fragment,le),M(Je.$$.fragment,le),M(Qe.$$.fragment,le),M(Xe.$$.fragment,le),M(Ze.$$.fragment,le),M(Ke.$$.fragment,le),M(et.$$.fragment,le),M(tt.$$.fragment,le),gt=!1},d(le){le&&t(e),le&&t(n),le&&t(l),le&&t(u),F(Ye),F(We),F(Ue),F(Je),F(Qe),F(Xe),F(Ze),F(Ke),F(et),F(tt),Et=!1,Ls()}}}function Ur(m,e,n){const p="\u83B7\u53D6\u514D\u8D39\u7684MCBBS\u7981\u8A00\u4EE3\u7801",c=()=>un("/",In);return gn(()=>document.body.style.minWidth="800px"),tr(()=>{typeof document!="undefined"&&(document.body.style.minWidth="")}),[!0,!1,p,c,()=>alert("\u54CE\u5440! \u770B\u6765\u4F60\u6CA1\u6709\u5B8C\u6210\u6B65\u9AA42!")]}class Pn extends js{constructor(e){super(),Os(this,e,Ur,Wr,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function Jr(m){let e,n,l,u,p,c;const B=m[1].default,v=zn(B,m,m[0],null);return{c(){e=o("span"),n=o("br"),v&&v.c(),l=E(),u=b(":"),p=o("br"),this.h()},l(h){e=a(h,"SPAN",{style:!0});var w=U(e);n=a(w,"BR",{}),v&&v.l(w),l=A(w),w.forEach(t),u=$(h,":"),p=a(h,"BR",{}),this.h()},h(){mt(e,"color","green"),mt(e,"font-size","20px"),mt(e,"font-weight","900")},m(h,w){s(h,e,w),_(e,n),v&&v.m(e,null),_(e,l),s(h,u,w),s(h,p,w),c=!0},p(h,[w]){v&&v.p&&(!c||w&1)&&qn(v,B,h,h[0],c?Gn(B,h[0],w,null):Mn(h[0]),null)},i(h){c||(G(v,h),c=!0)},o(h){M(v,h),c=!1},d(h){h&&t(e),v&&v.d(h),h&&t(u),h&&t(p)}}}function Qr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class Ms extends js{constructor(e){super(),Os(this,e,Qr,Jr,Hs,{})}}function Xr(m){let e,n,l,u,p,c;const B=m[1].default,v=zn(B,m,m[0],null);return{c(){e=o("span"),n=o("br"),v&&v.c(),l=E(),u=b(":"),p=o("br"),this.h()},l(h){e=a(h,"SPAN",{style:!0});var w=U(e);n=a(w,"BR",{}),v&&v.l(w),l=A(w),w.forEach(t),u=$(h,":"),p=a(h,"BR",{}),this.h()},h(){mt(e,"color","brown"),mt(e,"font-size","20px"),mt(e,"font-weight","900")},m(h,w){s(h,e,w),_(e,n),v&&v.m(e,null),_(e,l),s(h,u,w),s(h,p,w),c=!0},p(h,[w]){v&&v.p&&(!c||w&1)&&qn(v,B,h,h[0],c?Gn(B,h[0],w,null):Mn(h[0]),null)},i(h){c||(G(v,h),c=!0)},o(h){M(v,h),c=!1},d(h){h&&t(e),v&&v.d(h),h&&t(u),h&&t(p)}}}function Zr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class Gs extends js{constructor(e){super(),Os(this,e,Zr,Xr,Hs,{})}}function Kr(m){let e,n;return{c(){e=o("div"),n=b("\u2714\uFE0F\u5BF9"),this.h()},l(l){e=a(l,"DIV",{class:!0});var u=U(e);n=$(u,"\u2714\uFE0F\u5BF9"),u.forEach(t),this.h()},h(){I(e,"class","svelte-1q52wzp")},m(l,u){s(l,e,u),_(e,n)},p:qs,i:qs,o:qs,d(l){l&&t(e)}}}class Cn extends js{constructor(e){super(),Os(this,e,null,Kr,Hs,{})}}function ei(m){let e,n;return{c(){e=o("div"),n=b("\u274C\u9519"),this.h()},l(l){e=a(l,"DIV",{class:!0});var u=U(e);n=$(u,"\u274C\u9519"),u.forEach(t),this.h()},h(){I(e,"class","svelte-11myue2")},m(l,u){s(l,e,u),_(e,n)},p:qs,i:qs,o:qs,d(l){l&&t(e)}}}class on extends js{constructor(e){super(),Os(this,e,null,ei,Hs,{})}}function ti(m){let e,n,l;const u=m[1].default,p=zn(u,m,m[0],null);return{c(){e=o("div"),n=b("\u2757"),p&&p.c(),this.h()},l(c){e=a(c,"DIV",{class:!0});var B=U(e);n=$(B,"\u2757"),p&&p.l(B),B.forEach(t),this.h()},h(){I(e,"class","svelte-1os5bmu")},m(c,B){s(c,e,B),_(e,n),p&&p.m(e,null),l=!0},p(c,[B]){p&&p.p&&(!l||B&1)&&qn(p,u,c,c[0],l?Gn(u,c[0],B,null):Mn(c[0]),null)},i(c){l||(G(p,c),l=!0)},o(c){M(p,c),l=!1},d(c){c&&t(e),p&&p.d(c)}}}function si(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class kn extends js{constructor(e){super(),Os(this,e,si,ti,Hs,{})}}function ni(m){let e,n,l,u,p,c,B,v,h;return{c(){e=b("\u672C\u9875\u9762\u8BB0\u5F55\u4E862022\u5E7412\u67088\u65E5\u5BF9ChatGPT\u8FDB\u884C\u7684\u6D4B\u8BD5\u3002\u770B\u770B\u524D\u6CBFAI\u80FD\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u8BA1\u7B97\u673A\u6559\u80B2\u3002"),n=o("br"),l=b(`
        \u592A\u957F\u4E0D\u770B\u7248\uFF1A`),u=o("br"),p=b(`
        \u524D\u56DB\u7EC4\u6D4B\u8BD5\u4E3A\u5373\u5174\u53D1\u6325\u7684\u8BB0\u5FC6\u6027\u57FA\u7840\u77E5\u8BC6\u95EE\u9898\uFF0C\u96BE\u5EA6\u9002\u4E2D\uFF0CChatGPT\u56DE\u7B54\u5F97\u975E\u5E38\u597D`),c=o("br"),B=b(`
        \u540E\u56DB\u7EC4\u6D4B\u8BD5\u542B\u6709\u4E00\u9053\u5373\u5174\u53D1\u6325\u7684\u51FD\u6570\u8BBE\u8BA1\u9898\uFF0C\u4EE5\u53CA\u4E09\u9053CF\u6700\u4F4E\u96BE\u5EA6\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9898\uFF0CChatGPT\u57FA\u672C\u5C31\u6CA1\u7B54\u5BF9\u7684`),v=o("br"),h=b(`
        \u7ED3\u8BBA\uFF1AChatGPT\u5BF9\u4FE1\u606F\u5B66\u57FA\u7840\u77E5\u8BC6\u7684\u638C\u63E1\u5DF2\u7ECF\u57FA\u672C\u8FBE\u5230\u4EBA\u7C7B\u6C34\u5E73\uFF0C\u4F46\u51E0\u4E4E\u6CA1\u6709\u7A0B\u5E8F\u8BBE\u8BA1\u80FD\u529B\u3002`)},l(w){e=$(w,"\u672C\u9875\u9762\u8BB0\u5F55\u4E862022\u5E7412\u67088\u65E5\u5BF9ChatGPT\u8FDB\u884C\u7684\u6D4B\u8BD5\u3002\u770B\u770B\u524D\u6CBFAI\u80FD\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u8BA1\u7B97\u673A\u6559\u80B2\u3002"),n=a(w,"BR",{}),l=$(w,`
        \u592A\u957F\u4E0D\u770B\u7248\uFF1A`),u=a(w,"BR",{}),p=$(w,`
        \u524D\u56DB\u7EC4\u6D4B\u8BD5\u4E3A\u5373\u5174\u53D1\u6325\u7684\u8BB0\u5FC6\u6027\u57FA\u7840\u77E5\u8BC6\u95EE\u9898\uFF0C\u96BE\u5EA6\u9002\u4E2D\uFF0CChatGPT\u56DE\u7B54\u5F97\u975E\u5E38\u597D`),c=a(w,"BR",{}),B=$(w,`
        \u540E\u56DB\u7EC4\u6D4B\u8BD5\u542B\u6709\u4E00\u9053\u5373\u5174\u53D1\u6325\u7684\u51FD\u6570\u8BBE\u8BA1\u9898\uFF0C\u4EE5\u53CA\u4E09\u9053CF\u6700\u4F4E\u96BE\u5EA6\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9898\uFF0CChatGPT\u57FA\u672C\u5C31\u6CA1\u7B54\u5BF9\u7684`),v=a(w,"BR",{}),h=$(w,`
        \u7ED3\u8BBA\uFF1AChatGPT\u5BF9\u4FE1\u606F\u5B66\u57FA\u7840\u77E5\u8BC6\u7684\u638C\u63E1\u5DF2\u7ECF\u57FA\u672C\u8FBE\u5230\u4EBA\u7C7B\u6C34\u5E73\uFF0C\u4F46\u51E0\u4E4E\u6CA1\u6709\u7A0B\u5E8F\u8BBE\u8BA1\u80FD\u529B\u3002`)},m(w,T){s(w,e,T),s(w,n,T),s(w,l,T),s(w,u,T),s(w,p,T),s(w,c,T),s(w,B,T),s(w,v,T),s(w,h,T)},p:qs,d(w){w&&t(e),w&&t(n),w&&t(l),w&&t(u),w&&t(p),w&&t(c),w&&t(B),w&&t(v),w&&t(h)}}}function ri(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ii(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function li(m){let e,n,l;return{c(){e=b("\u8FD9\u4E2A\u56DE\u7B54\u5F97\u8FD8\u53EF\u4EE5\uFF0C\u5F53\u65F6\u6CA1\u770B\u51FA\u6765\u662F\u9519\u7684\uFF0C\u540E\u6765\u6574\u7406\u7684\u65F6\u5019\u53D1\u73B0\u4E0D\u5BF9\u3002"),n=o("br"),l=b(`
            \u5176\u5B9E\u8FD9\u4E2A\u6D4B\u8BD5\u70B9\u6709\u70B9\u504F\uFF08\u975EGNU/Linux\u7528\u6237\u57FA\u672C\u4E0D\u7528glibc\uFF0C\u800C\u4E14\u5C01\u88C5\u601D\u60F3\u8981\u6C42\u6211\u4EEC\u4E0D\u5047\u8BBE\u522B\u4EBA\u7684\u5E93\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF09\uFF0C\u4EBA\u7C7B\u7A0B\u5E8F\u5458\u7B54\u9519\u4E5F\u4E0D\u5947\u602A\u3002`)},l(u){e=$(u,"\u8FD9\u4E2A\u56DE\u7B54\u5F97\u8FD8\u53EF\u4EE5\uFF0C\u5F53\u65F6\u6CA1\u770B\u51FA\u6765\u662F\u9519\u7684\uFF0C\u540E\u6765\u6574\u7406\u7684\u65F6\u5019\u53D1\u73B0\u4E0D\u5BF9\u3002"),n=a(u,"BR",{}),l=$(u,`
            \u5176\u5B9E\u8FD9\u4E2A\u6D4B\u8BD5\u70B9\u6709\u70B9\u504F\uFF08\u975EGNU/Linux\u7528\u6237\u57FA\u672C\u4E0D\u7528glibc\uFF0C\u800C\u4E14\u5C01\u88C5\u601D\u60F3\u8981\u6C42\u6211\u4EEC\u4E0D\u5047\u8BBE\u522B\u4EBA\u7684\u5E93\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF09\uFF0C\u4EBA\u7C7B\u7A0B\u5E8F\u5458\u7B54\u9519\u4E5F\u4E0D\u5947\u602A\u3002`)},m(u,p){s(u,e,p),s(u,n,p),s(u,l,p)},p:qs,d(u){u&&t(e),u&&t(n),u&&t(l)}}}function fi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se,V,K;return u=new Ms({props:{$$slots:{default:[ri]},$$scope:{ctx:m}}}),v=new Gs({props:{$$slots:{default:[ii]},$$scope:{ctx:m}}}),z=new on({}),V=new kn({props:{$$slots:{default:[li]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B91\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=E(),H(u.$$.fragment),p=b(`
        Explain how malloc in glibc work.`),c=o("br"),B=E(),H(v.$$.fragment),h=b(`
        In the GNU C Library (glibc), the malloc function is used to allocate memory
        dynamically. It is a type of memory management function that allows a program
        to request a block of memory from the operating system at runtime.`),w=o("br"),T=o("br"),S=b(`

        The malloc function takes a single argument, which is the size of the
        block of memory that the program would like to allocate. The function
        then returns a pointer to the start of the newly allocated block of
        memory.`),j=o("br"),x=o("br"),N=b(`

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
        properly initialize the memory can lead to undefined behavior.`),C=o("br"),Y=o("br"),Q=b(`

        Once a block of memory has been allocated with malloc, it can be freed
        using the free function. This function takes a pointer to the start of
        the block of memory and marks it as available for future allocation. It
        is important to free memory that is no longer needed in order to avoid
        memory leaks.`),Z=o("br"),k=E(),H(z.$$.fragment),se=E(),H(V.$$.fragment)},l(P){e=a(P,"H2",{});var J=U(e);n=$(J,"\u6D4B\u8BD5\u70B91\uFF1A\u57FA\u7840\u77E5\u8BC6"),J.forEach(t),l=A(P),D(u.$$.fragment,P),p=$(P,`
        Explain how malloc in glibc work.`),c=a(P,"BR",{}),B=A(P),D(v.$$.fragment,P),h=$(P,`
        In the GNU C Library (glibc), the malloc function is used to allocate memory
        dynamically. It is a type of memory management function that allows a program
        to request a block of memory from the operating system at runtime.`),w=a(P,"BR",{}),T=a(P,"BR",{}),S=$(P,`

        The malloc function takes a single argument, which is the size of the
        block of memory that the program would like to allocate. The function
        then returns a pointer to the start of the newly allocated block of
        memory.`),j=a(P,"BR",{}),x=a(P,"BR",{}),N=$(P,`

        The malloc function uses a data structure called a heap to manage the
        allocated memory. The heap is a section of memory that is set aside for
        dynamic allocation. When the malloc function is called, it searches the
        heap for a block of memory that is large enough to satisfy the request.
        If such a block is found, malloc returns a pointer to the start of the
        block and marks the memory as allocated. If no sufficiently large block
        can be found, malloc may request additional memory from the operating
        system in order to fulfill the request.`),O=a(P,"BR",{}),W=a(P,"BR",{}),q=$(P,`

        It is important to note that the memory returned by malloc is not
        initialized. This means that the values of the memory are indeterminate
        and should be set by the program before they are used. Failing to
        properly initialize the memory can lead to undefined behavior.`),C=a(P,"BR",{}),Y=a(P,"BR",{}),Q=$(P,`

        Once a block of memory has been allocated with malloc, it can be freed
        using the free function. This function takes a pointer to the start of
        the block of memory and marks it as available for future allocation. It
        is important to free memory that is no longer needed in order to avoid
        memory leaks.`),Z=a(P,"BR",{}),k=A(P),D(z.$$.fragment,P),se=A(P),D(V.$$.fragment,P)},m(P,J){s(P,e,J),_(e,n),s(P,l,J),L(u,P,J),s(P,p,J),s(P,c,J),s(P,B,J),L(v,P,J),s(P,h,J),s(P,w,J),s(P,T,J),s(P,S,J),s(P,j,J),s(P,x,J),s(P,N,J),s(P,O,J),s(P,W,J),s(P,q,J),s(P,C,J),s(P,Y,J),s(P,Q,J),s(P,Z,J),s(P,k,J),L(z,P,J),s(P,se,J),L(V,P,J),K=!0},p(P,J){const ne={};J&16&&(ne.$$scope={dirty:J,ctx:P}),u.$set(ne);const te={};J&16&&(te.$$scope={dirty:J,ctx:P}),v.$set(te);const ee={};J&16&&(ee.$$scope={dirty:J,ctx:P}),V.$set(ee)},i(P){K||(G(u.$$.fragment,P),G(v.$$.fragment,P),G(z.$$.fragment,P),G(V.$$.fragment,P),K=!0)},o(P){M(u.$$.fragment,P),M(v.$$.fragment,P),M(z.$$.fragment,P),M(V.$$.fragment,P),K=!1},d(P){P&&t(e),P&&t(l),F(u,P),P&&t(p),P&&t(c),P&&t(B),F(v,P),P&&t(h),P&&t(w),P&&t(T),P&&t(S),P&&t(j),P&&t(x),P&&t(N),P&&t(O),P&&t(W),P&&t(q),P&&t(C),P&&t(Y),P&&t(Q),P&&t(Z),P&&t(k),F(z,P),P&&t(se),F(V,P)}}}function oi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ai(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ui(m){let e,n,l,u,p,c,B,v,h,w,T,S,j;return u=new Ms({props:{$$slots:{default:[oi]},$$scope:{ctx:m}}}),v=new Gs({props:{$$slots:{default:[ai]},$$scope:{ctx:m}}}),S=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B92\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=E(),H(u.$$.fragment),p=b(`
        Why negative-weight edges can be handled by Floyd-Warshall algorithm?`),c=o("br"),B=E(),H(v.$$.fragment),h=b(`
        The Floyd-Warshall algorithm can handle negative-weight edges because it
        uses a dynamic programming approach to find the shortest path between all
        pairs of vertices in a weighted graph. This means that it considers all possible
        paths between each pair of vertices and selects the one with the minimum
        total weight. Since the algorithm considers all possible paths, it can handle
        negative-weight edges by simply treating them like any other type of edge.`),w=o("br"),T=E(),H(S.$$.fragment)},l(x){e=a(x,"H2",{});var N=U(e);n=$(N,"\u6D4B\u8BD5\u70B92\uFF1A\u57FA\u7840\u77E5\u8BC6"),N.forEach(t),l=A(x),D(u.$$.fragment,x),p=$(x,`
        Why negative-weight edges can be handled by Floyd-Warshall algorithm?`),c=a(x,"BR",{}),B=A(x),D(v.$$.fragment,x),h=$(x,`
        The Floyd-Warshall algorithm can handle negative-weight edges because it
        uses a dynamic programming approach to find the shortest path between all
        pairs of vertices in a weighted graph. This means that it considers all possible
        paths between each pair of vertices and selects the one with the minimum
        total weight. Since the algorithm considers all possible paths, it can handle
        negative-weight edges by simply treating them like any other type of edge.`),w=a(x,"BR",{}),T=A(x),D(S.$$.fragment,x)},m(x,N){s(x,e,N),_(e,n),s(x,l,N),L(u,x,N),s(x,p,N),s(x,c,N),s(x,B,N),L(v,x,N),s(x,h,N),s(x,w,N),s(x,T,N),L(S,x,N),j=!0},p(x,N){const O={};N&16&&(O.$$scope={dirty:N,ctx:x}),u.$set(O);const W={};N&16&&(W.$$scope={dirty:N,ctx:x}),v.$set(W)},i(x){j||(G(u.$$.fragment,x),G(v.$$.fragment,x),G(S.$$.fragment,x),j=!0)},o(x){M(u.$$.fragment,x),M(v.$$.fragment,x),M(S.$$.fragment,x),j=!1},d(x){x&&t(e),x&&t(l),F(u,x),x&&t(p),x&&t(c),x&&t(B),F(v,x),x&&t(h),x&&t(w),x&&t(T),F(S,x)}}}function mi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function pi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function bi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z;return u=new Ms({props:{$$slots:{default:[mi]},$$scope:{ctx:m}}}),v=new Gs({props:{$$slots:{default:[pi]},$$scope:{ctx:m}}}),Q=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B93\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=E(),H(u.$$.fragment),p=b(`
        Radix sort takes O(n) time, but why do people usually use quicksort or mergesort
        which takes O(nlgn) time on average?`),c=o("br"),B=E(),H(v.$$.fragment),h=b(`
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
        strings.`),j=o("br"),x=o("br"),N=b(`

        Another reason that radix sort is not used as often is that it can be
        slower than other algorithms in some cases. In particular, radix sort
        has a higher constant factor than quicksort or mergesort, which means
        that it may be slower for small inputs. Additionally, radix sort
        requires additional memory to store the items in each digit bucket,
        which can make it less efficient in cases where memory is limited.`),O=o("br"),W=o("br"),q=b(`

        Overall, while radix sort is an efficient algorithm in the best case,
        its limitations and potential drawbacks make it less commonly used than
        other algorithms like quicksort or mergesort.`),C=o("br"),Y=E(),H(Q.$$.fragment)},l(k){e=a(k,"H2",{});var z=U(e);n=$(z,"\u6D4B\u8BD5\u70B93\uFF1A\u57FA\u7840\u77E5\u8BC6"),z.forEach(t),l=A(k),D(u.$$.fragment,k),p=$(k,`
        Radix sort takes O(n) time, but why do people usually use quicksort or mergesort
        which takes O(nlgn) time on average?`),c=a(k,"BR",{}),B=A(k),D(v.$$.fragment,k),h=$(k,`
        Radix sort is an efficient sorting algorithm that takes O(n) time in the
        best case, but it has some limitations that make it less commonly used than
        other algorithms like quicksort or mergesort.`),w=a(k,"BR",{}),T=a(k,"BR",{}),S=$(k,`

        One of the main reasons that radix sort is not used as often is that it
        is only effective for sorting integers or items that can be easily
        converted to integers. This is because the algorithm works by sorting
        the items based on their individual digits, starting from the least
        significant digit and working up to the most significant digit. This
        means that it is not well-suited for sorting items that do not have a
        natural order based on their digits, such as floating-point numbers or
        strings.`),j=a(k,"BR",{}),x=a(k,"BR",{}),N=$(k,`

        Another reason that radix sort is not used as often is that it can be
        slower than other algorithms in some cases. In particular, radix sort
        has a higher constant factor than quicksort or mergesort, which means
        that it may be slower for small inputs. Additionally, radix sort
        requires additional memory to store the items in each digit bucket,
        which can make it less efficient in cases where memory is limited.`),O=a(k,"BR",{}),W=a(k,"BR",{}),q=$(k,`

        Overall, while radix sort is an efficient algorithm in the best case,
        its limitations and potential drawbacks make it less commonly used than
        other algorithms like quicksort or mergesort.`),C=a(k,"BR",{}),Y=A(k),D(Q.$$.fragment,k)},m(k,z){s(k,e,z),_(e,n),s(k,l,z),L(u,k,z),s(k,p,z),s(k,c,z),s(k,B,z),L(v,k,z),s(k,h,z),s(k,w,z),s(k,T,z),s(k,S,z),s(k,j,z),s(k,x,z),s(k,N,z),s(k,O,z),s(k,W,z),s(k,q,z),s(k,C,z),s(k,Y,z),L(Q,k,z),Z=!0},p(k,z){const se={};z&16&&(se.$$scope={dirty:z,ctx:k}),u.$set(se);const V={};z&16&&(V.$$scope={dirty:z,ctx:k}),v.$set(V)},i(k){Z||(G(u.$$.fragment,k),G(v.$$.fragment,k),G(Q.$$.fragment,k),Z=!0)},o(k){M(u.$$.fragment,k),M(v.$$.fragment,k),M(Q.$$.fragment,k),Z=!1},d(k){k&&t(e),k&&t(l),F(u,k),k&&t(p),k&&t(c),k&&t(B),F(v,k),k&&t(h),k&&t(w),k&&t(T),k&&t(S),k&&t(j),k&&t(x),k&&t(N),k&&t(O),k&&t(W),k&&t(q),k&&t(C),k&&t(Y),F(Q,k)}}}function $i(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ci(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function hi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z;return u=new Ms({props:{$$slots:{default:[$i]},$$scope:{ctx:m}}}),v=new Gs({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),Q=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B94\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=E(),H(u.$$.fragment),p=b(`
        Why do people randomize quicksort?`),c=o("br"),B=E(),H(v.$$.fragment),h=b(`
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
        reduced, which can make quicksort more efficient in practice.`),j=o("br"),x=o("br"),N=b(`

        Additionally, by randomizing the input, quicksort can become more
        resistant to malicious inputs that are designed to cause the algorithm
        to take the worst-case amount of time. This can be important in
        situations where the input may not be trusted, such as when sorting
        user-provided data.`),O=o("br"),W=o("br"),q=b(`

        Overall, while randomizing the input to quicksort is not strictly
        necessary, it can improve the worst-case performance of the algorithm
        and make it more resistant to malicious inputs.`),C=o("br"),Y=E(),H(Q.$$.fragment)},l(k){e=a(k,"H2",{});var z=U(e);n=$(z,"\u6D4B\u8BD5\u70B94\uFF1A\u57FA\u7840\u77E5\u8BC6"),z.forEach(t),l=A(k),D(u.$$.fragment,k),p=$(k,`
        Why do people randomize quicksort?`),c=a(k,"BR",{}),B=A(k),D(v.$$.fragment,k),h=$(k,`
        Quicksort is a popular sorting algorithm that has an average time complexity
        of O(n log n), making it efficient for sorting large collections of items.
        However, in the worst case, quicksort can take O(n^2) time, which is significantly
        slower than the average case.`),w=a(k,"BR",{}),T=a(k,"BR",{}),S=$(k,`

        One way to improve the worst-case performance of quicksort is to
        randomly shuffle the items being sorted before running the algorithm.
        This can help to ensure that the pivot elements chosen by the algorithm
        are distributed more evenly, which can prevent the algorithm from
        degenerating into the worst-case scenario. By randomizing the input, the
        probability of the algorithm entering the worst-case scenario is
        reduced, which can make quicksort more efficient in practice.`),j=a(k,"BR",{}),x=a(k,"BR",{}),N=$(k,`

        Additionally, by randomizing the input, quicksort can become more
        resistant to malicious inputs that are designed to cause the algorithm
        to take the worst-case amount of time. This can be important in
        situations where the input may not be trusted, such as when sorting
        user-provided data.`),O=a(k,"BR",{}),W=a(k,"BR",{}),q=$(k,`

        Overall, while randomizing the input to quicksort is not strictly
        necessary, it can improve the worst-case performance of the algorithm
        and make it more resistant to malicious inputs.`),C=a(k,"BR",{}),Y=A(k),D(Q.$$.fragment,k)},m(k,z){s(k,e,z),_(e,n),s(k,l,z),L(u,k,z),s(k,p,z),s(k,c,z),s(k,B,z),L(v,k,z),s(k,h,z),s(k,w,z),s(k,T,z),s(k,S,z),s(k,j,z),s(k,x,z),s(k,N,z),s(k,O,z),s(k,W,z),s(k,q,z),s(k,C,z),s(k,Y,z),L(Q,k,z),Z=!0},p(k,z){const se={};z&16&&(se.$$scope={dirty:z,ctx:k}),u.$set(se);const V={};z&16&&(V.$$scope={dirty:z,ctx:k}),v.$set(V)},i(k){Z||(G(u.$$.fragment,k),G(v.$$.fragment,k),G(Q.$$.fragment,k),Z=!0)},o(k){M(u.$$.fragment,k),M(v.$$.fragment,k),M(Q.$$.fragment,k),Z=!1},d(k){k&&t(e),k&&t(l),F(u,k),k&&t(p),k&&t(c),k&&t(B),F(v,k),k&&t(h),k&&t(w),k&&t(T),k&&t(S),k&&t(j),k&&t(x),k&&t(N),k&&t(O),k&&t(W),k&&t(q),k&&t(C),k&&t(Y),F(Q,k)}}}function vi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function wi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function _i(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function yi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ki(m){let e;return{c(){e=b("\u8FD9\u4E2A\u7A0B\u5E8F\u5C3D\u7BA1\u5BF9\uFF0C\u4F46\u662F\u8BBE\u8BA1\u5F97\u5F88\u7CDF\u7CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u8FBEO(2^n)\uFF0C\u4E0D\u5177\u6709\u4EFB\u4F55\u5B9E\u7528\u6027")},l(n){e=$(n,"\u8FD9\u4E2A\u7A0B\u5E8F\u5C3D\u7BA1\u5BF9\uFF0C\u4F46\u662F\u8BBE\u8BA1\u5F97\u5F88\u7CDF\u7CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u8FBEO(2^n)\uFF0C\u4E0D\u5177\u6709\u4EFB\u4F55\u5B9E\u7528\u6027")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Bi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function di(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ri(m){let e;return{c(){e=b("\u4E8B\u4E0D\u8FC7\u4E09\uFF0C\u653E\u5F03\u8BE5\u6D4B\u8BD5\u70B9\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u4E8B\u4E0D\u8FC7\u4E09\uFF0C\u653E\u5F03\u8BE5\u6D4B\u8BD5\u70B9\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ti(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se,V,K,P,J,ne,te,ee,re,ie,oe,pe,ue,ce,Re,he,Ae,Me,Te,_e,Ge,ye,je,we,Oe,ke,Ne;return u=new Ms({props:{$$slots:{default:[vi]},$$scope:{ctx:m}}}),w=new Gs({props:{$$slots:{default:[wi]},$$scope:{ctx:m}}}),x=new Fs({props:{data:`  def steps_to_convert(A: str, B: str) -> int:
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
          `}}),O=new Fs({props:{data:'steps_to_convert("hello", "world")'}}),Y=new on({}),Z=new Ms({props:{$$slots:{default:[_i]},$$scope:{ctx:m}}}),V=new Gs({props:{$$slots:{default:[yi]},$$scope:{ctx:m}}}),ne=new Fs({props:{data:`  def steps_to_convert(A: str, B: str) -> int:
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
          `}}),ee=new Fs({props:{data:'steps_to_convert("hello", "world")'}}),pe=new kn({props:{$$slots:{default:[ki]},$$scope:{ctx:m}}}),ce=new Cn({}),he=new Ms({props:{$$slots:{default:[Bi]},$$scope:{ctx:m}}}),_e=new Gs({props:{$$slots:{default:[di]},$$scope:{ctx:m}}}),ye=new Fs({props:{data:`  def steps_to_get_b_from_a(a: str, b: str) -> int:
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
        `}}),we=new on({}),ke=new kn({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B95\uFF1A\u51FD\u6570\u8BBE\u8BA1"),l=E(),H(u.$$.fragment),p=b(`
        Program a function to solve the following problem.`),c=o("br"),B=b(`
        Given two strings, A and B, you are required to return how many steps are
        needed to get B from A. In each step, you can add or remove a letter in the
        string.`),v=o("br"),h=E(),H(w.$$.fragment),T=b(`
        Here is a possible solution to the problem using the Python programming language:`),S=o("br"),j=E(),H(x.$$.fragment),N=b(`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),H(O.$$.fragment),W=b(`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),q=o("br"),C=E(),H(Y.$$.fragment),Q=E(),H(Z.$$.fragment),k=b(`
        You can only add or remove a character but can't change a character. Please
        retry.`),z=o("br"),se=E(),H(V.$$.fragment),K=b(`
        Here is a revised solution to the problem that only allows adding or removing
        characters, but not changing them:`),P=o("br"),J=E(),H(ne.$$.fragment),te=b(`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),H(ee.$$.fragment),re=b(`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),ie=o("br"),oe=E(),H(pe.$$.fragment),ue=E(),H(ce.$$.fragment),Re=E(),H(he.$$.fragment),Ae=b(`
        Try again.`),Me=o("br"),Te=E(),H(_e.$$.fragment),Ge=b(`
        Here's one way to solve the problem:
        `),H(ye.$$.fragment),je=E(),H(we.$$.fragment),Oe=E(),H(ke.$$.fragment)},l(R){e=a(R,"H2",{});var X=U(e);n=$(X,"\u6D4B\u8BD5\u70B95\uFF1A\u51FD\u6570\u8BBE\u8BA1"),X.forEach(t),l=A(R),D(u.$$.fragment,R),p=$(R,`
        Program a function to solve the following problem.`),c=a(R,"BR",{}),B=$(R,`
        Given two strings, A and B, you are required to return how many steps are
        needed to get B from A. In each step, you can add or remove a letter in the
        string.`),v=a(R,"BR",{}),h=A(R),D(w.$$.fragment,R),T=$(R,`
        Here is a possible solution to the problem using the Python programming language:`),S=a(R,"BR",{}),j=A(R),D(x.$$.fragment,R),N=$(R,`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),D(O.$$.fragment,R),W=$(R,`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),q=a(R,"BR",{}),C=A(R),D(Y.$$.fragment,R),Q=A(R),D(Z.$$.fragment,R),k=$(R,`
        You can only add or remove a character but can't change a character. Please
        retry.`),z=a(R,"BR",{}),se=A(R),D(V.$$.fragment,R),K=$(R,`
        Here is a revised solution to the problem that only allows adding or removing
        characters, but not changing them:`),P=a(R,"BR",{}),J=A(R),D(ne.$$.fragment,R),te=$(R,`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),D(ee.$$.fragment,R),re=$(R,`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),ie=a(R,"BR",{}),oe=A(R),D(pe.$$.fragment,R),ue=A(R),D(ce.$$.fragment,R),Re=A(R),D(he.$$.fragment,R),Ae=$(R,`
        Try again.`),Me=a(R,"BR",{}),Te=A(R),D(_e.$$.fragment,R),Ge=$(R,`
        Here's one way to solve the problem:
        `),D(ye.$$.fragment,R),je=A(R),D(we.$$.fragment,R),Oe=A(R),D(ke.$$.fragment,R)},m(R,X){s(R,e,X),_(e,n),s(R,l,X),L(u,R,X),s(R,p,X),s(R,c,X),s(R,B,X),s(R,v,X),s(R,h,X),L(w,R,X),s(R,T,X),s(R,S,X),s(R,j,X),L(x,R,X),s(R,N,X),L(O,R,X),s(R,W,X),s(R,q,X),s(R,C,X),L(Y,R,X),s(R,Q,X),L(Z,R,X),s(R,k,X),s(R,z,X),s(R,se,X),L(V,R,X),s(R,K,X),s(R,P,X),s(R,J,X),L(ne,R,X),s(R,te,X),L(ee,R,X),s(R,re,X),s(R,ie,X),s(R,oe,X),L(pe,R,X),s(R,ue,X),L(ce,R,X),s(R,Re,X),L(he,R,X),s(R,Ae,X),s(R,Me,X),s(R,Te,X),L(_e,R,X),s(R,Ge,X),L(ye,R,X),s(R,je,X),L(we,R,X),s(R,Oe,X),L(ke,R,X),Ne=!0},p(R,X){const Ie={};X&16&&(Ie.$$scope={dirty:X,ctx:R}),u.$set(Ie);const ge={};X&16&&(ge.$$scope={dirty:X,ctx:R}),w.$set(ge);const pt={};X&16&&(pt.$$scope={dirty:X,ctx:R}),Z.$set(pt);const Ve={};X&16&&(Ve.$$scope={dirty:X,ctx:R}),V.$set(Ve);const bt={};X&16&&(bt.$$scope={dirty:X,ctx:R}),pe.$set(bt);const $t={};X&16&&($t.$$scope={dirty:X,ctx:R}),he.$set($t);const ae={};X&16&&(ae.$$scope={dirty:X,ctx:R}),_e.$set(ae);const Pe={};X&16&&(Pe.$$scope={dirty:X,ctx:R}),ke.$set(Pe)},i(R){Ne||(G(u.$$.fragment,R),G(w.$$.fragment,R),G(x.$$.fragment,R),G(O.$$.fragment,R),G(Y.$$.fragment,R),G(Z.$$.fragment,R),G(V.$$.fragment,R),G(ne.$$.fragment,R),G(ee.$$.fragment,R),G(pe.$$.fragment,R),G(ce.$$.fragment,R),G(he.$$.fragment,R),G(_e.$$.fragment,R),G(ye.$$.fragment,R),G(we.$$.fragment,R),G(ke.$$.fragment,R),Ne=!0)},o(R){M(u.$$.fragment,R),M(w.$$.fragment,R),M(x.$$.fragment,R),M(O.$$.fragment,R),M(Y.$$.fragment,R),M(Z.$$.fragment,R),M(V.$$.fragment,R),M(ne.$$.fragment,R),M(ee.$$.fragment,R),M(pe.$$.fragment,R),M(ce.$$.fragment,R),M(he.$$.fragment,R),M(_e.$$.fragment,R),M(ye.$$.fragment,R),M(we.$$.fragment,R),M(ke.$$.fragment,R),Ne=!1},d(R){R&&t(e),R&&t(l),F(u,R),R&&t(p),R&&t(c),R&&t(B),R&&t(v),R&&t(h),F(w,R),R&&t(T),R&&t(S),R&&t(j),F(x,R),R&&t(N),F(O,R),R&&t(W),R&&t(q),R&&t(C),F(Y,R),R&&t(Q),F(Z,R),R&&t(k),R&&t(z),R&&t(se),F(V,R),R&&t(K),R&&t(P),R&&t(J),F(ne,R),R&&t(te),F(ee,R),R&&t(re),R&&t(ie),R&&t(oe),F(pe,R),R&&t(ue),F(ce,R),R&&t(Re),F(he,R),R&&t(Ae),R&&t(Me),R&&t(Te),F(_e,R),R&&t(Ge),F(ye,R),R&&t(je),F(we,R),R&&t(Oe),F(ke,R)}}}function gi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ci(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ii(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function xi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ei(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ai(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ni(m){let e;return{c(){e=b("\u9519\u8BEF\u4E24\u6B21\u540E\u7ED3\u675F\u4F1A\u8BDD\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u9519\u8BEF\u4E24\u6B21\u540E\u7ED3\u675F\u4F1A\u8BDD\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Pi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se,V,K,P,J,ne,te,ee,re,ie,oe,pe,ue,ce,Re,he,Ae,Me,Te,_e,Ge,ye,je,we,Oe,ke,Ne,R,X,Ie,ge,pt,Ve,bt,$t,ae,Pe,Jt,Qt,At,Xt,ct,Zt,Kt,Nt,es,Pt,ts,be,me,Ye,ss,We,ns,Ue,rs,Je,is,Qe,ls,Xe,fs,St,os,Ze,as,Ke,us,et,ms,tt,ps,zt,bs,qt,$s,xe,cs,Mt,hs,Gt,vs,Ct,ws,st,Se,_s,jt,ys,Ot,ks,nt,rt,Bs,ht,it,ds,Ht,Rs,He,vt,Lt,Ts,wt,ze,gs,lt,Ft,_t,Dt,Ee,ft,qe,yt,Be,kt,Bt,Cs,de,Is,Vt,xs,Ce,dt,Yt,Es,ot,Rt,Le,at,It,As,ve,ut,Fe,Tt;return u=new Ms({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),rt=new Gs({props:{$$slots:{default:[Ci]},$$scope:{ctx:m}}}),_t=new Fs({props:{data:`# Test cases
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
`}}),Ee=new Fs({props:{data:`# Test cases
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
        `}}),qe=new on({}),Be=new Ms({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),de=new Gs({props:{$$slots:{default:[xi]},$$scope:{ctx:m}}}),Ce=new Fs({props:{data:`# Read number of test cases
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
        `}}),ot=new on({}),Le=new Ms({props:{$$slots:{default:[Ei]},$$scope:{ctx:m}}}),ve=new Gs({props:{$$slots:{default:[Ai]},$$scope:{ctx:m}}}),Fe=new kn({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B96\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=E(),H(u.$$.fragment),p=b(`
        Solve the following Problem:`),c=o("br"),B=b(`
        B. Maximum Substring`),v=o("br"),h=b(`
        time limit per test: 1 second`),w=o("br"),T=b(`
        memory limit per test: 256 megabytes`),S=o("br"),j=b(`
        input: standard input`),x=o("br"),N=b(`
        output: standard output`),O=o("br"),W=o("br"),q=b(`

        A binary string is a string consisting only of the characters 0 and 1.
        You are given a binary string s.`),C=o("br"),Y=o("br"),Q=b(`

        For some non-empty substring\u2020 t of string s containing x characters 0
        and y characters 1, define its cost as:`),Z=o("br"),k=b(`
        x\u22C5y, if x>0 and y>0; x2, if x>0 and y=0; y2, if x=0 and y>0. Given a binary
        string s of length n, find the maximum cost across all its non-empty substrings.`),z=o("br"),se=o("br"),V=b(`

        \u2020 A string a is a substring of a string b if a can be obtained from b by
        deletion of several (possibly, zero or all) characters from the
        beginning and several (possibly, zero or all) characters from the end.`),K=o("br"),P=o("br"),J=b(`

        Input`),ne=o("br"),te=o("br"),ee=b(`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u2264105) \u2014 the number of test cases. The description
        of test cases follows.`),re=o("br"),ie=o("br"),oe=b(`

        The first line of each test case contains a single integer n (1\u2264n\u22642\u22C5105)
        \u2014 the length of the string s.`),pe=o("br"),ue=o("br"),ce=b(`

        The second line of each test case contains a binary string s of length
        n.`),Re=o("br"),he=o("br"),Ae=b(`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Me=o("br"),Te=o("br"),_e=b(`

        Output`),Ge=o("br"),ye=o("br"),je=b(`

        For each test case, print a single integer \u2014 the maximum cost across all
        substrings.`),we=o("br"),Oe=o("br"),ke=b(`

        Example`),Ne=o("br"),R=b(`
        Input`),X=o("br"),Ie=b(`

        6`),ge=o("br"),pt=b(`
        5`),Ve=o("br"),bt=b(`
        11100`),$t=o("br"),ae=b(`
        7`),Pe=o("br"),Jt=b(`
        1100110`),Qt=o("br"),At=b(`
        6`),Xt=o("br"),ct=b(`
        011110`),Zt=o("br"),Kt=b(`
        7`),Nt=o("br"),es=b(`
        1001010`),Pt=o("br"),ts=b(`
        4`),be=o("br"),me=b(`
        1000`),Ye=o("br"),ss=b(`
        1`),We=o("br"),ns=b(`
        0`),Ue=o("br"),rs=o("br"),Je=b(`

        Output`),is=o("br"),Qe=b(`

        9`),ls=o("br"),Xe=b(`
        12`),fs=o("br"),St=b(`
        16`),os=o("br"),Ze=b(`
        12`),as=o("br"),Ke=b(`
        9`),us=o("br"),et=b(`
        1`),ms=o("br"),tt=o("br"),ps=b(`

        Note`),zt=o("br"),bs=o("br"),qt=b(`

        In the first test case, we can take a substring 111. It contains 3
        characters 1 and 0 characters 0. So a=3, b=0 and its cost is 32=9.`),$s=o("br"),xe=o("br"),cs=b(`

        In the second test case, we can take the whole string. It contains 4
        characters 1 and 3 characters 0. So a=4, b=3 and its cost is 4\u22C53=12.`),Mt=o("br"),hs=o("br"),Gt=b(`

        In the third test case, we can can take a substring 1111 and its cost is
        42=16.`),vs=o("br"),Ct=o("br"),ws=b(`

        In the fourth test case, we can take the whole string and cost is
        4\u22C53=12.`),st=o("br"),Se=o("br"),_s=b(`

        In the fifth test case, we can take a substring 000 and its cost is
        3\u22C53=9.`),jt=o("br"),ys=o("br"),Ot=b(`

        In the sixth test case, we can only take the substring 0 and its cost is
        1\u22C51=1.`),ks=o("br"),nt=E(),H(rt.$$.fragment),Bs=b(`
        First, let's consider the case where the binary string contains both 0s and
        1s. In this case, we can choose the substring that contains the largest number
        of 0s and 1s to maximize the cost.`),ht=o("br"),it=o("br"),ds=b(`

        To find the largest number of 0s and 1s, we can simply count the number
        of 0s and 1s in the binary string and take the minimum of the two
        counts. For example, if the binary string is "11100", there are 3 0s and
        2 1s, so the largest number of 0s and 1s is 2.`),Ht=o("br"),Rs=o("br"),He=b(`

        Now, let's consider the case where the binary string only contains 0s or
        only contains 1s. In this case, the maximum cost is simply the square of
        the length of the string.`),vt=o("br"),Lt=o("br"),Ts=b(`

        To find the maximum cost, we can simply check whether the binary string
        contains both 0s and 1s. If it does, we can use the method described
        above to find the maximum cost. Otherwise, we can find the maximum cost
        by taking the square of the length of the string.`),wt=o("br"),ze=o("br"),gs=b(`

        Here is some sample Python code that implements this idea:`),lt=o("br"),Ft=E(),H(_t.$$.fragment),Dt=b(`
        Here is the complete solution to the problem:
        `),H(Ee.$$.fragment),ft=E(),H(qe.$$.fragment),yt=E(),H(Be.$$.fragment),kt=b(`
        Please read test cases from standard input.`),Bt=o("br"),Cs=E(),H(de.$$.fragment),Is=b(`
        Here is an updated solution to the problem that reads the test cases from
        standard input:`),Vt=o("br"),xs=E(),H(Ce.$$.fragment),dt=b(`
        This solution reads the number of test cases from standard input, then loops
        through each test case and reads the length of the binary string and the
        binary string itself from standard input. It then computes the maximum cost
        for the binary string and prints the result.`),Yt=o("br"),Es=E(),H(ot.$$.fragment),Rt=E(),H(Le.$$.fragment),at=b(`
        Please notice the definition of substring.`),It=o("br"),As=E(),H(ve.$$.fragment),ut=b(`
        Conversation lost.
        `),H(Fe.$$.fragment)},l(f){e=a(f,"H2",{});var g=U(e);n=$(g,"\u6D4B\u8BD5\u70B96\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),g.forEach(t),l=A(f),D(u.$$.fragment,f),p=$(f,`
        Solve the following Problem:`),c=a(f,"BR",{}),B=$(f,`
        B. Maximum Substring`),v=a(f,"BR",{}),h=$(f,`
        time limit per test: 1 second`),w=a(f,"BR",{}),T=$(f,`
        memory limit per test: 256 megabytes`),S=a(f,"BR",{}),j=$(f,`
        input: standard input`),x=a(f,"BR",{}),N=$(f,`
        output: standard output`),O=a(f,"BR",{}),W=a(f,"BR",{}),q=$(f,`

        A binary string is a string consisting only of the characters 0 and 1.
        You are given a binary string s.`),C=a(f,"BR",{}),Y=a(f,"BR",{}),Q=$(f,`

        For some non-empty substring\u2020 t of string s containing x characters 0
        and y characters 1, define its cost as:`),Z=a(f,"BR",{}),k=$(f,`
        x\u22C5y, if x>0 and y>0; x2, if x>0 and y=0; y2, if x=0 and y>0. Given a binary
        string s of length n, find the maximum cost across all its non-empty substrings.`),z=a(f,"BR",{}),se=a(f,"BR",{}),V=$(f,`

        \u2020 A string a is a substring of a string b if a can be obtained from b by
        deletion of several (possibly, zero or all) characters from the
        beginning and several (possibly, zero or all) characters from the end.`),K=a(f,"BR",{}),P=a(f,"BR",{}),J=$(f,`

        Input`),ne=a(f,"BR",{}),te=a(f,"BR",{}),ee=$(f,`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u2264105) \u2014 the number of test cases. The description
        of test cases follows.`),re=a(f,"BR",{}),ie=a(f,"BR",{}),oe=$(f,`

        The first line of each test case contains a single integer n (1\u2264n\u22642\u22C5105)
        \u2014 the length of the string s.`),pe=a(f,"BR",{}),ue=a(f,"BR",{}),ce=$(f,`

        The second line of each test case contains a binary string s of length
        n.`),Re=a(f,"BR",{}),he=a(f,"BR",{}),Ae=$(f,`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Me=a(f,"BR",{}),Te=a(f,"BR",{}),_e=$(f,`

        Output`),Ge=a(f,"BR",{}),ye=a(f,"BR",{}),je=$(f,`

        For each test case, print a single integer \u2014 the maximum cost across all
        substrings.`),we=a(f,"BR",{}),Oe=a(f,"BR",{}),ke=$(f,`

        Example`),Ne=a(f,"BR",{}),R=$(f,`
        Input`),X=a(f,"BR",{}),Ie=$(f,`

        6`),ge=a(f,"BR",{}),pt=$(f,`
        5`),Ve=a(f,"BR",{}),bt=$(f,`
        11100`),$t=a(f,"BR",{}),ae=$(f,`
        7`),Pe=a(f,"BR",{}),Jt=$(f,`
        1100110`),Qt=a(f,"BR",{}),At=$(f,`
        6`),Xt=a(f,"BR",{}),ct=$(f,`
        011110`),Zt=a(f,"BR",{}),Kt=$(f,`
        7`),Nt=a(f,"BR",{}),es=$(f,`
        1001010`),Pt=a(f,"BR",{}),ts=$(f,`
        4`),be=a(f,"BR",{}),me=$(f,`
        1000`),Ye=a(f,"BR",{}),ss=$(f,`
        1`),We=a(f,"BR",{}),ns=$(f,`
        0`),Ue=a(f,"BR",{}),rs=a(f,"BR",{}),Je=$(f,`

        Output`),is=a(f,"BR",{}),Qe=$(f,`

        9`),ls=a(f,"BR",{}),Xe=$(f,`
        12`),fs=a(f,"BR",{}),St=$(f,`
        16`),os=a(f,"BR",{}),Ze=$(f,`
        12`),as=a(f,"BR",{}),Ke=$(f,`
        9`),us=a(f,"BR",{}),et=$(f,`
        1`),ms=a(f,"BR",{}),tt=a(f,"BR",{}),ps=$(f,`

        Note`),zt=a(f,"BR",{}),bs=a(f,"BR",{}),qt=$(f,`

        In the first test case, we can take a substring 111. It contains 3
        characters 1 and 0 characters 0. So a=3, b=0 and its cost is 32=9.`),$s=a(f,"BR",{}),xe=a(f,"BR",{}),cs=$(f,`

        In the second test case, we can take the whole string. It contains 4
        characters 1 and 3 characters 0. So a=4, b=3 and its cost is 4\u22C53=12.`),Mt=a(f,"BR",{}),hs=a(f,"BR",{}),Gt=$(f,`

        In the third test case, we can can take a substring 1111 and its cost is
        42=16.`),vs=a(f,"BR",{}),Ct=a(f,"BR",{}),ws=$(f,`

        In the fourth test case, we can take the whole string and cost is
        4\u22C53=12.`),st=a(f,"BR",{}),Se=a(f,"BR",{}),_s=$(f,`

        In the fifth test case, we can take a substring 000 and its cost is
        3\u22C53=9.`),jt=a(f,"BR",{}),ys=a(f,"BR",{}),Ot=$(f,`

        In the sixth test case, we can only take the substring 0 and its cost is
        1\u22C51=1.`),ks=a(f,"BR",{}),nt=A(f),D(rt.$$.fragment,f),Bs=$(f,`
        First, let's consider the case where the binary string contains both 0s and
        1s. In this case, we can choose the substring that contains the largest number
        of 0s and 1s to maximize the cost.`),ht=a(f,"BR",{}),it=a(f,"BR",{}),ds=$(f,`

        To find the largest number of 0s and 1s, we can simply count the number
        of 0s and 1s in the binary string and take the minimum of the two
        counts. For example, if the binary string is "11100", there are 3 0s and
        2 1s, so the largest number of 0s and 1s is 2.`),Ht=a(f,"BR",{}),Rs=a(f,"BR",{}),He=$(f,`

        Now, let's consider the case where the binary string only contains 0s or
        only contains 1s. In this case, the maximum cost is simply the square of
        the length of the string.`),vt=a(f,"BR",{}),Lt=a(f,"BR",{}),Ts=$(f,`

        To find the maximum cost, we can simply check whether the binary string
        contains both 0s and 1s. If it does, we can use the method described
        above to find the maximum cost. Otherwise, we can find the maximum cost
        by taking the square of the length of the string.`),wt=a(f,"BR",{}),ze=a(f,"BR",{}),gs=$(f,`

        Here is some sample Python code that implements this idea:`),lt=a(f,"BR",{}),Ft=A(f),D(_t.$$.fragment,f),Dt=$(f,`
        Here is the complete solution to the problem:
        `),D(Ee.$$.fragment,f),ft=A(f),D(qe.$$.fragment,f),yt=A(f),D(Be.$$.fragment,f),kt=$(f,`
        Please read test cases from standard input.`),Bt=a(f,"BR",{}),Cs=A(f),D(de.$$.fragment,f),Is=$(f,`
        Here is an updated solution to the problem that reads the test cases from
        standard input:`),Vt=a(f,"BR",{}),xs=A(f),D(Ce.$$.fragment,f),dt=$(f,`
        This solution reads the number of test cases from standard input, then loops
        through each test case and reads the length of the binary string and the
        binary string itself from standard input. It then computes the maximum cost
        for the binary string and prints the result.`),Yt=a(f,"BR",{}),Es=A(f),D(ot.$$.fragment,f),Rt=A(f),D(Le.$$.fragment,f),at=$(f,`
        Please notice the definition of substring.`),It=a(f,"BR",{}),As=A(f),D(ve.$$.fragment,f),ut=$(f,`
        Conversation lost.
        `),D(Fe.$$.fragment,f)},m(f,g){s(f,e,g),_(e,n),s(f,l,g),L(u,f,g),s(f,p,g),s(f,c,g),s(f,B,g),s(f,v,g),s(f,h,g),s(f,w,g),s(f,T,g),s(f,S,g),s(f,j,g),s(f,x,g),s(f,N,g),s(f,O,g),s(f,W,g),s(f,q,g),s(f,C,g),s(f,Y,g),s(f,Q,g),s(f,Z,g),s(f,k,g),s(f,z,g),s(f,se,g),s(f,V,g),s(f,K,g),s(f,P,g),s(f,J,g),s(f,ne,g),s(f,te,g),s(f,ee,g),s(f,re,g),s(f,ie,g),s(f,oe,g),s(f,pe,g),s(f,ue,g),s(f,ce,g),s(f,Re,g),s(f,he,g),s(f,Ae,g),s(f,Me,g),s(f,Te,g),s(f,_e,g),s(f,Ge,g),s(f,ye,g),s(f,je,g),s(f,we,g),s(f,Oe,g),s(f,ke,g),s(f,Ne,g),s(f,R,g),s(f,X,g),s(f,Ie,g),s(f,ge,g),s(f,pt,g),s(f,Ve,g),s(f,bt,g),s(f,$t,g),s(f,ae,g),s(f,Pe,g),s(f,Jt,g),s(f,Qt,g),s(f,At,g),s(f,Xt,g),s(f,ct,g),s(f,Zt,g),s(f,Kt,g),s(f,Nt,g),s(f,es,g),s(f,Pt,g),s(f,ts,g),s(f,be,g),s(f,me,g),s(f,Ye,g),s(f,ss,g),s(f,We,g),s(f,ns,g),s(f,Ue,g),s(f,rs,g),s(f,Je,g),s(f,is,g),s(f,Qe,g),s(f,ls,g),s(f,Xe,g),s(f,fs,g),s(f,St,g),s(f,os,g),s(f,Ze,g),s(f,as,g),s(f,Ke,g),s(f,us,g),s(f,et,g),s(f,ms,g),s(f,tt,g),s(f,ps,g),s(f,zt,g),s(f,bs,g),s(f,qt,g),s(f,$s,g),s(f,xe,g),s(f,cs,g),s(f,Mt,g),s(f,hs,g),s(f,Gt,g),s(f,vs,g),s(f,Ct,g),s(f,ws,g),s(f,st,g),s(f,Se,g),s(f,_s,g),s(f,jt,g),s(f,ys,g),s(f,Ot,g),s(f,ks,g),s(f,nt,g),L(rt,f,g),s(f,Bs,g),s(f,ht,g),s(f,it,g),s(f,ds,g),s(f,Ht,g),s(f,Rs,g),s(f,He,g),s(f,vt,g),s(f,Lt,g),s(f,Ts,g),s(f,wt,g),s(f,ze,g),s(f,gs,g),s(f,lt,g),s(f,Ft,g),L(_t,f,g),s(f,Dt,g),L(Ee,f,g),s(f,ft,g),L(qe,f,g),s(f,yt,g),L(Be,f,g),s(f,kt,g),s(f,Bt,g),s(f,Cs,g),L(de,f,g),s(f,Is,g),s(f,Vt,g),s(f,xs,g),L(Ce,f,g),s(f,dt,g),s(f,Yt,g),s(f,Es,g),L(ot,f,g),s(f,Rt,g),L(Le,f,g),s(f,at,g),s(f,It,g),s(f,As,g),L(ve,f,g),s(f,ut,g),L(Fe,f,g),Tt=!0},p(f,g){const xt={};g&16&&(xt.$$scope={dirty:g,ctx:f}),u.$set(xt);const Wt={};g&16&&(Wt.$$scope={dirty:g,ctx:f}),rt.$set(Wt);const gt={};g&16&&(gt.$$scope={dirty:g,ctx:f}),Be.$set(gt);const Et={};g&16&&(Et.$$scope={dirty:g,ctx:f}),de.$set(Et);const Ls={};g&16&&(Ls.$$scope={dirty:g,ctx:f}),Le.$set(Ls);const le={};g&16&&(le.$$scope={dirty:g,ctx:f}),ve.$set(le);const fe={};g&16&&(fe.$$scope={dirty:g,ctx:f}),Fe.$set(fe)},i(f){Tt||(G(u.$$.fragment,f),G(rt.$$.fragment,f),G(_t.$$.fragment,f),G(Ee.$$.fragment,f),G(qe.$$.fragment,f),G(Be.$$.fragment,f),G(de.$$.fragment,f),G(Ce.$$.fragment,f),G(ot.$$.fragment,f),G(Le.$$.fragment,f),G(ve.$$.fragment,f),G(Fe.$$.fragment,f),Tt=!0)},o(f){M(u.$$.fragment,f),M(rt.$$.fragment,f),M(_t.$$.fragment,f),M(Ee.$$.fragment,f),M(qe.$$.fragment,f),M(Be.$$.fragment,f),M(de.$$.fragment,f),M(Ce.$$.fragment,f),M(ot.$$.fragment,f),M(Le.$$.fragment,f),M(ve.$$.fragment,f),M(Fe.$$.fragment,f),Tt=!1},d(f){f&&t(e),f&&t(l),F(u,f),f&&t(p),f&&t(c),f&&t(B),f&&t(v),f&&t(h),f&&t(w),f&&t(T),f&&t(S),f&&t(j),f&&t(x),f&&t(N),f&&t(O),f&&t(W),f&&t(q),f&&t(C),f&&t(Y),f&&t(Q),f&&t(Z),f&&t(k),f&&t(z),f&&t(se),f&&t(V),f&&t(K),f&&t(P),f&&t(J),f&&t(ne),f&&t(te),f&&t(ee),f&&t(re),f&&t(ie),f&&t(oe),f&&t(pe),f&&t(ue),f&&t(ce),f&&t(Re),f&&t(he),f&&t(Ae),f&&t(Me),f&&t(Te),f&&t(_e),f&&t(Ge),f&&t(ye),f&&t(je),f&&t(we),f&&t(Oe),f&&t(ke),f&&t(Ne),f&&t(R),f&&t(X),f&&t(Ie),f&&t(ge),f&&t(pt),f&&t(Ve),f&&t(bt),f&&t($t),f&&t(ae),f&&t(Pe),f&&t(Jt),f&&t(Qt),f&&t(At),f&&t(Xt),f&&t(ct),f&&t(Zt),f&&t(Kt),f&&t(Nt),f&&t(es),f&&t(Pt),f&&t(ts),f&&t(be),f&&t(me),f&&t(Ye),f&&t(ss),f&&t(We),f&&t(ns),f&&t(Ue),f&&t(rs),f&&t(Je),f&&t(is),f&&t(Qe),f&&t(ls),f&&t(Xe),f&&t(fs),f&&t(St),f&&t(os),f&&t(Ze),f&&t(as),f&&t(Ke),f&&t(us),f&&t(et),f&&t(ms),f&&t(tt),f&&t(ps),f&&t(zt),f&&t(bs),f&&t(qt),f&&t($s),f&&t(xe),f&&t(cs),f&&t(Mt),f&&t(hs),f&&t(Gt),f&&t(vs),f&&t(Ct),f&&t(ws),f&&t(st),f&&t(Se),f&&t(_s),f&&t(jt),f&&t(ys),f&&t(Ot),f&&t(ks),f&&t(nt),F(rt,f),f&&t(Bs),f&&t(ht),f&&t(it),f&&t(ds),f&&t(Ht),f&&t(Rs),f&&t(He),f&&t(vt),f&&t(Lt),f&&t(Ts),f&&t(wt),f&&t(ze),f&&t(gs),f&&t(lt),f&&t(Ft),F(_t,f),f&&t(Dt),F(Ee,f),f&&t(ft),F(qe,f),f&&t(yt),F(Be,f),f&&t(kt),f&&t(Bt),f&&t(Cs),F(de,f),f&&t(Is),f&&t(Vt),f&&t(xs),F(Ce,f),f&&t(dt),f&&t(Yt),f&&t(Es),F(ot,f),f&&t(Rt),F(Le,f),f&&t(at),f&&t(It),f&&t(As),F(ve,f),f&&t(ut),F(Fe,f)}}}function Si(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function zi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function qi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Mi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Gi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ji(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Oi(m){let e;return{c(){e=b("\u7ECF\u8FC7\u63D0\u9192\u540ECharGPT\u4ECD\u7136\u62D2\u7EDD\u6539\u6B63\u5176\u9519\u8BEF\uFF0C\u9519\u8BEF\u6B21\u6570\u8FBE\u5230\u4E09\u6B21\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u7ECF\u8FC7\u63D0\u9192\u540ECharGPT\u4ECD\u7136\u62D2\u7EDD\u6539\u6B63\u5176\u9519\u8BEF\uFF0C\u9519\u8BEF\u6B21\u6570\u8FBE\u5230\u4E09\u6B21\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Hi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se,V,K,P,J,ne,te,ee,re,ie,oe,pe,ue,ce,Re,he,Ae,Me,Te,_e,Ge,ye,je,we,Oe,ke,Ne,R,X,Ie,ge,pt,Ve,bt,$t,ae,Pe,Jt,Qt,At,Xt,ct,Zt,Kt,Nt,es,Pt,ts,be,me,Ye,ss,We,ns,Ue,rs,Je,is,Qe,ls,Xe,fs,St,os,Ze,as,Ke,us,et,ms,tt,ps,zt,bs,qt,$s,xe,cs,Mt,hs,Gt,vs,Ct,ws,st,Se,_s,jt,ys,Ot,ks,nt,rt,Bs,ht,it,ds,Ht,Rs,He,vt,Lt,Ts,wt,ze,gs,lt,Ft,_t,Dt,Ee,ft,qe,yt,Be,kt,Bt,Cs,de,Is,Vt,xs,Ce,dt,Yt,Es,ot,Rt,Le,at,It,As,ve,ut,Fe,Tt,f,g,xt,Wt,gt,Et,Ls,le,fe,Js,Qs,Xs,Ns,Ds,Zs,Ks,Vs,en,Ps,Ut,Ws,De,tn,sn,nn,Ss,Ys,$e,rn;return u=new Ms({props:{$$slots:{default:[Si]},$$scope:{ctx:m}}}),He=new Gs({props:{$$slots:{default:[zi]},$$scope:{ctx:m}}}),qe=new Fs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Bt=new on({}),de=new Ms({props:{$$slots:{default:[qi]},$$scope:{ctx:m}}}),Ce=new Gs({props:{$$slots:{default:[Mi]},$$scope:{ctx:m}}}),Tt=new Fs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Wt=new on({}),Et=new Ms({props:{$$slots:{default:[Gi]},$$scope:{ctx:m}}}),le=new Gs({props:{$$slots:{default:[ji]},$$scope:{ctx:m}}}),Ut=new Fs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Ss=new on({}),$e=new kn({props:{$$slots:{default:[Oi]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B97\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=E(),H(u.$$.fragment),p=b(`
        A. Indirect Sort`),c=o("br"),B=b(`
        time limit per test: 1 second`),v=o("br"),h=b(`
        memory limit per test: 256 megabytes`),w=o("br"),T=b(`
        input: standard input`),S=o("br"),j=b(`
        output: standard output`),x=o("br"),N=b(`

        You are given a permutation a1,a2,\u2026,an of size n, where each integer
        from 1 to n appears exactly once.`),O=o("br"),W=b(`

        You can do the following operation any number of times (possibly, zero):`),q=o("br"),C=o("br"),Y=b(`

        Choose any three indices i,j,k (1\u2264i`),Q=o("j<k\u2264n)."),Z=b(`
        If ai>ak, replace ai with ai+aj. Otherwise, swap aj and ak. `),k=o("br"),z=b(`

        Determine whether you can make the array a sorted in non-descending
        order.`),se=o("br"),V=b(`
        Input`),K=o("br"),P=o("br"),J=b(`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22645000) \u2014 the number of test cases. The description
        of test cases follows.`),ne=o("br"),te=o("br"),ee=b(`

        The first line of each test case contains a single integer n (3\u2264n\u226410) \u2014
        the length of the array a.`),re=o("br"),ie=o("br"),oe=b(`

        The second line contains n integers a1,a2,\u2026,an (1\u2264ai\u2264n, ai\u2260aj if i\u2260j) \u2014
        the elements of the array a.`),pe=o("br"),ue=o("br"),ce=b(`
        Output For each test case, output "Yes" (without quotes) if the array can
        be sorted in non-descending order, and "No" (without quotes) otherwise.`),Re=o("br"),he=o("br"),Ae=b(`

        You can output "Yes" and "No" in any case (for example, strings "YES",
        "yEs" and "yes" will be recognized as a positive response).`),Me=o("br"),Te=o("br"),_e=b(`

        Example`),Ge=o("br"),ye=b(`
        Input`),je=o("br"),we=o("br"),Oe=b(`

        7`),ke=o("br"),Ne=b(`
        3`),R=o("br"),X=b(`
        1 2 3`),Ie=o("br"),ge=b(`
        3`),pt=o("br"),Ve=b(`
        1 3 2`),bt=o("br"),$t=b(`
        7`),ae=o("br"),Pe=b(`
        5 3 4 7 6 2 1`),Jt=o("br"),Qt=b(`
        7`),At=o("br"),Xt=b(`
        7 6 5 4 3 2 1`),ct=o("br"),Zt=b(`
        5`),Kt=o("br"),Nt=b(`
        2 1 4 5 3`),es=o("br"),Pt=b(`
        5`),ts=o("br"),be=b(`
        2 1 3 4 5`),me=o("br"),Ye=b(`
        7`),ss=o("br"),We=b(`
        1 2 6 7 4 3 5`),ns=o("br"),Ue=o("br"),rs=b(`

        Output`),Je=o("br"),is=o("br"),Qe=b(`

        Yes`),ls=o("br"),Xe=b(`
        Yes`),fs=o("br"),St=b(`
        No`),os=o("br"),Ze=b(`
        No`),as=o("br"),Ke=b(`
        No`),us=o("br"),et=b(`
        No`),ms=o("br"),tt=b(`
        Yes`),ps=o("br"),zt=o("br"),bs=b(`

        Note`),qt=o("br"),$s=o("br"),xe=b(`

        In the first test case, [1,2,3] is already sorted in non-descending
        order.`),cs=o("br"),Mt=o("br"),hs=b(`

        In the second test case, we can choose i=1,j=2,k=3. Since a1\u2264a3, swap a2
        and a3, the array then becomes [1,2,3], which is sorted in
        non-descending order.`),Gt=o("br"),vs=o("br"),Ct=b(`

        In the seventh test case, we can do the following operations
        successively:`),ws=o("br"),st=b(`
        Choose i=5,j=6,k=7. Since a5\u2264a7, swap a6 and a7, the array then becomes [1,2,6,7,4,5,3].`),Se=o("br"),_s=b(`
        Choose i=5,j=6,k=7. Since a5>a7, replace a5 with a5+a6=9, the array then
        becomes [1,2,6,7,9,5,3].`),jt=o("br"),ys=b(`
        Choose i=2,j=5,k=7. Since a2\u2264a7, swap a5 and a7, the array then becomes [1,2,6,7,3,5,9].`),Ot=o("br"),ks=b(`
        Choose i=2,j=4,k=6. Since a2\u2264a6, swap a4 and a6, the array then becomes [1,2,6,5,3,7,9].`),nt=o("br"),rt=b(`
        Choose i=1,j=3,k=5. Since a1\u2264a5, swap a3 and a5, the array then becomes [1,2,3,5,6,7,9],
        which is sorted in non-descending order. `),Bs=o("br"),ht=o("br"),it=b(`

        In the third, the fourth, the fifth and the sixth test cases, it can be
        shown that the array cannot be sorted in non-descending order.`),ds=o("br"),Ht=o("br"),Rs=E(),H(He.$$.fragment),vt=b(`
        There is a simple way to determine whether a given permutation of the numbers
        1 through n can be sorted into non-descending order using the operations
        specified in the problem statement. To do this, we will use the following
        observation:`),Lt=o("br"),Ts=o("br"),wt=b(`

        If the permutation contains any number that is greater than the number
        that follows it, then it is impossible to sort the permutation into
        non-descending order using the given operations. This is because the
        operation that replaces a number with the sum of itself and the number
        that follows it can only increase the value of that number, so if there
        is any number that is already greater than the number that follows it,
        it will always remain greater than the number that follows it after any
        number of operations are applied.`),ze=o("br"),gs=o("br"),lt=b(`

        With this observation in mind, we can simply scan the permutation from
        left to right and check if there is any number that is greater than the
        number that follows it. If there is, we can immediately output "No" and
        move on to the next test case. Otherwise, we can output "Yes" because we
        know that the permutation can be sorted into non-descending order using
        the given operations.`),Ft=o("br"),_t=o("br"),Dt=b(`

        Here is some sample pseudo-code that shows how this idea can be
        implemented:`),Ee=o("br"),ft=E(),H(qe.$$.fragment),yt=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),Be=o("br"),kt=E(),H(Bt.$$.fragment),Cs=E(),H(de.$$.fragment),Is=b(`
        Please output whether the array can be sorted into non-descending order using
        the given operation. I'm not asking if the array is already sorted.`),Vt=o("br"),xs=E(),H(Ce.$$.fragment),dt=b(`
        To determine whether a given permutation of the numbers 1 through n can be
        sorted into non-descending order using the operations specified in the problem
        statement, we can use the following approach:`),Yt=o("br"),Es=o("br"),ot=b(`

        Scan the permutation from left to right.`),Rt=o("br"),Le=b(`
        For each number in the permutation, check if it is greater than the number
        that follows it. If it is, output "No" and move on to the next test case.`),at=o("br"),It=b(`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),As=o("br"),ve=b(`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),ut=o("br"),Fe=E(),H(Tt.$$.fragment),f=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),g=o("br"),xt=E(),H(Wt.$$.fragment),gt=E(),H(Et.$$.fragment),Ls=b(`
        Please retry.
        `),H(le.$$.fragment),fe=b(`
        I apologize if my previous answer was not clear or did not fully address
        your question. To determine whether a given permutation of the numbers 1
        through n can be sorted into non-descending order using the operations specified
        in the problem statement, we can use the following approach:`),Js=o("br"),Qs=o("br"),Xs=b(`

        Scan the permutation from left to right. For each number in the
        permutation, check if it is greater than the number that follows it. If
        it is, output "No" and move on to the next test case.`),Ns=o("br"),Ds=b(`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),Zs=o("br"),Ks=o("br"),Vs=b(`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),en=o("br"),Ps=E(),H(Ut.$$.fragment),Ws=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),De=o("br"),tn=b(`
        I hope this helps. Let me know if you have any other questions.`),sn=o("br"),nn=E(),H(Ss.$$.fragment),Ys=E(),H($e.$$.fragment),this.h()},l(i){e=a(i,"H2",{});var y=U(e);n=$(y,"\u6D4B\u8BD5\u70B97\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),y.forEach(t),l=A(i),D(u.$$.fragment,i),p=$(i,`
        A. Indirect Sort`),c=a(i,"BR",{}),B=$(i,`
        time limit per test: 1 second`),v=a(i,"BR",{}),h=$(i,`
        memory limit per test: 256 megabytes`),w=a(i,"BR",{}),T=$(i,`
        input: standard input`),S=a(i,"BR",{}),j=$(i,`
        output: standard output`),x=a(i,"BR",{}),N=$(i,`

        You are given a permutation a1,a2,\u2026,an of size n, where each integer
        from 1 to n appears exactly once.`),O=a(i,"BR",{}),W=$(i,`

        You can do the following operation any number of times (possibly, zero):`),q=a(i,"BR",{}),C=a(i,"BR",{}),Y=$(i,`

        Choose any three indices i,j,k (1\u2264i`),Q=a(i,"J<K\u2264N).",{"<br":!0}),U(Q).forEach(t),Z=$(i,`
        If ai>ak, replace ai with ai+aj. Otherwise, swap aj and ak. `),k=a(i,"BR",{}),z=$(i,`

        Determine whether you can make the array a sorted in non-descending
        order.`),se=a(i,"BR",{}),V=$(i,`
        Input`),K=a(i,"BR",{}),P=a(i,"BR",{}),J=$(i,`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22645000) \u2014 the number of test cases. The description
        of test cases follows.`),ne=a(i,"BR",{}),te=a(i,"BR",{}),ee=$(i,`

        The first line of each test case contains a single integer n (3\u2264n\u226410) \u2014
        the length of the array a.`),re=a(i,"BR",{}),ie=a(i,"BR",{}),oe=$(i,`

        The second line contains n integers a1,a2,\u2026,an (1\u2264ai\u2264n, ai\u2260aj if i\u2260j) \u2014
        the elements of the array a.`),pe=a(i,"BR",{}),ue=a(i,"BR",{}),ce=$(i,`
        Output For each test case, output "Yes" (without quotes) if the array can
        be sorted in non-descending order, and "No" (without quotes) otherwise.`),Re=a(i,"BR",{}),he=a(i,"BR",{}),Ae=$(i,`

        You can output "Yes" and "No" in any case (for example, strings "YES",
        "yEs" and "yes" will be recognized as a positive response).`),Me=a(i,"BR",{}),Te=a(i,"BR",{}),_e=$(i,`

        Example`),Ge=a(i,"BR",{}),ye=$(i,`
        Input`),je=a(i,"BR",{}),we=a(i,"BR",{}),Oe=$(i,`

        7`),ke=a(i,"BR",{}),Ne=$(i,`
        3`),R=a(i,"BR",{}),X=$(i,`
        1 2 3`),Ie=a(i,"BR",{}),ge=$(i,`
        3`),pt=a(i,"BR",{}),Ve=$(i,`
        1 3 2`),bt=a(i,"BR",{}),$t=$(i,`
        7`),ae=a(i,"BR",{}),Pe=$(i,`
        5 3 4 7 6 2 1`),Jt=a(i,"BR",{}),Qt=$(i,`
        7`),At=a(i,"BR",{}),Xt=$(i,`
        7 6 5 4 3 2 1`),ct=a(i,"BR",{}),Zt=$(i,`
        5`),Kt=a(i,"BR",{}),Nt=$(i,`
        2 1 4 5 3`),es=a(i,"BR",{}),Pt=$(i,`
        5`),ts=a(i,"BR",{}),be=$(i,`
        2 1 3 4 5`),me=a(i,"BR",{}),Ye=$(i,`
        7`),ss=a(i,"BR",{}),We=$(i,`
        1 2 6 7 4 3 5`),ns=a(i,"BR",{}),Ue=a(i,"BR",{}),rs=$(i,`

        Output`),Je=a(i,"BR",{}),is=a(i,"BR",{}),Qe=$(i,`

        Yes`),ls=a(i,"BR",{}),Xe=$(i,`
        Yes`),fs=a(i,"BR",{}),St=$(i,`
        No`),os=a(i,"BR",{}),Ze=$(i,`
        No`),as=a(i,"BR",{}),Ke=$(i,`
        No`),us=a(i,"BR",{}),et=$(i,`
        No`),ms=a(i,"BR",{}),tt=$(i,`
        Yes`),ps=a(i,"BR",{}),zt=a(i,"BR",{}),bs=$(i,`

        Note`),qt=a(i,"BR",{}),$s=a(i,"BR",{}),xe=$(i,`

        In the first test case, [1,2,3] is already sorted in non-descending
        order.`),cs=a(i,"BR",{}),Mt=a(i,"BR",{}),hs=$(i,`

        In the second test case, we can choose i=1,j=2,k=3. Since a1\u2264a3, swap a2
        and a3, the array then becomes [1,2,3], which is sorted in
        non-descending order.`),Gt=a(i,"BR",{}),vs=a(i,"BR",{}),Ct=$(i,`

        In the seventh test case, we can do the following operations
        successively:`),ws=a(i,"BR",{}),st=$(i,`
        Choose i=5,j=6,k=7. Since a5\u2264a7, swap a6 and a7, the array then becomes [1,2,6,7,4,5,3].`),Se=a(i,"BR",{}),_s=$(i,`
        Choose i=5,j=6,k=7. Since a5>a7, replace a5 with a5+a6=9, the array then
        becomes [1,2,6,7,9,5,3].`),jt=a(i,"BR",{}),ys=$(i,`
        Choose i=2,j=5,k=7. Since a2\u2264a7, swap a5 and a7, the array then becomes [1,2,6,7,3,5,9].`),Ot=a(i,"BR",{}),ks=$(i,`
        Choose i=2,j=4,k=6. Since a2\u2264a6, swap a4 and a6, the array then becomes [1,2,6,5,3,7,9].`),nt=a(i,"BR",{}),rt=$(i,`
        Choose i=1,j=3,k=5. Since a1\u2264a5, swap a3 and a5, the array then becomes [1,2,3,5,6,7,9],
        which is sorted in non-descending order. `),Bs=a(i,"BR",{}),ht=a(i,"BR",{}),it=$(i,`

        In the third, the fourth, the fifth and the sixth test cases, it can be
        shown that the array cannot be sorted in non-descending order.`),ds=a(i,"BR",{}),Ht=a(i,"BR",{}),Rs=A(i),D(He.$$.fragment,i),vt=$(i,`
        There is a simple way to determine whether a given permutation of the numbers
        1 through n can be sorted into non-descending order using the operations
        specified in the problem statement. To do this, we will use the following
        observation:`),Lt=a(i,"BR",{}),Ts=a(i,"BR",{}),wt=$(i,`

        If the permutation contains any number that is greater than the number
        that follows it, then it is impossible to sort the permutation into
        non-descending order using the given operations. This is because the
        operation that replaces a number with the sum of itself and the number
        that follows it can only increase the value of that number, so if there
        is any number that is already greater than the number that follows it,
        it will always remain greater than the number that follows it after any
        number of operations are applied.`),ze=a(i,"BR",{}),gs=a(i,"BR",{}),lt=$(i,`

        With this observation in mind, we can simply scan the permutation from
        left to right and check if there is any number that is greater than the
        number that follows it. If there is, we can immediately output "No" and
        move on to the next test case. Otherwise, we can output "Yes" because we
        know that the permutation can be sorted into non-descending order using
        the given operations.`),Ft=a(i,"BR",{}),_t=a(i,"BR",{}),Dt=$(i,`

        Here is some sample pseudo-code that shows how this idea can be
        implemented:`),Ee=a(i,"BR",{}),ft=A(i),D(qe.$$.fragment,i),yt=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),Be=a(i,"BR",{}),kt=A(i),D(Bt.$$.fragment,i),Cs=A(i),D(de.$$.fragment,i),Is=$(i,`
        Please output whether the array can be sorted into non-descending order using
        the given operation. I'm not asking if the array is already sorted.`),Vt=a(i,"BR",{}),xs=A(i),D(Ce.$$.fragment,i),dt=$(i,`
        To determine whether a given permutation of the numbers 1 through n can be
        sorted into non-descending order using the operations specified in the problem
        statement, we can use the following approach:`),Yt=a(i,"BR",{}),Es=a(i,"BR",{}),ot=$(i,`

        Scan the permutation from left to right.`),Rt=a(i,"BR",{}),Le=$(i,`
        For each number in the permutation, check if it is greater than the number
        that follows it. If it is, output "No" and move on to the next test case.`),at=a(i,"BR",{}),It=$(i,`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),As=a(i,"BR",{}),ve=$(i,`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),ut=a(i,"BR",{}),Fe=A(i),D(Tt.$$.fragment,i),f=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),g=a(i,"BR",{}),xt=A(i),D(Wt.$$.fragment,i),gt=A(i),D(Et.$$.fragment,i),Ls=$(i,`
        Please retry.
        `),D(le.$$.fragment,i),fe=$(i,`
        I apologize if my previous answer was not clear or did not fully address
        your question. To determine whether a given permutation of the numbers 1
        through n can be sorted into non-descending order using the operations specified
        in the problem statement, we can use the following approach:`),Js=a(i,"BR",{}),Qs=a(i,"BR",{}),Xs=$(i,`

        Scan the permutation from left to right. For each number in the
        permutation, check if it is greater than the number that follows it. If
        it is, output "No" and move on to the next test case.`),Ns=a(i,"BR",{}),Ds=$(i,`
        If no numbers in the permutation are greater than the number that follows
        it, output "Yes" because we know that the permutation can be sorted into
        non-descending order using the given operations.`),Zs=a(i,"BR",{}),Ks=a(i,"BR",{}),Vs=$(i,`

        Here is some sample pseudo-code that shows how this approach can be
        implemented:`),en=a(i,"BR",{}),Ps=A(i),D(Ut.$$.fragment,i),Ws=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),De=a(i,"BR",{}),tn=$(i,`
        I hope this helps. Let me know if you have any other questions.`),sn=a(i,"BR",{}),nn=A(i),D(Ss.$$.fragment,i),Ys=A(i),D($e.$$.fragment,i),this.h()},h(){I(Q,"<br","")},m(i,y){s(i,e,y),_(e,n),s(i,l,y),L(u,i,y),s(i,p,y),s(i,c,y),s(i,B,y),s(i,v,y),s(i,h,y),s(i,w,y),s(i,T,y),s(i,S,y),s(i,j,y),s(i,x,y),s(i,N,y),s(i,O,y),s(i,W,y),s(i,q,y),s(i,C,y),s(i,Y,y),s(i,Q,y),s(i,Z,y),s(i,k,y),s(i,z,y),s(i,se,y),s(i,V,y),s(i,K,y),s(i,P,y),s(i,J,y),s(i,ne,y),s(i,te,y),s(i,ee,y),s(i,re,y),s(i,ie,y),s(i,oe,y),s(i,pe,y),s(i,ue,y),s(i,ce,y),s(i,Re,y),s(i,he,y),s(i,Ae,y),s(i,Me,y),s(i,Te,y),s(i,_e,y),s(i,Ge,y),s(i,ye,y),s(i,je,y),s(i,we,y),s(i,Oe,y),s(i,ke,y),s(i,Ne,y),s(i,R,y),s(i,X,y),s(i,Ie,y),s(i,ge,y),s(i,pt,y),s(i,Ve,y),s(i,bt,y),s(i,$t,y),s(i,ae,y),s(i,Pe,y),s(i,Jt,y),s(i,Qt,y),s(i,At,y),s(i,Xt,y),s(i,ct,y),s(i,Zt,y),s(i,Kt,y),s(i,Nt,y),s(i,es,y),s(i,Pt,y),s(i,ts,y),s(i,be,y),s(i,me,y),s(i,Ye,y),s(i,ss,y),s(i,We,y),s(i,ns,y),s(i,Ue,y),s(i,rs,y),s(i,Je,y),s(i,is,y),s(i,Qe,y),s(i,ls,y),s(i,Xe,y),s(i,fs,y),s(i,St,y),s(i,os,y),s(i,Ze,y),s(i,as,y),s(i,Ke,y),s(i,us,y),s(i,et,y),s(i,ms,y),s(i,tt,y),s(i,ps,y),s(i,zt,y),s(i,bs,y),s(i,qt,y),s(i,$s,y),s(i,xe,y),s(i,cs,y),s(i,Mt,y),s(i,hs,y),s(i,Gt,y),s(i,vs,y),s(i,Ct,y),s(i,ws,y),s(i,st,y),s(i,Se,y),s(i,_s,y),s(i,jt,y),s(i,ys,y),s(i,Ot,y),s(i,ks,y),s(i,nt,y),s(i,rt,y),s(i,Bs,y),s(i,ht,y),s(i,it,y),s(i,ds,y),s(i,Ht,y),s(i,Rs,y),L(He,i,y),s(i,vt,y),s(i,Lt,y),s(i,Ts,y),s(i,wt,y),s(i,ze,y),s(i,gs,y),s(i,lt,y),s(i,Ft,y),s(i,_t,y),s(i,Dt,y),s(i,Ee,y),s(i,ft,y),L(qe,i,y),s(i,yt,y),s(i,Be,y),s(i,kt,y),L(Bt,i,y),s(i,Cs,y),L(de,i,y),s(i,Is,y),s(i,Vt,y),s(i,xs,y),L(Ce,i,y),s(i,dt,y),s(i,Yt,y),s(i,Es,y),s(i,ot,y),s(i,Rt,y),s(i,Le,y),s(i,at,y),s(i,It,y),s(i,As,y),s(i,ve,y),s(i,ut,y),s(i,Fe,y),L(Tt,i,y),s(i,f,y),s(i,g,y),s(i,xt,y),L(Wt,i,y),s(i,gt,y),L(Et,i,y),s(i,Ls,y),L(le,i,y),s(i,fe,y),s(i,Js,y),s(i,Qs,y),s(i,Xs,y),s(i,Ns,y),s(i,Ds,y),s(i,Zs,y),s(i,Ks,y),s(i,Vs,y),s(i,en,y),s(i,Ps,y),L(Ut,i,y),s(i,Ws,y),s(i,De,y),s(i,tn,y),s(i,sn,y),s(i,nn,y),L(Ss,i,y),s(i,Ys,y),L($e,i,y),rn=!0},p(i,y){const r={};y&16&&(r.$$scope={dirty:y,ctx:i}),u.$set(r);const d={};y&16&&(d.$$scope={dirty:y,ctx:i}),He.$set(d);const mn={};y&16&&(mn.$$scope={dirty:y,ctx:i}),de.$set(mn);const pn={};y&16&&(pn.$$scope={dirty:y,ctx:i}),Ce.$set(pn);const bn={};y&16&&(bn.$$scope={dirty:y,ctx:i}),Et.$set(bn);const $n={};y&16&&($n.$$scope={dirty:y,ctx:i}),le.$set($n);const cn={};y&16&&(cn.$$scope={dirty:y,ctx:i}),$e.$set(cn)},i(i){rn||(G(u.$$.fragment,i),G(He.$$.fragment,i),G(qe.$$.fragment,i),G(Bt.$$.fragment,i),G(de.$$.fragment,i),G(Ce.$$.fragment,i),G(Tt.$$.fragment,i),G(Wt.$$.fragment,i),G(Et.$$.fragment,i),G(le.$$.fragment,i),G(Ut.$$.fragment,i),G(Ss.$$.fragment,i),G($e.$$.fragment,i),rn=!0)},o(i){M(u.$$.fragment,i),M(He.$$.fragment,i),M(qe.$$.fragment,i),M(Bt.$$.fragment,i),M(de.$$.fragment,i),M(Ce.$$.fragment,i),M(Tt.$$.fragment,i),M(Wt.$$.fragment,i),M(Et.$$.fragment,i),M(le.$$.fragment,i),M(Ut.$$.fragment,i),M(Ss.$$.fragment,i),M($e.$$.fragment,i),rn=!1},d(i){i&&t(e),i&&t(l),F(u,i),i&&t(p),i&&t(c),i&&t(B),i&&t(v),i&&t(h),i&&t(w),i&&t(T),i&&t(S),i&&t(j),i&&t(x),i&&t(N),i&&t(O),i&&t(W),i&&t(q),i&&t(C),i&&t(Y),i&&t(Q),i&&t(Z),i&&t(k),i&&t(z),i&&t(se),i&&t(V),i&&t(K),i&&t(P),i&&t(J),i&&t(ne),i&&t(te),i&&t(ee),i&&t(re),i&&t(ie),i&&t(oe),i&&t(pe),i&&t(ue),i&&t(ce),i&&t(Re),i&&t(he),i&&t(Ae),i&&t(Me),i&&t(Te),i&&t(_e),i&&t(Ge),i&&t(ye),i&&t(je),i&&t(we),i&&t(Oe),i&&t(ke),i&&t(Ne),i&&t(R),i&&t(X),i&&t(Ie),i&&t(ge),i&&t(pt),i&&t(Ve),i&&t(bt),i&&t($t),i&&t(ae),i&&t(Pe),i&&t(Jt),i&&t(Qt),i&&t(At),i&&t(Xt),i&&t(ct),i&&t(Zt),i&&t(Kt),i&&t(Nt),i&&t(es),i&&t(Pt),i&&t(ts),i&&t(be),i&&t(me),i&&t(Ye),i&&t(ss),i&&t(We),i&&t(ns),i&&t(Ue),i&&t(rs),i&&t(Je),i&&t(is),i&&t(Qe),i&&t(ls),i&&t(Xe),i&&t(fs),i&&t(St),i&&t(os),i&&t(Ze),i&&t(as),i&&t(Ke),i&&t(us),i&&t(et),i&&t(ms),i&&t(tt),i&&t(ps),i&&t(zt),i&&t(bs),i&&t(qt),i&&t($s),i&&t(xe),i&&t(cs),i&&t(Mt),i&&t(hs),i&&t(Gt),i&&t(vs),i&&t(Ct),i&&t(ws),i&&t(st),i&&t(Se),i&&t(_s),i&&t(jt),i&&t(ys),i&&t(Ot),i&&t(ks),i&&t(nt),i&&t(rt),i&&t(Bs),i&&t(ht),i&&t(it),i&&t(ds),i&&t(Ht),i&&t(Rs),F(He,i),i&&t(vt),i&&t(Lt),i&&t(Ts),i&&t(wt),i&&t(ze),i&&t(gs),i&&t(lt),i&&t(Ft),i&&t(_t),i&&t(Dt),i&&t(Ee),i&&t(ft),F(qe,i),i&&t(yt),i&&t(Be),i&&t(kt),F(Bt,i),i&&t(Cs),F(de,i),i&&t(Is),i&&t(Vt),i&&t(xs),F(Ce,i),i&&t(dt),i&&t(Yt),i&&t(Es),i&&t(ot),i&&t(Rt),i&&t(Le),i&&t(at),i&&t(It),i&&t(As),i&&t(ve),i&&t(ut),i&&t(Fe),F(Tt,i),i&&t(f),i&&t(g),i&&t(xt),F(Wt,i),i&&t(gt),F(Et,i),i&&t(Ls),F(le,i),i&&t(fe),i&&t(Js),i&&t(Qs),i&&t(Xs),i&&t(Ns),i&&t(Ds),i&&t(Zs),i&&t(Ks),i&&t(Vs),i&&t(en),i&&t(Ps),F(Ut,i),i&&t(Ws),i&&t(De),i&&t(tn),i&&t(sn),i&&t(nn),F(Ss,i),i&&t(Ys),F($e,i)}}}function Li(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Fi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Di(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Vi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Yi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Wi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ui(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ji(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Qi(m){let e;return{c(){e=b("ChatGPT\u5411\u4EBA\u7C7B\u8BE2\u95EE\u7B97\u6CD5\uFF0C\u5E76\u4EC5\u5728\u6D4B\u8BD5\u4EBA\u7ED9\u51FA\u6838\u5FC3\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u6B63\u786E\u5199\u51FA\u4EE3\u7801\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"ChatGPT\u5411\u4EBA\u7C7B\u8BE2\u95EE\u7B97\u6CD5\uFF0C\u5E76\u4EC5\u5728\u6D4B\u8BD5\u4EBA\u7ED9\u51FA\u6838\u5FC3\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u6B63\u786E\u5199\u51FA\u4EE3\u7801\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Xi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q,C,Y,Q,Z,k,z,se,V,K,P,J,ne,te,ee,re,ie,oe,pe,ue,ce,Re,he,Ae,Me,Te,_e,Ge,ye,je,we,Oe,ke,Ne,R,X,Ie,ge,pt,Ve,bt,$t,ae,Pe,Jt,Qt,At,Xt,ct,Zt,Kt,Nt,es,Pt,ts,be,me,Ye,ss,We,ns,Ue,rs,Je,is,Qe,ls,Xe,fs,St,os,Ze,as,Ke,us,et,ms,tt,ps,zt,bs,qt,$s,xe,cs,Mt,hs,Gt,vs,Ct,ws,st,Se,_s,jt,ys,Ot,ks,nt,rt,Bs,ht,it,ds,Ht,Rs,He,vt,Lt,Ts,wt,ze,gs,lt,Ft,_t,Dt,Ee,ft,qe,yt,Be,kt,Bt,Cs,de,Is,Vt,xs,Ce,dt,Yt,Es,ot,Rt,Le,at,It,As,ve,ut,Fe,Tt,f,g,xt,Wt,gt,Et,Ls,le,fe,Js,Qs,Xs,Ns,Ds,Zs,Ks,Vs,en,Ps,Ut,Ws,De,tn,sn,nn,Ss,Ys,$e,rn,i,y;return u=new Ms({props:{$$slots:{default:[Li]},$$scope:{ctx:m}}}),xe=new Gs({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),vt=new Fs({props:{data:`for each test case:
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
`}}),ze=new on({}),lt=new Ms({props:{$$slots:{default:[Di]},$$scope:{ctx:m}}}),Ee=new Gs({props:{$$slots:{default:[Vi]},$$scope:{ctx:m}}}),dt=new Fs({props:{data:`for each test case:
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
`}}),Rt=new on({}),at=new Ms({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),ut=new Gs({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),gt=new Ms({props:{$$slots:{default:[Ui]},$$scope:{ctx:m}}}),fe=new Gs({props:{$$slots:{default:[Ji]},$$scope:{ctx:m}}}),Ss=new Fs({props:{data:`for each test case:
    sum up all the numbers in the array
    take the absolute value of the result
    print the result
`}}),$e=new Cn({}),i=new kn({props:{$$slots:{default:[Qi]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B98\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=E(),H(u.$$.fragment),p=b(`
        Solve the following problem:`),c=o("br"),B=b(`
        A. Two Groups`),v=o("br"),h=b(`
        time limit per test: 1 second`),w=o("br"),T=b(`
        memory limit per test: 256 megabytes`),S=o("br"),j=b(`
        input: standard input`),x=o("br"),N=b(`
        output: standard output`),O=o("br"),W=b(`

        You are given an array a consisting of n integers. You want to
        distribute these n integers into two groups s1 and s2 (groups can be
        empty) so that the following conditions are satisfied:`),q=o("br"),C=o("br"),Y=b(`

        For each i (1\u2264i\u2264n), ai goes into exactly one group. The value
        |sum(s1)|\u2212|sum(s2)| is the maximum possible among all such ways to
        distribute the integers.`),Q=o("br"),Z=o("br"),k=b(`

        Here sum(s1) denotes the sum of the numbers in the group s1, and sum(s2)
        denotes the sum of the numbers in the group s2.`),z=o("br"),se=o("br"),V=b(`

        Determine the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),K=o("br"),P=o("br"),J=b(`

        Input`),ne=o("br"),te=o("br"),ee=b(`

        The input consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22642\u22C5104)\xA0\u2014 the number of test cases. The description
        of the test cases follows.`),re=o("br"),ie=o("br"),oe=b(`

        The first line of each test case contains a single integer n (1\u2264n\u2264105) \u2014
        the length of the array a.`),pe=o("br"),ue=o("br"),ce=b(`

        The second line of each test case contains n integers a1,a2\u2026an
        (\u2212109\u2264ai\u2264109) \u2014 elements of the array a.`),Re=o("br"),he=o("br"),Ae=b(`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Me=o("br"),Te=o("br"),_e=b(`

        Output`),Ge=o("br"),ye=o("br"),je=b(`

        For each test case, output a single integer \u2014 the maximum possible value
        of |sum(s1)|\u2212|sum(s2)|.`),we=o("br"),Oe=o("br"),ke=b(`

        Example`),Ne=o("br"),R=b(`
        Input`),X=o("br"),Ie=o("br"),ge=b(`

        4`),pt=o("br"),Ve=b(`
        2`),bt=o("br"),$t=b(`
        10 -10`),ae=o("br"),Pe=b(`
        4`),Jt=o("br"),Qt=b(`
        -2 -1 11 0`),At=o("br"),Xt=b(`
        3`),ct=o("br"),Zt=b(`
        2 3 2`),Kt=o("br"),Nt=b(`
        5`),es=o("br"),Pt=b(`
        -9 2 0 0 -4`),ts=o("br"),be=o("br"),me=b(`

        Output`),Ye=o("br"),ss=o("br"),We=b(`

        0`),ns=o("br"),Ue=b(`
        8`),rs=o("br"),Je=b(`
        7`),is=o("br"),Qe=b(`
        11`),ls=o("br"),Xe=b(`

        Note`),fs=o("br"),St=o("br"),os=b(`

        In the first testcase, we can distribute as s1={10},
        s2={\u221210}. Then the value will be |10|\u2212|\u221210|=0.`),Ze=o("br"),as=o("br"),Ke=b(`

        In the second testcase, we can distribute as s1={0,11,\u22121},
        s2={\u22122}. Then the value will be |0+11\u22121|\u2212|\u22122|=10\u22122=8.`),us=o("br"),et=o("br"),ms=b(`

        In the third testcase, we can distribute as s1={2,3,2},
        s2={}. Then the value will be |2+3+2|\u2212|0|=7.`),tt=o("br"),ps=o("br"),zt=b(`

        In the fourth testcase, we can distribute as s1={\u22129,\u22124,0},
        s2={2,0}. Then the value will be |\u22129\u22124+0|\u2212|2+0|=13\u22122=11.`),bs=o("br"),qt=o("br"),$s=E(),H(xe.$$.fragment),cs=b(`
        To solve this problem, we can use a greedy approach. The idea is to put the
        numbers into the two groups in such a way that the absolute difference between
        the sums of the two groups is maximized.`),Mt=o("br"),hs=o("br"),Gt=b(`

        Here is how we can do it:`),vs=o("br"),Ct=o("br"),ws=b(`

        Sort the numbers in the array in non-descending order.`),st=o("br"),Se=b(`
        Start with empty groups.`),_s=o("br"),jt=b(`
        Take the first number from the sorted array and put it in group 1.`),ys=o("br"),Ot=b(`
        Take the second number from the sorted array and put it in group 2.`),ks=o("br"),nt=b(`
        Repeat steps 3 and 4 until there are no more numbers in the array.`),rt=o("br"),Bs=o("br"),ht=b(`

        After doing this, the absolute difference between the sums of the two
        groups will be the maximum possible value.`),it=o("br"),ds=o("br"),Ht=b(`

        Here is the pseudocode for the solution:`),Rs=o("br"),He=E(),H(vt.$$.fragment),Lt=b(`
        We can implement this solution in any programming language of our choice.`),Ts=o("br"),wt=E(),H(ze.$$.fragment),gs=E(),H(lt.$$.fragment),Ft=b(`
        Notice that we are finding the maximum value instead of the minimum one.`),_t=o("br"),Dt=E(),H(Ee.$$.fragment),ft=b(`
        Yes, you are right. In the original problem statement, the goal is to maximize
        the absolute difference between the sums of the two groups. This means that
        we want to find the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),qe=o("br"),yt=o("br"),Be=b(`

        To do this, we can use a greedy approach, as described in the previous
        answer. This approach will ensure that the absolute difference between
        the sums of the two groups is maximized.`),kt=o("br"),Bt=o("br"),Cs=b(`

        In the solution, we sort the numbers in the array in non-descending
        order and then put the numbers into the two groups in such a way that
        the absolute difference between the sums of the two groups is maximized.
        This is achieved by always putting the next number from the sorted array
        into the group with the smaller sum.`),de=o("br"),Is=o("br"),Vt=b(`

        Here is the pseudocode for the solution:`),xs=o("br"),Ce=E(),H(dt.$$.fragment),Yt=b(`
        We can implement this solution in any programming language of our choice.`),Es=o("br"),ot=E(),H(Rt.$$.fragment),Le=E(),H(at.$$.fragment),It=b(`
        However, your answer is incorrect and does not pass the test. Please try
        again. The correct solution is far simpler.`),As=o("br"),ve=E(),H(ut.$$.fragment),Fe=b(`
        I apologize if my previous answer did not fully address your question. Can
        you please provide more information about what is incorrect in my solution,
        or what is missing in it? This will help me understand where I went wrong
        and provide a better answer.`),Tt=o("br"),f=o("br"),g=b(`

        As for the correct solution, if you have it, I would be happy to review
        and discuss it. I would also be happy to provide a new solution that is
        simpler and correct. To do that, I would need more information about the
        problem and the correct approach to solving it. Can you please provide
        this information?`),xt=o("br"),Wt=E(),H(gt.$$.fragment),Et=b(`
        The solution is simply to sum all the numbers up. This can be proved using
        some math skills.`),Ls=o("br"),le=E(),H(fe.$$.fragment),Js=b(`
        You are correct that the solution to this problem is simply to sum up all
        the numbers in the array and take the absolute value of the result.`),Qs=o("br"),Xs=o("br"),Ns=b(`

        To prove this, we can consider the following:`),Ds=o("br"),Zs=o("br"),Ks=b(`

        The sum of the numbers in the two groups must be equal to the sum of all
        the numbers in the array.`),Vs=o("br"),en=b(`
        Therefore, the absolute difference between the sums of the two groups must
        be equal to the absolute value of the sum of all the numbers in the array.`),Ps=o("br"),Ut=o("br"),Ws=b(`

        This means that, in order to maximize the absolute difference between
        the sums of the two groups, we need to maximize the absolute value of
        the sum of all the numbers in the array. This can be achieved by summing
        up all the numbers in the array and taking the absolute value of the
        result.`),De=o("br"),tn=b(`

        Here is the pseudocode for the solution:`),sn=o("br"),nn=E(),H(Ss.$$.fragment),Ys=b(`
        We can implement this solution in any programming language of our choice.
        `),H($e.$$.fragment),rn=E(),H(i.$$.fragment)},l(r){e=a(r,"H2",{});var d=U(e);n=$(d,"\u6D4B\u8BD5\u70B98\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),d.forEach(t),l=A(r),D(u.$$.fragment,r),p=$(r,`
        Solve the following problem:`),c=a(r,"BR",{}),B=$(r,`
        A. Two Groups`),v=a(r,"BR",{}),h=$(r,`
        time limit per test: 1 second`),w=a(r,"BR",{}),T=$(r,`
        memory limit per test: 256 megabytes`),S=a(r,"BR",{}),j=$(r,`
        input: standard input`),x=a(r,"BR",{}),N=$(r,`
        output: standard output`),O=a(r,"BR",{}),W=$(r,`

        You are given an array a consisting of n integers. You want to
        distribute these n integers into two groups s1 and s2 (groups can be
        empty) so that the following conditions are satisfied:`),q=a(r,"BR",{}),C=a(r,"BR",{}),Y=$(r,`

        For each i (1\u2264i\u2264n), ai goes into exactly one group. The value
        |sum(s1)|\u2212|sum(s2)| is the maximum possible among all such ways to
        distribute the integers.`),Q=a(r,"BR",{}),Z=a(r,"BR",{}),k=$(r,`

        Here sum(s1) denotes the sum of the numbers in the group s1, and sum(s2)
        denotes the sum of the numbers in the group s2.`),z=a(r,"BR",{}),se=a(r,"BR",{}),V=$(r,`

        Determine the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),K=a(r,"BR",{}),P=a(r,"BR",{}),J=$(r,`

        Input`),ne=a(r,"BR",{}),te=a(r,"BR",{}),ee=$(r,`

        The input consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22642\u22C5104)\xA0\u2014 the number of test cases. The description
        of the test cases follows.`),re=a(r,"BR",{}),ie=a(r,"BR",{}),oe=$(r,`

        The first line of each test case contains a single integer n (1\u2264n\u2264105) \u2014
        the length of the array a.`),pe=a(r,"BR",{}),ue=a(r,"BR",{}),ce=$(r,`

        The second line of each test case contains n integers a1,a2\u2026an
        (\u2212109\u2264ai\u2264109) \u2014 elements of the array a.`),Re=a(r,"BR",{}),he=a(r,"BR",{}),Ae=$(r,`

        It is guaranteed that the sum of n over all test cases does not exceed
        2\u22C5105.`),Me=a(r,"BR",{}),Te=a(r,"BR",{}),_e=$(r,`

        Output`),Ge=a(r,"BR",{}),ye=a(r,"BR",{}),je=$(r,`

        For each test case, output a single integer \u2014 the maximum possible value
        of |sum(s1)|\u2212|sum(s2)|.`),we=a(r,"BR",{}),Oe=a(r,"BR",{}),ke=$(r,`

        Example`),Ne=a(r,"BR",{}),R=$(r,`
        Input`),X=a(r,"BR",{}),Ie=a(r,"BR",{}),ge=$(r,`

        4`),pt=a(r,"BR",{}),Ve=$(r,`
        2`),bt=a(r,"BR",{}),$t=$(r,`
        10 -10`),ae=a(r,"BR",{}),Pe=$(r,`
        4`),Jt=a(r,"BR",{}),Qt=$(r,`
        -2 -1 11 0`),At=a(r,"BR",{}),Xt=$(r,`
        3`),ct=a(r,"BR",{}),Zt=$(r,`
        2 3 2`),Kt=a(r,"BR",{}),Nt=$(r,`
        5`),es=a(r,"BR",{}),Pt=$(r,`
        -9 2 0 0 -4`),ts=a(r,"BR",{}),be=a(r,"BR",{}),me=$(r,`

        Output`),Ye=a(r,"BR",{}),ss=a(r,"BR",{}),We=$(r,`

        0`),ns=a(r,"BR",{}),Ue=$(r,`
        8`),rs=a(r,"BR",{}),Je=$(r,`
        7`),is=a(r,"BR",{}),Qe=$(r,`
        11`),ls=a(r,"BR",{}),Xe=$(r,`

        Note`),fs=a(r,"BR",{}),St=a(r,"BR",{}),os=$(r,`

        In the first testcase, we can distribute as s1={10},
        s2={\u221210}. Then the value will be |10|\u2212|\u221210|=0.`),Ze=a(r,"BR",{}),as=a(r,"BR",{}),Ke=$(r,`

        In the second testcase, we can distribute as s1={0,11,\u22121},
        s2={\u22122}. Then the value will be |0+11\u22121|\u2212|\u22122|=10\u22122=8.`),us=a(r,"BR",{}),et=a(r,"BR",{}),ms=$(r,`

        In the third testcase, we can distribute as s1={2,3,2},
        s2={}. Then the value will be |2+3+2|\u2212|0|=7.`),tt=a(r,"BR",{}),ps=a(r,"BR",{}),zt=$(r,`

        In the fourth testcase, we can distribute as s1={\u22129,\u22124,0},
        s2={2,0}. Then the value will be |\u22129\u22124+0|\u2212|2+0|=13\u22122=11.`),bs=a(r,"BR",{}),qt=a(r,"BR",{}),$s=A(r),D(xe.$$.fragment,r),cs=$(r,`
        To solve this problem, we can use a greedy approach. The idea is to put the
        numbers into the two groups in such a way that the absolute difference between
        the sums of the two groups is maximized.`),Mt=a(r,"BR",{}),hs=a(r,"BR",{}),Gt=$(r,`

        Here is how we can do it:`),vs=a(r,"BR",{}),Ct=a(r,"BR",{}),ws=$(r,`

        Sort the numbers in the array in non-descending order.`),st=a(r,"BR",{}),Se=$(r,`
        Start with empty groups.`),_s=a(r,"BR",{}),jt=$(r,`
        Take the first number from the sorted array and put it in group 1.`),ys=a(r,"BR",{}),Ot=$(r,`
        Take the second number from the sorted array and put it in group 2.`),ks=a(r,"BR",{}),nt=$(r,`
        Repeat steps 3 and 4 until there are no more numbers in the array.`),rt=a(r,"BR",{}),Bs=a(r,"BR",{}),ht=$(r,`

        After doing this, the absolute difference between the sums of the two
        groups will be the maximum possible value.`),it=a(r,"BR",{}),ds=a(r,"BR",{}),Ht=$(r,`

        Here is the pseudocode for the solution:`),Rs=a(r,"BR",{}),He=A(r),D(vt.$$.fragment,r),Lt=$(r,`
        We can implement this solution in any programming language of our choice.`),Ts=a(r,"BR",{}),wt=A(r),D(ze.$$.fragment,r),gs=A(r),D(lt.$$.fragment,r),Ft=$(r,`
        Notice that we are finding the maximum value instead of the minimum one.`),_t=a(r,"BR",{}),Dt=A(r),D(Ee.$$.fragment,r),ft=$(r,`
        Yes, you are right. In the original problem statement, the goal is to maximize
        the absolute difference between the sums of the two groups. This means that
        we want to find the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),qe=a(r,"BR",{}),yt=a(r,"BR",{}),Be=$(r,`

        To do this, we can use a greedy approach, as described in the previous
        answer. This approach will ensure that the absolute difference between
        the sums of the two groups is maximized.`),kt=a(r,"BR",{}),Bt=a(r,"BR",{}),Cs=$(r,`

        In the solution, we sort the numbers in the array in non-descending
        order and then put the numbers into the two groups in such a way that
        the absolute difference between the sums of the two groups is maximized.
        This is achieved by always putting the next number from the sorted array
        into the group with the smaller sum.`),de=a(r,"BR",{}),Is=a(r,"BR",{}),Vt=$(r,`

        Here is the pseudocode for the solution:`),xs=a(r,"BR",{}),Ce=A(r),D(dt.$$.fragment,r),Yt=$(r,`
        We can implement this solution in any programming language of our choice.`),Es=a(r,"BR",{}),ot=A(r),D(Rt.$$.fragment,r),Le=A(r),D(at.$$.fragment,r),It=$(r,`
        However, your answer is incorrect and does not pass the test. Please try
        again. The correct solution is far simpler.`),As=a(r,"BR",{}),ve=A(r),D(ut.$$.fragment,r),Fe=$(r,`
        I apologize if my previous answer did not fully address your question. Can
        you please provide more information about what is incorrect in my solution,
        or what is missing in it? This will help me understand where I went wrong
        and provide a better answer.`),Tt=a(r,"BR",{}),f=a(r,"BR",{}),g=$(r,`

        As for the correct solution, if you have it, I would be happy to review
        and discuss it. I would also be happy to provide a new solution that is
        simpler and correct. To do that, I would need more information about the
        problem and the correct approach to solving it. Can you please provide
        this information?`),xt=a(r,"BR",{}),Wt=A(r),D(gt.$$.fragment,r),Et=$(r,`
        The solution is simply to sum all the numbers up. This can be proved using
        some math skills.`),Ls=a(r,"BR",{}),le=A(r),D(fe.$$.fragment,r),Js=$(r,`
        You are correct that the solution to this problem is simply to sum up all
        the numbers in the array and take the absolute value of the result.`),Qs=a(r,"BR",{}),Xs=a(r,"BR",{}),Ns=$(r,`

        To prove this, we can consider the following:`),Ds=a(r,"BR",{}),Zs=a(r,"BR",{}),Ks=$(r,`

        The sum of the numbers in the two groups must be equal to the sum of all
        the numbers in the array.`),Vs=a(r,"BR",{}),en=$(r,`
        Therefore, the absolute difference between the sums of the two groups must
        be equal to the absolute value of the sum of all the numbers in the array.`),Ps=a(r,"BR",{}),Ut=a(r,"BR",{}),Ws=$(r,`

        This means that, in order to maximize the absolute difference between
        the sums of the two groups, we need to maximize the absolute value of
        the sum of all the numbers in the array. This can be achieved by summing
        up all the numbers in the array and taking the absolute value of the
        result.`),De=a(r,"BR",{}),tn=$(r,`

        Here is the pseudocode for the solution:`),sn=a(r,"BR",{}),nn=A(r),D(Ss.$$.fragment,r),Ys=$(r,`
        We can implement this solution in any programming language of our choice.
        `),D($e.$$.fragment,r),rn=A(r),D(i.$$.fragment,r)},m(r,d){s(r,e,d),_(e,n),s(r,l,d),L(u,r,d),s(r,p,d),s(r,c,d),s(r,B,d),s(r,v,d),s(r,h,d),s(r,w,d),s(r,T,d),s(r,S,d),s(r,j,d),s(r,x,d),s(r,N,d),s(r,O,d),s(r,W,d),s(r,q,d),s(r,C,d),s(r,Y,d),s(r,Q,d),s(r,Z,d),s(r,k,d),s(r,z,d),s(r,se,d),s(r,V,d),s(r,K,d),s(r,P,d),s(r,J,d),s(r,ne,d),s(r,te,d),s(r,ee,d),s(r,re,d),s(r,ie,d),s(r,oe,d),s(r,pe,d),s(r,ue,d),s(r,ce,d),s(r,Re,d),s(r,he,d),s(r,Ae,d),s(r,Me,d),s(r,Te,d),s(r,_e,d),s(r,Ge,d),s(r,ye,d),s(r,je,d),s(r,we,d),s(r,Oe,d),s(r,ke,d),s(r,Ne,d),s(r,R,d),s(r,X,d),s(r,Ie,d),s(r,ge,d),s(r,pt,d),s(r,Ve,d),s(r,bt,d),s(r,$t,d),s(r,ae,d),s(r,Pe,d),s(r,Jt,d),s(r,Qt,d),s(r,At,d),s(r,Xt,d),s(r,ct,d),s(r,Zt,d),s(r,Kt,d),s(r,Nt,d),s(r,es,d),s(r,Pt,d),s(r,ts,d),s(r,be,d),s(r,me,d),s(r,Ye,d),s(r,ss,d),s(r,We,d),s(r,ns,d),s(r,Ue,d),s(r,rs,d),s(r,Je,d),s(r,is,d),s(r,Qe,d),s(r,ls,d),s(r,Xe,d),s(r,fs,d),s(r,St,d),s(r,os,d),s(r,Ze,d),s(r,as,d),s(r,Ke,d),s(r,us,d),s(r,et,d),s(r,ms,d),s(r,tt,d),s(r,ps,d),s(r,zt,d),s(r,bs,d),s(r,qt,d),s(r,$s,d),L(xe,r,d),s(r,cs,d),s(r,Mt,d),s(r,hs,d),s(r,Gt,d),s(r,vs,d),s(r,Ct,d),s(r,ws,d),s(r,st,d),s(r,Se,d),s(r,_s,d),s(r,jt,d),s(r,ys,d),s(r,Ot,d),s(r,ks,d),s(r,nt,d),s(r,rt,d),s(r,Bs,d),s(r,ht,d),s(r,it,d),s(r,ds,d),s(r,Ht,d),s(r,Rs,d),s(r,He,d),L(vt,r,d),s(r,Lt,d),s(r,Ts,d),s(r,wt,d),L(ze,r,d),s(r,gs,d),L(lt,r,d),s(r,Ft,d),s(r,_t,d),s(r,Dt,d),L(Ee,r,d),s(r,ft,d),s(r,qe,d),s(r,yt,d),s(r,Be,d),s(r,kt,d),s(r,Bt,d),s(r,Cs,d),s(r,de,d),s(r,Is,d),s(r,Vt,d),s(r,xs,d),s(r,Ce,d),L(dt,r,d),s(r,Yt,d),s(r,Es,d),s(r,ot,d),L(Rt,r,d),s(r,Le,d),L(at,r,d),s(r,It,d),s(r,As,d),s(r,ve,d),L(ut,r,d),s(r,Fe,d),s(r,Tt,d),s(r,f,d),s(r,g,d),s(r,xt,d),s(r,Wt,d),L(gt,r,d),s(r,Et,d),s(r,Ls,d),s(r,le,d),L(fe,r,d),s(r,Js,d),s(r,Qs,d),s(r,Xs,d),s(r,Ns,d),s(r,Ds,d),s(r,Zs,d),s(r,Ks,d),s(r,Vs,d),s(r,en,d),s(r,Ps,d),s(r,Ut,d),s(r,Ws,d),s(r,De,d),s(r,tn,d),s(r,sn,d),s(r,nn,d),L(Ss,r,d),s(r,Ys,d),L($e,r,d),s(r,rn,d),L(i,r,d),y=!0},p(r,d){const mn={};d&16&&(mn.$$scope={dirty:d,ctx:r}),u.$set(mn);const pn={};d&16&&(pn.$$scope={dirty:d,ctx:r}),xe.$set(pn);const bn={};d&16&&(bn.$$scope={dirty:d,ctx:r}),lt.$set(bn);const $n={};d&16&&($n.$$scope={dirty:d,ctx:r}),Ee.$set($n);const cn={};d&16&&(cn.$$scope={dirty:d,ctx:r}),at.$set(cn);const yn={};d&16&&(yn.$$scope={dirty:d,ctx:r}),ut.$set(yn);const Bn={};d&16&&(Bn.$$scope={dirty:d,ctx:r}),gt.$set(Bn);const dn={};d&16&&(dn.$$scope={dirty:d,ctx:r}),fe.$set(dn);const Rn={};d&16&&(Rn.$$scope={dirty:d,ctx:r}),i.$set(Rn)},i(r){y||(G(u.$$.fragment,r),G(xe.$$.fragment,r),G(vt.$$.fragment,r),G(ze.$$.fragment,r),G(lt.$$.fragment,r),G(Ee.$$.fragment,r),G(dt.$$.fragment,r),G(Rt.$$.fragment,r),G(at.$$.fragment,r),G(ut.$$.fragment,r),G(gt.$$.fragment,r),G(fe.$$.fragment,r),G(Ss.$$.fragment,r),G($e.$$.fragment,r),G(i.$$.fragment,r),y=!0)},o(r){M(u.$$.fragment,r),M(xe.$$.fragment,r),M(vt.$$.fragment,r),M(ze.$$.fragment,r),M(lt.$$.fragment,r),M(Ee.$$.fragment,r),M(dt.$$.fragment,r),M(Rt.$$.fragment,r),M(at.$$.fragment,r),M(ut.$$.fragment,r),M(gt.$$.fragment,r),M(fe.$$.fragment,r),M(Ss.$$.fragment,r),M($e.$$.fragment,r),M(i.$$.fragment,r),y=!1},d(r){r&&t(e),r&&t(l),F(u,r),r&&t(p),r&&t(c),r&&t(B),r&&t(v),r&&t(h),r&&t(w),r&&t(T),r&&t(S),r&&t(j),r&&t(x),r&&t(N),r&&t(O),r&&t(W),r&&t(q),r&&t(C),r&&t(Y),r&&t(Q),r&&t(Z),r&&t(k),r&&t(z),r&&t(se),r&&t(V),r&&t(K),r&&t(P),r&&t(J),r&&t(ne),r&&t(te),r&&t(ee),r&&t(re),r&&t(ie),r&&t(oe),r&&t(pe),r&&t(ue),r&&t(ce),r&&t(Re),r&&t(he),r&&t(Ae),r&&t(Me),r&&t(Te),r&&t(_e),r&&t(Ge),r&&t(ye),r&&t(je),r&&t(we),r&&t(Oe),r&&t(ke),r&&t(Ne),r&&t(R),r&&t(X),r&&t(Ie),r&&t(ge),r&&t(pt),r&&t(Ve),r&&t(bt),r&&t($t),r&&t(ae),r&&t(Pe),r&&t(Jt),r&&t(Qt),r&&t(At),r&&t(Xt),r&&t(ct),r&&t(Zt),r&&t(Kt),r&&t(Nt),r&&t(es),r&&t(Pt),r&&t(ts),r&&t(be),r&&t(me),r&&t(Ye),r&&t(ss),r&&t(We),r&&t(ns),r&&t(Ue),r&&t(rs),r&&t(Je),r&&t(is),r&&t(Qe),r&&t(ls),r&&t(Xe),r&&t(fs),r&&t(St),r&&t(os),r&&t(Ze),r&&t(as),r&&t(Ke),r&&t(us),r&&t(et),r&&t(ms),r&&t(tt),r&&t(ps),r&&t(zt),r&&t(bs),r&&t(qt),r&&t($s),F(xe,r),r&&t(cs),r&&t(Mt),r&&t(hs),r&&t(Gt),r&&t(vs),r&&t(Ct),r&&t(ws),r&&t(st),r&&t(Se),r&&t(_s),r&&t(jt),r&&t(ys),r&&t(Ot),r&&t(ks),r&&t(nt),r&&t(rt),r&&t(Bs),r&&t(ht),r&&t(it),r&&t(ds),r&&t(Ht),r&&t(Rs),r&&t(He),F(vt,r),r&&t(Lt),r&&t(Ts),r&&t(wt),F(ze,r),r&&t(gs),F(lt,r),r&&t(Ft),r&&t(_t),r&&t(Dt),F(Ee,r),r&&t(ft),r&&t(qe),r&&t(yt),r&&t(Be),r&&t(kt),r&&t(Bt),r&&t(Cs),r&&t(de),r&&t(Is),r&&t(Vt),r&&t(xs),r&&t(Ce),F(dt,r),r&&t(Yt),r&&t(Es),r&&t(ot),F(Rt,r),r&&t(Le),F(at,r),r&&t(It),r&&t(As),r&&t(ve),F(ut,r),r&&t(Fe),r&&t(Tt),r&&t(f),r&&t(g),r&&t(xt),r&&t(Wt),F(gt,r),r&&t(Et),r&&t(Ls),r&&t(le),F(fe,r),r&&t(Js),r&&t(Qs),r&&t(Xs),r&&t(Ns),r&&t(Ds),r&&t(Zs),r&&t(Ks),r&&t(Vs),r&&t(en),r&&t(Ps),r&&t(Ut),r&&t(Ws),r&&t(De),r&&t(tn),r&&t(sn),r&&t(nn),F(Ss,r),r&&t(Ys),F($e,r),r&&t(rn),F(i,r)}}}function Zi(m){let e,n,l,u,p,c,B,v,h,w,T,S,j,x,N,O,W,q;return e=new zs({props:{$$slots:{default:[ni]},$$scope:{ctx:m}}}),l=new zs({props:{$$slots:{default:[fi]},$$scope:{ctx:m}}}),p=new zs({props:{$$slots:{default:[ui]},$$scope:{ctx:m}}}),B=new zs({props:{$$slots:{default:[bi]},$$scope:{ctx:m}}}),h=new zs({props:{$$slots:{default:[hi]},$$scope:{ctx:m}}}),T=new zs({props:{$$slots:{default:[Ti]},$$scope:{ctx:m}}}),j=new zs({props:{$$slots:{default:[Pi]},$$scope:{ctx:m}}}),N=new zs({props:{$$slots:{default:[Hi]},$$scope:{ctx:m}}}),W=new zs({props:{$$slots:{default:[Xi]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=E(),H(l.$$.fragment),u=E(),H(p.$$.fragment),c=E(),H(B.$$.fragment),v=E(),H(h.$$.fragment),w=E(),H(T.$$.fragment),S=E(),H(j.$$.fragment),x=E(),H(N.$$.fragment),O=E(),H(W.$$.fragment)},l(C){D(e.$$.fragment,C),n=A(C),D(l.$$.fragment,C),u=A(C),D(p.$$.fragment,C),c=A(C),D(B.$$.fragment,C),v=A(C),D(h.$$.fragment,C),w=A(C),D(T.$$.fragment,C),S=A(C),D(j.$$.fragment,C),x=A(C),D(N.$$.fragment,C),O=A(C),D(W.$$.fragment,C)},m(C,Y){L(e,C,Y),s(C,n,Y),L(l,C,Y),s(C,u,Y),L(p,C,Y),s(C,c,Y),L(B,C,Y),s(C,v,Y),L(h,C,Y),s(C,w,Y),L(T,C,Y),s(C,S,Y),L(j,C,Y),s(C,x,Y),L(N,C,Y),s(C,O,Y),L(W,C,Y),q=!0},p(C,Y){const Q={};Y&16&&(Q.$$scope={dirty:Y,ctx:C}),e.$set(Q);const Z={};Y&16&&(Z.$$scope={dirty:Y,ctx:C}),l.$set(Z);const k={};Y&16&&(k.$$scope={dirty:Y,ctx:C}),p.$set(k);const z={};Y&16&&(z.$$scope={dirty:Y,ctx:C}),B.$set(z);const se={};Y&16&&(se.$$scope={dirty:Y,ctx:C}),h.$set(se);const V={};Y&16&&(V.$$scope={dirty:Y,ctx:C}),T.$set(V);const K={};Y&16&&(K.$$scope={dirty:Y,ctx:C}),j.$set(K);const P={};Y&16&&(P.$$scope={dirty:Y,ctx:C}),N.$set(P);const J={};Y&16&&(J.$$scope={dirty:Y,ctx:C}),W.$set(J)},i(C){q||(G(e.$$.fragment,C),G(l.$$.fragment,C),G(p.$$.fragment,C),G(B.$$.fragment,C),G(h.$$.fragment,C),G(T.$$.fragment,C),G(j.$$.fragment,C),G(N.$$.fragment,C),G(W.$$.fragment,C),q=!0)},o(C){M(e.$$.fragment,C),M(l.$$.fragment,C),M(p.$$.fragment,C),M(B.$$.fragment,C),M(h.$$.fragment,C),M(T.$$.fragment,C),M(j.$$.fragment,C),M(N.$$.fragment,C),M(W.$$.fragment,C),q=!1},d(C){F(e,C),C&&t(n),F(l,C),C&&t(u),F(p,C),C&&t(c),F(B,C),C&&t(v),F(h,C),C&&t(w),F(T,C),C&&t(S),F(j,C),C&&t(x),F(N,C),C&&t(O),F(W,C)}}}function Ki(m){let e,n;return e=new jn({props:{$$slots:{default:[Zi]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,[u]){const p={};u&16&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function el(m,e,n){return[!1,!0,"ChatGPT\u6D4B\u8BD5\u8BB0\u5F55",()=>un("/",In)]}class mr extends js{constructor(e){super(),Os(this,e,el,Ki,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function tl(m){let e,n,l,u,p,c,B;return{c(){e=b("\u672C\u7F51\u7AD9\u662F\u6D1E\u7A74\u591C\u83BA\u7684\u6574\u6D3B\u7F51\u7AD9\uFF0C\u80CC\u666F\u56FE\u7247\u6765\u81EA"),n=o("a"),l=b("klpbbs.com"),u=b("\uFF0Cfreemutecode\u9875\u9762\u4E2Dcss\uFF08assets/freemutecode/style.css\uFF09\u6765\u81EAfreegiftcode\uFF0C\u5176\u4F59\u5185\u5BB9\u4EE5CC-0\u534F\u8BAE\u5F00\u6E90\u4E8E"),p=o("a"),c=b("github"),B=b("\u3002"),this.h()},l(v){e=$(v,"\u672C\u7F51\u7AD9\u662F\u6D1E\u7A74\u591C\u83BA\u7684\u6574\u6D3B\u7F51\u7AD9\uFF0C\u80CC\u666F\u56FE\u7247\u6765\u81EA"),n=a(v,"A",{href:!0,target:!0,style:!0});var h=U(n);l=$(h,"klpbbs.com"),h.forEach(t),u=$(v,"\uFF0Cfreemutecode\u9875\u9762\u4E2Dcss\uFF08assets/freemutecode/style.css\uFF09\u6765\u81EAfreegiftcode\uFF0C\u5176\u4F59\u5185\u5BB9\u4EE5CC-0\u534F\u8BAE\u5F00\u6E90\u4E8E"),p=a(v,"A",{href:!0,target:!0,style:!0});var w=U(p);c=$(w,"github"),w.forEach(t),B=$(v,"\u3002"),this.h()},h(){I(n,"href","https://klpbbs.com"),I(n,"target","_blank"),mt(n,"color","white"),I(p,"href","https://github.com/CaveNightingale/CaveNightingale.github.io"),I(p,"target","_blank"),mt(p,"color","white")},m(v,h){s(v,e,h),s(v,n,h),_(n,l),s(v,u,h),s(v,p,h),_(p,c),s(v,B,h)},p:qs,d(v){v&&t(e),v&&t(n),v&&t(u),v&&t(p),v&&t(B)}}}function sl(m){let e,n,l,u,p,c,B,v;return e=new An({props:{href:m[4],content:"\u514D\u8D39\u7981\u8A00\u4EE3\u7801"}}),l=new An({props:{href:m[5],content:"MCBBS\u79EF\u5206\u5206\u6790"}}),p=new An({props:{href:m[6],content:"ChatGPT\u6D4B\u8BD5\u8BB0\u5F55"}}),B=new ur({props:{$$slots:{default:[tl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=E(),H(l.$$.fragment),u=E(),H(p.$$.fragment),c=E(),H(B.$$.fragment)},l(h){D(e.$$.fragment,h),n=A(h),D(l.$$.fragment,h),u=A(h),D(p.$$.fragment,h),c=A(h),D(B.$$.fragment,h)},m(h,w){L(e,h,w),s(h,n,w),L(l,h,w),s(h,u,w),L(p,h,w),s(h,c,w),L(B,h,w),v=!0},p(h,w){const T={};w&128&&(T.$$scope={dirty:w,ctx:h}),B.$set(T)},i(h){v||(G(e.$$.fragment,h),G(l.$$.fragment,h),G(p.$$.fragment,h),G(B.$$.fragment,h),v=!0)},o(h){M(e.$$.fragment,h),M(l.$$.fragment,h),M(p.$$.fragment,h),M(B.$$.fragment,h),v=!1},d(h){F(e,h),h&&t(n),F(l,h),h&&t(u),F(p,h),h&&t(c),F(B,h)}}}function nl(m){let e,n;return e=new jn({props:{$$slots:{default:[sl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,[u]){const p={};u&128&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function rl(m,e,n){return[!1,!0,"\u76EE\u5F55",null,()=>un("/freemutecode",Pn),()=>un("/creditchart",Sn),()=>un("/chatgpt",mr)]}class In extends js{constructor(e){super(),Os(this,e,rl,nl,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function il(m){let e,n,l,u,p,c;return{c(){e=b(`\u8F93\u5165\u7528\u6237\u7684UID\uFF1A
		`),n=o("input"),l=o("button"),u=b("\u786E\u5B9A"),this.h()},l(B){e=$(B,`\u8F93\u5165\u7528\u6237\u7684UID\uFF1A
		`),n=a(B,"INPUT",{type:!0,class:!0}),l=a(B,"BUTTON",{class:!0});var v=U(l);u=$(v,"\u786E\u5B9A"),v.forEach(t),this.h()},h(){I(n,"type","number"),I(n,"class","svelte-xqojua"),I(l,"class","svelte-xqojua")},m(B,v){s(B,e,v),s(B,n,v),Wn(n,m[1]),s(B,l,v),_(l,u),p||(c=[Us(n,"input",m[8]),Us(l,"click",m[2])],p=!0)},p(B,v){v&2&&ir(n.value)!==B[1]&&Wn(n,B[1])},d(B){B&&t(e),B&&t(n),B&&t(l),p=!1,Vn(c)}}}function ll(m){let e,n;return e=new Dr({props:{renderingUser:m[0]}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&1&&(p.renderingUser=l[0]),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function fl(m){let e,n;return e=new qr({}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p:qs,i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function ol(m){let e,n;return e=new zs({props:{$$slots:{default:[ul]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&1024&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function al(m){let e,n;return e=new zs({props:{$$slots:{default:[ml]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,u){const p={};u&1024&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function ul(m){let e;return{c(){e=b("\u52A0\u8F7D\u4E2D\u3002\u3002\u3002")},l(n){e=$(n,"\u52A0\u8F7D\u4E2D\u3002\u3002\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ml(m){let e,n;return{c(){e=o("span"),n=b("\u627E\u4E0D\u5230\u8FD9\u4E2A\u7528\u6237"),this.h()},l(l){e=a(l,"SPAN",{style:!0});var u=U(e);n=$(u,"\u627E\u4E0D\u5230\u8FD9\u4E2A\u7528\u6237"),u.forEach(t),this.h()},h(){mt(e,"color","red")},m(l,u){s(l,e,u),_(e,n)},p:qs,d(l){l&&t(e)}}}function pl(m){let e;return{c(){e=b("\u8BF4\u660E\uFF1A\u7B49\u7EA7\u5224\u5B9A\u4E0E\u6392\u4F4D\u6709\u5173\uFF0C\u524D150\u540D\u5224\u4E3AA\u7EA7\uFF0C\u524D400\u540D\u5224\u4E3AB\u7EA7\uFF0C\u524D1000\u540D\u5224\u4E3AC\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u5224D\u7EA7\uFF0C\u5C0F\u4E8E\u96F6\u7684\u5224E\u7EA7\u3002\u91C7\u75282022\u5E744\u6708xmdhs\u7EDF\u8BA1\u6570\u636E\u3002\u9875\u9762\u4F7F\u7528\u7684\u8DE8\u57DF\u4EE3\u7406\u4E3Ahttps://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=\uFF0CNetlify\u8D85\u65F6\u65F6\u95F4\u957F\u8FBE10\u79D2\u800C\u4E14\u8BBF\u95EEMCBBS\u901F\u5EA6\u8F83\u6162\uFF0C\u6545\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u518D\u6B21\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u3002")},l(n){e=$(n,"\u8BF4\u660E\uFF1A\u7B49\u7EA7\u5224\u5B9A\u4E0E\u6392\u4F4D\u6709\u5173\uFF0C\u524D150\u540D\u5224\u4E3AA\u7EA7\uFF0C\u524D400\u540D\u5224\u4E3AB\u7EA7\uFF0C\u524D1000\u540D\u5224\u4E3AC\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u5224D\u7EA7\uFF0C\u5C0F\u4E8E\u96F6\u7684\u5224E\u7EA7\u3002\u91C7\u75282022\u5E744\u6708xmdhs\u7EDF\u8BA1\u6570\u636E\u3002\u9875\u9762\u4F7F\u7528\u7684\u8DE8\u57DF\u4EE3\u7406\u4E3Ahttps://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=\uFF0CNetlify\u8D85\u65F6\u65F6\u95F4\u957F\u8FBE10\u79D2\u800C\u4E14\u8BBF\u95EEMCBBS\u901F\u5EA6\u8F83\u6162\uFF0C\u6545\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u518D\u6B21\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function bl(m){let e,n,l,u,p,c,B;e=new zs({props:{$$slots:{default:[il]},$$scope:{ctx:m}}});const v=[al,ol,fl,ll],h=[];function w(T,S){return T[0]==="error"?0:T[0]==="pending"?1:T[0]==="none"?2:3}return l=w(m),u=h[l]=v[l](m),c=new ur({props:{$$slots:{default:[pl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=E(),u.c(),p=E(),H(c.$$.fragment)},l(T){D(e.$$.fragment,T),n=A(T),u.l(T),p=A(T),D(c.$$.fragment,T)},m(T,S){L(e,T,S),s(T,n,S),h[l].m(T,S),s(T,p,S),L(c,T,S),B=!0},p(T,S){const j={};S&1026&&(j.$$scope={dirty:S,ctx:T}),e.$set(j);let x=l;l=w(T),l===x?h[l].p(T,S):(Fn(),M(h[x],1,1,()=>{h[x]=null}),Dn(),u=h[l],u?u.p(T,S):(u=h[l]=v[l](T),u.c()),G(u,1),u.m(p.parentNode,p));const N={};S&1024&&(N.$$scope={dirty:S,ctx:T}),c.$set(N)},i(T){B||(G(e.$$.fragment,T),G(u),G(c.$$.fragment,T),B=!0)},o(T){M(e.$$.fragment,T),M(u),M(c.$$.fragment,T),B=!1},d(T){F(e,T),T&&t(n),h[l].d(T),T&&t(p),F(c,T)}}}function $l(m){let e,n;return e=new jn({props:{$$slots:{default:[bl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,[u]){const p={};u&1027&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}const cl="https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=";async function hl(m){let e,n=0;for(;!e&&n++<3;)try{e=await(await fetch(cl+m)).json()}catch{}if(e){if(e.error)throw new Error(e.error);if(e.username)return e;throw new Error("Function returns improper data")}else throw new Error("Cannot connect to proxy")}function vl(m,e,n){let{title:l="MCBBS\u79EF\u5206\u5206\u6790"}=e;const u=!0,p=!1,c=()=>{h!="none"?(n(0,h="none"),history.pushState({},"","/creditchart")):un("/",In)},B=T;let v="",h="none";async function w(j,x=!0){let N=parseInt(v);if(isFinite(N)&&N>0){n(0,h="pending");try{n(0,h=await hl(N)),x&&history.pushState({},"",location.pathname+"?uid="+N)}catch{n(0,h="error")}}else n(0,h="error")}function T(){n(1,v=new URLSearchParams(location.search).get("uid")||""),v!=""?w(0,!1):n(0,h="none")}gn(T);function S(){v=ir(this.value),n(1,v)}return m.$$set=j=>{"title"in j&&n(3,l=j.title)},m.$$.update=()=>{if(m.$$.dirty&1)switch(h){case"none":case"pending":case"error":n(3,l="MCBBS\u79EF\u5206\u5206\u6790");break;default:n(3,l="MCBBS\u79EF\u5206\u5206\u6790 - "+h.username)}},[h,v,w,l,u,p,c,B,S]}class Sn extends js{constructor(e){super(),Os(this,e,vl,$l,Hs,{title:3,background:4,scalable:5,back:6,reload:7})}get background(){return this.$$.ctx[4]}get scalable(){return this.$$.ctx[5]}get back(){return this.$$.ctx[6]}get reload(){return this.$$.ctx[7]}}function wl(m){let e,n,l,u,p,c,B,v,h;return{c(){e=o("span"),n=b("\u627E\u4E0D\u5230\u9875\u9762"),l=E(),u=o("br"),p=E(),c=o("span"),B=b("\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u8F93\u5165\u7684\u7F51\u5740"),v=E(),h=o("br"),this.h()},l(w){e=a(w,"SPAN",{style:!0});var T=U(e);n=$(T,"\u627E\u4E0D\u5230\u9875\u9762"),T.forEach(t),l=A(w),u=a(w,"BR",{}),p=A(w),c=a(w,"SPAN",{style:!0});var S=U(c);B=$(S,"\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u8F93\u5165\u7684\u7F51\u5740"),S.forEach(t),v=A(w),h=a(w,"BR",{}),this.h()},h(){mt(e,"font-size","100px"),mt(e,"color","white"),mt(e,"position","relative"),mt(e,"font-weight","1000"),mt(e,"user-select","none"),mt(c,"color","white"),mt(c,"position","relative"),mt(c,"font-weight","bolder"),mt(c,"user-select","none")},m(w,T){s(w,e,T),_(e,n),s(w,l,T),s(w,u,T),s(w,p,T),s(w,c,T),_(c,B),s(w,v,T),s(w,h,T)},p:qs,d(w){w&&t(e),w&&t(l),w&&t(u),w&&t(p),w&&t(c),w&&t(v),w&&t(h)}}}function _l(m){let e,n;return e=new jn({props:{$$slots:{default:[wl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){L(e,l,u),n=!0},p(l,[u]){const p={};u&64&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function yl(m,e,n){const p="\u627E\u4E0D\u5230\u9875\u9762",c=()=>un("/",In),B={"/freemutecode/":["/freemutecode",Pn],"/freegiftcode/":["/freemutecode",Pn],"/creditchart/":["/creditchart",Sn]};function v(){let h=B[location.pathname];if(h)un(h[0],h[1]);else{let w=/^\/creditchart\/([0-9]+)$/.exec(location.pathname);w&&un("/creditchart?uid="+w[1],Sn)}}return gn(()=>setTimeout(v,0)),[!1,!0,p,c]}class kl extends js{constructor(e){super(),Os(this,e,yl,_l,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function Bl(m){let e,n,l,u,p,c,B,v,h,w,T;e=new br({props:{back:m[3],title:m[1],background:m[2]}});function S(q){m[7](q)}function j(q){m[8](q)}function x(q){m[9](q)}function N(q){m[10](q)}var O=m[0];function W(q){let C={};return q[2]!==void 0&&(C.background=q[2]),q[1]!==void 0&&(C.title=q[1]),q[3]!==void 0&&(C.back=q[3]),q[4]!==void 0&&(C.reload=q[4]),{props:C}}return O&&(l=new O(W(m)),fn.push(()=>hn(l,"background",S)),fn.push(()=>hn(l,"title",j)),fn.push(()=>hn(l,"back",x)),fn.push(()=>hn(l,"reload",N))),{c(){H(e.$$.fragment),n=E(),l&&H(l.$$.fragment),v=an()},l(q){D(e.$$.fragment,q),n=A(q),l&&D(l.$$.fragment,q),v=an()},m(q,C){L(e,q,C),s(q,n,C),l&&L(l,q,C),s(q,v,C),h=!0,w||(T=Us(window,"popstate",m[5]),w=!0)},p(q,[C]){const Y={};C&8&&(Y.back=q[3]),C&2&&(Y.title=q[1]),C&4&&(Y.background=q[2]),e.$set(Y);const Q={};if(!u&&C&4&&(u=!0,Q.background=q[2],xn(()=>u=!1)),!p&&C&2&&(p=!0,Q.title=q[1],xn(()=>p=!1)),!c&&C&8&&(c=!0,Q.back=q[3],xn(()=>c=!1)),!B&&C&16&&(B=!0,Q.reload=q[4],xn(()=>B=!1)),O!==(O=q[0])){if(l){Fn();const Z=l;M(Z.$$.fragment,1,0,()=>{F(Z,1)}),Dn()}O?(l=new O(W(q)),fn.push(()=>hn(l,"background",S)),fn.push(()=>hn(l,"title",j)),fn.push(()=>hn(l,"back",x)),fn.push(()=>hn(l,"reload",N)),H(l.$$.fragment),G(l.$$.fragment,1),L(l,v.parentNode,v)):l=null}else O&&l.$set(Q)},i(q){h||(G(e.$$.fragment,q),l&&G(l.$$.fragment,q),h=!0)},o(q){M(e.$$.fragment,q),l&&M(l.$$.fragment,q),h=!1},d(q){F(e,q),q&&t(n),q&&t(v),l&&F(l,q),w=!1,T()}}}function dl(m,e,n){let{component:l}=e,u,p,c,B,v={"/":In,"/creditchart":Sn,"/freemutecode":Pn,"/chatgpttest":mr};function h(N){n(0,l=N)}gn(()=>{$r(N=>h(N))});function w(N){let O=v[location.pathname];O?(h(O),B&&B()):h(kl)}function T(N){p=N,n(2,p)}function S(N){u=N,n(1,u)}function j(N){c=N,n(3,c)}function x(N){B=N,n(4,B)}return m.$$set=N=>{"component"in N&&n(0,l=N.component)},[l,u,p,c,B,w,h,T,S,j,x]}class gl extends js{constructor(e){super(),Os(this,e,dl,Bl,Hs,{component:0,changeContent:6})}get changeContent(){return this.$$.ctx[6]}}export{kl as P,gl as R,mr as a,Sn as b,Pn as c,In as d};
