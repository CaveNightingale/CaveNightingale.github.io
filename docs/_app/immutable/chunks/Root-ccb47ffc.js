import{S as js,i as Os,s as Hs,e as o,t as b,c as a,a as U,h as $,d as t,b as I,g as s,J as _,K as Xs,j as cn,n as Ms,l as an,o as Ln,p as M,q as Dn,r as G,x as H,y as D,z as F,C as L,k as A,m as P,L as Vn,F as zn,G as qn,H as Mn,I as Gn,w as gn,M as tr,N as sr,O as nr,P as rr,f as pt,Q as fn,R as On,T as ir,U as Wn,V as $n,W as xn}from"./index-a6551832.js";import{s as pr,S as Ns,P as Vs,o as un,M as jn,N as br,a as $r}from"./MainContext-6617568b.js";function hn(){}hn.prototype={diff:function(e,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=l.callback;typeof l=="function"&&(u=l,l={}),this.options=l;var p=this;function c(E){return u?(setTimeout(function(){u(void 0,E)},0),!0):E}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var k=n.length,v=e.length,h=1,w=k+v;l.maxEditLength&&(w=Math.min(w,l.maxEditLength));var T=[{newPos:-1,components:[]}],S=this.extractCommon(T[0],n,e,0);if(T[0].newPos+1>=k&&S+1>=v)return c([{value:this.join(n),count:n.length}]);function j(){for(var E=-1*h;E<=h;E+=2){var O=void 0,W=T[E-1],q=T[E+1],C=(q?q.newPos:0)-E;W&&(T[E-1]=void 0);var Y=W&&W.newPos+1<k,Q=q&&0<=C&&C<v;if(!Y&&!Q){T[E]=void 0;continue}if(!Y||Q&&W.newPos<q.newPos?(O=hr(q),p.pushComponent(O.components,void 0,!0)):(O=W,O.newPos++,p.pushComponent(O.components,!0,void 0)),C=p.extractCommon(O,n,e,E),O.newPos+1>=k&&C+1>=v)return c(cr(p,O.components,n,e,p.useLongestToken));T[E]=O}h++}if(u)(function E(){setTimeout(function(){if(h>w)return u();j()||E()},0)})();else for(;h<=w;){var x=j();if(x)return x}},pushComponent:function(e,n,l){var u=e[e.length-1];u&&u.added===n&&u.removed===l?e[e.length-1]={count:u.count+1,added:n,removed:l}:e.push({count:1,added:n,removed:l})},extractCommon:function(e,n,l,u){for(var p=n.length,c=l.length,k=e.newPos,v=k-u,h=0;k+1<p&&v+1<c&&this.equals(n[k+1],l[v+1]);)k++,v++,h++;return h&&e.components.push({count:h}),e.newPos=k,v},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],l=0;l<e.length;l++)e[l]&&n.push(e[l]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function cr(m,e,n,l,u){for(var p=0,c=e.length,k=0,v=0;p<c;p++){var h=e[p];if(h.removed){if(h.value=m.join(l.slice(v,v+h.count)),v+=h.count,p&&e[p-1].added){var T=e[p-1];e[p-1]=e[p],e[p]=T}}else{if(!h.added&&u){var w=n.slice(k,k+h.count);w=w.map(function(j,x){var E=l[v+x];return E.length>j.length?E:j}),h.value=m.join(w)}else h.value=m.join(n.slice(k,k+h.count));k+=h.count,h.added||(v+=h.count)}}var S=e[c-1];return c>1&&typeof S.value=="string"&&(S.added||S.removed)&&m.equals("",S.value)&&(e[c-2].value+=S.value,e.pop()),e}function hr(m){return{newPos:m.newPos,components:m.components.slice(0)}}var Un=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,Jn=/\S/,lr=new hn;lr.equals=function(m,e){return this.options.ignoreCase&&(m=m.toLowerCase(),e=e.toLowerCase()),m===e||this.options.ignoreWhitespace&&!Jn.test(m)&&!Jn.test(e)};lr.tokenize=function(m){for(var e=m.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&Un.test(e[n])&&Un.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var fr=new hn;fr.tokenize=function(m){var e=[],n=m.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var l=0;l<n.length;l++){var u=n[l];l%2&&!this.options.newlineIsToken?e[e.length-1]+=u:(this.options.ignoreWhitespace&&(u=u.trim()),e.push(u))}return e};var vr=new hn;vr.tokenize=function(m){return m.split(/(\S.+?[.!?])(?=\s+|$)/)};var wr=new hn;wr.tokenize=function(m){return m.split(/([{}:;,]|\s+)/)};function En(m){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?En=function(e){return typeof e}:En=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},En(m)}var _r=Object.prototype.toString,Tn=new hn;Tn.useLongestToken=!0;Tn.tokenize=fr.tokenize;Tn.castInput=function(m){var e=this.options,n=e.undefinedReplacement,l=e.stringifyReplacer,u=l===void 0?function(p,c){return typeof c=="undefined"?n:c}:l;return typeof m=="string"?m:JSON.stringify(Hn(m,null,null,u),u,"  ")};Tn.equals=function(m,e){return hn.prototype.equals.call(Tn,m.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function Hn(m,e,n,l,u){e=e||[],n=n||[],l&&(m=l(u,m));var p;for(p=0;p<e.length;p+=1)if(e[p]===m)return n[p];var c;if(_r.call(m)==="[object Array]"){for(e.push(m),c=new Array(m.length),n.push(c),p=0;p<m.length;p+=1)c[p]=Hn(m[p],e,n,l,u);return e.pop(),n.pop(),c}if(m&&m.toJSON&&(m=m.toJSON()),En(m)==="object"&&m!==null){e.push(m),c={},n.push(c);var k=[],v;for(v in m)m.hasOwnProperty(v)&&k.push(v);for(k.sort(),p=0;p<k.length;p+=1)v=k[p],c[v]=Hn(m[v],e,n,l,v);e.pop(),n.pop()}else c=m;return c}var Fn=new hn;Fn.tokenize=function(m){return m.slice()};Fn.join=Fn.removeEmpty=function(m){return m};function yr(m){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=m.split(/\r\n|[\n\v\f\r\x85]/),l=m.match(/\r\n|[\n\v\f\r\x85]/g)||[],u=[],p=0;function c(){var h={};for(u.push(h);p<n.length;){var w=n[p];if(/^(\-\-\-|\+\+\+|@@)\s/.test(w))break;var T=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(w);T&&(h.index=T[1]),p++}for(k(h),k(h),h.hunks=[];p<n.length;){var S=n[p];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(S))break;if(/^@@/.test(S))h.hunks.push(v());else{if(S&&e.strict)throw new Error("Unknown line "+(p+1)+" "+JSON.stringify(S));p++}}}function k(h){var w=/^(---|\+\+\+)\s+(.*)$/.exec(n[p]);if(w){var T=w[1]==="---"?"old":"new",S=w[2].split("	",2),j=S[0].replace(/\\\\/g,"\\");/^".*"$/.test(j)&&(j=j.substr(1,j.length-2)),h[T+"FileName"]=j,h[T+"Header"]=(S[1]||"").trim(),p++}}function v(){var h=p,w=n[p++],T=w.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),S={oldStart:+T[1],oldLines:typeof T[2]=="undefined"?1:+T[2],newStart:+T[3],newLines:typeof T[4]=="undefined"?1:+T[4],lines:[],linedelimiters:[]};S.oldLines===0&&(S.oldStart+=1),S.newLines===0&&(S.newStart+=1);for(var j=0,x=0;p<n.length&&!(n[p].indexOf("--- ")===0&&p+2<n.length&&n[p+1].indexOf("+++ ")===0&&n[p+2].indexOf("@@")===0);p++){var E=n[p].length==0&&p!=n.length-1?" ":n[p][0];if(E==="+"||E==="-"||E===" "||E==="\\")S.lines.push(n[p]),S.linedelimiters.push(l[p]||`
`),E==="+"?j++:E==="-"?x++:E===" "&&(j++,x++);else break}if(!j&&S.newLines===1&&(S.newLines=0),!x&&S.oldLines===1&&(S.oldLines=0),e.strict){if(j!==S.newLines)throw new Error("Added line count did not match for hunk at line "+(h+1));if(x!==S.oldLines)throw new Error("Removed line count did not match for hunk at line "+(h+1))}return S}for(;p<n.length;)c();return u}function kr(m,e,n){var l=!0,u=!1,p=!1,c=1;return function k(){if(l&&!p){if(u?c++:l=!1,m+c<=n)return c;p=!0}if(!u)return p||(l=!0),e<=m-c?-c++:(u=!0,k())}}function Br(m,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string"&&(e=yr(e)),Array.isArray(e)){if(e.length>1)throw new Error("applyPatch only works with a single input.");e=e[0]}var l=m.split(/\r\n|[\n\v\f\r\x85]/),u=m.match(/\r\n|[\n\v\f\r\x85]/g)||[],p=e.hunks,c=n.compareLine||function(te,ee,re,ie){return ee===ie},k=0,v=n.fuzzFactor||0,h=0,w=0,T,S;function j(te,ee){for(var re=0;re<te.lines.length;re++){var ie=te.lines[re],le=ie.length>0?ie[0]:" ",pe=ie.length>0?ie.substr(1):ie;if(le===" "||le==="-"){if(!c(ee+1,l[ee],le,pe)&&(k++,k>v))return!1;ee++}}return!0}for(var x=0;x<p.length;x++){for(var E=p[x],O=l.length-E.oldLines,W=0,q=w+E.oldStart-1,C=kr(q,h,O);W!==void 0;W=C())if(j(E,q+W)){E.offset=w+=W;break}if(W===void 0)return!1;h=E.offset+E.oldStart+E.oldLines}for(var Y=0,Q=0;Q<p.length;Q++){var Z=p[Q],y=Z.oldStart+Z.offset+Y-1;Y+=Z.newLines-Z.oldLines;for(var z=0;z<Z.lines.length;z++){var se=Z.lines[z],V=se.length>0?se[0]:" ",K=se.length>0?se.substr(1):se,N=Z.linedelimiters[z];if(V===" ")y++;else if(V==="-")l.splice(y,1),u.splice(y,1);else if(V==="+")l.splice(y,0,K),u.splice(y,0,N),y++;else if(V==="\\"){var J=Z.lines[z-1]?Z.lines[z-1][0]:null;J==="+"?T=!0:J==="-"&&(S=!0)}}}if(T)for(;!l[l.length-1];)l.pop(),u.pop();else S&&(l.push(""),u.push(`
`));for(var ne=0;ne<l.length-1;ne++)l[ne]=l[ne]+u[ne];return l.join("")}function dr(m){let e,n,l,u,p;return{c(){e=o("div"),n=o("div"),l=b(m[0]),this.h()},l(c){e=a(c,"DIV",{class:!0});var k=U(e);n=a(k,"DIV",{class:!0});var v=U(n);l=$(v,m[0]),v.forEach(t),k.forEach(t),this.h()},h(){I(n,"class","inner svelte-1q30hbw"),I(e,"class","outer svelte-1q30hbw")},m(c,k){s(c,e,k),_(e,n),_(n,l),u||(p=Xs(e,"click",m[1]),u=!0)},p(c,[k]){k&1&&cn(l,c[0])},i:Ms,o:Ms,d(c){c&&t(e),u=!1,p()}}}function Rr(m,e,n){let{href:l}=e,{content:u}=e;function p(){typeof l=="string"?open(l,"_self"):l()}return m.$$set=c=>{"href"in c&&n(2,l=c.href),"content"in c&&n(0,u=c.content)},[u,p,l]}class An extends js{constructor(e){super(),Os(this,e,Rr,dr,Hs,{href:2,content:0})}}function Tr(m){let e,n;return e=new Ns({props:{$$slots:{default:[Er]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&130&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function gr(m){let e,n;return e=new Ns({props:{$$slots:{default:[Ar]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&131&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Cr(m){let e,n;return e=new Ns({props:{$$slots:{default:[Pr]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&128&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Ir(m){let e,n;return e=new Ns({props:{$$slots:{default:[Nr]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&129&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function xr(m){let e,n;return e=new An({props:{content:"\u5B89\u88C5\u7528\u6237\u811A\u672C",href:m[4]}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1&&(p.href=l[4]),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Er(m){let e,n,l,u;return{c(){e=o("p"),n=b("\u51FA\u73B0\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A"),l=A(),u=b(m[1]),this.h()},l(p){e=a(p,"P",{class:!0});var c=U(e);n=$(c,"\u51FA\u73B0\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF1A"),c.forEach(t),l=P(p),u=$(p,m[1]),this.h()},h(){I(e,"class","svelte-1y7n2nc")},m(p,c){s(p,e,c),_(e,n),s(p,l,c),s(p,u,c)},p(p,c){c&2&&cn(u,p[1])},d(p){p&&t(e),p&&t(l),p&&t(u)}}}function Ar(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E;return S=new Vs({props:{data:m[1]}}),{c(){e=o("p"),n=b("\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u2019\u9875\u9762\u4E2D\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"),l=A(),u=o("p"),p=o("button"),c=b("\u590D\u5236"),k=A(),v=o("button"),h=b("\u53D6\u6D88"),w=A(),T=o("p"),H(S.$$.fragment),this.h()},l(O){e=a(O,"P",{class:!0});var W=U(e);n=$(W,"\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u2019\u9875\u9762\u4E2D\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"),W.forEach(t),l=P(O),u=a(O,"P",{class:!0});var q=U(u);p=a(q,"BUTTON",{class:!0});var C=U(p);c=$(C,"\u590D\u5236"),C.forEach(t),k=P(q),v=a(q,"BUTTON",{class:!0});var Y=U(v);h=$(Y,"\u53D6\u6D88"),Y.forEach(t),q.forEach(t),w=P(O),T=a(O,"P",{class:!0});var Q=U(T);D(S.$$.fragment,Q),Q.forEach(t),this.h()},h(){I(e,"class","svelte-1y7n2nc"),I(p,"class","svelte-1y7n2nc"),I(v,"class","svelte-1y7n2nc"),I(u,"class","svelte-1y7n2nc"),I(T,"class","svelte-1y7n2nc")},m(O,W){s(O,e,W),_(e,n),s(O,l,W),s(O,u,W),_(u,p),_(p,c),_(u,k),_(u,v),_(v,h),s(O,w,W),s(O,T,W),F(S,T,null),j=!0,x||(E=[Xs(p,"click",m[3]),Xs(v,"click",m[6])],x=!0)},p(O,W){const q={};W&2&&(q.data=O[1]),S.$set(q)},i(O){j||(G(S.$$.fragment,O),j=!0)},o(O){M(S.$$.fragment,O),j=!1},d(O){O&&t(e),O&&t(l),O&&t(u),O&&t(w),O&&t(T),L(S),x=!1,Vn(E)}}}function Pr(m){let e;return{c(){e=b("\u4E0B\u8F7D\u4E2D\u3002\u3002\u3002")},l(n){e=$(n,"\u4E0B\u8F7D\u4E2D\u3002\u3002\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Nr(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se;return{c(){e=o("p"),n=b("\u5FEB\u4E50\u5C0F\u65B9\u7F16\u5199\u7684MCBBS CreditAnalysis\u662F\u95ED\u6E90\u8F6F\u4EF6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u76F4\u63A5\u63D0\u4F9B\u5E26\u6D1E\u7A74\u591C\u83BA\u8865\u4E01\u7684MCBBS CreditAnalysis\u3002"),l=A(),u=o("p"),p=b("\u5982\u679C\u9009\u62E9\u7EE7\u7EED\uFF0C\u5219\u672C\u9875\u9762\u4F1A\u5206\u522B\u4E0B\u8F7D"),c=o("a"),k=b("MCBBS CreditAnalysis"),v=b("\u548C"),h=o("a"),w=b("\u6D1E\u7A74\u591C\u83BA\u8865\u4E01"),T=b("\uFF0C\u7136\u540E\u5C06\u8865\u4E01\u6253\u5230MCBBS CreditAnalysis\u4E0A\u3002"),S=A(),j=o("p"),x=b("\u9700\u8981"),E=o("a"),O=b("TamperMonkey"),W=b("\u6D4F\u89C8\u5668\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528MCBBS CreditAnalysis\u3002\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C\u6B64\u7C7B\u7531\u7F51\u9875\u751F\u6210\u7684\u811A\u672C\u65E0\u6CD5\u6253\u5F00TamperMonkey\u7684\u5B89\u88C5\u754C\u9762\u3002\u56E0\u6B64\uFF0C\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u9700\u8981\u60A8\u624B\u52A8\u5C06\u811A\u672C\u590D\u5236\u7C98\u8D34\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u201D\u9875\u9762\uFF08\u53EF\u5728TamperMonkey\u4E3B\u83DC\u5355\u4E2D\u627E\u5230\uFF09\u4E2D\u53BB\u5B89\u88C5\u3002"),q=A(),C=o("button"),Y=b("\u786E\u5B9A"),Q=A(),Z=o("button"),y=b("\u53D6\u6D88"),this.h()},l(V){e=a(V,"P",{class:!0});var K=U(e);n=$(K,"\u5FEB\u4E50\u5C0F\u65B9\u7F16\u5199\u7684MCBBS CreditAnalysis\u662F\u95ED\u6E90\u8F6F\u4EF6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u76F4\u63A5\u63D0\u4F9B\u5E26\u6D1E\u7A74\u591C\u83BA\u8865\u4E01\u7684MCBBS CreditAnalysis\u3002"),K.forEach(t),l=P(V),u=a(V,"P",{class:!0});var N=U(u);p=$(N,"\u5982\u679C\u9009\u62E9\u7EE7\u7EED\uFF0C\u5219\u672C\u9875\u9762\u4F1A\u5206\u522B\u4E0B\u8F7D"),c=a(N,"A",{href:!0,class:!0});var J=U(c);k=$(J,"MCBBS CreditAnalysis"),J.forEach(t),v=$(N,"\u548C"),h=a(N,"A",{href:!0,class:!0});var ne=U(h);w=$(ne,"\u6D1E\u7A74\u591C\u83BA\u8865\u4E01"),ne.forEach(t),T=$(N,"\uFF0C\u7136\u540E\u5C06\u8865\u4E01\u6253\u5230MCBBS CreditAnalysis\u4E0A\u3002"),N.forEach(t),S=P(V),j=a(V,"P",{class:!0});var te=U(j);x=$(te,"\u9700\u8981"),E=a(te,"A",{href:!0,class:!0});var ee=U(E);O=$(ee,"TamperMonkey"),ee.forEach(t),W=$(te,"\u6D4F\u89C8\u5668\u63D2\u4EF6\u624D\u80FD\u4F7F\u7528MCBBS CreditAnalysis\u3002\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C\u6B64\u7C7B\u7531\u7F51\u9875\u751F\u6210\u7684\u811A\u672C\u65E0\u6CD5\u6253\u5F00TamperMonkey\u7684\u5B89\u88C5\u754C\u9762\u3002\u56E0\u6B64\uFF0C\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u9700\u8981\u60A8\u624B\u52A8\u5C06\u811A\u672C\u590D\u5236\u7C98\u8D34\u5230TamperMonkey\u7684\u201C\u6DFB\u52A0\u65B0\u811A\u672C\u201D\u9875\u9762\uFF08\u53EF\u5728TamperMonkey\u4E3B\u83DC\u5355\u4E2D\u627E\u5230\uFF09\u4E2D\u53BB\u5B89\u88C5\u3002"),te.forEach(t),q=P(V),C=a(V,"BUTTON",{class:!0});var re=U(C);Y=$(re,"\u786E\u5B9A"),re.forEach(t),Q=P(V),Z=a(V,"BUTTON",{class:!0});var ie=U(Z);y=$(ie,"\u53D6\u6D88"),ie.forEach(t),this.h()},h(){I(e,"class","svelte-1y7n2nc"),I(c,"href",or),I(c,"class","svelte-1y7n2nc"),I(h,"href",ar),I(h,"class","svelte-1y7n2nc"),I(u,"class","svelte-1y7n2nc"),I(E,"href","https://www.tampermonkey.net/"),I(E,"class","svelte-1y7n2nc"),I(j,"class","svelte-1y7n2nc"),I(C,"class","svelte-1y7n2nc"),I(Z,"class","svelte-1y7n2nc")},m(V,K){s(V,e,K),_(e,n),s(V,l,K),s(V,u,K),_(u,p),_(u,c),_(c,k),_(u,v),_(u,h),_(h,w),_(u,T),s(V,S,K),s(V,j,K),_(j,x),_(j,E),_(E,O),_(j,W),s(V,q,K),s(V,C,K),_(C,Y),s(V,Q,K),s(V,Z,K),_(Z,y),z||(se=[Xs(C,"click",m[2]),Xs(Z,"click",m[5])],z=!0)},p:Ms,d(V){V&&t(e),V&&t(l),V&&t(u),V&&t(S),V&&t(j),V&&t(q),V&&t(C),V&&t(Q),V&&t(Z),z=!1,Vn(se)}}}function Sr(m){let e,n,l,u;const p=[xr,Ir,Cr,gr,Tr],c=[];function k(v,h){return v[0]=="none"?0:v[0]=="confirm"?1:v[0]=="pending"?2:v[0]=="data"?3:v[0]=="error"?4:-1}return~(e=k(m))&&(n=c[e]=p[e](m)),{c(){n&&n.c(),l=an()},l(v){n&&n.l(v),l=an()},m(v,h){~e&&c[e].m(v,h),s(v,l,h),u=!0},p(v,[h]){let w=e;e=k(v),e===w?~e&&c[e].p(v,h):(n&&(Ln(),M(c[w],1,1,()=>{c[w]=null}),Dn()),~e?(n=c[e],n?n.p(v,h):(n=c[e]=p[e](v),n.c()),G(n,1),n.m(l.parentNode,l)):n=null)},i(v){u||(G(n),u=!0)},o(v){M(n),u=!1},d(v){~e&&c[e].d(v),v&&t(l)}}}const or="https://greasyfork.org/scripts/407846-mcbbs-creditanalysis/code/MCBBS%20CreditAnalysis.user.js",ar="/assets/creditchart/userscript.patch";function zr(m,e,n){let l="none",u="";function p(){return n(0,l="pending"),Promise.all([fetch(or).then(w=>w.text()),fetch(ar).then(w=>w.text())]).then(([w,T])=>{n(1,u=Br(w,T)),n(0,l="data")}).catch(w=>{n(0,l="error"),n(1,u=w.stack)})}function c(){navigator.clipboard.writeText(u),pr("\u5DF2\u590D\u5236\u811A\u672C")}return[l,u,p,c,()=>n(0,l="confirm"),()=>n(0,l="none"),()=>n(0,l="none")]}class qr extends js{constructor(e){super(),Os(this,e,zr,Sr,Hs,{})}}function Mr(m){let e,n;const l=m[1].default,u=zn(l,m,m[0],null);return{c(){e=o("footer"),u&&u.c(),this.h()},l(p){e=a(p,"FOOTER",{class:!0});var c=U(e);u&&u.l(c),c.forEach(t),this.h()},h(){I(e,"class","svelte-vofmx1")},m(p,c){s(p,e,c),u&&u.m(e,null),n=!0},p(p,[c]){u&&u.p&&(!n||c&1)&&qn(u,l,p,p[0],n?Gn(l,p[0],c,null):Mn(p[0]),null)},i(p){n||(G(u,p),n=!0)},o(p){M(u,p),n=!1},d(p){p&&t(e),u&&u.d(p)}}}function Gr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class ur extends js{constructor(e){super(),Os(this,e,Gr,Mr,Hs,{})}}function Qn(m,e,n){const l=m.slice();return l[20]=e[n],l}function Xn(m,e,n){const l=m.slice();return l[23]=e[n],l}function Zn(m){let e,n=m[0].userGroupEx,l=[];for(let u=0;u<n.length;u+=1)l[u]=Kn(Xn(m,n,u));return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=an()},l(u){for(let p=0;p<l.length;p+=1)l[p].l(u);e=an()},m(u,p){for(let c=0;c<l.length;c+=1)l[c].m(u,p);s(u,e,p)},p(u,p){if(p&1){n=u[0].userGroupEx;let c;for(c=0;c<n.length;c+=1){const k=Xn(u,n,c);l[c]?l[c].p(k,p):(l[c]=Kn(k),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(u){rr(l,u),u&&t(e)}}}function Kn(m){let e,n,l=m[23]+"",u;return{c(){e=b("\uFF0C"),n=new sr(!1),u=an(),this.h()},l(p){e=$(p,"\uFF0C"),n=nr(p,!1),u=an(),this.h()},h(){n.a=u},m(p,c){s(p,e,c),n.m(l,p,c),s(p,u,c)},p(p,c){c&1&&l!==(l=p[23]+"")&&n.p(l)},d(p){p&&t(e),p&&t(u),p&&n.d()}}}function er(m){let e,n,l,u,p,c=m[20][1]+"",k,v,h,w=m[5][m[20][1]]+"",T,S,j,x=(100*m[5][m[20][1]]*m[20][2]/m[1]).toFixed(2)+"",E,O,W,q,C=Pn(m[5][m[20][1]],m[20][3])+"",Y,Q,Z,y,z;function se(){return m[13](m[20])}return{c(){e=o("div"),n=o("div"),l=o("div"),u=A(),p=o("div"),k=b(c),v=A(),h=o("div"),T=b(w),S=A(),j=o("div"),E=b(x),O=b("%"),W=A(),q=o("div"),Y=b(C),Q=A(),this.h()},l(V){e=a(V,"DIV",{class:!0,style:!0});var K=U(e);n=a(K,"DIV",{class:!0});var N=U(n);l=a(N,"DIV",{class:!0,style:!0}),U(l).forEach(t),N.forEach(t),u=P(K),p=a(K,"DIV",{class:!0});var J=U(p);k=$(J,c),J.forEach(t),v=P(K),h=a(K,"DIV",{class:!0});var ne=U(h);T=$(ne,w),ne.forEach(t),S=P(K),j=a(K,"DIV",{class:!0});var te=U(j);E=$(te,x),O=$(te,"%"),te.forEach(t),W=P(K),q=a(K,"DIV",{class:!0});var ee=U(q);Y=$(ee,C),ee.forEach(t),Q=P(K),K.forEach(t),this.h()},h(){I(l,"class","color-example svelte-3f2djp"),pt(l,"background-color",m[20][0]),I(n,"class","color svelte-3f2djp"),I(p,"class","name svelte-3f2djp"),I(h,"class","count svelte-3f2djp"),I(j,"class","percent svelte-3f2djp"),I(q,"class","rank svelte-3f2djp"),I(e,"class","lines svelte-3f2djp"),I(e,"style",Z=m[6]===m[20][1]?"background: #d8d8d8;":"")},m(V,K){s(V,e,K),_(e,n),_(n,l),_(e,u),_(e,p),_(p,k),_(e,v),_(e,h),_(h,T),_(e,S),_(e,j),_(j,E),_(j,O),_(e,W),_(e,q),_(q,Y),_(e,Q),y||(z=Xs(e,"click",se),y=!0)},p(V,K){m=V,K&32&&w!==(w=m[5][m[20][1]]+"")&&cn(T,w),K&34&&x!==(x=(100*m[5][m[20][1]]*m[20][2]/m[1]).toFixed(2)+"")&&cn(E,x),K&32&&C!==(C=Pn(m[5][m[20][1]],m[20][3])+"")&&cn(Y,C),K&64&&Z!==(Z=m[6]===m[20][1]?"background: #d8d8d8;":"")&&I(e,"style",Z)},d(V){V&&t(e),y=!1,z()}}}function jr(m){let e,n,l=m[0].username+"",u,p,c,k,v=m[0].userGroup+"",h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z=Pn(m[1],m[7])+"",se,V,K,N,J=m[0].userGroupEx&&Zn(m),ne=m[8],te=[];for(let ee=0;ee<ne.length;ee+=1)te[ee]=er(Qn(m,ne,ee));return{c(){e=o("div"),n=o("a"),u=b(l),c=b(`
		(
			`),k=new sr(!1),h=an(),J&&J.c(),w=b(`
		)
		`),T=o("div"),S=o("div"),j=A(),x=o("div"),E=b("\u603B\u79EF\u5206"),O=A(),W=o("div"),q=b(m[1]),C=A(),Y=o("div"),Q=b("100.00%"),Z=A(),y=o("div"),se=b(z),V=A();for(let ee=0;ee<te.length;ee+=1)te[ee].c();this.h()},l(ee){e=a(ee,"DIV",{class:!0});var re=U(e);n=a(re,"A",{style:!0,href:!0,target:!0});var ie=U(n);u=$(ie,l),ie.forEach(t),c=$(re,`
		(
			`),k=nr(re,!1),h=an(),J&&J.l(re),w=$(re,`
		)
		`),T=a(re,"DIV",{class:!0});var le=U(T);S=a(le,"DIV",{class:!0}),U(S).forEach(t),j=P(le),x=a(le,"DIV",{class:!0});var pe=U(x);E=$(pe,"\u603B\u79EF\u5206"),pe.forEach(t),O=P(le),W=a(le,"DIV",{class:!0});var ue=U(W);q=$(ue,m[1]),ue.forEach(t),C=P(le),Y=a(le,"DIV",{class:!0});var $e=U(Y);Q=$($e,"100.00%"),$e.forEach(t),Z=P(le),y=a(le,"DIV",{class:!0});var Re=U(y);se=$(Re,z),Re.forEach(t),le.forEach(t),V=P(re);for(let ce=0;ce<te.length;ce+=1)te[ce].l(re);re.forEach(t),this.h()},h(){pt(n,"font-size","24px"),pt(n,"color","black"),I(n,"href",p="https://www.mcbbs.net/home.php?mod=space&username="+m[0].username),I(n,"target","_blank"),k.a=h,I(S,"class","color svelte-3f2djp"),I(x,"class","name svelte-3f2djp"),I(W,"class","count svelte-3f2djp"),I(Y,"class","percent svelte-3f2djp"),I(y,"class","rank svelte-3f2djp"),I(T,"class","lines svelte-3f2djp"),I(e,"class","parent svelte-3f2djp")},m(ee,re){s(ee,e,re),_(e,n),_(n,u),_(e,c),k.m(v,e),_(e,h),J&&J.m(e,null),_(e,w),_(e,T),_(T,S),_(T,j),_(T,x),_(x,E),_(T,O),_(T,W),_(W,q),_(T,C),_(T,Y),_(Y,Q),_(T,Z),_(T,y),_(y,se),_(e,V);for(let ie=0;ie<te.length;ie+=1)te[ie].m(e,null);K||(N=Xs(T,"click",m[12]),K=!0)},p(ee,re){if(re&1&&l!==(l=ee[0].username+"")&&cn(u,l),re&1&&p!==(p="https://www.mcbbs.net/home.php?mod=space&username="+ee[0].username)&&I(n,"href",p),re&1&&v!==(v=ee[0].userGroup+"")&&k.p(v),ee[0].userGroupEx?J?J.p(ee,re):(J=Zn(ee),J.c(),J.m(e,w)):J&&(J.d(1),J=null),re&2&&cn(q,ee[1]),re&2&&z!==(z=Pn(ee[1],ee[7])+"")&&cn(se,z),re&2402){ne=ee[8];let ie;for(ie=0;ie<ne.length;ie+=1){const le=Qn(ee,ne,ie);te[ie]?te[ie].p(le,re):(te[ie]=er(le),te[ie].c(),te[ie].m(e,null))}for(;ie<te.length;ie+=1)te[ie].d(1);te.length=ne.length}},d(ee){ee&&t(e),J&&J.d(),rr(te,ee),K=!1,N()}}}function Or(m){let e,n,l,u,p;return{c(){e=o("div"),n=o("canvas"),l=b("\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\uFF01"),this.h()},l(c){e=a(c,"DIV",{class:!0});var k=U(e);n=a(k,"CANVAS",{width:!0,height:!0});var v=U(n);l=$(v,"\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\uFF01"),v.forEach(t),k.forEach(t),this.h()},h(){I(n,"width",m[4]),I(n,"height",m[4]),I(e,"class","canvas-parent svelte-3f2djp")},m(c,k){s(c,e,k),_(e,n),_(n,l),m[14](n),m[15](e),u||(p=Xs(e,"click",m[10]),u=!0)},p(c,k){k&16&&I(n,"width",c[4]),k&16&&I(n,"height",c[4])},d(c){c&&t(e),m[14](null),m[15](null),u=!1,p()}}}function Hr(m){let e,n,l,u,p,c;return e=new Ns({props:{$$slots:{default:[jr]},$$scope:{ctx:m}}}),l=new Ns({props:{$$slots:{default:[Or]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=A(),H(l.$$.fragment)},l(k){D(e.$$.fragment,k),n=P(k),D(l.$$.fragment,k)},m(k,v){F(e,k,v),s(k,n,v),F(l,k,v),u=!0,p||(c=Xs(window,"resize",m[9]),p=!0)},p(k,[v]){const h={};v&67108963&&(h.$$scope={dirty:v,ctx:k}),e.$set(h);const w={};v&67108892&&(w.$$scope={dirty:v,ctx:k}),l.$set(w)},i(k){u||(G(e.$$.fragment,k),G(l.$$.fragment,k),u=!0)},o(k){M(e.$$.fragment,k),M(l.$$.fragment,k),u=!1},d(k){L(e,k),k&&t(n),L(l,k),p=!1,c()}}}function Pn(m,e){return m>=e[0]?"A":m>=e[1]?"B":m>=e[2]?"C":m>=0?"D":"E"}function Fr(m){let e=(m+Math.PI/2)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI/2}function Lr(m,e,n){const l=[12564,7348,4827],u=[["#2dc6c8","\u4EBA\u6C14",3,[1770,829,395]],["#5daf7a","\u91D1\u7C92",0,[23372,14581,9110]],["#9c3a4b","\u91D1\u952D",0,[72,40,23]],["#3866b9","\u5B9D\u77F3",0,[20,9,5]],["#82de76","\u4E0B\u754C\u4E4B\u5FC3",0,[8,4,1]],["#b6a2dd","\u8D21\u732E",10,[61,21,6]],["#5ab1ee","\u7231\u5FC3",4,[139,51,18]],["#d7797f","\u94BB\u77F3",2,[2641,2014,1531]],["#e6399b","\u53D1\u5E16\u6570",1/3,[6677,3504,1911]],["#9f3ed5","\u4E3B\u9898\u6570",2,[262,166,103]],["#ff4040","\u7CBE\u534E\u6570",45,[20,3,0]]];let{renderingUser:p}=e,c,k,v=600,h=0,w={},T=0,S,j="",x;function E(){let y=getComputedStyle(c).width;n(4,v=Math.min(parseInt(/^([\s\S]+)px$/.exec(y)[1])-48,600)),O(),x=setInterval(O,30)}function O(y=!1){if(!k)return;y&&n(6,j=""),T===1&&(clearInterval(x),x=0),T+=.03,T>=1&&(T=1);let z=k.getContext("2d"),se=0,V=v/2;z.clearRect(0,0,v,v);for(let[K,N,J]of u){if(J==0||w[N]==0)continue;z.fillStyle=K,z.strokeStyle=K,z.lineWidth=2,z.font="400 "+v/60+"px serif";let ne=Math.abs(h),te=2*Math.PI*(se/ne*T-1/4),ee=2*Math.PI*((se+=w[N]*J)/ne*T-1/4);te>ee&&([te,ee]=[ee,te]);let re=(te+ee)/2;y&&S>te&&S<ee&&n(6,j=N);let ie=N===j?v/2.7:v/3,le=V+Math.cos(re)*v/2.5,pe=V+Math.sin(re)*v/2.5,ue=(100*w[N]*J/h).toFixed(2)+"%";if(z.beginPath(),z.moveTo(V,V),z.arc(V,V,ie,te,ee),z.closePath(),z.fill(),z.moveTo(V,V),z.lineTo(le,pe),z.stroke(),Fr(re)>Math.PI/2){let $e=le-v/10;z.lineTo($e,pe),z.fillText(N+w[N],$e,pe-v/120),z.fillText(ue,$e,pe+v/40),z.stroke()}else{let $e=le+v/10;z.lineTo($e,pe),z.fillText(N+w[N],le,pe-v/120),z.fillText(ue,le,pe+v/40),z.stroke()}}}function W(y){let z=v/2,se=y.offsetX-z,V=y.offsetY-z,K=(se**2+V**2)**.5;if(K<=v/2.6){let N=se/K;S=V/K>=0?Math.acos(N):2*Math.PI-Math.acos(N),S=S>=3*Math.PI/2?S-2*Math.PI:S,O(!0)}else S=void 0,O(!0)}function q(y){n(6,j=y),O()}gn(E),tr(()=>x!=0?clearInterval(x):0);const C=()=>q(""),Y=y=>q(y[1]);function Q(y){fn[y?"unshift":"push"](()=>{k=y,n(3,k)})}function Z(y){fn[y?"unshift":"push"](()=>{c=y,n(2,c)})}return m.$$set=y=>{"renderingUser"in y&&n(0,p=y.renderingUser)},m.$$.update=()=>{if(m.$$.dirty&3){n(1,h=p.credits.\u79EF\u5206);let y={},z=0;for(let se of u){let V;switch(se[1]){case"\u53D1\u5E16\u6570":V=p.posts+p.threads;break;case"\u4E3B\u9898\u6570":V=p.threads;break;case"\u7CBE\u534E\u6570":V=(h-z)/45;break;default:V=p.credits[se[1]]}y[se[1]]=V,z+=Math.floor(V*se[2]+.5)}n(5,w=y)}},[p,h,c,k,v,w,j,l,u,E,W,q,C,Y,Q,Z]}class Dr extends js{constructor(e){super(),Os(this,e,Lr,Hr,Hs,{renderingUser:0})}}function Vr(m){let e,n,l,u;return{c(){e=o("a"),n=o("img"),this.h()},l(p){e=a(p,"A",{target:!0,href:!0});var c=U(e);n=a(c,"IMG",{src:!0,title:!0,width:!0,height:!0,alt:!0}),c.forEach(t),this.h()},h(){On(n.src,l="https://www.mcbbs.net/uc_server/avatar.php?uid="+m[1]+"&size=big")||I(n,"src",l),I(n,"title",m[0]),I(n,"width","50"),I(n,"height","50"),I(n,"alt",m[0]),I(e,"target","_blank"),I(e,"href",u="https://www.mcbbs.net/?"+m[1])},m(p,c){s(p,e,c),_(e,n)},p(p,[c]){c&2&&!On(n.src,l="https://www.mcbbs.net/uc_server/avatar.php?uid="+p[1]+"&size=big")&&I(n,"src",l),c&1&&I(n,"title",p[0]),c&1&&I(n,"alt",p[0]),c&2&&u!==(u="https://www.mcbbs.net/?"+p[1])&&I(e,"href",u)},i:Ms,o:Ms,d(p){p&&t(e)}}}function Yr(m,e,n){let{name:l}=e,{uid:u}=e;return m.$$set=p=>{"name"in p&&n(0,l=p.name),"uid"in p&&n(1,u=p.uid)},[l,u]}class ln extends js{constructor(e){super(),Os(this,e,Yr,Vr,Hs,{name:0,uid:1})}}function Wr(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se,V,K,N,J,ne,te,ee,re,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,X,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee,f,g,Ss,Yt,It,xt,gt,Et,Fs;return We=new ln({props:{uid:"3467",name:"sjjklh"}}),Ue=new ln({props:{uid:"36116",name:"magicbear"}}),Je=new ln({props:{uid:"66971",name:"\u5996\u68A6\u7684\u8214\u72D7"}}),Qe=new ln({props:{uid:"84256",name:"bangbang93"}}),Xe=new ln({props:{uid:"2048697",name:"Zapic"}}),Ze=new ln({props:{uid:"2676420",name:"bbsmaster"}}),Ke=new ln({props:{uid:"165947",name:"\u51DB"}}),et=new ln({props:{uid:"1350847",name:"\u5E7F\u836F"}}),tt=new ln({props:{uid:"2153967",name:"SHEEP_REALMS"}}),st=new ln({props:{uid:"2999970",name:"\u58F0\u540D\u6211\u4E3B\u5BB0"}}),{c(){e=o("br"),n=o("br"),l=A(),u=o("nobr"),p=o("div"),c=o("h3"),k=b("\u83B7\u53D6\u4F60\u7684\u514D\u8D39MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01\u9650\u65F6\u4F9B\u5E94\uFF01"),v=A(),h=o("div"),w=o("div"),T=o("div"),S=o("div"),j=o("h1"),x=o("img"),O=A(),W=o("div"),q=o("h3"),C=b("\u4ECE\u6211\u4EEC\u8FD9\u91CC\u514D\u8D39\u83B7\u53D6MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01"),Y=A(),Q=o("p"),Z=b("\u7533\u8BF7MCBBS\u7981\u8A00\u4EE3\u7801\u662F\u6709\u65F6\u95F4\u9650\u5236\u7684"),y=o("br"),z=b(`
						\u5728\u4F18\u60E0\u7ED3\u675F\u4E4B\u524D\uFF0C\u73B0\u5728\u5C31\u52A0\u5165\u5427\u3002
						`),se=o("br"),V=A(),K=o("br"),N=b(`
						\u4E0D\u8981\u9519\u8FC7 - \u8FD9\u662F\u4E00\u4E2A\u9650\u65F6\u4F18\u60E0\u3002\u73B0\u5728\u5C31\u7533\u8BF7!`),J=A(),ne=o("div"),te=o("h5"),ee=b("\u83B7\u53D6MCBBS\u7981\u8A00\u4EE3\u7801"),re=o("br"),ie=A(),le=o("strong"),pe=A(),ue=o("p"),$e=o("strong"),Re=b("\u539F\u4EF7\uFF1A"),ce=b(" \u591A\u6B21\u704C\u6C34\u3001\u7248\u6218\u548C\u5176\u4ED6\u4F5C\u6B7B\u884C\u4E3A"),Ae=o("br"),Ge=A(),Te=o("strong"),we=b("\u4F18\u60E0\uFF1A"),je=b(" 100%\u514D\u9664\u989D\u5916\u4F5C\u6B7B"),_e=o("br"),Oe=A(),ve=o("strong"),He=b("\u4F60\u82B1\u8D39\u7684\uFF1A"),ye=b(" \u6CA1\u6709\u4EC0\u4E48\uFF01\u5B83\u662F\u5B8C\u5168\u514D\u8D39\u7684\uFF01"),Pe=o("br"),d=b(`
					\u5728\u6D3B\u52A8\u8FC7\u671F\u4E4B\u524D\uFF0C\u6293\u4F4F\u4F60\u7684MCBBS\u7981\u8A00\u4EE3\u7801\uFF01`),X=A(),Ce=o("div"),ge=o("p"),bt=b("\u6B64\u4F18\u60E0\u6BCF\u4E2A\u7528\u6237\u53EA\u80FD\u5151\u6362\u4E00\u6B21\u3002"),Ye=o("br"),$t=b(`
					\u4F60\u5C06\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u4F5C\u6B7B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B8C\u5168\u514D\u8D39\u7684\u7981\u8A00\u3002`),ct=A(),ae=o("div"),Ne=o("h4"),Ut=b("\u6309\u7167\u4E0B\u9762\u7684\u7B80\u5355\u6B65\u9AA4\u6765\u7533\u8BF7\u4F60\u7684\u514D\u8D39MCBBS\u7981\u8A00\u4EE3\u7801\uFF1A"),Jt=A(),At=o("br"),Qt=A(),ht=o("span"),Xt=b("Step 1: \u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u4E2D\u7684\u4E24\u4E2A & \u786E\u8BA4"),Zt=b(":"),Pt=o("br"),Kt=A(),Nt=o("br"),es=A(),be=o("div"),me=o("div"),H(We.$$.fragment),ts=A(),H(Ue.$$.fragment),ss=A(),H(Je.$$.fragment),ns=A(),H(Qe.$$.fragment),rs=A(),H(Xe.$$.fragment),is=A(),H(Ze.$$.fragment),ls=A(),St=o("br"),fs=A(),H(Ke.$$.fragment),os=A(),H(et.$$.fragment),as=A(),H(tt.$$.fragment),us=A(),H(st.$$.fragment),ms=A(),zt=o("br"),ps=A(),qt=o("br"),bs=A(),Ie=o("span"),$s=b("Step 2: \u628A\u8FD9\u4E2A\u6D88\u606F\u53D1\u4E2A\u4E09\u4E2A\u4E0D\u540C\u7684\u7248\u4E3B\u3002"),Mt=o("br"),cs=A(),Gt=o("br"),hs=A(),Ct=o("p"),vs=A(),nt=o("div"),Se=o("textarea"),ws=A(),jt=o("br"),_s=A(),Ot=o("br"),ys=A(),rt=o("div"),it=b("\xBB \u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E... \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002 \xAB"),ks=A(),vt=o("div"),lt=o("input"),Bs=A(),Ht=o("br"),ds=A(),Fe=o("br"),wt=A(),Ft=o("br"),Rs=A(),_t=o("div"),ze=o("span"),Ts=b("\u4E00\u65E6\u4F60\u5B8C\u6210\u4E86\u6B65\u9AA42..."),ft=A(),Lt=o("br"),yt=A(),Dt=o("br"),xe=A(),ot=o("div"),qe=b(`\u5982\u679C\u4F60\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u672B\u5730\u65C5\u6E38\uFF0C\u8FD9\u91CC\u6709\u4E2A\u66FF\u4EE3\u94FE\u63A5\uFF1A
		`),kt=o("span"),ke=o("a"),Bt=o("span"),dt=b("CLICK HERE"),gs=A(),Be=o("br"),Cs=A(),Le=o("br"),Is=A(),at=o("br"),Rt=A(),Vt=o("br"),xs=A(),ut=o("br"),Tt=A(),De=o("br"),mt=A(),Me=o("div"),Es=A(),he=o("footer"),Ee=b("\u672C\u9875\u9762\u4F7F\u7528\u5168\u90E8\u7684CSS\u548C\u90E8\u5206HTML\u4EE3\u7801\u6765\u81EA\u539F\u7248freegiftcode\uFF0C\u672C\u9875\u9762\u4E3A\u73A9\u6897\u7F51\u9875\uFF0C\u8BF7\u52FF\u5F53\u771F\u3002"),f=o("br"),g=b(`
		\u514D\u8D39\u6B63\u7248\u793C\u54C1\u7801\u7C7B\u7F51\u7AD9\u5C5E\u4E8E\u8BC8\u9A97\u6027\u8D28\uFF0C\u5411\u793E\u4EA4\u7F51\u7AD9\u53D1\u8868\u7C7B\u4F3C\u5185\u5BB9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7981\u8A00\u6216\u7981\u8BBF\uFF0C\u8BF7\u52FF\u4F5C\u6B7B\u3002`),Ss=o("br"),Yt=b(`
		\u53C2\u8003`),It=o("a"),xt=b("\u3010\u6B8B\u53F6\u6742\u8C08\u3011\u6252\u4E00\u6252\u6240\u8C13\u201C\u514D \u8D39 \u6B63 \u7248 \u793C \u54C1 \u7801\u201D\u7684\u80CC\u540E"),this.h()},l(oe){e=a(oe,"BR",{class:!0}),n=a(oe,"BR",{class:!0}),l=P(oe),u=a(oe,"NOBR",{id:!0,class:!0});var fe=U(u);p=a(fe,"DIV",{id:!0,class:!0});var Zs=U(p);c=a(Zs,"H3",{class:!0});var Ks=U(c);k=$(Ks,"\u83B7\u53D6\u4F60\u7684\u514D\u8D39MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01\u9650\u65F6\u4F9B\u5E94\uFF01"),Ks.forEach(t),Zs.forEach(t),v=P(fe),h=a(fe,"DIV",{id:!0,class:!0});var en=U(h);w=a(en,"DIV",{id:!0,class:!0});var As=U(w);T=a(As,"DIV",{id:!0,class:!0});var Ys=U(T);S=a(Ys,"DIV",{id:!0,class:!0});var tn=U(S);j=a(tn,"H1",{class:!0});var sn=U(j);x=a(sn,"IMG",{id:!0,src:!0,alt:!0,width:!0,height:!0,class:!0}),sn.forEach(t),tn.forEach(t),O=P(Ys),W=a(Ys,"DIV",{id:!0,class:!0});var Ws=U(W);q=a(Ws,"H3",{class:!0});var Ls=U(q);C=$(Ls,"\u4ECE\u6211\u4EEC\u8FD9\u91CC\u514D\u8D39\u83B7\u53D6MCBBS\u672B\u5730\u65C5\u6E38\u4EE3\u7801\uFF01"),Ls.forEach(t),Y=P(Ws),Q=a(Ws,"P",{class:!0});var Ps=U(Q);Z=$(Ps,"\u7533\u8BF7MCBBS\u7981\u8A00\u4EE3\u7801\u662F\u6709\u65F6\u95F4\u9650\u5236\u7684"),y=a(Ps,"BR",{class:!0}),z=$(Ps,`
						\u5728\u4F18\u60E0\u7ED3\u675F\u4E4B\u524D\uFF0C\u73B0\u5728\u5C31\u52A0\u5165\u5427\u3002
						`),se=a(Ps,"BR",{class:!0}),V=P(Ps),K=a(Ps,"BR",{class:!0}),N=$(Ps,`
						\u4E0D\u8981\u9519\u8FC7 - \u8FD9\u662F\u4E00\u4E2A\u9650\u65F6\u4F18\u60E0\u3002\u73B0\u5728\u5C31\u7533\u8BF7!`),Ps.forEach(t),Ws.forEach(t),Ys.forEach(t),J=P(As),ne=a(As,"DIV",{id:!0,class:!0});var Gs=U(ne);te=a(Gs,"H5",{class:!0});var Qs=U(te);ee=$(Qs,"\u83B7\u53D6MCBBS\u7981\u8A00\u4EE3\u7801"),re=a(Qs,"BR",{class:!0}),Qs.forEach(t),ie=P(Gs),le=a(Gs,"STRONG",{class:!0}),U(le).forEach(t),pe=P(Gs),ue=a(Gs,"P",{class:!0});var Ve=U(ue);$e=a(Ve,"STRONG",{class:!0});var nn=U($e);Re=$(nn,"\u539F\u4EF7\uFF1A"),nn.forEach(t),ce=$(Ve," \u591A\u6B21\u704C\u6C34\u3001\u7248\u6218\u548C\u5176\u4ED6\u4F5C\u6B7B\u884C\u4E3A"),Ae=a(Ve,"BR",{class:!0}),Ge=P(Ve),Te=a(Ve,"STRONG",{class:!0});var Ds=U(Te);we=$(Ds,"\u4F18\u60E0\uFF1A"),Ds.forEach(t),je=$(Ve," 100%\u514D\u9664\u989D\u5916\u4F5C\u6B7B"),_e=a(Ve,"BR",{class:!0}),Oe=P(Ve),ve=a(Ve,"STRONG",{class:!0});var rn=U(ve);He=$(rn,"\u4F60\u82B1\u8D39\u7684\uFF1A"),rn.forEach(t),ye=$(Ve," \u6CA1\u6709\u4EC0\u4E48\uFF01\u5B83\u662F\u5B8C\u5168\u514D\u8D39\u7684\uFF01"),Pe=a(Ve,"BR",{class:!0}),d=$(Ve,`
					\u5728\u6D3B\u52A8\u8FC7\u671F\u4E4B\u524D\uFF0C\u6293\u4F4F\u4F60\u7684MCBBS\u7981\u8A00\u4EE3\u7801\uFF01`),Ve.forEach(t),Gs.forEach(t),X=P(As),Ce=a(As,"DIV",{id:!0,class:!0});var Wt=U(Ce);ge=a(Wt,"P",{class:!0});var Us=U(ge);bt=$(Us,"\u6B64\u4F18\u60E0\u6BCF\u4E2A\u7528\u6237\u53EA\u80FD\u5151\u6362\u4E00\u6B21\u3002"),Ye=a(Us,"BR",{class:!0}),$t=$(Us,`
					\u4F60\u5C06\u4E0D\u9700\u8981\u4EFB\u4F55\u989D\u5916\u4F5C\u6B7B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5B8C\u5168\u514D\u8D39\u7684\u7981\u8A00\u3002`),Us.forEach(t),Wt.forEach(t),ct=P(As),ae=a(As,"DIV",{class:!0,id:!0});var i=U(ae);Ne=a(i,"H4",{class:!0});var R=U(Ne);Ut=$(R,"\u6309\u7167\u4E0B\u9762\u7684\u7B80\u5355\u6B65\u9AA4\u6765\u7533\u8BF7\u4F60\u7684\u514D\u8D39MCBBS\u7981\u8A00\u4EE3\u7801\uFF1A"),R.forEach(t),Jt=P(i),At=a(i,"BR",{class:!0}),Qt=P(i),ht=a(i,"SPAN",{class:!0});var Js=U(ht);Xt=$(Js,"Step 1: \u70B9\u51FB\u4E0B\u9762\u6309\u94AE\u4E2D\u7684\u4E24\u4E2A & \u786E\u8BA4"),Js.forEach(t),Zt=$(i,":"),Pt=a(i,"BR",{class:!0}),Kt=P(i),Nt=a(i,"BR",{class:!0}),es=P(i),be=a(i,"DIV",{id:!0,class:!0});var de=U(be);me=a(de,"DIV",{class:!0});var r=U(me);D(We.$$.fragment,r),ts=P(r),D(Ue.$$.fragment,r),ss=P(r),D(Je.$$.fragment,r),ns=P(r),D(Qe.$$.fragment,r),rs=P(r),D(Xe.$$.fragment,r),is=P(r),D(Ze.$$.fragment,r),ls=P(r),St=a(r,"BR",{class:!0}),fs=P(r),D(Ke.$$.fragment,r),os=P(r),D(et.$$.fragment,r),as=P(r),D(tt.$$.fragment,r),us=P(r),D(st.$$.fragment,r),r.forEach(t),ms=P(de),zt=a(de,"BR",{class:!0}),ps=P(de),qt=a(de,"BR",{class:!0}),bs=P(de),Ie=a(de,"SPAN",{class:!0});var B=U(Ie);$s=$(B,"Step 2: \u628A\u8FD9\u4E2A\u6D88\u606F\u53D1\u4E2A\u4E09\u4E2A\u4E0D\u540C\u7684\u7248\u4E3B\u3002"),B.forEach(t),Mt=a(de,"BR",{class:!0}),cs=P(de),Gt=a(de,"BR",{class:!0}),hs=P(de),Ct=a(de,"P",{class:!0}),U(Ct).forEach(t),vs=P(de),nt=a(de,"DIV",{id:!0,class:!0});var mn=U(nt);Se=a(mn,"TEXTAREA",{id:!0,rows:!0,cols:!0,class:!0}),U(Se).forEach(t),mn.forEach(t),ws=P(de),jt=a(de,"BR",{class:!0}),_s=P(de),Ot=a(de,"BR",{class:!0}),de.forEach(t),ys=P(i),rt=a(i,"DIV",{id:!0,class:!0});var pn=U(rt);it=$(pn,"\xBB \u5B8C\u6210\u6240\u6709\u6B65\u9AA4\u540E... \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002 \xAB"),pn.forEach(t),ks=P(i),vt=a(i,"DIV",{class:!0});var bn=U(vt);lt=a(bn,"INPUT",{type:!0,class:!0}),bn.forEach(t),Bs=P(i),Ht=a(i,"BR",{class:!0}),ds=P(i),Fe=a(i,"BR",{class:!0}),wt=P(i),Ft=a(i,"BR",{class:!0}),i.forEach(t),As.forEach(t),en.forEach(t),Rs=P(fe),_t=a(fe,"DIV",{class:!0});var yn=U(_t);ze=a(yn,"SPAN",{class:!0});var kn=U(ze);Ts=$(kn,"\u4E00\u65E6\u4F60\u5B8C\u6210\u4E86\u6B65\u9AA42..."),kn.forEach(t),yn.forEach(t),ft=P(fe),Lt=a(fe,"BR",{class:!0}),yt=P(fe),Dt=a(fe,"BR",{class:!0}),xe=P(fe),ot=a(fe,"DIV",{class:!0});var wn=U(ot);qe=$(wn,`\u5982\u679C\u4F60\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u672B\u5730\u65C5\u6E38\uFF0C\u8FD9\u91CC\u6709\u4E2A\u66FF\u4EE3\u94FE\u63A5\uFF1A
		`),kt=a(wn,"SPAN",{class:!0});var Bn=U(kt);ke=a(Bn,"A",{href:!0,target:!0,class:!0});var dn=U(ke);Bt=a(dn,"SPAN",{class:!0});var Rn=U(Bt);dt=$(Rn,"CLICK HERE"),Rn.forEach(t),dn.forEach(t),Bn.forEach(t),wn.forEach(t),gs=P(fe),Be=a(fe,"BR",{class:!0}),Cs=P(fe),Le=a(fe,"BR",{class:!0}),Is=P(fe),at=a(fe,"BR",{class:!0}),Rt=P(fe),Vt=a(fe,"BR",{class:!0}),xs=P(fe),ut=a(fe,"BR",{class:!0}),Tt=P(fe),De=a(fe,"BR",{class:!0}),mt=P(fe),Me=a(fe,"DIV",{class:!0}),U(Me).forEach(t),Es=P(fe),he=a(fe,"FOOTER",{style:!0,class:!0});var vn=U(he);Ee=$(vn,"\u672C\u9875\u9762\u4F7F\u7528\u5168\u90E8\u7684CSS\u548C\u90E8\u5206HTML\u4EE3\u7801\u6765\u81EA\u539F\u7248freegiftcode\uFF0C\u672C\u9875\u9762\u4E3A\u73A9\u6897\u7F51\u9875\uFF0C\u8BF7\u52FF\u5F53\u771F\u3002"),f=a(vn,"BR",{class:!0}),g=$(vn,`
		\u514D\u8D39\u6B63\u7248\u793C\u54C1\u7801\u7C7B\u7F51\u7AD9\u5C5E\u4E8E\u8BC8\u9A97\u6027\u8D28\uFF0C\u5411\u793E\u4EA4\u7F51\u7AD9\u53D1\u8868\u7C7B\u4F3C\u5185\u5BB9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7981\u8A00\u6216\u7981\u8BBF\uFF0C\u8BF7\u52FF\u4F5C\u6B7B\u3002`),Ss=a(vn,"BR",{class:!0}),Yt=$(vn,`
		\u53C2\u8003`),It=a(vn,"A",{href:!0,class:!0});var Yn=U(It);xt=$(Yn,"\u3010\u6B8B\u53F6\u6742\u8C08\u3011\u6252\u4E00\u6252\u6240\u8C13\u201C\u514D \u8D39 \u6B63 \u7248 \u793C \u54C1 \u7801\u201D\u7684\u80CC\u540E"),Yn.forEach(t),vn.forEach(t),fe.forEach(t),this.h()},h(){I(e,"class","svelte-2fkrle"),I(n,"class","svelte-2fkrle"),I(c,"class","svelte-2fkrle"),I(p,"id","top"),I(p,"class","svelte-2fkrle"),I(x,"id","mcbbs-icon"),On(x.src,E="../assets/freemutecode/block.gif")||I(x,"src",E),I(x,"alt","Free Minecraft Gift Codes"),I(x,"width","90px"),I(x,"height","100px"),I(x,"class","svelte-2fkrle"),I(j,"class","svelte-2fkrle"),I(S,"id","leftheaderleft"),I(S,"class","svelte-2fkrle"),I(q,"class","svelte-2fkrle"),I(y,"class","svelte-2fkrle"),I(se,"class","svelte-2fkrle"),I(K,"class","svelte-2fkrle"),I(Q,"class","svelte-2fkrle"),I(W,"id","leftheaderright"),I(W,"class","svelte-2fkrle"),I(T,"id","leftheader"),I(T,"class","svelte-2fkrle"),I(re,"class","svelte-2fkrle"),I(te,"class","svelte-2fkrle"),I(le,"class","svelte-2fkrle"),I($e,"class","svelte-2fkrle"),I(Ae,"class","svelte-2fkrle"),I(Te,"class","svelte-2fkrle"),I(_e,"class","svelte-2fkrle"),I(ve,"class","svelte-2fkrle"),I(Pe,"class","svelte-2fkrle"),I(ue,"class","svelte-2fkrle"),I(ne,"id","leftheader2"),I(ne,"class","svelte-2fkrle"),I(Ye,"class","svelte-2fkrle"),I(ge,"class","svelte-2fkrle"),I(Ce,"id","redeemed"),I(Ce,"class","svelte-2fkrle"),I(Ne,"class","svelte-2fkrle"),I(At,"class","svelte-2fkrle"),I(ht,"class","c1 svelte-2fkrle"),I(Pt,"class","svelte-2fkrle"),I(Nt,"class","svelte-2fkrle"),I(St,"class","svelte-2fkrle"),I(me,"class","svelte-2fkrle"),I(zt,"class","svelte-2fkrle"),I(qt,"class","svelte-2fkrle"),I(Ie,"class","c1 svelte-2fkrle"),I(Mt,"class","svelte-2fkrle"),I(Gt,"class","svelte-2fkrle"),I(Ct,"class","svelte-2fkrle"),I(Se,"id","comment"),I(Se,"rows","4"),I(Se,"cols","60"),Se.value="\u6700\u540E\uFF01\u6211\u5F97\u5230\u4E862-4-R\u8BBA\u575B\u7981\u8A00\u5F85\u9047\u7EDD\u5BF9\u514D\u8D39\uFF01\u4ECEhttps://cavenightingale.github.io/freemutecode\u90A3\u91CC\u5F97\u5230\u4F60\u7684",I(Se,"class","svelte-2fkrle"),I(nt,"id","comment"),I(nt,"class","svelte-2fkrle"),I(jt,"class","svelte-2fkrle"),I(Ot,"class","svelte-2fkrle"),I(be,"id","socialmedia"),I(be,"class","svelte-2fkrle"),I(rt,"id","after"),I(rt,"class","svelte-2fkrle"),I(lt,"type","button"),lt.value="\u7533\u8BF7\u4F60\u7684MCBSS\u7981\u8A00\u4EE3\u7801",I(lt,"class","svelte-2fkrle"),I(vt,"class","c4 svelte-2fkrle"),I(Ht,"class","svelte-2fkrle"),I(Fe,"class","svelte-2fkrle"),I(Ft,"class","svelte-2fkrle"),I(ae,"class","c4 svelte-2fkrle"),I(ae,"id","Features"),I(w,"id","left"),I(w,"class","svelte-2fkrle"),I(h,"id","containar"),I(h,"class","svelte-2fkrle"),I(ze,"class","c5 svelte-2fkrle"),I(_t,"class","separator c6 svelte-2fkrle"),I(Lt,"class","svelte-2fkrle"),I(Dt,"class","svelte-2fkrle"),I(Bt,"class","c7 svelte-2fkrle"),I(ke,"href","https://www.mcbbs.net/thread-968842-1-1.html"),I(ke,"target","_blank"),I(ke,"class","svelte-2fkrle"),I(kt,"class","Apple-style-span c8 svelte-2fkrle"),I(ot,"class","c4 svelte-2fkrle"),I(Be,"class","svelte-2fkrle"),I(Le,"class","svelte-2fkrle"),I(at,"class","svelte-2fkrle"),I(Vt,"class","svelte-2fkrle"),I(ut,"class","svelte-2fkrle"),I(De,"class","svelte-2fkrle"),I(Me,"class","separator c9 svelte-2fkrle"),I(f,"class","svelte-2fkrle"),I(Ss,"class","svelte-2fkrle"),I(It,"href","https://www.mcbbs.net/thread-1226924-1-1.html"),I(It,"class","svelte-2fkrle"),pt(he,"text-align","center"),I(he,"class","svelte-2fkrle"),I(u,"id","main"),I(u,"class","svelte-2fkrle")},m(oe,fe){s(oe,e,fe),s(oe,n,fe),s(oe,l,fe),s(oe,u,fe),_(u,p),_(p,c),_(c,k),_(u,v),_(u,h),_(h,w),_(w,T),_(T,S),_(S,j),_(j,x),_(T,O),_(T,W),_(W,q),_(q,C),_(W,Y),_(W,Q),_(Q,Z),_(Q,y),_(Q,z),_(Q,se),_(Q,V),_(Q,K),_(Q,N),_(w,J),_(w,ne),_(ne,te),_(te,ee),_(te,re),_(ne,ie),_(ne,le),_(ne,pe),_(ne,ue),_(ue,$e),_($e,Re),_(ue,ce),_(ue,Ae),_(ue,Ge),_(ue,Te),_(Te,we),_(ue,je),_(ue,_e),_(ue,Oe),_(ue,ve),_(ve,He),_(ue,ye),_(ue,Pe),_(ue,d),_(w,X),_(w,Ce),_(Ce,ge),_(ge,bt),_(ge,Ye),_(ge,$t),_(w,ct),_(w,ae),_(ae,Ne),_(Ne,Ut),_(ae,Jt),_(ae,At),_(ae,Qt),_(ae,ht),_(ht,Xt),_(ae,Zt),_(ae,Pt),_(ae,Kt),_(ae,Nt),_(ae,es),_(ae,be),_(be,me),F(We,me,null),_(me,ts),F(Ue,me,null),_(me,ss),F(Je,me,null),_(me,ns),F(Qe,me,null),_(me,rs),F(Xe,me,null),_(me,is),F(Ze,me,null),_(me,ls),_(me,St),_(me,fs),F(Ke,me,null),_(me,os),F(et,me,null),_(me,as),F(tt,me,null),_(me,us),F(st,me,null),_(be,ms),_(be,zt),_(be,ps),_(be,qt),_(be,bs),_(be,Ie),_(Ie,$s),_(be,Mt),_(be,cs),_(be,Gt),_(be,hs),_(be,Ct),_(be,vs),_(be,nt),_(nt,Se),_(be,ws),_(be,jt),_(be,_s),_(be,Ot),_(ae,ys),_(ae,rt),_(rt,it),_(ae,ks),_(ae,vt),_(vt,lt),_(ae,Bs),_(ae,Ht),_(ae,ds),_(ae,Fe),_(ae,wt),_(ae,Ft),_(u,Rs),_(u,_t),_(_t,ze),_(ze,Ts),_(u,ft),_(u,Lt),_(u,yt),_(u,Dt),_(u,xe),_(u,ot),_(ot,qe),_(ot,kt),_(kt,ke),_(ke,Bt),_(Bt,dt),_(u,gs),_(u,Be),_(u,Cs),_(u,Le),_(u,Is),_(u,at),_(u,Rt),_(u,Vt),_(u,xs),_(u,ut),_(u,Tt),_(u,De),_(u,mt),_(u,Me),_(u,Es),_(u,he),_(he,Ee),_(he,f),_(he,g),_(he,Ss),_(he,Yt),_(he,It),_(It,xt),gt=!0,Et||(Fs=Xs(lt,"click",m[4]),Et=!0)},p:Ms,i(oe){gt||(G(We.$$.fragment,oe),G(Ue.$$.fragment,oe),G(Je.$$.fragment,oe),G(Qe.$$.fragment,oe),G(Xe.$$.fragment,oe),G(Ze.$$.fragment,oe),G(Ke.$$.fragment,oe),G(et.$$.fragment,oe),G(tt.$$.fragment,oe),G(st.$$.fragment,oe),gt=!0)},o(oe){M(We.$$.fragment,oe),M(Ue.$$.fragment,oe),M(Je.$$.fragment,oe),M(Qe.$$.fragment,oe),M(Xe.$$.fragment,oe),M(Ze.$$.fragment,oe),M(Ke.$$.fragment,oe),M(et.$$.fragment,oe),M(tt.$$.fragment,oe),M(st.$$.fragment,oe),gt=!1},d(oe){oe&&t(e),oe&&t(n),oe&&t(l),oe&&t(u),L(We),L(Ue),L(Je),L(Qe),L(Xe),L(Ze),L(Ke),L(et),L(tt),L(st),Et=!1,Fs()}}}function Ur(m,e,n){const p="\u83B7\u53D6\u514D\u8D39\u7684MCBBS\u7981\u8A00\u4EE3\u7801",c=()=>un("/",In);return gn(()=>document.body.style.minWidth="800px"),tr(()=>{typeof document!="undefined"&&(document.body.style.minWidth="")}),[!0,!1,p,c,()=>alert("\u54CE\u5440! \u770B\u6765\u4F60\u6CA1\u6709\u5B8C\u6210\u6B65\u9AA42!")]}class Nn extends js{constructor(e){super(),Os(this,e,Ur,Wr,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function Jr(m){let e,n,l,u,p,c;const k=m[1].default,v=zn(k,m,m[0],null);return{c(){e=o("span"),n=o("br"),v&&v.c(),l=A(),u=b(":"),p=o("br"),this.h()},l(h){e=a(h,"SPAN",{style:!0});var w=U(e);n=a(w,"BR",{}),v&&v.l(w),l=P(w),w.forEach(t),u=$(h,":"),p=a(h,"BR",{}),this.h()},h(){pt(e,"color","green"),pt(e,"font-size","20px"),pt(e,"font-weight","900")},m(h,w){s(h,e,w),_(e,n),v&&v.m(e,null),_(e,l),s(h,u,w),s(h,p,w),c=!0},p(h,[w]){v&&v.p&&(!c||w&1)&&qn(v,k,h,h[0],c?Gn(k,h[0],w,null):Mn(h[0]),null)},i(h){c||(G(v,h),c=!0)},o(h){M(v,h),c=!1},d(h){h&&t(e),v&&v.d(h),h&&t(u),h&&t(p)}}}function Qr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class zs extends js{constructor(e){super(),Os(this,e,Qr,Jr,Hs,{})}}function Xr(m){let e,n,l,u,p,c;const k=m[1].default,v=zn(k,m,m[0],null);return{c(){e=o("span"),n=o("br"),v&&v.c(),l=A(),u=b(":"),p=o("br"),this.h()},l(h){e=a(h,"SPAN",{style:!0});var w=U(e);n=a(w,"BR",{}),v&&v.l(w),l=P(w),w.forEach(t),u=$(h,":"),p=a(h,"BR",{}),this.h()},h(){pt(e,"color","brown"),pt(e,"font-size","20px"),pt(e,"font-weight","900")},m(h,w){s(h,e,w),_(e,n),v&&v.m(e,null),_(e,l),s(h,u,w),s(h,p,w),c=!0},p(h,[w]){v&&v.p&&(!c||w&1)&&qn(v,k,h,h[0],c?Gn(k,h[0],w,null):Mn(h[0]),null)},i(h){c||(G(v,h),c=!0)},o(h){M(v,h),c=!1},d(h){h&&t(e),v&&v.d(h),h&&t(u),h&&t(p)}}}function Zr(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class qs extends js{constructor(e){super(),Os(this,e,Zr,Xr,Hs,{})}}function Kr(m){let e,n;return{c(){e=o("div"),n=b("\u2714\uFE0F\u5BF9"),this.h()},l(l){e=a(l,"DIV",{class:!0});var u=U(e);n=$(u,"\u2714\uFE0F\u5BF9"),u.forEach(t),this.h()},h(){I(e,"class","svelte-1q52wzp")},m(l,u){s(l,e,u),_(e,n)},p:Ms,i:Ms,o:Ms,d(l){l&&t(e)}}}class Cn extends js{constructor(e){super(),Os(this,e,null,Kr,Hs,{})}}function ei(m){let e,n;return{c(){e=o("div"),n=b("\u274C\u9519"),this.h()},l(l){e=a(l,"DIV",{class:!0});var u=U(e);n=$(u,"\u274C\u9519"),u.forEach(t),this.h()},h(){I(e,"class","svelte-11myue2")},m(l,u){s(l,e,u),_(e,n)},p:Ms,i:Ms,o:Ms,d(l){l&&t(e)}}}class on extends js{constructor(e){super(),Os(this,e,null,ei,Hs,{})}}function ti(m){let e,n,l;const u=m[1].default,p=zn(u,m,m[0],null);return{c(){e=o("div"),n=b("\u2757"),p&&p.c(),this.h()},l(c){e=a(c,"DIV",{class:!0});var k=U(e);n=$(k,"\u2757"),p&&p.l(k),k.forEach(t),this.h()},h(){I(e,"class","svelte-1os5bmu")},m(c,k){s(c,e,k),_(e,n),p&&p.m(e,null),l=!0},p(c,[k]){p&&p.p&&(!l||k&1)&&qn(p,u,c,c[0],l?Gn(u,c[0],k,null):Mn(c[0]),null)},i(c){l||(G(p,c),l=!0)},o(c){M(p,c),l=!1},d(c){c&&t(e),p&&p.d(c)}}}function si(m,e,n){let{$$slots:l={},$$scope:u}=e;return m.$$set=p=>{"$$scope"in p&&n(0,u=p.$$scope)},[u,l]}class _n extends js{constructor(e){super(),Os(this,e,si,ti,Hs,{})}}function ni(m){let e,n,l,u,p,c,k,v,h;return{c(){e=b("\u672C\u9875\u9762\u8BB0\u5F55\u4E862022\u5E7412\u67088\u65E5\u5BF9ChatGPT\u8FDB\u884C\u7684\u56FE\u7075\u6D4B\u8BD5\u3002\u770B\u770B\u524D\u6CBFAI\u80FD\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u8BA1\u7B97\u673A\u6559\u80B2\u3002"),n=o("br"),l=b(`
        \u592A\u957F\u4E0D\u770B\u7248\uFF1A`),u=o("br"),p=b(`
        \u524D\u56DB\u7EC4\u6D4B\u8BD5\u4E3A\u5373\u5174\u53D1\u6325\u7684\u8BB0\u5FC6\u6027\u57FA\u7840\u77E5\u8BC6\u95EE\u9898\uFF0C\u96BE\u5EA6\u9002\u4E2D\uFF0CChatGPT\u56DE\u7B54\u5F97\u975E\u5E38\u597D`),c=o("br"),k=b(`
        \u540E\u56DB\u7EC4\u6D4B\u8BD5\u542B\u6709\u4E00\u9053\u5373\u5174\u53D1\u6325\u7684\u51FD\u6570\u8BBE\u8BA1\u9898\uFF0C\u4EE5\u53CA\u4E09\u9053CF\u6700\u4F4E\u96BE\u5EA6\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9898\uFF0CChatGPT\u57FA\u672C\u5C31\u6CA1\u7B54\u5BF9\u7684`),v=o("br"),h=b(`
        \u7ED3\u8BBA\uFF1AChatGPT\u5BF9\u4FE1\u606F\u5B66\u57FA\u7840\u77E5\u8BC6\u7684\u638C\u63E1\u5DF2\u7ECF\u57FA\u672C\u8FBE\u5230\u4EBA\u7C7B\u6C34\u5E73\uFF0C\u4F46\u7A0B\u5E8F\u8BBE\u8BA1\u4ECD\u7136\u662F\u533A\u5206ChatGPT\u4E0E\u4EBA\u7C7B\u7A0B\u5E8F\u5458\u7684\u6709\u6548\u65B9\u6CD5\u3002`)},l(w){e=$(w,"\u672C\u9875\u9762\u8BB0\u5F55\u4E862022\u5E7412\u67088\u65E5\u5BF9ChatGPT\u8FDB\u884C\u7684\u56FE\u7075\u6D4B\u8BD5\u3002\u770B\u770B\u524D\u6CBFAI\u80FD\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u8BA1\u7B97\u673A\u6559\u80B2\u3002"),n=a(w,"BR",{}),l=$(w,`
        \u592A\u957F\u4E0D\u770B\u7248\uFF1A`),u=a(w,"BR",{}),p=$(w,`
        \u524D\u56DB\u7EC4\u6D4B\u8BD5\u4E3A\u5373\u5174\u53D1\u6325\u7684\u8BB0\u5FC6\u6027\u57FA\u7840\u77E5\u8BC6\u95EE\u9898\uFF0C\u96BE\u5EA6\u9002\u4E2D\uFF0CChatGPT\u56DE\u7B54\u5F97\u975E\u5E38\u597D`),c=a(w,"BR",{}),k=$(w,`
        \u540E\u56DB\u7EC4\u6D4B\u8BD5\u542B\u6709\u4E00\u9053\u5373\u5174\u53D1\u6325\u7684\u51FD\u6570\u8BBE\u8BA1\u9898\uFF0C\u4EE5\u53CA\u4E09\u9053CF\u6700\u4F4E\u96BE\u5EA6\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u9898\uFF0CChatGPT\u57FA\u672C\u5C31\u6CA1\u7B54\u5BF9\u7684`),v=a(w,"BR",{}),h=$(w,`
        \u7ED3\u8BBA\uFF1AChatGPT\u5BF9\u4FE1\u606F\u5B66\u57FA\u7840\u77E5\u8BC6\u7684\u638C\u63E1\u5DF2\u7ECF\u57FA\u672C\u8FBE\u5230\u4EBA\u7C7B\u6C34\u5E73\uFF0C\u4F46\u7A0B\u5E8F\u8BBE\u8BA1\u4ECD\u7136\u662F\u533A\u5206ChatGPT\u4E0E\u4EBA\u7C7B\u7A0B\u5E8F\u5458\u7684\u6709\u6548\u65B9\u6CD5\u3002`)},m(w,T){s(w,e,T),s(w,n,T),s(w,l,T),s(w,u,T),s(w,p,T),s(w,c,T),s(w,k,T),s(w,v,T),s(w,h,T)},p:Ms,d(w){w&&t(e),w&&t(n),w&&t(l),w&&t(u),w&&t(p),w&&t(c),w&&t(k),w&&t(v),w&&t(h)}}}function ri(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ii(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function li(m){let e;return{c(){e=b("\u8FD9\u4E2A\u56DE\u7B54\u5F97\u8FD8\u53EF\u4EE5\uFF0C\u5F53\u65F6\u6CA1\u770B\u51FA\u6765\u662F\u9519\u7684\uFF0C\u540E\u6765\u6574\u7406\u7684\u65F6\u5019\u53D1\u73B0\u4E0D\u5BF9")},l(n){e=$(n,"\u8FD9\u4E2A\u56DE\u7B54\u5F97\u8FD8\u53EF\u4EE5\uFF0C\u5F53\u65F6\u6CA1\u770B\u51FA\u6765\u662F\u9519\u7684\uFF0C\u540E\u6765\u6574\u7406\u7684\u65F6\u5019\u53D1\u73B0\u4E0D\u5BF9")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function fi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se,V,K;return u=new zs({props:{$$slots:{default:[ri]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[ii]},$$scope:{ctx:m}}}),z=new on({}),V=new _n({props:{$$slots:{default:[li]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B91\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=A(),H(u.$$.fragment),p=b(`
        Explain how malloc in glibc work.`),c=o("br"),k=A(),H(v.$$.fragment),h=b(`
        In the GNU C Library (glibc), the malloc function is used to allocate memory
        dynamically. It is a type of memory management function that allows a program
        to request a block of memory from the operating system at runtime.`),w=o("br"),T=o("br"),S=b(`

        The malloc function takes a single argument, which is the size of the
        block of memory that the program would like to allocate. The function
        then returns a pointer to the start of the newly allocated block of
        memory.`),j=o("br"),x=o("br"),E=b(`

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
        memory leaks.`),Z=o("br"),y=A(),H(z.$$.fragment),se=A(),H(V.$$.fragment)},l(N){e=a(N,"H2",{});var J=U(e);n=$(J,"\u6D4B\u8BD5\u70B91\uFF1A\u57FA\u7840\u77E5\u8BC6"),J.forEach(t),l=P(N),D(u.$$.fragment,N),p=$(N,`
        Explain how malloc in glibc work.`),c=a(N,"BR",{}),k=P(N),D(v.$$.fragment,N),h=$(N,`
        In the GNU C Library (glibc), the malloc function is used to allocate memory
        dynamically. It is a type of memory management function that allows a program
        to request a block of memory from the operating system at runtime.`),w=a(N,"BR",{}),T=a(N,"BR",{}),S=$(N,`

        The malloc function takes a single argument, which is the size of the
        block of memory that the program would like to allocate. The function
        then returns a pointer to the start of the newly allocated block of
        memory.`),j=a(N,"BR",{}),x=a(N,"BR",{}),E=$(N,`

        The malloc function uses a data structure called a heap to manage the
        allocated memory. The heap is a section of memory that is set aside for
        dynamic allocation. When the malloc function is called, it searches the
        heap for a block of memory that is large enough to satisfy the request.
        If such a block is found, malloc returns a pointer to the start of the
        block and marks the memory as allocated. If no sufficiently large block
        can be found, malloc may request additional memory from the operating
        system in order to fulfill the request.`),O=a(N,"BR",{}),W=a(N,"BR",{}),q=$(N,`

        It is important to note that the memory returned by malloc is not
        initialized. This means that the values of the memory are indeterminate
        and should be set by the program before they are used. Failing to
        properly initialize the memory can lead to undefined behavior.`),C=a(N,"BR",{}),Y=a(N,"BR",{}),Q=$(N,`

        Once a block of memory has been allocated with malloc, it can be freed
        using the free function. This function takes a pointer to the start of
        the block of memory and marks it as available for future allocation. It
        is important to free memory that is no longer needed in order to avoid
        memory leaks.`),Z=a(N,"BR",{}),y=P(N),D(z.$$.fragment,N),se=P(N),D(V.$$.fragment,N)},m(N,J){s(N,e,J),_(e,n),s(N,l,J),F(u,N,J),s(N,p,J),s(N,c,J),s(N,k,J),F(v,N,J),s(N,h,J),s(N,w,J),s(N,T,J),s(N,S,J),s(N,j,J),s(N,x,J),s(N,E,J),s(N,O,J),s(N,W,J),s(N,q,J),s(N,C,J),s(N,Y,J),s(N,Q,J),s(N,Z,J),s(N,y,J),F(z,N,J),s(N,se,J),F(V,N,J),K=!0},p(N,J){const ne={};J&16&&(ne.$$scope={dirty:J,ctx:N}),u.$set(ne);const te={};J&16&&(te.$$scope={dirty:J,ctx:N}),v.$set(te);const ee={};J&16&&(ee.$$scope={dirty:J,ctx:N}),V.$set(ee)},i(N){K||(G(u.$$.fragment,N),G(v.$$.fragment,N),G(z.$$.fragment,N),G(V.$$.fragment,N),K=!0)},o(N){M(u.$$.fragment,N),M(v.$$.fragment,N),M(z.$$.fragment,N),M(V.$$.fragment,N),K=!1},d(N){N&&t(e),N&&t(l),L(u,N),N&&t(p),N&&t(c),N&&t(k),L(v,N),N&&t(h),N&&t(w),N&&t(T),N&&t(S),N&&t(j),N&&t(x),N&&t(E),N&&t(O),N&&t(W),N&&t(q),N&&t(C),N&&t(Y),N&&t(Q),N&&t(Z),N&&t(y),L(z,N),N&&t(se),L(V,N)}}}function oi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ai(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ui(m){let e,n,l,u,p,c,k,v,h,w,T,S,j;return u=new zs({props:{$$slots:{default:[oi]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[ai]},$$scope:{ctx:m}}}),S=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B92\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=A(),H(u.$$.fragment),p=b(`
        Why negative-weight edges can be handled by Floyd-Warshall algorithm?`),c=o("br"),k=A(),H(v.$$.fragment),h=b(`
        The Floyd-Warshall algorithm can handle negative-weight edges because it
        uses a dynamic programming approach to find the shortest path between all
        pairs of vertices in a weighted graph. This means that it considers all possible
        paths between each pair of vertices and selects the one with the minimum
        total weight. Since the algorithm considers all possible paths, it can handle
        negative-weight edges by simply treating them like any other type of edge.`),w=o("br"),T=A(),H(S.$$.fragment)},l(x){e=a(x,"H2",{});var E=U(e);n=$(E,"\u6D4B\u8BD5\u70B92\uFF1A\u57FA\u7840\u77E5\u8BC6"),E.forEach(t),l=P(x),D(u.$$.fragment,x),p=$(x,`
        Why negative-weight edges can be handled by Floyd-Warshall algorithm?`),c=a(x,"BR",{}),k=P(x),D(v.$$.fragment,x),h=$(x,`
        The Floyd-Warshall algorithm can handle negative-weight edges because it
        uses a dynamic programming approach to find the shortest path between all
        pairs of vertices in a weighted graph. This means that it considers all possible
        paths between each pair of vertices and selects the one with the minimum
        total weight. Since the algorithm considers all possible paths, it can handle
        negative-weight edges by simply treating them like any other type of edge.`),w=a(x,"BR",{}),T=P(x),D(S.$$.fragment,x)},m(x,E){s(x,e,E),_(e,n),s(x,l,E),F(u,x,E),s(x,p,E),s(x,c,E),s(x,k,E),F(v,x,E),s(x,h,E),s(x,w,E),s(x,T,E),F(S,x,E),j=!0},p(x,E){const O={};E&16&&(O.$$scope={dirty:E,ctx:x}),u.$set(O);const W={};E&16&&(W.$$scope={dirty:E,ctx:x}),v.$set(W)},i(x){j||(G(u.$$.fragment,x),G(v.$$.fragment,x),G(S.$$.fragment,x),j=!0)},o(x){M(u.$$.fragment,x),M(v.$$.fragment,x),M(S.$$.fragment,x),j=!1},d(x){x&&t(e),x&&t(l),L(u,x),x&&t(p),x&&t(c),x&&t(k),L(v,x),x&&t(h),x&&t(w),x&&t(T),L(S,x)}}}function mi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function pi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function bi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z;return u=new zs({props:{$$slots:{default:[mi]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[pi]},$$scope:{ctx:m}}}),Q=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B93\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=A(),H(u.$$.fragment),p=b(`
        Radix sort takes O(n) time, but why do people usually use quicksort or mergesort
        which takes O(nlgn) time on average?`),c=o("br"),k=A(),H(v.$$.fragment),h=b(`
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
        strings.`),j=o("br"),x=o("br"),E=b(`

        Another reason that radix sort is not used as often is that it can be
        slower than other algorithms in some cases. In particular, radix sort
        has a higher constant factor than quicksort or mergesort, which means
        that it may be slower for small inputs. Additionally, radix sort
        requires additional memory to store the items in each digit bucket,
        which can make it less efficient in cases where memory is limited.`),O=o("br"),W=o("br"),q=b(`

        Overall, while radix sort is an efficient algorithm in the best case,
        its limitations and potential drawbacks make it less commonly used than
        other algorithms like quicksort or mergesort.`),C=o("br"),Y=A(),H(Q.$$.fragment)},l(y){e=a(y,"H2",{});var z=U(e);n=$(z,"\u6D4B\u8BD5\u70B93\uFF1A\u57FA\u7840\u77E5\u8BC6"),z.forEach(t),l=P(y),D(u.$$.fragment,y),p=$(y,`
        Radix sort takes O(n) time, but why do people usually use quicksort or mergesort
        which takes O(nlgn) time on average?`),c=a(y,"BR",{}),k=P(y),D(v.$$.fragment,y),h=$(y,`
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
        strings.`),j=a(y,"BR",{}),x=a(y,"BR",{}),E=$(y,`

        Another reason that radix sort is not used as often is that it can be
        slower than other algorithms in some cases. In particular, radix sort
        has a higher constant factor than quicksort or mergesort, which means
        that it may be slower for small inputs. Additionally, radix sort
        requires additional memory to store the items in each digit bucket,
        which can make it less efficient in cases where memory is limited.`),O=a(y,"BR",{}),W=a(y,"BR",{}),q=$(y,`

        Overall, while radix sort is an efficient algorithm in the best case,
        its limitations and potential drawbacks make it less commonly used than
        other algorithms like quicksort or mergesort.`),C=a(y,"BR",{}),Y=P(y),D(Q.$$.fragment,y)},m(y,z){s(y,e,z),_(e,n),s(y,l,z),F(u,y,z),s(y,p,z),s(y,c,z),s(y,k,z),F(v,y,z),s(y,h,z),s(y,w,z),s(y,T,z),s(y,S,z),s(y,j,z),s(y,x,z),s(y,E,z),s(y,O,z),s(y,W,z),s(y,q,z),s(y,C,z),s(y,Y,z),F(Q,y,z),Z=!0},p(y,z){const se={};z&16&&(se.$$scope={dirty:z,ctx:y}),u.$set(se);const V={};z&16&&(V.$$scope={dirty:z,ctx:y}),v.$set(V)},i(y){Z||(G(u.$$.fragment,y),G(v.$$.fragment,y),G(Q.$$.fragment,y),Z=!0)},o(y){M(u.$$.fragment,y),M(v.$$.fragment,y),M(Q.$$.fragment,y),Z=!1},d(y){y&&t(e),y&&t(l),L(u,y),y&&t(p),y&&t(c),y&&t(k),L(v,y),y&&t(h),y&&t(w),y&&t(T),y&&t(S),y&&t(j),y&&t(x),y&&t(E),y&&t(O),y&&t(W),y&&t(q),y&&t(C),y&&t(Y),L(Q,y)}}}function $i(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ci(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function hi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z;return u=new zs({props:{$$slots:{default:[$i]},$$scope:{ctx:m}}}),v=new qs({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),Q=new Cn({}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B94\uFF1A\u57FA\u7840\u77E5\u8BC6"),l=A(),H(u.$$.fragment),p=b(`
        Why do people randomize quicksort?`),c=o("br"),k=A(),H(v.$$.fragment),h=b(`
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
        reduced, which can make quicksort more efficient in practice.`),j=o("br"),x=o("br"),E=b(`

        Additionally, by randomizing the input, quicksort can become more
        resistant to malicious inputs that are designed to cause the algorithm
        to take the worst-case amount of time. This can be important in
        situations where the input may not be trusted, such as when sorting
        user-provided data.`),O=o("br"),W=o("br"),q=b(`

        Overall, while randomizing the input to quicksort is not strictly
        necessary, it can improve the worst-case performance of the algorithm
        and make it more resistant to malicious inputs.`),C=o("br"),Y=A(),H(Q.$$.fragment)},l(y){e=a(y,"H2",{});var z=U(e);n=$(z,"\u6D4B\u8BD5\u70B94\uFF1A\u57FA\u7840\u77E5\u8BC6"),z.forEach(t),l=P(y),D(u.$$.fragment,y),p=$(y,`
        Why do people randomize quicksort?`),c=a(y,"BR",{}),k=P(y),D(v.$$.fragment,y),h=$(y,`
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
        reduced, which can make quicksort more efficient in practice.`),j=a(y,"BR",{}),x=a(y,"BR",{}),E=$(y,`

        Additionally, by randomizing the input, quicksort can become more
        resistant to malicious inputs that are designed to cause the algorithm
        to take the worst-case amount of time. This can be important in
        situations where the input may not be trusted, such as when sorting
        user-provided data.`),O=a(y,"BR",{}),W=a(y,"BR",{}),q=$(y,`

        Overall, while randomizing the input to quicksort is not strictly
        necessary, it can improve the worst-case performance of the algorithm
        and make it more resistant to malicious inputs.`),C=a(y,"BR",{}),Y=P(y),D(Q.$$.fragment,y)},m(y,z){s(y,e,z),_(e,n),s(y,l,z),F(u,y,z),s(y,p,z),s(y,c,z),s(y,k,z),F(v,y,z),s(y,h,z),s(y,w,z),s(y,T,z),s(y,S,z),s(y,j,z),s(y,x,z),s(y,E,z),s(y,O,z),s(y,W,z),s(y,q,z),s(y,C,z),s(y,Y,z),F(Q,y,z),Z=!0},p(y,z){const se={};z&16&&(se.$$scope={dirty:z,ctx:y}),u.$set(se);const V={};z&16&&(V.$$scope={dirty:z,ctx:y}),v.$set(V)},i(y){Z||(G(u.$$.fragment,y),G(v.$$.fragment,y),G(Q.$$.fragment,y),Z=!0)},o(y){M(u.$$.fragment,y),M(v.$$.fragment,y),M(Q.$$.fragment,y),Z=!1},d(y){y&&t(e),y&&t(l),L(u,y),y&&t(p),y&&t(c),y&&t(k),L(v,y),y&&t(h),y&&t(w),y&&t(T),y&&t(S),y&&t(j),y&&t(x),y&&t(E),y&&t(O),y&&t(W),y&&t(q),y&&t(C),y&&t(Y),L(Q,y)}}}function vi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function wi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function _i(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function yi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ki(m){let e;return{c(){e=b("\u8FD9\u4E2A\u7A0B\u5E8F\u5C3D\u7BA1\u5BF9\uFF0C\u4F46\u662F\u8BBE\u8BA1\u5F97\u5F88\u7CDF\u7CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u8FBEO(2^n)\uFF0C\u4E0D\u5177\u6709\u4EFB\u4F55\u5B9E\u7528\u6027")},l(n){e=$(n,"\u8FD9\u4E2A\u7A0B\u5E8F\u5C3D\u7BA1\u5BF9\uFF0C\u4F46\u662F\u8BBE\u8BA1\u5F97\u5F88\u7CDF\u7CD5\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u8FBEO(2^n)\uFF0C\u4E0D\u5177\u6709\u4EFB\u4F55\u5B9E\u7528\u6027")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Bi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function di(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ri(m){let e;return{c(){e=b("\u4E8B\u4E0D\u8FC7\u4E09\uFF0C\u653E\u5F03\u8BE5\u6D4B\u8BD5\u70B9\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u4E8B\u4E0D\u8FC7\u4E09\uFF0C\u653E\u5F03\u8BE5\u6D4B\u8BD5\u70B9\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ti(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se,V,K,N,J,ne,te,ee,re,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe;return u=new zs({props:{$$slots:{default:[vi]},$$scope:{ctx:m}}}),w=new qs({props:{$$slots:{default:[wi]},$$scope:{ctx:m}}}),x=new Vs({props:{data:`  def steps_to_convert(A: str, B: str) -> int:
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
          `}}),O=new Vs({props:{data:'steps_to_convert("hello", "world")'}}),Y=new on({}),Z=new zs({props:{$$slots:{default:[_i]},$$scope:{ctx:m}}}),V=new qs({props:{$$slots:{default:[yi]},$$scope:{ctx:m}}}),ne=new Vs({props:{data:`  def steps_to_convert(A: str, B: str) -> int:
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
          `}}),ee=new Vs({props:{data:'steps_to_convert("hello", "world")'}}),pe=new _n({props:{$$slots:{default:[ki]},$$scope:{ctx:m}}}),$e=new Cn({}),ce=new zs({props:{$$slots:{default:[Bi]},$$scope:{ctx:m}}}),we=new qs({props:{$$slots:{default:[di]},$$scope:{ctx:m}}}),_e=new Vs({props:{data:`  def steps_to_get_b_from_a(a: str, b: str) -> int:
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
        `}}),ve=new on({}),ye=new _n({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B95\uFF1A\u51FD\u6570\u8BBE\u8BA1"),l=A(),H(u.$$.fragment),p=b(`
        Program a function to solve the following problem.`),c=o("br"),k=b(`
        Given two strings, A and B, you are required to return how many steps are
        needed to get B from A. In each step, you can add or remove a letter in the
        string.`),v=o("br"),h=A(),H(w.$$.fragment),T=b(`
        Here is a possible solution to the problem using the Python programming language:`),S=o("br"),j=A(),H(x.$$.fragment),E=b(`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),H(O.$$.fragment),W=b(`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),q=o("br"),C=A(),H(Y.$$.fragment),Q=A(),H(Z.$$.fragment),y=b(`
        You can only add or remove a character but can't change a character. Please
        retry.`),z=o("br"),se=A(),H(V.$$.fragment),K=b(`
        Here is a revised solution to the problem that only allows adding or removing
        characters, but not changing them:`),N=o("br"),J=A(),H(ne.$$.fragment),te=b(`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),H(ee.$$.fragment),re=b(`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),ie=o("br"),le=A(),H(pe.$$.fragment),ue=A(),H($e.$$.fragment),Re=A(),H(ce.$$.fragment),Ae=b(`
        Try again.`),Ge=o("br"),Te=A(),H(we.$$.fragment),je=b(`
        Here's one way to solve the problem:
        `),H(_e.$$.fragment),Oe=A(),H(ve.$$.fragment),He=A(),H(ye.$$.fragment)},l(d){e=a(d,"H2",{});var X=U(e);n=$(X,"\u6D4B\u8BD5\u70B95\uFF1A\u51FD\u6570\u8BBE\u8BA1"),X.forEach(t),l=P(d),D(u.$$.fragment,d),p=$(d,`
        Program a function to solve the following problem.`),c=a(d,"BR",{}),k=$(d,`
        Given two strings, A and B, you are required to return how many steps are
        needed to get B from A. In each step, you can add or remove a letter in the
        string.`),v=a(d,"BR",{}),h=P(d),D(w.$$.fragment,d),T=$(d,`
        Here is a possible solution to the problem using the Python programming language:`),S=a(d,"BR",{}),j=P(d),D(x.$$.fragment,d),E=$(d,`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),D(O.$$.fragment,d),W=$(d,`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),q=a(d,"BR",{}),C=P(d),D(Y.$$.fragment,d),Q=P(d),D(Z.$$.fragment,d),y=$(d,`
        You can only add or remove a character but can't change a character. Please
        retry.`),z=a(d,"BR",{}),se=P(d),D(V.$$.fragment,d),K=$(d,`
        Here is a revised solution to the problem that only allows adding or removing
        characters, but not changing them:`),N=a(d,"BR",{}),J=P(d),D(ne.$$.fragment,d),te=$(d,`
        To use this function, simply call it with the two strings A and B as arguments,
        like this:
        `),D(ee.$$.fragment,d),re=$(d,`
        This will return the number of steps required to convert "hello" into "world".
        Note that this function uses a recursive approach to solve the problem, so
        it may not be suitable for very large inputs.`),ie=a(d,"BR",{}),le=P(d),D(pe.$$.fragment,d),ue=P(d),D($e.$$.fragment,d),Re=P(d),D(ce.$$.fragment,d),Ae=$(d,`
        Try again.`),Ge=a(d,"BR",{}),Te=P(d),D(we.$$.fragment,d),je=$(d,`
        Here's one way to solve the problem:
        `),D(_e.$$.fragment,d),Oe=P(d),D(ve.$$.fragment,d),He=P(d),D(ye.$$.fragment,d)},m(d,X){s(d,e,X),_(e,n),s(d,l,X),F(u,d,X),s(d,p,X),s(d,c,X),s(d,k,X),s(d,v,X),s(d,h,X),F(w,d,X),s(d,T,X),s(d,S,X),s(d,j,X),F(x,d,X),s(d,E,X),F(O,d,X),s(d,W,X),s(d,q,X),s(d,C,X),F(Y,d,X),s(d,Q,X),F(Z,d,X),s(d,y,X),s(d,z,X),s(d,se,X),F(V,d,X),s(d,K,X),s(d,N,X),s(d,J,X),F(ne,d,X),s(d,te,X),F(ee,d,X),s(d,re,X),s(d,ie,X),s(d,le,X),F(pe,d,X),s(d,ue,X),F($e,d,X),s(d,Re,X),F(ce,d,X),s(d,Ae,X),s(d,Ge,X),s(d,Te,X),F(we,d,X),s(d,je,X),F(_e,d,X),s(d,Oe,X),F(ve,d,X),s(d,He,X),F(ye,d,X),Pe=!0},p(d,X){const Ce={};X&16&&(Ce.$$scope={dirty:X,ctx:d}),u.$set(Ce);const ge={};X&16&&(ge.$$scope={dirty:X,ctx:d}),w.$set(ge);const bt={};X&16&&(bt.$$scope={dirty:X,ctx:d}),Z.$set(bt);const Ye={};X&16&&(Ye.$$scope={dirty:X,ctx:d}),V.$set(Ye);const $t={};X&16&&($t.$$scope={dirty:X,ctx:d}),pe.$set($t);const ct={};X&16&&(ct.$$scope={dirty:X,ctx:d}),ce.$set(ct);const ae={};X&16&&(ae.$$scope={dirty:X,ctx:d}),we.$set(ae);const Ne={};X&16&&(Ne.$$scope={dirty:X,ctx:d}),ye.$set(Ne)},i(d){Pe||(G(u.$$.fragment,d),G(w.$$.fragment,d),G(x.$$.fragment,d),G(O.$$.fragment,d),G(Y.$$.fragment,d),G(Z.$$.fragment,d),G(V.$$.fragment,d),G(ne.$$.fragment,d),G(ee.$$.fragment,d),G(pe.$$.fragment,d),G($e.$$.fragment,d),G(ce.$$.fragment,d),G(we.$$.fragment,d),G(_e.$$.fragment,d),G(ve.$$.fragment,d),G(ye.$$.fragment,d),Pe=!0)},o(d){M(u.$$.fragment,d),M(w.$$.fragment,d),M(x.$$.fragment,d),M(O.$$.fragment,d),M(Y.$$.fragment,d),M(Z.$$.fragment,d),M(V.$$.fragment,d),M(ne.$$.fragment,d),M(ee.$$.fragment,d),M(pe.$$.fragment,d),M($e.$$.fragment,d),M(ce.$$.fragment,d),M(we.$$.fragment,d),M(_e.$$.fragment,d),M(ve.$$.fragment,d),M(ye.$$.fragment,d),Pe=!1},d(d){d&&t(e),d&&t(l),L(u,d),d&&t(p),d&&t(c),d&&t(k),d&&t(v),d&&t(h),L(w,d),d&&t(T),d&&t(S),d&&t(j),L(x,d),d&&t(E),L(O,d),d&&t(W),d&&t(q),d&&t(C),L(Y,d),d&&t(Q),L(Z,d),d&&t(y),d&&t(z),d&&t(se),L(V,d),d&&t(K),d&&t(N),d&&t(J),L(ne,d),d&&t(te),L(ee,d),d&&t(re),d&&t(ie),d&&t(le),L(pe,d),d&&t(ue),L($e,d),d&&t(Re),L(ce,d),d&&t(Ae),d&&t(Ge),d&&t(Te),L(we,d),d&&t(je),L(_e,d),d&&t(Oe),L(ve,d),d&&t(He),L(ye,d)}}}function gi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ci(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ii(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function xi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ei(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ai(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Pi(m){let e;return{c(){e=b("\u9519\u8BEF\u4E24\u6B21\u540E\u7ED3\u675F\u4F1A\u8BDD\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u9519\u8BEF\u4E24\u6B21\u540E\u7ED3\u675F\u4F1A\u8BDD\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ni(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se,V,K,N,J,ne,te,ee,re,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,X,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee;return u=new zs({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),it=new qs({props:{$$slots:{default:[Ci]},$$scope:{ctx:m}}}),yt=new Vs({props:{data:`# Test cases
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
        `}}),qe=new on({}),ke=new zs({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),Be=new qs({props:{$$slots:{default:[xi]},$$scope:{ctx:m}}}),at=new Vs({props:{data:`# Read number of test cases
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
        `}}),ut=new on({}),De=new zs({props:{$$slots:{default:[Ei]},$$scope:{ctx:m}}}),Me=new qs({props:{$$slots:{default:[Ai]},$$scope:{ctx:m}}}),he=new _n({props:{$$slots:{default:[Pi]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B96\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=A(),H(u.$$.fragment),p=b(`
        Solve the following Problem:`),c=o("br"),k=b(`
        B. Maximum Substring`),v=o("br"),h=b(`
        time limit per test: 1 second`),w=o("br"),T=b(`
        memory limit per test: 256 megabytes`),S=o("br"),j=b(`
        input: standard input`),x=o("br"),E=b(`
        output: standard output`),O=o("br"),W=o("br"),q=b(`

        A binary string is a string consisting only of the characters 0 and 1.
        You are given a binary string s.`),C=o("br"),Y=o("br"),Q=b(`

        For some non-empty substring\u2020 t of string s containing x characters 0
        and y characters 1, define its cost as:`),Z=o("br"),y=b(`
        x\u22C5y, if x>0 and y>0; x2, if x>0 and y=0; y2, if x=0 and y>0. Given a binary
        string s of length n, find the maximum cost across all its non-empty substrings.`),z=o("br"),se=o("br"),V=b(`

        \u2020 A string a is a substring of a string b if a can be obtained from b by
        deletion of several (possibly, zero or all) characters from the
        beginning and several (possibly, zero or all) characters from the end.`),K=o("br"),N=o("br"),J=b(`

        Input`),ne=o("br"),te=o("br"),ee=b(`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u2264105) \u2014 the number of test cases. The description
        of test cases follows.`),re=o("br"),ie=o("br"),le=b(`

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
        Input`),X=o("br"),Ce=b(`

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
        1\u22C51=1.`),ys=o("br"),rt=A(),H(it.$$.fragment),ks=b(`
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

        Here is some sample Python code that implements this idea:`),ft=o("br"),Lt=A(),H(yt.$$.fragment),Dt=b(`
        Here is the complete solution to the problem:
        `),H(xe.$$.fragment),ot=A(),H(qe.$$.fragment),kt=A(),H(ke.$$.fragment),Bt=b(`
        Please read test cases from standard input.`),dt=o("br"),gs=A(),H(Be.$$.fragment),Cs=b(`
        Here is an updated solution to the problem that reads the test cases from
        standard input:`),Le=o("br"),Is=A(),H(at.$$.fragment),Rt=b(`
        This solution reads the number of test cases from standard input, then loops
        through each test case and reads the length of the binary string and the
        binary string itself from standard input. It then computes the maximum cost
        for the binary string and prints the result.`),Vt=o("br"),xs=A(),H(ut.$$.fragment),Tt=A(),H(De.$$.fragment),mt=b(`
        Please notice the definition of substring.
        `),H(Me.$$.fragment),Es=b(`
        Conversation lost.
        `),H(he.$$.fragment)},l(f){e=a(f,"H2",{});var g=U(e);n=$(g,"\u6D4B\u8BD5\u70B96\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),g.forEach(t),l=P(f),D(u.$$.fragment,f),p=$(f,`
        Solve the following Problem:`),c=a(f,"BR",{}),k=$(f,`
        B. Maximum Substring`),v=a(f,"BR",{}),h=$(f,`
        time limit per test: 1 second`),w=a(f,"BR",{}),T=$(f,`
        memory limit per test: 256 megabytes`),S=a(f,"BR",{}),j=$(f,`
        input: standard input`),x=a(f,"BR",{}),E=$(f,`
        output: standard output`),O=a(f,"BR",{}),W=a(f,"BR",{}),q=$(f,`

        A binary string is a string consisting only of the characters 0 and 1.
        You are given a binary string s.`),C=a(f,"BR",{}),Y=a(f,"BR",{}),Q=$(f,`

        For some non-empty substring\u2020 t of string s containing x characters 0
        and y characters 1, define its cost as:`),Z=a(f,"BR",{}),y=$(f,`
        x\u22C5y, if x>0 and y>0; x2, if x>0 and y=0; y2, if x=0 and y>0. Given a binary
        string s of length n, find the maximum cost across all its non-empty substrings.`),z=a(f,"BR",{}),se=a(f,"BR",{}),V=$(f,`

        \u2020 A string a is a substring of a string b if a can be obtained from b by
        deletion of several (possibly, zero or all) characters from the
        beginning and several (possibly, zero or all) characters from the end.`),K=a(f,"BR",{}),N=a(f,"BR",{}),J=$(f,`

        Input`),ne=a(f,"BR",{}),te=a(f,"BR",{}),ee=$(f,`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u2264105) \u2014 the number of test cases. The description
        of test cases follows.`),re=a(f,"BR",{}),ie=a(f,"BR",{}),le=$(f,`

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
        Input`),X=a(f,"BR",{}),Ce=$(f,`

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
        1\u22C51=1.`),ys=a(f,"BR",{}),rt=P(f),D(it.$$.fragment,f),ks=$(f,`
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

        Here is some sample Python code that implements this idea:`),ft=a(f,"BR",{}),Lt=P(f),D(yt.$$.fragment,f),Dt=$(f,`
        Here is the complete solution to the problem:
        `),D(xe.$$.fragment,f),ot=P(f),D(qe.$$.fragment,f),kt=P(f),D(ke.$$.fragment,f),Bt=$(f,`
        Please read test cases from standard input.`),dt=a(f,"BR",{}),gs=P(f),D(Be.$$.fragment,f),Cs=$(f,`
        Here is an updated solution to the problem that reads the test cases from
        standard input:`),Le=a(f,"BR",{}),Is=P(f),D(at.$$.fragment,f),Rt=$(f,`
        This solution reads the number of test cases from standard input, then loops
        through each test case and reads the length of the binary string and the
        binary string itself from standard input. It then computes the maximum cost
        for the binary string and prints the result.`),Vt=a(f,"BR",{}),xs=P(f),D(ut.$$.fragment,f),Tt=P(f),D(De.$$.fragment,f),mt=$(f,`
        Please notice the definition of substring.
        `),D(Me.$$.fragment,f),Es=$(f,`
        Conversation lost.
        `),D(he.$$.fragment,f)},m(f,g){s(f,e,g),_(e,n),s(f,l,g),F(u,f,g),s(f,p,g),s(f,c,g),s(f,k,g),s(f,v,g),s(f,h,g),s(f,w,g),s(f,T,g),s(f,S,g),s(f,j,g),s(f,x,g),s(f,E,g),s(f,O,g),s(f,W,g),s(f,q,g),s(f,C,g),s(f,Y,g),s(f,Q,g),s(f,Z,g),s(f,y,g),s(f,z,g),s(f,se,g),s(f,V,g),s(f,K,g),s(f,N,g),s(f,J,g),s(f,ne,g),s(f,te,g),s(f,ee,g),s(f,re,g),s(f,ie,g),s(f,le,g),s(f,pe,g),s(f,ue,g),s(f,$e,g),s(f,Re,g),s(f,ce,g),s(f,Ae,g),s(f,Ge,g),s(f,Te,g),s(f,we,g),s(f,je,g),s(f,_e,g),s(f,Oe,g),s(f,ve,g),s(f,He,g),s(f,ye,g),s(f,Pe,g),s(f,d,g),s(f,X,g),s(f,Ce,g),s(f,ge,g),s(f,bt,g),s(f,Ye,g),s(f,$t,g),s(f,ct,g),s(f,ae,g),s(f,Ne,g),s(f,Ut,g),s(f,Jt,g),s(f,At,g),s(f,Qt,g),s(f,ht,g),s(f,Xt,g),s(f,Zt,g),s(f,Pt,g),s(f,Kt,g),s(f,Nt,g),s(f,es,g),s(f,be,g),s(f,me,g),s(f,We,g),s(f,ts,g),s(f,Ue,g),s(f,ss,g),s(f,Je,g),s(f,ns,g),s(f,Qe,g),s(f,rs,g),s(f,Xe,g),s(f,is,g),s(f,Ze,g),s(f,ls,g),s(f,St,g),s(f,fs,g),s(f,Ke,g),s(f,os,g),s(f,et,g),s(f,as,g),s(f,tt,g),s(f,us,g),s(f,st,g),s(f,ms,g),s(f,zt,g),s(f,ps,g),s(f,qt,g),s(f,bs,g),s(f,Ie,g),s(f,$s,g),s(f,Mt,g),s(f,cs,g),s(f,Gt,g),s(f,hs,g),s(f,Ct,g),s(f,vs,g),s(f,nt,g),s(f,Se,g),s(f,ws,g),s(f,jt,g),s(f,_s,g),s(f,Ot,g),s(f,ys,g),s(f,rt,g),F(it,f,g),s(f,ks,g),s(f,vt,g),s(f,lt,g),s(f,Bs,g),s(f,Ht,g),s(f,ds,g),s(f,Fe,g),s(f,wt,g),s(f,Ft,g),s(f,Rs,g),s(f,_t,g),s(f,ze,g),s(f,Ts,g),s(f,ft,g),s(f,Lt,g),F(yt,f,g),s(f,Dt,g),F(xe,f,g),s(f,ot,g),F(qe,f,g),s(f,kt,g),F(ke,f,g),s(f,Bt,g),s(f,dt,g),s(f,gs,g),F(Be,f,g),s(f,Cs,g),s(f,Le,g),s(f,Is,g),F(at,f,g),s(f,Rt,g),s(f,Vt,g),s(f,xs,g),F(ut,f,g),s(f,Tt,g),F(De,f,g),s(f,mt,g),F(Me,f,g),s(f,Es,g),F(he,f,g),Ee=!0},p(f,g){const Ss={};g&16&&(Ss.$$scope={dirty:g,ctx:f}),u.$set(Ss);const Yt={};g&16&&(Yt.$$scope={dirty:g,ctx:f}),it.$set(Yt);const It={};g&16&&(It.$$scope={dirty:g,ctx:f}),ke.$set(It);const xt={};g&16&&(xt.$$scope={dirty:g,ctx:f}),Be.$set(xt);const gt={};g&16&&(gt.$$scope={dirty:g,ctx:f}),De.$set(gt);const Et={};g&16&&(Et.$$scope={dirty:g,ctx:f}),Me.$set(Et);const Fs={};g&16&&(Fs.$$scope={dirty:g,ctx:f}),he.$set(Fs)},i(f){Ee||(G(u.$$.fragment,f),G(it.$$.fragment,f),G(yt.$$.fragment,f),G(xe.$$.fragment,f),G(qe.$$.fragment,f),G(ke.$$.fragment,f),G(Be.$$.fragment,f),G(at.$$.fragment,f),G(ut.$$.fragment,f),G(De.$$.fragment,f),G(Me.$$.fragment,f),G(he.$$.fragment,f),Ee=!0)},o(f){M(u.$$.fragment,f),M(it.$$.fragment,f),M(yt.$$.fragment,f),M(xe.$$.fragment,f),M(qe.$$.fragment,f),M(ke.$$.fragment,f),M(Be.$$.fragment,f),M(at.$$.fragment,f),M(ut.$$.fragment,f),M(De.$$.fragment,f),M(Me.$$.fragment,f),M(he.$$.fragment,f),Ee=!1},d(f){f&&t(e),f&&t(l),L(u,f),f&&t(p),f&&t(c),f&&t(k),f&&t(v),f&&t(h),f&&t(w),f&&t(T),f&&t(S),f&&t(j),f&&t(x),f&&t(E),f&&t(O),f&&t(W),f&&t(q),f&&t(C),f&&t(Y),f&&t(Q),f&&t(Z),f&&t(y),f&&t(z),f&&t(se),f&&t(V),f&&t(K),f&&t(N),f&&t(J),f&&t(ne),f&&t(te),f&&t(ee),f&&t(re),f&&t(ie),f&&t(le),f&&t(pe),f&&t(ue),f&&t($e),f&&t(Re),f&&t(ce),f&&t(Ae),f&&t(Ge),f&&t(Te),f&&t(we),f&&t(je),f&&t(_e),f&&t(Oe),f&&t(ve),f&&t(He),f&&t(ye),f&&t(Pe),f&&t(d),f&&t(X),f&&t(Ce),f&&t(ge),f&&t(bt),f&&t(Ye),f&&t($t),f&&t(ct),f&&t(ae),f&&t(Ne),f&&t(Ut),f&&t(Jt),f&&t(At),f&&t(Qt),f&&t(ht),f&&t(Xt),f&&t(Zt),f&&t(Pt),f&&t(Kt),f&&t(Nt),f&&t(es),f&&t(be),f&&t(me),f&&t(We),f&&t(ts),f&&t(Ue),f&&t(ss),f&&t(Je),f&&t(ns),f&&t(Qe),f&&t(rs),f&&t(Xe),f&&t(is),f&&t(Ze),f&&t(ls),f&&t(St),f&&t(fs),f&&t(Ke),f&&t(os),f&&t(et),f&&t(as),f&&t(tt),f&&t(us),f&&t(st),f&&t(ms),f&&t(zt),f&&t(ps),f&&t(qt),f&&t(bs),f&&t(Ie),f&&t($s),f&&t(Mt),f&&t(cs),f&&t(Gt),f&&t(hs),f&&t(Ct),f&&t(vs),f&&t(nt),f&&t(Se),f&&t(ws),f&&t(jt),f&&t(_s),f&&t(Ot),f&&t(ys),f&&t(rt),L(it,f),f&&t(ks),f&&t(vt),f&&t(lt),f&&t(Bs),f&&t(Ht),f&&t(ds),f&&t(Fe),f&&t(wt),f&&t(Ft),f&&t(Rs),f&&t(_t),f&&t(ze),f&&t(Ts),f&&t(ft),f&&t(Lt),L(yt,f),f&&t(Dt),L(xe,f),f&&t(ot),L(qe,f),f&&t(kt),L(ke,f),f&&t(Bt),f&&t(dt),f&&t(gs),L(Be,f),f&&t(Cs),f&&t(Le),f&&t(Is),L(at,f),f&&t(Rt),f&&t(Vt),f&&t(xs),L(ut,f),f&&t(Tt),L(De,f),f&&t(mt),L(Me,f),f&&t(Es),L(he,f)}}}function Si(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function zi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function qi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Mi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Gi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ji(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Oi(m){let e;return{c(){e=b("\u7ECF\u8FC7\u63D0\u9192\u540ECharGPT\u4ECD\u7136\u62D2\u7EDD\u6539\u6B63\u5176\u9519\u8BEF\uFF0C\u9519\u8BEF\u6B21\u6570\u8FBE\u5230\u4E09\u6B21\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"\u7ECF\u8FC7\u63D0\u9192\u540ECharGPT\u4ECD\u7136\u62D2\u7EDD\u6539\u6B63\u5176\u9519\u8BEF\uFF0C\u9519\u8BEF\u6B21\u6570\u8FBE\u5230\u4E09\u6B21\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Hi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se,V,K,N,J,ne,te,ee,re,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,X,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee,f,g,Ss,Yt,It,xt,gt,Et,Fs,oe,fe,Zs,Ks,en,As,Ys,tn,sn,Ws,Ls,Ps,Gs,Qs,Ve,nn,Ds,rn,Wt,Us;return u=new zs({props:{$$slots:{default:[Si]},$$scope:{ctx:m}}}),Fe=new qs({props:{$$slots:{default:[zi]},$$scope:{ctx:m}}}),qe=new Vs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),dt=new on({}),Be=new zs({props:{$$slots:{default:[qi]},$$scope:{ctx:m}}}),Le=new qs({props:{$$slots:{default:[Mi]},$$scope:{ctx:m}}}),Ee=new Vs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Yt=new on({}),xt=new zs({props:{$$slots:{default:[Gi]},$$scope:{ctx:m}}}),Et=new qs({props:{$$slots:{default:[ji]},$$scope:{ctx:m}}}),Ls=new Vs({props:{data:`for each test case:
  for each i from 1 to n-1:
    if a[i] > a[i+1]:
      output No
      break
  output Yes
      `}}),Ds=new on({}),Wt=new _n({props:{$$slots:{default:[Oi]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B97\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=A(),H(u.$$.fragment),p=b(`
        A. Indirect Sort`),c=o("br"),k=b(`
        time limit per test: 1 second`),v=o("br"),h=b(`
        memory limit per test: 256 megabytes`),w=o("br"),T=b(`
        input: standard input`),S=o("br"),j=b(`
        output: standard output`),x=o("br"),E=b(`

        You are given a permutation a1,a2,\u2026,an of size n, where each integer
        from 1 to n appears exactly once.`),O=o("br"),W=b(`

        You can do the following operation any number of times (possibly, zero):`),q=o("br"),C=o("br"),Y=b(`

        Choose any three indices i,j,k (1\u2264i`),Q=o("j<k\u2264n)."),Z=b(`
        If ai>ak, replace ai with ai+aj. Otherwise, swap aj and ak. `),y=o("br"),z=b(`

        Determine whether you can make the array a sorted in non-descending
        order.`),se=o("br"),V=b(`
        Input`),K=o("br"),N=o("br"),J=b(`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22645000) \u2014 the number of test cases. The description
        of test cases follows.`),ne=o("br"),te=o("br"),ee=b(`

        The first line of each test case contains a single integer n (3\u2264n\u226410) \u2014
        the length of the array a.`),re=o("br"),ie=o("br"),le=b(`

        The second line contains n integers a1,a2,\u2026,an (1\u2264ai\u2264n, ai\u2260aj if i\u2260j) \u2014
        the elements of the array a.`),pe=o("br"),ue=o("br"),$e=b(`
        Output For each test case, output "Yes" (without quotes) if the array can
        be sorted in non-descending order, and "No" (without quotes) otherwise.`),Re=o("br"),ce=o("br"),Ae=b(`

        You can output "Yes" and "No" in any case (for example, strings "YES",
        "yEs" and "yes" will be recognized as a positive response).`),Ge=o("br"),Te=o("br"),we=b(`

        Example`),je=o("br"),_e=b(`
        Input`),Oe=o("br"),ve=o("br"),He=b(`

        7`),ye=o("br"),Pe=b(`
        3`),d=o("br"),X=b(`
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
        shown that the array cannot be sorted in non-descending order.`),Bs=o("br"),Ht=o("br"),ds=A(),H(Fe.$$.fragment),wt=b(`
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
        implemented:`),xe=o("br"),ot=A(),H(qe.$$.fragment),kt=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),ke=o("br"),Bt=A(),H(dt.$$.fragment),gs=A(),H(Be.$$.fragment),Cs=b(`
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
        implemented:`),Es=o("br"),he=A(),H(Ee.$$.fragment),f=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),g=o("br"),Ss=A(),H(Yt.$$.fragment),It=A(),H(xt.$$.fragment),gt=b(`
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
        implemented:`),sn=o("br"),Ws=A(),H(Ls.$$.fragment),Ps=b(`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),Gs=o("br"),Qs=b(`
        I hope this helps. Let me know if you have any other questions.`),Ve=o("br"),nn=A(),H(Ds.$$.fragment),rn=A(),H(Wt.$$.fragment),this.h()},l(i){e=a(i,"H2",{});var R=U(e);n=$(R,"\u6D4B\u8BD5\u70B97\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),R.forEach(t),l=P(i),D(u.$$.fragment,i),p=$(i,`
        A. Indirect Sort`),c=a(i,"BR",{}),k=$(i,`
        time limit per test: 1 second`),v=a(i,"BR",{}),h=$(i,`
        memory limit per test: 256 megabytes`),w=a(i,"BR",{}),T=$(i,`
        input: standard input`),S=a(i,"BR",{}),j=$(i,`
        output: standard output`),x=a(i,"BR",{}),E=$(i,`

        You are given a permutation a1,a2,\u2026,an of size n, where each integer
        from 1 to n appears exactly once.`),O=a(i,"BR",{}),W=$(i,`

        You can do the following operation any number of times (possibly, zero):`),q=a(i,"BR",{}),C=a(i,"BR",{}),Y=$(i,`

        Choose any three indices i,j,k (1\u2264i`),Q=a(i,"J<K\u2264N).",{"<br":!0}),U(Q).forEach(t),Z=$(i,`
        If ai>ak, replace ai with ai+aj. Otherwise, swap aj and ak. `),y=a(i,"BR",{}),z=$(i,`

        Determine whether you can make the array a sorted in non-descending
        order.`),se=a(i,"BR",{}),V=$(i,`
        Input`),K=a(i,"BR",{}),N=a(i,"BR",{}),J=$(i,`

        Each test consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22645000) \u2014 the number of test cases. The description
        of test cases follows.`),ne=a(i,"BR",{}),te=a(i,"BR",{}),ee=$(i,`

        The first line of each test case contains a single integer n (3\u2264n\u226410) \u2014
        the length of the array a.`),re=a(i,"BR",{}),ie=a(i,"BR",{}),le=$(i,`

        The second line contains n integers a1,a2,\u2026,an (1\u2264ai\u2264n, ai\u2260aj if i\u2260j) \u2014
        the elements of the array a.`),pe=a(i,"BR",{}),ue=a(i,"BR",{}),$e=$(i,`
        Output For each test case, output "Yes" (without quotes) if the array can
        be sorted in non-descending order, and "No" (without quotes) otherwise.`),Re=a(i,"BR",{}),ce=a(i,"BR",{}),Ae=$(i,`

        You can output "Yes" and "No" in any case (for example, strings "YES",
        "yEs" and "yes" will be recognized as a positive response).`),Ge=a(i,"BR",{}),Te=a(i,"BR",{}),we=$(i,`

        Example`),je=a(i,"BR",{}),_e=$(i,`
        Input`),Oe=a(i,"BR",{}),ve=a(i,"BR",{}),He=$(i,`

        7`),ye=a(i,"BR",{}),Pe=$(i,`
        3`),d=a(i,"BR",{}),X=$(i,`
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
        shown that the array cannot be sorted in non-descending order.`),Bs=a(i,"BR",{}),Ht=a(i,"BR",{}),ds=P(i),D(Fe.$$.fragment,i),wt=$(i,`
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
        implemented:`),xe=a(i,"BR",{}),ot=P(i),D(qe.$$.fragment,i),kt=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),ke=a(i,"BR",{}),Bt=P(i),D(dt.$$.fragment,i),gs=P(i),D(Be.$$.fragment,i),Cs=$(i,`
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
        implemented:`),Es=a(i,"BR",{}),he=P(i),D(Ee.$$.fragment,i),f=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),g=a(i,"BR",{}),Ss=P(i),D(Yt.$$.fragment,i),It=P(i),D(xt.$$.fragment,i),gt=$(i,`
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
        implemented:`),sn=a(i,"BR",{}),Ws=P(i),D(Ls.$$.fragment,i),Ps=$(i,`
        This solution has time complexity O(t*n), where t is the number of test cases
        and n is the length of the permutation. This should be fast enough to solve
        the problem within the time limit.`),Gs=a(i,"BR",{}),Qs=$(i,`
        I hope this helps. Let me know if you have any other questions.`),Ve=a(i,"BR",{}),nn=P(i),D(Ds.$$.fragment,i),rn=P(i),D(Wt.$$.fragment,i),this.h()},h(){I(Q,"<br","")},m(i,R){s(i,e,R),_(e,n),s(i,l,R),F(u,i,R),s(i,p,R),s(i,c,R),s(i,k,R),s(i,v,R),s(i,h,R),s(i,w,R),s(i,T,R),s(i,S,R),s(i,j,R),s(i,x,R),s(i,E,R),s(i,O,R),s(i,W,R),s(i,q,R),s(i,C,R),s(i,Y,R),s(i,Q,R),s(i,Z,R),s(i,y,R),s(i,z,R),s(i,se,R),s(i,V,R),s(i,K,R),s(i,N,R),s(i,J,R),s(i,ne,R),s(i,te,R),s(i,ee,R),s(i,re,R),s(i,ie,R),s(i,le,R),s(i,pe,R),s(i,ue,R),s(i,$e,R),s(i,Re,R),s(i,ce,R),s(i,Ae,R),s(i,Ge,R),s(i,Te,R),s(i,we,R),s(i,je,R),s(i,_e,R),s(i,Oe,R),s(i,ve,R),s(i,He,R),s(i,ye,R),s(i,Pe,R),s(i,d,R),s(i,X,R),s(i,Ce,R),s(i,ge,R),s(i,bt,R),s(i,Ye,R),s(i,$t,R),s(i,ct,R),s(i,ae,R),s(i,Ne,R),s(i,Ut,R),s(i,Jt,R),s(i,At,R),s(i,Qt,R),s(i,ht,R),s(i,Xt,R),s(i,Zt,R),s(i,Pt,R),s(i,Kt,R),s(i,Nt,R),s(i,es,R),s(i,be,R),s(i,me,R),s(i,We,R),s(i,ts,R),s(i,Ue,R),s(i,ss,R),s(i,Je,R),s(i,ns,R),s(i,Qe,R),s(i,rs,R),s(i,Xe,R),s(i,is,R),s(i,Ze,R),s(i,ls,R),s(i,St,R),s(i,fs,R),s(i,Ke,R),s(i,os,R),s(i,et,R),s(i,as,R),s(i,tt,R),s(i,us,R),s(i,st,R),s(i,ms,R),s(i,zt,R),s(i,ps,R),s(i,qt,R),s(i,bs,R),s(i,Ie,R),s(i,$s,R),s(i,Mt,R),s(i,cs,R),s(i,Gt,R),s(i,hs,R),s(i,Ct,R),s(i,vs,R),s(i,nt,R),s(i,Se,R),s(i,ws,R),s(i,jt,R),s(i,_s,R),s(i,Ot,R),s(i,ys,R),s(i,rt,R),s(i,it,R),s(i,ks,R),s(i,vt,R),s(i,lt,R),s(i,Bs,R),s(i,Ht,R),s(i,ds,R),F(Fe,i,R),s(i,wt,R),s(i,Ft,R),s(i,Rs,R),s(i,_t,R),s(i,ze,R),s(i,Ts,R),s(i,ft,R),s(i,Lt,R),s(i,yt,R),s(i,Dt,R),s(i,xe,R),s(i,ot,R),F(qe,i,R),s(i,kt,R),s(i,ke,R),s(i,Bt,R),F(dt,i,R),s(i,gs,R),F(Be,i,R),s(i,Cs,R),F(Le,i,R),s(i,Is,R),s(i,at,R),s(i,Rt,R),s(i,Vt,R),s(i,xs,R),s(i,ut,R),s(i,Tt,R),s(i,De,R),s(i,mt,R),s(i,Me,R),s(i,Es,R),s(i,he,R),F(Ee,i,R),s(i,f,R),s(i,g,R),s(i,Ss,R),F(Yt,i,R),s(i,It,R),F(xt,i,R),s(i,gt,R),F(Et,i,R),s(i,Fs,R),s(i,oe,R),s(i,fe,R),s(i,Zs,R),s(i,Ks,R),s(i,en,R),s(i,As,R),s(i,Ys,R),s(i,tn,R),s(i,sn,R),s(i,Ws,R),F(Ls,i,R),s(i,Ps,R),s(i,Gs,R),s(i,Qs,R),s(i,Ve,R),s(i,nn,R),F(Ds,i,R),s(i,rn,R),F(Wt,i,R),Us=!0},p(i,R){const Js={};R&16&&(Js.$$scope={dirty:R,ctx:i}),u.$set(Js);const de={};R&16&&(de.$$scope={dirty:R,ctx:i}),Fe.$set(de);const r={};R&16&&(r.$$scope={dirty:R,ctx:i}),Be.$set(r);const B={};R&16&&(B.$$scope={dirty:R,ctx:i}),Le.$set(B);const mn={};R&16&&(mn.$$scope={dirty:R,ctx:i}),xt.$set(mn);const pn={};R&16&&(pn.$$scope={dirty:R,ctx:i}),Et.$set(pn);const bn={};R&16&&(bn.$$scope={dirty:R,ctx:i}),Wt.$set(bn)},i(i){Us||(G(u.$$.fragment,i),G(Fe.$$.fragment,i),G(qe.$$.fragment,i),G(dt.$$.fragment,i),G(Be.$$.fragment,i),G(Le.$$.fragment,i),G(Ee.$$.fragment,i),G(Yt.$$.fragment,i),G(xt.$$.fragment,i),G(Et.$$.fragment,i),G(Ls.$$.fragment,i),G(Ds.$$.fragment,i),G(Wt.$$.fragment,i),Us=!0)},o(i){M(u.$$.fragment,i),M(Fe.$$.fragment,i),M(qe.$$.fragment,i),M(dt.$$.fragment,i),M(Be.$$.fragment,i),M(Le.$$.fragment,i),M(Ee.$$.fragment,i),M(Yt.$$.fragment,i),M(xt.$$.fragment,i),M(Et.$$.fragment,i),M(Ls.$$.fragment,i),M(Ds.$$.fragment,i),M(Wt.$$.fragment,i),Us=!1},d(i){i&&t(e),i&&t(l),L(u,i),i&&t(p),i&&t(c),i&&t(k),i&&t(v),i&&t(h),i&&t(w),i&&t(T),i&&t(S),i&&t(j),i&&t(x),i&&t(E),i&&t(O),i&&t(W),i&&t(q),i&&t(C),i&&t(Y),i&&t(Q),i&&t(Z),i&&t(y),i&&t(z),i&&t(se),i&&t(V),i&&t(K),i&&t(N),i&&t(J),i&&t(ne),i&&t(te),i&&t(ee),i&&t(re),i&&t(ie),i&&t(le),i&&t(pe),i&&t(ue),i&&t($e),i&&t(Re),i&&t(ce),i&&t(Ae),i&&t(Ge),i&&t(Te),i&&t(we),i&&t(je),i&&t(_e),i&&t(Oe),i&&t(ve),i&&t(He),i&&t(ye),i&&t(Pe),i&&t(d),i&&t(X),i&&t(Ce),i&&t(ge),i&&t(bt),i&&t(Ye),i&&t($t),i&&t(ct),i&&t(ae),i&&t(Ne),i&&t(Ut),i&&t(Jt),i&&t(At),i&&t(Qt),i&&t(ht),i&&t(Xt),i&&t(Zt),i&&t(Pt),i&&t(Kt),i&&t(Nt),i&&t(es),i&&t(be),i&&t(me),i&&t(We),i&&t(ts),i&&t(Ue),i&&t(ss),i&&t(Je),i&&t(ns),i&&t(Qe),i&&t(rs),i&&t(Xe),i&&t(is),i&&t(Ze),i&&t(ls),i&&t(St),i&&t(fs),i&&t(Ke),i&&t(os),i&&t(et),i&&t(as),i&&t(tt),i&&t(us),i&&t(st),i&&t(ms),i&&t(zt),i&&t(ps),i&&t(qt),i&&t(bs),i&&t(Ie),i&&t($s),i&&t(Mt),i&&t(cs),i&&t(Gt),i&&t(hs),i&&t(Ct),i&&t(vs),i&&t(nt),i&&t(Se),i&&t(ws),i&&t(jt),i&&t(_s),i&&t(Ot),i&&t(ys),i&&t(rt),i&&t(it),i&&t(ks),i&&t(vt),i&&t(lt),i&&t(Bs),i&&t(Ht),i&&t(ds),L(Fe,i),i&&t(wt),i&&t(Ft),i&&t(Rs),i&&t(_t),i&&t(ze),i&&t(Ts),i&&t(ft),i&&t(Lt),i&&t(yt),i&&t(Dt),i&&t(xe),i&&t(ot),L(qe,i),i&&t(kt),i&&t(ke),i&&t(Bt),L(dt,i),i&&t(gs),L(Be,i),i&&t(Cs),L(Le,i),i&&t(Is),i&&t(at),i&&t(Rt),i&&t(Vt),i&&t(xs),i&&t(ut),i&&t(Tt),i&&t(De),i&&t(mt),i&&t(Me),i&&t(Es),i&&t(he),L(Ee,i),i&&t(f),i&&t(g),i&&t(Ss),L(Yt,i),i&&t(It),L(xt,i),i&&t(gt),L(Et,i),i&&t(Fs),i&&t(oe),i&&t(fe),i&&t(Zs),i&&t(Ks),i&&t(en),i&&t(As),i&&t(Ys),i&&t(tn),i&&t(sn),i&&t(Ws),L(Ls,i),i&&t(Ps),i&&t(Gs),i&&t(Qs),i&&t(Ve),i&&t(nn),L(Ds,i),i&&t(rn),L(Wt,i)}}}function Fi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Li(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Di(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Vi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Yi(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Wi(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ui(m){let e;return{c(){e=b("CaveNightingale")},l(n){e=$(n,"CaveNightingale")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Ji(m){let e;return{c(){e=b("ChatGPT")},l(n){e=$(n,"ChatGPT")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Qi(m){let e;return{c(){e=b("ChatGPT\u5411\u4EBA\u7C7B\u6D4B\u8BD5\u8005\u8BE2\u95EE\u7B97\u6CD5\uFF0C\u5E76\u4EC5\u5728\u6D4B\u8BD5\u4EBA\u7ED9\u51FA\u6838\u5FC3\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u6B63\u786E\u5199\u51FA\u4EE3\u7801\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},l(n){e=$(n,"ChatGPT\u5411\u4EBA\u7C7B\u6D4B\u8BD5\u8005\u8BE2\u95EE\u7B97\u6CD5\uFF0C\u5E76\u4EC5\u5728\u6D4B\u8BD5\u4EBA\u7ED9\u51FA\u6838\u5FC3\u7B97\u6CD5\u7684\u60C5\u51B5\u4E0B\u6B63\u786E\u5199\u51FA\u4EE3\u7801\uFF0C\u6D4B\u8BD5\u4E0D\u901A\u8FC7")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function Xi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q,C,Y,Q,Z,y,z,se,V,K,N,J,ne,te,ee,re,ie,le,pe,ue,$e,Re,ce,Ae,Ge,Te,we,je,_e,Oe,ve,He,ye,Pe,d,X,Ce,ge,bt,Ye,$t,ct,ae,Ne,Ut,Jt,At,Qt,ht,Xt,Zt,Pt,Kt,Nt,es,be,me,We,ts,Ue,ss,Je,ns,Qe,rs,Xe,is,Ze,ls,St,fs,Ke,os,et,as,tt,us,st,ms,zt,ps,qt,bs,Ie,$s,Mt,cs,Gt,hs,Ct,vs,nt,Se,ws,jt,_s,Ot,ys,rt,it,ks,vt,lt,Bs,Ht,ds,Fe,wt,Ft,Rs,_t,ze,Ts,ft,Lt,yt,Dt,xe,ot,qe,kt,ke,Bt,dt,gs,Be,Cs,Le,Is,at,Rt,Vt,xs,ut,Tt,De,mt,Me,Es,he,Ee,f,g,Ss,Yt,It,xt,gt,Et,Fs,oe,fe,Zs,Ks,en,As,Ys,tn,sn,Ws,Ls,Ps,Gs,Qs,Ve,nn,Ds,rn,Wt,Us,i,R,Js,de;return u=new zs({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),Ie=new qs({props:{$$slots:{default:[Li]},$$scope:{ctx:m}}}),wt=new Vs({props:{data:`for each test case:
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
`}}),ze=new on({}),ft=new zs({props:{$$slots:{default:[Di]},$$scope:{ctx:m}}}),xe=new qs({props:{$$slots:{default:[Vi]},$$scope:{ctx:m}}}),Rt=new Vs({props:{data:`for each test case:
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
`}}),Tt=new on({}),mt=new zs({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),Ee=new qs({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),gt=new zs({props:{$$slots:{default:[Ui]},$$scope:{ctx:m}}}),fe=new qs({props:{$$slots:{default:[Ji]},$$scope:{ctx:m}}}),Wt=new Vs({props:{data:`for each test case:
    sum up all the numbers in the array
    take the absolute value of the result
    print the result
`}}),i=new Cn({}),Js=new _n({props:{$$slots:{default:[Qi]},$$scope:{ctx:m}}}),{c(){e=o("h2"),n=b("\u6D4B\u8BD5\u70B98\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),l=A(),H(u.$$.fragment),p=b(`
        Solve the following problem:`),c=o("br"),k=b(`
        A. Two Groups`),v=o("br"),h=b(`
        time limit per test: 1 second`),w=o("br"),T=b(`
        memory limit per test: 256 megabytes`),S=o("br"),j=b(`
        input: standard input`),x=o("br"),E=b(`
        output: standard output`),O=o("br"),W=b(`

        You are given an array a consisting of n integers. You want to
        distribute these n integers into two groups s1 and s2 (groups can be
        empty) so that the following conditions are satisfied:`),q=o("br"),C=o("br"),Y=b(`

        For each i (1\u2264i\u2264n), ai goes into exactly one group. The value
        |sum(s1)|\u2212|sum(s2)| is the maximum possible among all such ways to
        distribute the integers.`),Q=o("br"),Z=o("br"),y=b(`

        Here sum(s1) denotes the sum of the numbers in the group s1, and sum(s2)
        denotes the sum of the numbers in the group s2.`),z=o("br"),se=o("br"),V=b(`

        Determine the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),K=o("br"),N=o("br"),J=b(`

        Input`),ne=o("br"),te=o("br"),ee=b(`

        The input consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22642\u22C5104)\xA0\u2014 the number of test cases. The description
        of the test cases follows.`),re=o("br"),ie=o("br"),le=b(`

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
        Input`),X=o("br"),Ce=o("br"),ge=b(`

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
        s2={2,0}. Then the value will be |\u22129\u22124+0|\u2212|2+0|=13\u22122=11.`),ps=o("br"),qt=o("br"),bs=A(),H(Ie.$$.fragment),$s=b(`
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

        Here is the pseudocode for the solution:`),ds=o("br"),Fe=A(),H(wt.$$.fragment),Ft=b(`
        We can implement this solution in any programming language of our choice.`),Rs=o("br"),_t=A(),H(ze.$$.fragment),Ts=A(),H(ft.$$.fragment),Lt=b(`
        Notice that we are finding the maximum value instead of the minimum one.`),yt=o("br"),Dt=A(),H(xe.$$.fragment),ot=b(`
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

        Here is the pseudocode for the solution:`),Is=o("br"),at=A(),H(Rt.$$.fragment),Vt=b(`
        We can implement this solution in any programming language of our choice.`),xs=o("br"),ut=A(),H(Tt.$$.fragment),De=A(),H(mt.$$.fragment),Me=b(`
        However, your answer is incorrect and does not pass the test. Please try
        again. The correct solution is far simpler.`),Es=o("br"),he=A(),H(Ee.$$.fragment),f=b(`
        I apologize if my previous answer did not fully address your question. Can
        you please provide more information about what is incorrect in my solution,
        or what is missing in it? This will help me understand where I went wrong
        and provide a better answer.`),g=o("br"),Ss=o("br"),Yt=b(`

        As for the correct solution, if you have it, I would be happy to review
        and discuss it. I would also be happy to provide a new solution that is
        simpler and correct. To do that, I would need more information about the
        problem and the correct approach to solving it. Can you please provide
        this information?`),It=o("br"),xt=A(),H(gt.$$.fragment),Et=b(`
        The solution is simply to sum all the numbers up. This can be proved using
        some math skills.`),Fs=o("br"),oe=A(),H(fe.$$.fragment),Zs=b(`
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

        Here is the pseudocode for the solution:`),Ds=o("br"),rn=A(),H(Wt.$$.fragment),Us=b(`
        We can implement this solution in any programming language of our choice.
        `),H(i.$$.fragment),R=A(),H(Js.$$.fragment)},l(r){e=a(r,"H2",{});var B=U(e);n=$(B,"\u6D4B\u8BD5\u70B98\uFF1A\u7A0B\u5E8F\u8BBE\u8BA1"),B.forEach(t),l=P(r),D(u.$$.fragment,r),p=$(r,`
        Solve the following problem:`),c=a(r,"BR",{}),k=$(r,`
        A. Two Groups`),v=a(r,"BR",{}),h=$(r,`
        time limit per test: 1 second`),w=a(r,"BR",{}),T=$(r,`
        memory limit per test: 256 megabytes`),S=a(r,"BR",{}),j=$(r,`
        input: standard input`),x=a(r,"BR",{}),E=$(r,`
        output: standard output`),O=a(r,"BR",{}),W=$(r,`

        You are given an array a consisting of n integers. You want to
        distribute these n integers into two groups s1 and s2 (groups can be
        empty) so that the following conditions are satisfied:`),q=a(r,"BR",{}),C=a(r,"BR",{}),Y=$(r,`

        For each i (1\u2264i\u2264n), ai goes into exactly one group. The value
        |sum(s1)|\u2212|sum(s2)| is the maximum possible among all such ways to
        distribute the integers.`),Q=a(r,"BR",{}),Z=a(r,"BR",{}),y=$(r,`

        Here sum(s1) denotes the sum of the numbers in the group s1, and sum(s2)
        denotes the sum of the numbers in the group s2.`),z=a(r,"BR",{}),se=a(r,"BR",{}),V=$(r,`

        Determine the maximum possible value of |sum(s1)|\u2212|sum(s2)|.`),K=a(r,"BR",{}),N=a(r,"BR",{}),J=$(r,`

        Input`),ne=a(r,"BR",{}),te=a(r,"BR",{}),ee=$(r,`

        The input consists of multiple test cases. The first line contains a
        single integer t (1\u2264t\u22642\u22C5104)\xA0\u2014 the number of test cases. The description
        of the test cases follows.`),re=a(r,"BR",{}),ie=a(r,"BR",{}),le=$(r,`

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
        Input`),X=a(r,"BR",{}),Ce=a(r,"BR",{}),ge=$(r,`

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
        s2={2,0}. Then the value will be |\u22129\u22124+0|\u2212|2+0|=13\u22122=11.`),ps=a(r,"BR",{}),qt=a(r,"BR",{}),bs=P(r),D(Ie.$$.fragment,r),$s=$(r,`
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

        Here is the pseudocode for the solution:`),ds=a(r,"BR",{}),Fe=P(r),D(wt.$$.fragment,r),Ft=$(r,`
        We can implement this solution in any programming language of our choice.`),Rs=a(r,"BR",{}),_t=P(r),D(ze.$$.fragment,r),Ts=P(r),D(ft.$$.fragment,r),Lt=$(r,`
        Notice that we are finding the maximum value instead of the minimum one.`),yt=a(r,"BR",{}),Dt=P(r),D(xe.$$.fragment,r),ot=$(r,`
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

        Here is the pseudocode for the solution:`),Is=a(r,"BR",{}),at=P(r),D(Rt.$$.fragment,r),Vt=$(r,`
        We can implement this solution in any programming language of our choice.`),xs=a(r,"BR",{}),ut=P(r),D(Tt.$$.fragment,r),De=P(r),D(mt.$$.fragment,r),Me=$(r,`
        However, your answer is incorrect and does not pass the test. Please try
        again. The correct solution is far simpler.`),Es=a(r,"BR",{}),he=P(r),D(Ee.$$.fragment,r),f=$(r,`
        I apologize if my previous answer did not fully address your question. Can
        you please provide more information about what is incorrect in my solution,
        or what is missing in it? This will help me understand where I went wrong
        and provide a better answer.`),g=a(r,"BR",{}),Ss=a(r,"BR",{}),Yt=$(r,`

        As for the correct solution, if you have it, I would be happy to review
        and discuss it. I would also be happy to provide a new solution that is
        simpler and correct. To do that, I would need more information about the
        problem and the correct approach to solving it. Can you please provide
        this information?`),It=a(r,"BR",{}),xt=P(r),D(gt.$$.fragment,r),Et=$(r,`
        The solution is simply to sum all the numbers up. This can be proved using
        some math skills.`),Fs=a(r,"BR",{}),oe=P(r),D(fe.$$.fragment,r),Zs=$(r,`
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

        Here is the pseudocode for the solution:`),Ds=a(r,"BR",{}),rn=P(r),D(Wt.$$.fragment,r),Us=$(r,`
        We can implement this solution in any programming language of our choice.
        `),D(i.$$.fragment,r),R=P(r),D(Js.$$.fragment,r)},m(r,B){s(r,e,B),_(e,n),s(r,l,B),F(u,r,B),s(r,p,B),s(r,c,B),s(r,k,B),s(r,v,B),s(r,h,B),s(r,w,B),s(r,T,B),s(r,S,B),s(r,j,B),s(r,x,B),s(r,E,B),s(r,O,B),s(r,W,B),s(r,q,B),s(r,C,B),s(r,Y,B),s(r,Q,B),s(r,Z,B),s(r,y,B),s(r,z,B),s(r,se,B),s(r,V,B),s(r,K,B),s(r,N,B),s(r,J,B),s(r,ne,B),s(r,te,B),s(r,ee,B),s(r,re,B),s(r,ie,B),s(r,le,B),s(r,pe,B),s(r,ue,B),s(r,$e,B),s(r,Re,B),s(r,ce,B),s(r,Ae,B),s(r,Ge,B),s(r,Te,B),s(r,we,B),s(r,je,B),s(r,_e,B),s(r,Oe,B),s(r,ve,B),s(r,He,B),s(r,ye,B),s(r,Pe,B),s(r,d,B),s(r,X,B),s(r,Ce,B),s(r,ge,B),s(r,bt,B),s(r,Ye,B),s(r,$t,B),s(r,ct,B),s(r,ae,B),s(r,Ne,B),s(r,Ut,B),s(r,Jt,B),s(r,At,B),s(r,Qt,B),s(r,ht,B),s(r,Xt,B),s(r,Zt,B),s(r,Pt,B),s(r,Kt,B),s(r,Nt,B),s(r,es,B),s(r,be,B),s(r,me,B),s(r,We,B),s(r,ts,B),s(r,Ue,B),s(r,ss,B),s(r,Je,B),s(r,ns,B),s(r,Qe,B),s(r,rs,B),s(r,Xe,B),s(r,is,B),s(r,Ze,B),s(r,ls,B),s(r,St,B),s(r,fs,B),s(r,Ke,B),s(r,os,B),s(r,et,B),s(r,as,B),s(r,tt,B),s(r,us,B),s(r,st,B),s(r,ms,B),s(r,zt,B),s(r,ps,B),s(r,qt,B),s(r,bs,B),F(Ie,r,B),s(r,$s,B),s(r,Mt,B),s(r,cs,B),s(r,Gt,B),s(r,hs,B),s(r,Ct,B),s(r,vs,B),s(r,nt,B),s(r,Se,B),s(r,ws,B),s(r,jt,B),s(r,_s,B),s(r,Ot,B),s(r,ys,B),s(r,rt,B),s(r,it,B),s(r,ks,B),s(r,vt,B),s(r,lt,B),s(r,Bs,B),s(r,Ht,B),s(r,ds,B),s(r,Fe,B),F(wt,r,B),s(r,Ft,B),s(r,Rs,B),s(r,_t,B),F(ze,r,B),s(r,Ts,B),F(ft,r,B),s(r,Lt,B),s(r,yt,B),s(r,Dt,B),F(xe,r,B),s(r,ot,B),s(r,qe,B),s(r,kt,B),s(r,ke,B),s(r,Bt,B),s(r,dt,B),s(r,gs,B),s(r,Be,B),s(r,Cs,B),s(r,Le,B),s(r,Is,B),s(r,at,B),F(Rt,r,B),s(r,Vt,B),s(r,xs,B),s(r,ut,B),F(Tt,r,B),s(r,De,B),F(mt,r,B),s(r,Me,B),s(r,Es,B),s(r,he,B),F(Ee,r,B),s(r,f,B),s(r,g,B),s(r,Ss,B),s(r,Yt,B),s(r,It,B),s(r,xt,B),F(gt,r,B),s(r,Et,B),s(r,Fs,B),s(r,oe,B),F(fe,r,B),s(r,Zs,B),s(r,Ks,B),s(r,en,B),s(r,As,B),s(r,Ys,B),s(r,tn,B),s(r,sn,B),s(r,Ws,B),s(r,Ls,B),s(r,Ps,B),s(r,Gs,B),s(r,Qs,B),s(r,Ve,B),s(r,nn,B),s(r,Ds,B),s(r,rn,B),F(Wt,r,B),s(r,Us,B),F(i,r,B),s(r,R,B),F(Js,r,B),de=!0},p(r,B){const mn={};B&16&&(mn.$$scope={dirty:B,ctx:r}),u.$set(mn);const pn={};B&16&&(pn.$$scope={dirty:B,ctx:r}),Ie.$set(pn);const bn={};B&16&&(bn.$$scope={dirty:B,ctx:r}),ft.$set(bn);const yn={};B&16&&(yn.$$scope={dirty:B,ctx:r}),xe.$set(yn);const kn={};B&16&&(kn.$$scope={dirty:B,ctx:r}),mt.$set(kn);const wn={};B&16&&(wn.$$scope={dirty:B,ctx:r}),Ee.$set(wn);const Bn={};B&16&&(Bn.$$scope={dirty:B,ctx:r}),gt.$set(Bn);const dn={};B&16&&(dn.$$scope={dirty:B,ctx:r}),fe.$set(dn);const Rn={};B&16&&(Rn.$$scope={dirty:B,ctx:r}),Js.$set(Rn)},i(r){de||(G(u.$$.fragment,r),G(Ie.$$.fragment,r),G(wt.$$.fragment,r),G(ze.$$.fragment,r),G(ft.$$.fragment,r),G(xe.$$.fragment,r),G(Rt.$$.fragment,r),G(Tt.$$.fragment,r),G(mt.$$.fragment,r),G(Ee.$$.fragment,r),G(gt.$$.fragment,r),G(fe.$$.fragment,r),G(Wt.$$.fragment,r),G(i.$$.fragment,r),G(Js.$$.fragment,r),de=!0)},o(r){M(u.$$.fragment,r),M(Ie.$$.fragment,r),M(wt.$$.fragment,r),M(ze.$$.fragment,r),M(ft.$$.fragment,r),M(xe.$$.fragment,r),M(Rt.$$.fragment,r),M(Tt.$$.fragment,r),M(mt.$$.fragment,r),M(Ee.$$.fragment,r),M(gt.$$.fragment,r),M(fe.$$.fragment,r),M(Wt.$$.fragment,r),M(i.$$.fragment,r),M(Js.$$.fragment,r),de=!1},d(r){r&&t(e),r&&t(l),L(u,r),r&&t(p),r&&t(c),r&&t(k),r&&t(v),r&&t(h),r&&t(w),r&&t(T),r&&t(S),r&&t(j),r&&t(x),r&&t(E),r&&t(O),r&&t(W),r&&t(q),r&&t(C),r&&t(Y),r&&t(Q),r&&t(Z),r&&t(y),r&&t(z),r&&t(se),r&&t(V),r&&t(K),r&&t(N),r&&t(J),r&&t(ne),r&&t(te),r&&t(ee),r&&t(re),r&&t(ie),r&&t(le),r&&t(pe),r&&t(ue),r&&t($e),r&&t(Re),r&&t(ce),r&&t(Ae),r&&t(Ge),r&&t(Te),r&&t(we),r&&t(je),r&&t(_e),r&&t(Oe),r&&t(ve),r&&t(He),r&&t(ye),r&&t(Pe),r&&t(d),r&&t(X),r&&t(Ce),r&&t(ge),r&&t(bt),r&&t(Ye),r&&t($t),r&&t(ct),r&&t(ae),r&&t(Ne),r&&t(Ut),r&&t(Jt),r&&t(At),r&&t(Qt),r&&t(ht),r&&t(Xt),r&&t(Zt),r&&t(Pt),r&&t(Kt),r&&t(Nt),r&&t(es),r&&t(be),r&&t(me),r&&t(We),r&&t(ts),r&&t(Ue),r&&t(ss),r&&t(Je),r&&t(ns),r&&t(Qe),r&&t(rs),r&&t(Xe),r&&t(is),r&&t(Ze),r&&t(ls),r&&t(St),r&&t(fs),r&&t(Ke),r&&t(os),r&&t(et),r&&t(as),r&&t(tt),r&&t(us),r&&t(st),r&&t(ms),r&&t(zt),r&&t(ps),r&&t(qt),r&&t(bs),L(Ie,r),r&&t($s),r&&t(Mt),r&&t(cs),r&&t(Gt),r&&t(hs),r&&t(Ct),r&&t(vs),r&&t(nt),r&&t(Se),r&&t(ws),r&&t(jt),r&&t(_s),r&&t(Ot),r&&t(ys),r&&t(rt),r&&t(it),r&&t(ks),r&&t(vt),r&&t(lt),r&&t(Bs),r&&t(Ht),r&&t(ds),r&&t(Fe),L(wt,r),r&&t(Ft),r&&t(Rs),r&&t(_t),L(ze,r),r&&t(Ts),L(ft,r),r&&t(Lt),r&&t(yt),r&&t(Dt),L(xe,r),r&&t(ot),r&&t(qe),r&&t(kt),r&&t(ke),r&&t(Bt),r&&t(dt),r&&t(gs),r&&t(Be),r&&t(Cs),r&&t(Le),r&&t(Is),r&&t(at),L(Rt,r),r&&t(Vt),r&&t(xs),r&&t(ut),L(Tt,r),r&&t(De),L(mt,r),r&&t(Me),r&&t(Es),r&&t(he),L(Ee,r),r&&t(f),r&&t(g),r&&t(Ss),r&&t(Yt),r&&t(It),r&&t(xt),L(gt,r),r&&t(Et),r&&t(Fs),r&&t(oe),L(fe,r),r&&t(Zs),r&&t(Ks),r&&t(en),r&&t(As),r&&t(Ys),r&&t(tn),r&&t(sn),r&&t(Ws),r&&t(Ls),r&&t(Ps),r&&t(Gs),r&&t(Qs),r&&t(Ve),r&&t(nn),r&&t(Ds),r&&t(rn),L(Wt,r),r&&t(Us),L(i,r),r&&t(R),L(Js,r)}}}function Zi(m){let e,n,l,u,p,c,k,v,h,w,T,S,j,x,E,O,W,q;return e=new Ns({props:{$$slots:{default:[ni]},$$scope:{ctx:m}}}),l=new Ns({props:{$$slots:{default:[fi]},$$scope:{ctx:m}}}),p=new Ns({props:{$$slots:{default:[ui]},$$scope:{ctx:m}}}),k=new Ns({props:{$$slots:{default:[bi]},$$scope:{ctx:m}}}),h=new Ns({props:{$$slots:{default:[hi]},$$scope:{ctx:m}}}),T=new Ns({props:{$$slots:{default:[Ti]},$$scope:{ctx:m}}}),j=new Ns({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),E=new Ns({props:{$$slots:{default:[Hi]},$$scope:{ctx:m}}}),W=new Ns({props:{$$slots:{default:[Xi]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=A(),H(l.$$.fragment),u=A(),H(p.$$.fragment),c=A(),H(k.$$.fragment),v=A(),H(h.$$.fragment),w=A(),H(T.$$.fragment),S=A(),H(j.$$.fragment),x=A(),H(E.$$.fragment),O=A(),H(W.$$.fragment)},l(C){D(e.$$.fragment,C),n=P(C),D(l.$$.fragment,C),u=P(C),D(p.$$.fragment,C),c=P(C),D(k.$$.fragment,C),v=P(C),D(h.$$.fragment,C),w=P(C),D(T.$$.fragment,C),S=P(C),D(j.$$.fragment,C),x=P(C),D(E.$$.fragment,C),O=P(C),D(W.$$.fragment,C)},m(C,Y){F(e,C,Y),s(C,n,Y),F(l,C,Y),s(C,u,Y),F(p,C,Y),s(C,c,Y),F(k,C,Y),s(C,v,Y),F(h,C,Y),s(C,w,Y),F(T,C,Y),s(C,S,Y),F(j,C,Y),s(C,x,Y),F(E,C,Y),s(C,O,Y),F(W,C,Y),q=!0},p(C,Y){const Q={};Y&16&&(Q.$$scope={dirty:Y,ctx:C}),e.$set(Q);const Z={};Y&16&&(Z.$$scope={dirty:Y,ctx:C}),l.$set(Z);const y={};Y&16&&(y.$$scope={dirty:Y,ctx:C}),p.$set(y);const z={};Y&16&&(z.$$scope={dirty:Y,ctx:C}),k.$set(z);const se={};Y&16&&(se.$$scope={dirty:Y,ctx:C}),h.$set(se);const V={};Y&16&&(V.$$scope={dirty:Y,ctx:C}),T.$set(V);const K={};Y&16&&(K.$$scope={dirty:Y,ctx:C}),j.$set(K);const N={};Y&16&&(N.$$scope={dirty:Y,ctx:C}),E.$set(N);const J={};Y&16&&(J.$$scope={dirty:Y,ctx:C}),W.$set(J)},i(C){q||(G(e.$$.fragment,C),G(l.$$.fragment,C),G(p.$$.fragment,C),G(k.$$.fragment,C),G(h.$$.fragment,C),G(T.$$.fragment,C),G(j.$$.fragment,C),G(E.$$.fragment,C),G(W.$$.fragment,C),q=!0)},o(C){M(e.$$.fragment,C),M(l.$$.fragment,C),M(p.$$.fragment,C),M(k.$$.fragment,C),M(h.$$.fragment,C),M(T.$$.fragment,C),M(j.$$.fragment,C),M(E.$$.fragment,C),M(W.$$.fragment,C),q=!1},d(C){L(e,C),C&&t(n),L(l,C),C&&t(u),L(p,C),C&&t(c),L(k,C),C&&t(v),L(h,C),C&&t(w),L(T,C),C&&t(S),L(j,C),C&&t(x),L(E,C),C&&t(O),L(W,C)}}}function Ki(m){let e,n;return e=new jn({props:{$$slots:{default:[Zi]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&16&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function el(m,e,n){return[!1,!0,"ChatGPT\u56FE\u7075\u6D4B\u8BD5\u8BB0\u5F55",()=>un("/",In)]}class mr extends js{constructor(e){super(),Os(this,e,el,Ki,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function tl(m){let e,n,l,u,p,c,k;return{c(){e=b("\u672C\u7F51\u7AD9\u662F\u6D1E\u7A74\u591C\u83BA\u7684\u6574\u6D3B\u7F51\u7AD9\uFF0C\u80CC\u666F\u56FE\u7247\u6765\u81EA"),n=o("a"),l=b("klpbbs.com"),u=b("\uFF0Cfreemutecode\u9875\u9762\u4E2Dcss\uFF08assets/freemutecode/style.css\uFF09\u6765\u81EAfreegiftcode\uFF0C\u5176\u4F59\u5185\u5BB9\u4EE5CC-0\u534F\u8BAE\u5F00\u6E90\u4E8E"),p=o("a"),c=b("github"),k=b("\u3002"),this.h()},l(v){e=$(v,"\u672C\u7F51\u7AD9\u662F\u6D1E\u7A74\u591C\u83BA\u7684\u6574\u6D3B\u7F51\u7AD9\uFF0C\u80CC\u666F\u56FE\u7247\u6765\u81EA"),n=a(v,"A",{href:!0,target:!0,style:!0});var h=U(n);l=$(h,"klpbbs.com"),h.forEach(t),u=$(v,"\uFF0Cfreemutecode\u9875\u9762\u4E2Dcss\uFF08assets/freemutecode/style.css\uFF09\u6765\u81EAfreegiftcode\uFF0C\u5176\u4F59\u5185\u5BB9\u4EE5CC-0\u534F\u8BAE\u5F00\u6E90\u4E8E"),p=a(v,"A",{href:!0,target:!0,style:!0});var w=U(p);c=$(w,"github"),w.forEach(t),k=$(v,"\u3002"),this.h()},h(){I(n,"href","https://klpbbs.com"),I(n,"target","_blank"),pt(n,"color","white"),I(p,"href","https://github.com/CaveNightingale/CaveNightingale.github.io"),I(p,"target","_blank"),pt(p,"color","white")},m(v,h){s(v,e,h),s(v,n,h),_(n,l),s(v,u,h),s(v,p,h),_(p,c),s(v,k,h)},p:Ms,d(v){v&&t(e),v&&t(n),v&&t(u),v&&t(p),v&&t(k)}}}function sl(m){let e,n,l,u,p,c,k,v;return e=new An({props:{href:m[4],content:"\u514D\u8D39\u7981\u8A00\u4EE3\u7801"}}),l=new An({props:{href:m[5],content:"MCBBS\u79EF\u5206\u5206\u6790"}}),p=new An({props:{href:m[6],content:"ChatGPT\u56FE\u7075\u6D4B\u8BD5\u8BB0\u5F55"}}),k=new ur({props:{$$slots:{default:[tl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=A(),H(l.$$.fragment),u=A(),H(p.$$.fragment),c=A(),H(k.$$.fragment)},l(h){D(e.$$.fragment,h),n=P(h),D(l.$$.fragment,h),u=P(h),D(p.$$.fragment,h),c=P(h),D(k.$$.fragment,h)},m(h,w){F(e,h,w),s(h,n,w),F(l,h,w),s(h,u,w),F(p,h,w),s(h,c,w),F(k,h,w),v=!0},p(h,w){const T={};w&128&&(T.$$scope={dirty:w,ctx:h}),k.$set(T)},i(h){v||(G(e.$$.fragment,h),G(l.$$.fragment,h),G(p.$$.fragment,h),G(k.$$.fragment,h),v=!0)},o(h){M(e.$$.fragment,h),M(l.$$.fragment,h),M(p.$$.fragment,h),M(k.$$.fragment,h),v=!1},d(h){L(e,h),h&&t(n),L(l,h),h&&t(u),L(p,h),h&&t(c),L(k,h)}}}function nl(m){let e,n;return e=new jn({props:{$$slots:{default:[sl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&128&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function rl(m,e,n){return[!1,!0,"\u76EE\u5F55",null,()=>un("/freemutecode",Nn),()=>un("/creditchart",Sn),()=>un("/turingtest",mr)]}class In extends js{constructor(e){super(),Os(this,e,rl,nl,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function il(m){let e,n,l,u,p,c;return{c(){e=b(`\u8F93\u5165\u7528\u6237\u7684UID\uFF1A
		`),n=o("input"),l=o("button"),u=b("\u786E\u5B9A"),this.h()},l(k){e=$(k,`\u8F93\u5165\u7528\u6237\u7684UID\uFF1A
		`),n=a(k,"INPUT",{type:!0,class:!0}),l=a(k,"BUTTON",{class:!0});var v=U(l);u=$(v,"\u786E\u5B9A"),v.forEach(t),this.h()},h(){I(n,"type","number"),I(n,"class","svelte-xqojua"),I(l,"class","svelte-xqojua")},m(k,v){s(k,e,v),s(k,n,v),Wn(n,m[1]),s(k,l,v),_(l,u),p||(c=[Xs(n,"input",m[8]),Xs(l,"click",m[2])],p=!0)},p(k,v){v&2&&ir(n.value)!==k[1]&&Wn(n,k[1])},d(k){k&&t(e),k&&t(n),k&&t(l),p=!1,Vn(c)}}}function ll(m){let e,n;return e=new Dr({props:{renderingUser:m[0]}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1&&(p.renderingUser=l[0]),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function fl(m){let e,n;return e=new qr({}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p:Ms,i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function ol(m){let e,n;return e=new Ns({props:{$$slots:{default:[ul]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1024&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function al(m){let e,n;return e=new Ns({props:{$$slots:{default:[ml]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,u){const p={};u&1024&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function ul(m){let e;return{c(){e=b("\u52A0\u8F7D\u4E2D\u3002\u3002\u3002")},l(n){e=$(n,"\u52A0\u8F7D\u4E2D\u3002\u3002\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function ml(m){let e,n;return{c(){e=o("span"),n=b("\u627E\u4E0D\u5230\u8FD9\u4E2A\u7528\u6237"),this.h()},l(l){e=a(l,"SPAN",{style:!0});var u=U(e);n=$(u,"\u627E\u4E0D\u5230\u8FD9\u4E2A\u7528\u6237"),u.forEach(t),this.h()},h(){pt(e,"color","red")},m(l,u){s(l,e,u),_(e,n)},p:Ms,d(l){l&&t(e)}}}function pl(m){let e;return{c(){e=b("\u8BF4\u660E\uFF1A\u7B49\u7EA7\u5224\u5B9A\u4E0E\u6392\u4F4D\u6709\u5173\uFF0C\u524D150\u540D\u5224\u4E3AA\u7EA7\uFF0C\u524D400\u540D\u5224\u4E3AB\u7EA7\uFF0C\u524D1000\u540D\u5224\u4E3AC\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u5224D\u7EA7\uFF0C\u5C0F\u4E8E\u96F6\u7684\u5224E\u7EA7\u3002\u91C7\u75282022\u5E744\u6708xmdhs\u7EDF\u8BA1\u6570\u636E\u3002\u9875\u9762\u4F7F\u7528\u7684\u8DE8\u57DF\u4EE3\u7406\u4E3Ahttps://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=\uFF0CNetlify\u8D85\u65F6\u65F6\u95F4\u957F\u8FBE10\u79D2\u800C\u4E14\u8BBF\u95EEMCBBS\u901F\u5EA6\u8F83\u6162\uFF0C\u6545\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u518D\u6B21\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u3002")},l(n){e=$(n,"\u8BF4\u660E\uFF1A\u7B49\u7EA7\u5224\u5B9A\u4E0E\u6392\u4F4D\u6709\u5173\uFF0C\u524D150\u540D\u5224\u4E3AA\u7EA7\uFF0C\u524D400\u540D\u5224\u4E3AB\u7EA7\uFF0C\u524D1000\u540D\u5224\u4E3AC\u7EA7\uFF0C\u9664\u6B64\u4E4B\u5916\u5927\u4E8E\u7B49\u4E8E\u96F6\u7684\u5224D\u7EA7\uFF0C\u5C0F\u4E8E\u96F6\u7684\u5224E\u7EA7\u3002\u91C7\u75282022\u5E744\u6708xmdhs\u7EDF\u8BA1\u6570\u636E\u3002\u9875\u9762\u4F7F\u7528\u7684\u8DE8\u57DF\u4EE3\u7406\u4E3Ahttps://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=\uFF0CNetlify\u8D85\u65F6\u65F6\u95F4\u957F\u8FBE10\u79D2\u800C\u4E14\u8BBF\u95EEMCBBS\u901F\u5EA6\u8F83\u6162\uFF0C\u6545\u53EF\u80FD\u51FA\u73B0\u957F\u65F6\u95F4\u52A0\u8F7D\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u518D\u6B21\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u3002")},m(n,l){s(n,e,l)},d(n){n&&t(e)}}}function bl(m){let e,n,l,u,p,c,k;e=new Ns({props:{$$slots:{default:[il]},$$scope:{ctx:m}}});const v=[al,ol,fl,ll],h=[];function w(T,S){return T[0]==="error"?0:T[0]==="pending"?1:T[0]==="none"?2:3}return l=w(m),u=h[l]=v[l](m),c=new ur({props:{$$slots:{default:[pl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment),n=A(),u.c(),p=A(),H(c.$$.fragment)},l(T){D(e.$$.fragment,T),n=P(T),u.l(T),p=P(T),D(c.$$.fragment,T)},m(T,S){F(e,T,S),s(T,n,S),h[l].m(T,S),s(T,p,S),F(c,T,S),k=!0},p(T,S){const j={};S&1026&&(j.$$scope={dirty:S,ctx:T}),e.$set(j);let x=l;l=w(T),l===x?h[l].p(T,S):(Ln(),M(h[x],1,1,()=>{h[x]=null}),Dn(),u=h[l],u?u.p(T,S):(u=h[l]=v[l](T),u.c()),G(u,1),u.m(p.parentNode,p));const E={};S&1024&&(E.$$scope={dirty:S,ctx:T}),c.$set(E)},i(T){k||(G(e.$$.fragment,T),G(u),G(c.$$.fragment,T),k=!0)},o(T){M(e.$$.fragment,T),M(u),M(c.$$.fragment,T),k=!1},d(T){L(e,T),T&&t(n),h[l].d(T),T&&t(p),L(c,T)}}}function $l(m){let e,n;return e=new jn({props:{$$slots:{default:[bl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&1027&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}const cl="https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=";async function hl(m){let e,n=0;for(;!e&&n++<3;)try{e=await(await fetch(cl+m)).json()}catch{}if(e){if(e.error)throw new Error(e.error);if(e.username)return e;throw new Error("Function returns improper data")}else throw new Error("Cannot connect to proxy")}function vl(m,e,n){let{title:l="MCBBS\u79EF\u5206\u5206\u6790"}=e;const u=!0,p=!1,c=()=>{h!="none"?(n(0,h="none"),history.pushState({},"","/creditchart")):un("/",In)},k=T;let v="",h="none";async function w(j,x=!0){let E=parseInt(v);if(isFinite(E)&&E>0){n(0,h="pending");try{n(0,h=await hl(E)),x&&history.pushState({},"",location.pathname+"?uid="+E)}catch{n(0,h="error")}}else n(0,h="error")}function T(){n(1,v=new URLSearchParams(location.search).get("uid")||""),v!=""?w(0,!1):n(0,h="none")}gn(T);function S(){v=ir(this.value),n(1,v)}return m.$$set=j=>{"title"in j&&n(3,l=j.title)},m.$$.update=()=>{if(m.$$.dirty&1)switch(h){case"none":case"pending":case"error":n(3,l="MCBBS\u79EF\u5206\u5206\u6790");break;default:n(3,l="MCBBS\u79EF\u5206\u5206\u6790 - "+h.username)}},[h,v,w,l,u,p,c,k,S]}class Sn extends js{constructor(e){super(),Os(this,e,vl,$l,Hs,{title:3,background:4,scalable:5,back:6,reload:7})}get background(){return this.$$.ctx[4]}get scalable(){return this.$$.ctx[5]}get back(){return this.$$.ctx[6]}get reload(){return this.$$.ctx[7]}}function wl(m){let e,n,l,u,p,c,k,v,h;return{c(){e=o("span"),n=b("\u627E\u4E0D\u5230\u9875\u9762"),l=A(),u=o("br"),p=A(),c=o("span"),k=b("\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u8F93\u5165\u7684\u7F51\u5740"),v=A(),h=o("br"),this.h()},l(w){e=a(w,"SPAN",{style:!0});var T=U(e);n=$(T,"\u627E\u4E0D\u5230\u9875\u9762"),T.forEach(t),l=P(w),u=a(w,"BR",{}),p=P(w),c=a(w,"SPAN",{style:!0});var S=U(c);k=$(S,"\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u8F93\u5165\u7684\u7F51\u5740"),S.forEach(t),v=P(w),h=a(w,"BR",{}),this.h()},h(){pt(e,"font-size","100px"),pt(e,"color","white"),pt(e,"position","relative"),pt(e,"font-weight","1000"),pt(e,"user-select","none"),pt(c,"color","white"),pt(c,"position","relative"),pt(c,"font-weight","bolder"),pt(c,"user-select","none")},m(w,T){s(w,e,T),_(e,n),s(w,l,T),s(w,u,T),s(w,p,T),s(w,c,T),_(c,k),s(w,v,T),s(w,h,T)},p:Ms,d(w){w&&t(e),w&&t(l),w&&t(u),w&&t(p),w&&t(c),w&&t(v),w&&t(h)}}}function _l(m){let e,n;return e=new jn({props:{$$slots:{default:[wl]},$$scope:{ctx:m}}}),{c(){H(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,u){F(e,l,u),n=!0},p(l,[u]){const p={};u&64&&(p.$$scope={dirty:u,ctx:l}),e.$set(p)},i(l){n||(G(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function yl(m,e,n){const p="\u627E\u4E0D\u5230\u9875\u9762",c=()=>un("/",In),k={"/freemutecode/":["/freemutecode",Nn],"/freegiftcode/":["/freemutecode",Nn],"/creditchart/":["/creditchart",Sn]};function v(){let h=k[location.pathname];if(h)un(h[0],h[1]);else{let w=/^\/creditchart\/([0-9]+)$/.exec(location.pathname);w&&un("/creditchart?uid="+w[1],Sn)}}return gn(()=>setTimeout(v,0)),[!1,!0,p,c]}class kl extends js{constructor(e){super(),Os(this,e,yl,_l,Hs,{scalable:0,background:1,title:2,back:3})}get scalable(){return this.$$.ctx[0]}get background(){return this.$$.ctx[1]}get title(){return this.$$.ctx[2]}get back(){return this.$$.ctx[3]}}function Bl(m){let e,n,l,u,p,c,k,v,h,w,T;e=new br({props:{back:m[3],title:m[1],background:m[2]}});function S(q){m[7](q)}function j(q){m[8](q)}function x(q){m[9](q)}function E(q){m[10](q)}var O=m[0];function W(q){let C={};return q[2]!==void 0&&(C.background=q[2]),q[1]!==void 0&&(C.title=q[1]),q[3]!==void 0&&(C.back=q[3]),q[4]!==void 0&&(C.reload=q[4]),{props:C}}return O&&(l=new O(W(m)),fn.push(()=>$n(l,"background",S)),fn.push(()=>$n(l,"title",j)),fn.push(()=>$n(l,"back",x)),fn.push(()=>$n(l,"reload",E))),{c(){H(e.$$.fragment),n=A(),l&&H(l.$$.fragment),v=an()},l(q){D(e.$$.fragment,q),n=P(q),l&&D(l.$$.fragment,q),v=an()},m(q,C){F(e,q,C),s(q,n,C),l&&F(l,q,C),s(q,v,C),h=!0,w||(T=Xs(window,"popstate",m[5]),w=!0)},p(q,[C]){const Y={};C&8&&(Y.back=q[3]),C&2&&(Y.title=q[1]),C&4&&(Y.background=q[2]),e.$set(Y);const Q={};if(!u&&C&4&&(u=!0,Q.background=q[2],xn(()=>u=!1)),!p&&C&2&&(p=!0,Q.title=q[1],xn(()=>p=!1)),!c&&C&8&&(c=!0,Q.back=q[3],xn(()=>c=!1)),!k&&C&16&&(k=!0,Q.reload=q[4],xn(()=>k=!1)),O!==(O=q[0])){if(l){Ln();const Z=l;M(Z.$$.fragment,1,0,()=>{L(Z,1)}),Dn()}O?(l=new O(W(q)),fn.push(()=>$n(l,"background",S)),fn.push(()=>$n(l,"title",j)),fn.push(()=>$n(l,"back",x)),fn.push(()=>$n(l,"reload",E)),H(l.$$.fragment),G(l.$$.fragment,1),F(l,v.parentNode,v)):l=null}else O&&l.$set(Q)},i(q){h||(G(e.$$.fragment,q),l&&G(l.$$.fragment,q),h=!0)},o(q){M(e.$$.fragment,q),l&&M(l.$$.fragment,q),h=!1},d(q){L(e,q),q&&t(n),q&&t(v),l&&L(l,q),w=!1,T()}}}function dl(m,e,n){let{component:l}=e,u,p,c,k,v={"/":In,"/creditchart":Sn,"/freemutecode":Nn,"/turingtest":mr};function h(E){n(0,l=E)}gn(()=>{$r(E=>h(E))});function w(E){let O=v[location.pathname];O?(h(O),k&&k()):h(kl)}function T(E){p=E,n(2,p)}function S(E){u=E,n(1,u)}function j(E){c=E,n(3,c)}function x(E){k=E,n(4,k)}return m.$$set=E=>{"component"in E&&n(0,l=E.component)},[l,u,p,c,k,w,h,T,S,j,x]}class gl extends js{constructor(e){super(),Os(this,e,dl,Bl,Hs,{component:0,changeContent:6})}get changeContent(){return this.$$.ctx[6]}}export{kl as P,gl as R,Sn as a,Nn as b,In as c,mr as d};
