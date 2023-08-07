import{S as me,i as ve,s as _e,e as re,b as L,v as Te,d as J,f as Le,g as X,h as d,y as Y,z as x,A as Q,B as Z,k as A,q as I,a as G,l as D,m as S,r as T,c as j,n as E,G as m,u as le,K,L as ie,H as $e,o as Ae,M as Oe,N as De,O as Fe,p as ae,P as Se,w as we,Q as Ue,R as ye}from"../chunks/index.8d365fa0.js";import{S as te,P as qe}from"../chunks/PlainTextView.27d7f1e6.js";import{M as He,F as Re}from"../chunks/MenuEntry.7f5a776d.js";import{s as Ge,N as je}from"../chunks/Nav.3387a1ac.js";import{M as We}from"../chunks/MainContext.8f87a276.js";function se(){}se.prototype={diff:function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=t.callback;typeof t=="function"&&(l=t,t={}),this.options=t;var r=this;function i(v){return l?(setTimeout(function(){l(void 0,v)},0),!0):v}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var o=n.length,f=e.length,a=1,p=o+f;t.maxEditLength&&(p=Math.min(p,t.maxEditLength));var u=[{newPos:-1,components:[]}],c=this.extractCommon(u[0],n,e,0);if(u[0].newPos+1>=o&&c+1>=f)return i([{value:this.join(n),count:n.length}]);function _(){for(var v=-1*a;v<=a;v+=2){var $=void 0,k=u[v-1],B=u[v+1],N=(B?B.newPos:0)-v;k&&(u[v-1]=void 0);var O=k&&k.newPos+1<o,H=B&&0<=N&&N<f;if(!O&&!H){u[v]=void 0;continue}if(!O||H&&k.newPos<B.newPos?($=Xe(B),r.pushComponent($.components,void 0,!0)):($=k,$.newPos++,r.pushComponent($.components,!0,void 0)),N=r.extractCommon($,n,e,v),$.newPos+1>=o&&N+1>=f)return i(Je(r,$.components,n,e,r.useLongestToken));u[v]=$}a++}if(l)(function v(){setTimeout(function(){if(a>p)return l();_()||v()},0)})();else for(;a<=p;){var b=_();if(b)return b}},pushComponent:function(e,n,t){var l=e[e.length-1];l&&l.added===n&&l.removed===t?e[e.length-1]={count:l.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,l){for(var r=n.length,i=t.length,o=e.newPos,f=o-l,a=0;o+1<r&&f+1<i&&this.equals(n[o+1],t[f+1]);)o++,f++,a++;return a&&e.components.push({count:a}),e.newPos=o,f},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function Je(s,e,n,t,l){for(var r=0,i=e.length,o=0,f=0;r<i;r++){var a=e[r];if(a.removed){if(a.value=s.join(t.slice(f,f+a.count)),f+=a.count,r&&e[r-1].added){var u=e[r-1];e[r-1]=e[r],e[r]=u}}else{if(!a.added&&l){var p=n.slice(o,o+a.count);p=p.map(function(_,b){var v=t[f+b];return v.length>_.length?v:_}),a.value=s.join(p)}else a.value=s.join(n.slice(o,o+a.count));o+=a.count,a.added||(f+=a.count)}}var c=e[i-1];return i>1&&typeof c.value=="string"&&(c.added||c.removed)&&s.equals("",c.value)&&(e[i-2].value+=c.value,e.pop()),e}function Xe(s){return{newPos:s.newPos,components:s.components.slice(0)}}var be=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,Ce=/\S/,Ne=new se;Ne.equals=function(s,e){return this.options.ignoreCase&&(s=s.toLowerCase(),e=e.toLowerCase()),s===e||this.options.ignoreWhitespace&&!Ce.test(s)&&!Ce.test(e)};Ne.tokenize=function(s){for(var e=s.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&be.test(e[n])&&be.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var ze=new se;ze.tokenize=function(s){var e=[],n=s.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var t=0;t<n.length;t++){var l=n[t];t%2&&!this.options.newlineIsToken?e[e.length-1]+=l:(this.options.ignoreWhitespace&&(l=l.trim()),e.push(l))}return e};var Ye=new se;Ye.tokenize=function(s){return s.split(/(\S.+?[.!?])(?=\s+|$)/)};var xe=new se;xe.tokenize=function(s){return s.split(/([{}:;,]|\s+)/)};function ue(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ue=function(e){return typeof e}:ue=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(s)}var Qe=Object.prototype.toString,fe=new se;fe.useLongestToken=!0;fe.tokenize=ze.tokenize;fe.castInput=function(s){var e=this.options,n=e.undefinedReplacement,t=e.stringifyReplacer,l=t===void 0?function(r,i){return typeof i>"u"?n:i}:t;return typeof s=="string"?s:JSON.stringify(de(s,null,null,l),l,"  ")};fe.equals=function(s,e){return se.prototype.equals.call(fe,s.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function de(s,e,n,t,l){e=e||[],n=n||[],t&&(s=t(l,s));var r;for(r=0;r<e.length;r+=1)if(e[r]===s)return n[r];var i;if(Qe.call(s)==="[object Array]"){for(e.push(s),i=new Array(s.length),n.push(i),r=0;r<s.length;r+=1)i[r]=de(s[r],e,n,t,l);return e.pop(),n.pop(),i}if(s&&s.toJSON&&(s=s.toJSON()),ue(s)==="object"&&s!==null){e.push(s),i={},n.push(i);var o=[],f;for(f in s)s.hasOwnProperty(f)&&o.push(f);for(o.sort(),r=0;r<o.length;r+=1)f=o[r],i[f]=de(s[f],e,n,t,f);e.pop(),n.pop()}else i=s;return i}var he=new se;he.tokenize=function(s){return s.slice()};he.join=he.removeEmpty=function(s){return s};function Ze(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.split(/\r\n|[\n\v\f\r\x85]/),t=s.match(/\r\n|[\n\v\f\r\x85]/g)||[],l=[],r=0;function i(){var a={};for(l.push(a);r<n.length;){var p=n[r];if(/^(\-\-\-|\+\+\+|@@)\s/.test(p))break;var u=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(p);u&&(a.index=u[1]),r++}for(o(a),o(a),a.hunks=[];r<n.length;){var c=n[r];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c))break;if(/^@@/.test(c))a.hunks.push(f());else{if(c&&e.strict)throw new Error("Unknown line "+(r+1)+" "+JSON.stringify(c));r++}}}function o(a){var p=/^(---|\+\+\+)\s+(.*)$/.exec(n[r]);if(p){var u=p[1]==="---"?"old":"new",c=p[2].split("	",2),_=c[0].replace(/\\\\/g,"\\");/^".*"$/.test(_)&&(_=_.substr(1,_.length-2)),a[u+"FileName"]=_,a[u+"Header"]=(c[1]||"").trim(),r++}}function f(){var a=r,p=n[r++],u=p.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),c={oldStart:+u[1],oldLines:typeof u[2]>"u"?1:+u[2],newStart:+u[3],newLines:typeof u[4]>"u"?1:+u[4],lines:[],linedelimiters:[]};c.oldLines===0&&(c.oldStart+=1),c.newLines===0&&(c.newStart+=1);for(var _=0,b=0;r<n.length&&!(n[r].indexOf("--- ")===0&&r+2<n.length&&n[r+1].indexOf("+++ ")===0&&n[r+2].indexOf("@@")===0);r++){var v=n[r].length==0&&r!=n.length-1?" ":n[r][0];if(v==="+"||v==="-"||v===" "||v==="\\")c.lines.push(n[r]),c.linedelimiters.push(t[r]||`
`),v==="+"?_++:v==="-"?b++:v===" "&&(_++,b++);else break}if(!_&&c.newLines===1&&(c.newLines=0),!b&&c.oldLines===1&&(c.oldLines=0),e.strict){if(_!==c.newLines)throw new Error("Added line count did not match for hunk at line "+(a+1));if(b!==c.oldLines)throw new Error("Removed line count did not match for hunk at line "+(a+1))}return c}for(;r<n.length;)i();return l}function Ke(s,e,n){var t=!0,l=!1,r=!1,i=1;return function o(){if(t&&!r){if(l?i++:t=!1,s+i<=n)return i;r=!0}if(!l)return r||(t=!0),e<=s-i?-i++:(l=!0,o())}}function et(s,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string"&&(e=Ze(e)),Array.isArray(e)){if(e.length>1)throw new Error("applyPatch only works with a single input.");e=e[0]}var t=s.split(/\r\n|[\n\v\f\r\x85]/),l=s.match(/\r\n|[\n\v\f\r\x85]/g)||[],r=e.hunks,i=n.compareLine||function(M,w,U,F){return w===F},o=0,f=n.fuzzFactor||0,a=0,p=0,u,c;function _(M,w){for(var U=0;U<M.lines.length;U++){var F=M.lines[U],R=F.length>0?F[0]:" ",ee=F.length>0?F.substr(1):F;if(R===" "||R==="-"){if(!i(w+1,t[w],R,ee)&&(o++,o>f))return!1;w++}}return!0}for(var b=0;b<r.length;b++){for(var v=r[b],$=t.length-v.oldLines,k=0,B=p+v.oldStart-1,N=Ke(B,a,$);k!==void 0;k=N())if(_(v,B+k)){v.offset=p+=k;break}if(k===void 0)return!1;a=v.offset+v.oldStart+v.oldLines}for(var O=0,H=0;H<r.length;H++){var V=r[H],y=V.oldStart+V.offset+O-1;O+=V.newLines-V.oldLines;for(var g=0;g<V.lines.length;g++){var q=V.lines[g],h=q.length>0?q[0]:" ",C=q.length>0?q.substr(1):q,P=V.linedelimiters[g];if(h===" ")y++;else if(h==="-")t.splice(y,1),l.splice(y,1);else if(h==="+")t.splice(y,0,C),l.splice(y,0,P),y++;else if(h==="\\"){var z=V.lines[g-1]?V.lines[g-1][0]:null;z==="+"?u=!0:z==="-"&&(c=!0)}}}if(u)for(;!t[t.length-1];)t.pop(),l.pop();else c&&(t.push(""),l.push(`
`));for(var W=0;W<t.length-1;W++)t[W]=t[W]+l[W];return t.join("")}function tt(s){let e,n;return e=new te({props:{$$slots:{default:[it]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&130&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function nt(s){let e,n;return e=new te({props:{$$slots:{default:[ot]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&131&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function rt(s){let e,n;return e=new te({props:{$$slots:{default:[ft]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function st(s){let e,n;return e=new te({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&129&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function lt(s){let e,n;return e=new He({props:{content:"安装用户脚本",href:s[4]}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.href=t[4]),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function it(s){let e,n,t,l;return{c(){e=A("p"),n=I("出现了一个错误："),t=G(),l=I(s[1]),this.h()},l(r){e=D(r,"P",{class:!0});var i=S(e);n=T(i,"出现了一个错误："),i.forEach(d),t=j(r),l=T(r,s[1]),this.h()},h(){E(e,"class","svelte-1y7n2nc")},m(r,i){L(r,e,i),m(e,n),L(r,t,i),L(r,l,i)},p(r,i){i&2&&le(l,r[1])},d(r){r&&d(e),r&&d(t),r&&d(l)}}}function ot(s){let e,n,t,l,r,i,o,f,a,p,u,c,_,b,v;return c=new qe({props:{data:s[1]}}),{c(){e=A("p"),n=I("将以下内容复制到TamperMonkey的“添加新脚本’页面中，然后保存。"),t=G(),l=A("p"),r=A("button"),i=I("复制"),o=G(),f=A("button"),a=I("取消"),p=G(),u=A("p"),Y(c.$$.fragment),this.h()},l($){e=D($,"P",{class:!0});var k=S(e);n=T(k,"将以下内容复制到TamperMonkey的“添加新脚本’页面中，然后保存。"),k.forEach(d),t=j($),l=D($,"P",{class:!0});var B=S(l);r=D(B,"BUTTON",{class:!0});var N=S(r);i=T(N,"复制"),N.forEach(d),o=j(B),f=D(B,"BUTTON",{class:!0});var O=S(f);a=T(O,"取消"),O.forEach(d),B.forEach(d),p=j($),u=D($,"P",{class:!0});var H=S(u);x(c.$$.fragment,H),H.forEach(d),this.h()},h(){E(e,"class","svelte-1y7n2nc"),E(r,"class","svelte-1y7n2nc"),E(f,"class","svelte-1y7n2nc"),E(l,"class","svelte-1y7n2nc"),E(u,"class","svelte-1y7n2nc")},m($,k){L($,e,k),m(e,n),L($,t,k),L($,l,k),m(l,r),m(r,i),m(l,o),m(l,f),m(f,a),L($,p,k),L($,u,k),Q(c,u,null),_=!0,b||(v=[K(r,"click",s[3]),K(f,"click",s[6])],b=!0)},p($,k){const B={};k&2&&(B.data=$[1]),c.$set(B)},i($){_||(X(c.$$.fragment,$),_=!0)},o($){J(c.$$.fragment,$),_=!1},d($){$&&d(e),$&&d(t),$&&d(l),$&&d(p),$&&d(u),Z(c),b=!1,ie(v)}}}function ft(s){let e;return{c(){e=I("下载中。。。")},l(n){e=T(n,"下载中。。。")},m(n,t){L(n,e,t)},d(n){n&&d(e)}}}function ut(s){let e,n,t,l,r,i,o,f,a,p,u,c,_,b,v,$,k,B,N,O,H,V,y,g,q;return{c(){e=A("p"),n=I("快乐小方编写的MCBBS CreditAnalysis是闭源软件，因此无法直接提供带洞穴夜莺补丁的MCBBS CreditAnalysis。"),t=G(),l=A("p"),r=I("如果选择继续，则本页面会分别下载"),i=A("a"),o=I("MCBBS CreditAnalysis"),f=I("和"),a=A("a"),p=I("洞穴夜莺补丁"),u=I("，然后将补丁打到MCBBS CreditAnalysis上。"),c=G(),_=A("p"),b=I("需要"),v=A("a"),$=I("TamperMonkey"),k=I("浏览器插件才能使用MCBBS CreditAnalysis。由于技术原因，此类由网页生成的脚本无法打开TamperMonkey的安装界面。因此，在下载完成后需要您手动将脚本复制粘贴到TamperMonkey的“添加新脚本”页面（可在TamperMonkey主菜单中找到）中去安装。"),B=G(),N=A("button"),O=I("确定"),H=G(),V=A("button"),y=I("取消"),this.h()},l(h){e=D(h,"P",{class:!0});var C=S(e);n=T(C,"快乐小方编写的MCBBS CreditAnalysis是闭源软件，因此无法直接提供带洞穴夜莺补丁的MCBBS CreditAnalysis。"),C.forEach(d),t=j(h),l=D(h,"P",{class:!0});var P=S(l);r=T(P,"如果选择继续，则本页面会分别下载"),i=D(P,"A",{href:!0,class:!0});var z=S(i);o=T(z,"MCBBS CreditAnalysis"),z.forEach(d),f=T(P,"和"),a=D(P,"A",{href:!0,class:!0});var W=S(a);p=T(W,"洞穴夜莺补丁"),W.forEach(d),u=T(P,"，然后将补丁打到MCBBS CreditAnalysis上。"),P.forEach(d),c=j(h),_=D(h,"P",{class:!0});var M=S(_);b=T(M,"需要"),v=D(M,"A",{href:!0,class:!0});var w=S(v);$=T(w,"TamperMonkey"),w.forEach(d),k=T(M,"浏览器插件才能使用MCBBS CreditAnalysis。由于技术原因，此类由网页生成的脚本无法打开TamperMonkey的安装界面。因此，在下载完成后需要您手动将脚本复制粘贴到TamperMonkey的“添加新脚本”页面（可在TamperMonkey主菜单中找到）中去安装。"),M.forEach(d),B=j(h),N=D(h,"BUTTON",{class:!0});var U=S(N);O=T(U,"确定"),U.forEach(d),H=j(h),V=D(h,"BUTTON",{class:!0});var F=S(V);y=T(F,"取消"),F.forEach(d),this.h()},h(){E(e,"class","svelte-1y7n2nc"),E(i,"href",Ve),E(i,"class","svelte-1y7n2nc"),E(a,"href",Pe),E(a,"class","svelte-1y7n2nc"),E(l,"class","svelte-1y7n2nc"),E(v,"href","https://www.tampermonkey.net/"),E(v,"class","svelte-1y7n2nc"),E(_,"class","svelte-1y7n2nc"),E(N,"class","svelte-1y7n2nc"),E(V,"class","svelte-1y7n2nc")},m(h,C){L(h,e,C),m(e,n),L(h,t,C),L(h,l,C),m(l,r),m(l,i),m(i,o),m(l,f),m(l,a),m(a,p),m(l,u),L(h,c,C),L(h,_,C),m(_,b),m(_,v),m(v,$),m(_,k),L(h,B,C),L(h,N,C),m(N,O),L(h,H,C),L(h,V,C),m(V,y),g||(q=[K(N,"click",s[2]),K(V,"click",s[5])],g=!0)},p:$e,d(h){h&&d(e),h&&d(t),h&&d(l),h&&d(c),h&&d(_),h&&d(B),h&&d(N),h&&d(H),h&&d(V),g=!1,ie(q)}}}function at(s){let e,n,t,l;const r=[lt,st,rt,nt,tt],i=[];function o(f,a){return f[0]=="none"?0:f[0]=="confirm"?1:f[0]=="pending"?2:f[0]=="data"?3:f[0]=="error"?4:-1}return~(e=o(s))&&(n=i[e]=r[e](s)),{c(){n&&n.c(),t=re()},l(f){n&&n.l(f),t=re()},m(f,a){~e&&i[e].m(f,a),L(f,t,a),l=!0},p(f,[a]){let p=e;e=o(f),e===p?~e&&i[e].p(f,a):(n&&(Te(),J(i[p],1,1,()=>{i[p]=null}),Le()),~e?(n=i[e],n?n.p(f,a):(n=i[e]=r[e](f),n.c()),X(n,1),n.m(t.parentNode,t)):n=null)},i(f){l||(X(n),l=!0)},o(f){J(n),l=!1},d(f){~e&&i[e].d(f),f&&d(t)}}}const Ve="https://greasyfork.org/scripts/407846-mcbbs-creditanalysis/code/MCBBS%20CreditAnalysis.user.js",Pe="/assets/creditchart/userscript.patch";function ct(s,e,n){let t="none",l="";function r(){return n(0,t="pending"),Promise.all([fetch(Ve).then(p=>p.text()),fetch(Pe).then(p=>p.text())]).then(([p,u])=>{n(1,l=et(p,u)),n(0,t="data")}).catch(p=>{n(0,t="error"),n(1,l=p.stack)})}function i(){navigator.clipboard.writeText(l),Ge("已复制脚本")}return[t,l,r,i,()=>n(0,t="confirm"),()=>n(0,t="none"),()=>n(0,t="none")]}class pt extends me{constructor(e){super(),ve(this,e,ct,at,_e,{})}}function Ee(s,e,n){const t=s.slice();return t[20]=e[n],t}function ke(s,e,n){const t=s.slice();return t[23]=e[n],t}function Be(s){let e,n=s[0].userGroupEx,t=[];for(let l=0;l<n.length;l+=1)t[l]=Me(ke(s,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=re()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=re()},m(l,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,r);L(l,e,r)},p(l,r){if(r&1){n=l[0].userGroupEx;let i;for(i=0;i<n.length;i+=1){const o=ke(l,n,i);t[i]?t[i].p(o,r):(t[i]=Me(o),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(l){Se(t,l),l&&d(e)}}}function Me(s){let e,n,t=s[23]+"",l;return{c(){e=I("，"),n=new De(!1),l=re(),this.h()},l(r){e=T(r,"，"),n=Fe(r,!1),l=re(),this.h()},h(){n.a=l},m(r,i){L(r,e,i),n.m(t,r,i),L(r,l,i)},p(r,i){i&1&&t!==(t=r[23]+"")&&n.p(t)},d(r){r&&d(e),r&&d(l),r&&n.d()}}}function Ie(s){let e,n,t,l,r,i=s[20][1]+"",o,f,a,p=s[5][s[20][1]]+"",u,c,_,b=(100*s[5][s[20][1]]*s[20][2]/s[1]).toFixed(2)+"",v,$,k,B,N=ce(s[5][s[20][1]],s[20][3])+"",O,H,V,y,g;function q(){return s[13](s[20])}return{c(){e=A("div"),n=A("div"),t=A("div"),l=G(),r=A("div"),o=I(i),f=G(),a=A("div"),u=I(p),c=G(),_=A("div"),v=I(b),$=I("%"),k=G(),B=A("div"),O=I(N),H=G(),this.h()},l(h){e=D(h,"DIV",{class:!0,style:!0});var C=S(e);n=D(C,"DIV",{class:!0});var P=S(n);t=D(P,"DIV",{class:!0,style:!0}),S(t).forEach(d),P.forEach(d),l=j(C),r=D(C,"DIV",{class:!0});var z=S(r);o=T(z,i),z.forEach(d),f=j(C),a=D(C,"DIV",{class:!0});var W=S(a);u=T(W,p),W.forEach(d),c=j(C),_=D(C,"DIV",{class:!0});var M=S(_);v=T(M,b),$=T(M,"%"),M.forEach(d),k=j(C),B=D(C,"DIV",{class:!0});var w=S(B);O=T(w,N),w.forEach(d),H=j(C),C.forEach(d),this.h()},h(){E(t,"class","color-example svelte-3f2djp"),ae(t,"background-color",s[20][0]),E(n,"class","color svelte-3f2djp"),E(r,"class","name svelte-3f2djp"),E(a,"class","count svelte-3f2djp"),E(_,"class","percent svelte-3f2djp"),E(B,"class","rank svelte-3f2djp"),E(e,"class","lines svelte-3f2djp"),E(e,"style",V=s[6]===s[20][1]?"background: #d8d8d8;":"")},m(h,C){L(h,e,C),m(e,n),m(n,t),m(e,l),m(e,r),m(r,o),m(e,f),m(e,a),m(a,u),m(e,c),m(e,_),m(_,v),m(_,$),m(e,k),m(e,B),m(B,O),m(e,H),y||(g=[K(e,"click",q),K(e,"keypress",$t)],y=!0)},p(h,C){s=h,C&32&&p!==(p=s[5][s[20][1]]+"")&&le(u,p),C&34&&b!==(b=(100*s[5][s[20][1]]*s[20][2]/s[1]).toFixed(2)+"")&&le(v,b),C&32&&N!==(N=ce(s[5][s[20][1]],s[20][3])+"")&&le(O,N),C&64&&V!==(V=s[6]===s[20][1]?"background: #d8d8d8;":"")&&E(e,"style",V)},d(h){h&&d(e),y=!1,ie(g)}}}function dt(s){let e,n,t=s[0].username+"",l,r,i,o,f=s[0].userGroup+"",a,p,u,c,_,b,v,$,k,B,N,O,H,V,y,g=ce(s[1],s[7])+"",q,h,C,P,z=s[0].userGroupEx&&Be(s),W=s[8],M=[];for(let w=0;w<W.length;w+=1)M[w]=Ie(Ee(s,W,w));return{c(){e=A("div"),n=A("a"),l=I(t),i=I(`
		(
			`),o=new De(!1),a=re(),z&&z.c(),p=I(`
		)
		`),u=A("div"),c=A("div"),_=G(),b=A("div"),v=I("总积分"),$=G(),k=A("div"),B=I(s[1]),N=G(),O=A("div"),H=I("100.00%"),V=G(),y=A("div"),q=I(g),h=G();for(let w=0;w<M.length;w+=1)M[w].c();this.h()},l(w){e=D(w,"DIV",{class:!0});var U=S(e);n=D(U,"A",{style:!0,href:!0,target:!0});var F=S(n);l=T(F,t),F.forEach(d),i=T(U,`
		(
			`),o=Fe(U,!1),a=re(),z&&z.l(U),p=T(U,`
		)
		`),u=D(U,"DIV",{class:!0});var R=S(u);c=D(R,"DIV",{class:!0}),S(c).forEach(d),_=j(R),b=D(R,"DIV",{class:!0});var ee=S(b);v=T(ee,"总积分"),ee.forEach(d),$=j(R),k=D(R,"DIV",{class:!0});var oe=S(k);B=T(oe,s[1]),oe.forEach(d),N=j(R),O=D(R,"DIV",{class:!0});var ne=S(O);H=T(ne,"100.00%"),ne.forEach(d),V=j(R),y=D(R,"DIV",{class:!0});var ge=S(y);q=T(ge,g),ge.forEach(d),R.forEach(d),h=j(U);for(let pe=0;pe<M.length;pe+=1)M[pe].l(U);U.forEach(d),this.h()},h(){ae(n,"font-size","24px"),ae(n,"color","black"),E(n,"href",r="https://www.mcbbs.net/home.php?mod=space&username="+s[0].username),E(n,"target","_blank"),o.a=a,E(c,"class","color svelte-3f2djp"),E(b,"class","name svelte-3f2djp"),E(k,"class","count svelte-3f2djp"),E(O,"class","percent svelte-3f2djp"),E(y,"class","rank svelte-3f2djp"),E(u,"class","lines svelte-3f2djp"),E(e,"class","parent svelte-3f2djp")},m(w,U){L(w,e,U),m(e,n),m(n,l),m(e,i),o.m(f,e),m(e,a),z&&z.m(e,null),m(e,p),m(e,u),m(u,c),m(u,_),m(u,b),m(b,v),m(u,$),m(u,k),m(k,B),m(u,N),m(u,O),m(O,H),m(u,V),m(u,y),m(y,q),m(e,h);for(let F=0;F<M.length;F+=1)M[F]&&M[F].m(e,null);C||(P=[K(u,"click",s[12]),K(u,"keypress",_t)],C=!0)},p(w,U){if(U&1&&t!==(t=w[0].username+"")&&le(l,t),U&1&&r!==(r="https://www.mcbbs.net/home.php?mod=space&username="+w[0].username)&&E(n,"href",r),U&1&&f!==(f=w[0].userGroup+"")&&o.p(f),w[0].userGroupEx?z?z.p(w,U):(z=Be(w),z.c(),z.m(e,p)):z&&(z.d(1),z=null),U&2&&le(B,w[1]),U&2&&g!==(g=ce(w[1],w[7])+"")&&le(q,g),U&2402){W=w[8];let F;for(F=0;F<W.length;F+=1){const R=Ee(w,W,F);M[F]?M[F].p(R,U):(M[F]=Ie(R),M[F].c(),M[F].m(e,null))}for(;F<M.length;F+=1)M[F].d(1);M.length=W.length}},d(w){w&&d(e),z&&z.d(),Se(M,w),C=!1,ie(P)}}}function ht(s){let e,n,t,l,r;return{c(){e=A("div"),n=A("canvas"),t=I("请更新浏览器！"),this.h()},l(i){e=D(i,"DIV",{class:!0});var o=S(e);n=D(o,"CANVAS",{width:!0,height:!0});var f=S(n);t=T(f,"请更新浏览器！"),f.forEach(d),o.forEach(d),this.h()},h(){E(n,"width",s[4]),E(n,"height",s[4]),E(e,"class","canvas-parent svelte-3f2djp")},m(i,o){L(i,e,o),m(e,n),m(n,t),s[14](n),s[15](e),l||(r=[K(e,"click",s[10]),K(e,"keypress",gt)],l=!0)},p(i,o){o&16&&E(n,"width",i[4]),o&16&&E(n,"height",i[4])},d(i){i&&d(e),s[14](null),s[15](null),l=!1,ie(r)}}}function mt(s){let e,n,t,l,r,i;return e=new te({props:{$$slots:{default:[dt]},$$scope:{ctx:s}}}),t=new te({props:{$$slots:{default:[ht]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment),n=G(),Y(t.$$.fragment)},l(o){x(e.$$.fragment,o),n=j(o),x(t.$$.fragment,o)},m(o,f){Q(e,o,f),L(o,n,f),Q(t,o,f),l=!0,r||(i=K(window,"resize",s[9]),r=!0)},p(o,[f]){const a={};f&67108963&&(a.$$scope={dirty:f,ctx:o}),e.$set(a);const p={};f&67108892&&(p.$$scope={dirty:f,ctx:o}),t.$set(p)},i(o){l||(X(e.$$.fragment,o),X(t.$$.fragment,o),l=!0)},o(o){J(e.$$.fragment,o),J(t.$$.fragment,o),l=!1},d(o){Z(e,o),o&&d(n),Z(t,o),r=!1,i()}}}function ce(s,e){return s>=e[0]?"A":s>=e[1]?"B":s>=e[2]?"C":s>=0?"D":"E"}function vt(s){let e=(s+Math.PI/2)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI/2}const _t=()=>{},$t=()=>{},gt=()=>{};function wt(s,e,n){const t=[12564,7348,4827],l=[["#2dc6c8","人气",3,[1770,829,395]],["#5daf7a","金粒",0,[23372,14581,9110]],["#9c3a4b","金锭",0,[72,40,23]],["#3866b9","宝石",0,[20,9,5]],["#82de76","下界之心",0,[8,4,1]],["#b6a2dd","贡献",10,[61,21,6]],["#5ab1ee","爱心",4,[139,51,18]],["#d7797f","钻石",2,[2641,2014,1531]],["#e6399b","发帖数",1/3,[6677,3504,1911]],["#9f3ed5","主题数",2,[262,166,103]],["#ff4040","精华数",45,[20,3,0]]];let{renderingUser:r}=e,i,o,f=600,a=0,p={},u=0,c,_="",b;function v(){let y=getComputedStyle(i).width;n(4,f=Math.min(parseInt(/^([\s\S]+)px$/.exec(y)[1])-48,600)),$(),b=setInterval($,30)}function $(y=!1){if(!o)return;y&&n(6,_=""),u===1&&(clearInterval(b),b=0),u+=.03,u>=1&&(u=1);let g=o.getContext("2d"),q=0,h=f/2;g.clearRect(0,0,f,f);for(let[C,P,z]of l){if(z==0||p[P]==0)continue;g.fillStyle=C,g.strokeStyle=C,g.lineWidth=2,g.font="400 "+f/60+"px serif";let W=Math.abs(a),M=2*Math.PI*(q/W*u-1/4),w=2*Math.PI*((q+=p[P]*z)/W*u-1/4);M>w&&([M,w]=[w,M]);let U=(M+w)/2;y&&c>M&&c<w&&n(6,_=P);let F=P===_?f/2.7:f/3,R=h+Math.cos(U)*f/2.5,ee=h+Math.sin(U)*f/2.5,oe=(100*p[P]*z/a).toFixed(2)+"%";if(g.beginPath(),g.moveTo(h,h),g.arc(h,h,F,M,w),g.closePath(),g.fill(),g.moveTo(h,h),g.lineTo(R,ee),g.stroke(),vt(U)>Math.PI/2){let ne=R-f/10;g.lineTo(ne,ee),g.fillText(P+p[P],ne,ee-f/120),g.fillText(oe,ne,ee+f/40),g.stroke()}else{let ne=R+f/10;g.lineTo(ne,ee),g.fillText(P+p[P],R,ee-f/120),g.fillText(oe,R,ee+f/40),g.stroke()}}}function k(y){let g=f/2,q=y.offsetX-g,h=y.offsetY-g,C=(q**2+h**2)**.5;if(C<=f/2.6){let P=q/C;c=h/C>=0?Math.acos(P):2*Math.PI-Math.acos(P),c=c>=3*Math.PI/2?c-2*Math.PI:c,$(!0)}else c=void 0,$(!0)}function B(y){n(6,_=y),$()}Ae(v),Oe(()=>b!=0?clearInterval(b):0);const N=()=>B(""),O=y=>B(y[1]);function H(y){we[y?"unshift":"push"](()=>{o=y,n(3,o)})}function V(y){we[y?"unshift":"push"](()=>{i=y,n(2,i)})}return s.$$set=y=>{"renderingUser"in y&&n(0,r=y.renderingUser)},s.$$.update=()=>{if(s.$$.dirty&3){n(1,a=r.credits.积分);let y={},g=0;for(let q of l){let h;switch(q[1]){case"发帖数":h=r.posts+r.threads;break;case"主题数":h=r.threads;break;case"精华数":h=(a-g)/45;break;default:h=r.credits[q[1]]}y[q[1]]=h,g+=Math.floor(h*q[2]+.5)}n(5,p=y)}},[r,a,i,o,f,p,_,t,l,v,k,B,N,O,H,V]}class yt extends me{constructor(e){super(),ve(this,e,wt,mt,_e,{renderingUser:0})}}function bt(s){let e,n,t,l,r,i;return{c(){e=I(`输入用户的UID：
		`),n=A("input"),t=A("button"),l=I("确定"),this.h()},l(o){e=T(o,`输入用户的UID：
		`),n=D(o,"INPUT",{type:!0,class:!0}),t=D(o,"BUTTON",{class:!0});var f=S(t);l=T(f,"确定"),f.forEach(d),this.h()},h(){E(n,"type","number"),E(n,"class","svelte-xqojua"),E(t,"class","svelte-xqojua")},m(o,f){L(o,e,f),L(o,n,f),ye(n,s[1]),L(o,t,f),m(t,l),r||(i=[K(n,"input",s[5]),K(t,"click",s[3])],r=!0)},p(o,f){f&2&&Ue(n.value)!==o[1]&&ye(n,o[1])},d(o){o&&d(e),o&&d(n),o&&d(t),r=!1,ie(i)}}}function Ct(s){let e,n;return e=new yt({props:{renderingUser:s[0]}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.renderingUser=t[0]),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Et(s){let e,n;return e=new pt({}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p:$e,i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function kt(s){let e,n;return e=new te({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Bt(s){let e,n;return e=new te({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Mt(s){let e;return{c(){e=I("加载中。。。")},l(n){e=T(n,"加载中。。。")},m(n,t){L(n,e,t)},d(n){n&&d(e)}}}function It(s){let e,n;return{c(){e=A("span"),n=I("找不到这个用户"),this.h()},l(t){e=D(t,"SPAN",{style:!0});var l=S(e);n=T(l,"找不到这个用户"),l.forEach(d),this.h()},h(){ae(e,"color","red")},m(t,l){L(t,e,l),m(e,n)},p:$e,d(t){t&&d(e)}}}function Tt(s){let e;return{c(){e=I("说明：等级判定与排位有关，前150名判为A级，前400名判为B级，前1000名判为C级，除此之外大于等于零的判D级，小于零的判E级。采用2022年4月xmdhs统计数据。页面使用的跨域代理为https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=，Netlify超时时间长达10秒而且访问MCBBS速度较慢，故可能出现长时间加载的情况，可以尝试再次点击“确定”。")},l(n){e=T(n,"说明：等级判定与排位有关，前150名判为A级，前400名判为B级，前1000名判为C级，除此之外大于等于零的判D级，小于零的判E级。采用2022年4月xmdhs统计数据。页面使用的跨域代理为https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=，Netlify超时时间长达10秒而且访问MCBBS速度较慢，故可能出现长时间加载的情况，可以尝试再次点击“确定”。")},m(n,t){L(n,e,t)},d(n){n&&d(e)}}}function Lt(s){let e,n,t,l,r,i,o;e=new te({props:{$$slots:{default:[bt]},$$scope:{ctx:s}}});const f=[Bt,kt,Et,Ct],a=[];function p(u,c){return u[0]==="error"?0:u[0]==="pending"?1:u[0]==="none"?2:3}return t=p(s),l=a[t]=f[t](s),i=new Re({props:{$$slots:{default:[Tt]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment),n=G(),l.c(),r=G(),Y(i.$$.fragment)},l(u){x(e.$$.fragment,u),n=j(u),l.l(u),r=j(u),x(i.$$.fragment,u)},m(u,c){Q(e,u,c),L(u,n,c),a[t].m(u,c),L(u,r,c),Q(i,u,c),o=!0},p(u,c){const _={};c&130&&(_.$$scope={dirty:c,ctx:u}),e.$set(_);let b=t;t=p(u),t===b?a[t].p(u,c):(Te(),J(a[b],1,1,()=>{a[b]=null}),Le(),l=a[t],l?l.p(u,c):(l=a[t]=f[t](u),l.c()),X(l,1),l.m(r.parentNode,r));const v={};c&128&&(v.$$scope={dirty:c,ctx:u}),i.$set(v)},i(u){o||(X(e.$$.fragment,u),X(l),X(i.$$.fragment,u),o=!0)},o(u){J(e.$$.fragment,u),J(l),J(i.$$.fragment,u),o=!1},d(u){Z(e,u),u&&d(n),a[t].d(u),u&&d(r),Z(i,u)}}}function At(s){let e,n,t,l;return e=new je({props:{title:"MCBBS积分分析",back:s[2],background:!0}}),t=new We({props:{$$slots:{default:[Lt]},$$scope:{ctx:s}}}),{c(){Y(e.$$.fragment),n=G(),Y(t.$$.fragment)},l(r){x(e.$$.fragment,r),n=j(r),x(t.$$.fragment,r)},m(r,i){Q(e,r,i),L(r,n,i),Q(t,r,i),l=!0},p(r,[i]){const o={};i&131&&(o.$$scope={dirty:i,ctx:r}),t.$set(o)},i(r){l||(X(e.$$.fragment,r),X(t.$$.fragment,r),l=!0)},o(r){J(e.$$.fragment,r),J(t.$$.fragment,r),l=!1},d(r){Z(e,r),r&&d(n),Z(t,r)}}}const Dt="https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=";async function Ft(s){let e,n=0;for(;!e&&n++<3;)try{e=await(await fetch(Dt+s)).json()}catch{}if(e){if(e.error)throw new Error(e.error);if(e.username)return e;throw new Error("Function returns improper data")}else throw new Error("Cannot connect to proxy")}function St(s,e,n){let{title:t="MCBBS积分分析"}=e,l=()=>{i!="none"?(n(0,i="none"),history.pushState({},"","/creditchart")):open("/","_self")},r="",i="none";async function o(p,u=!0){let c=parseInt(r);if(isFinite(c)&&c>0){n(0,i="pending");try{n(0,i=await Ft(c)),u&&history.pushState({},"",location.pathname+"?uid="+c)}catch{n(0,i="error")}}else n(0,i="error")}function f(){n(1,r=new URLSearchParams(location.search).get("uid")||""),r!=""?o(0,!1):n(0,i="none")}Ae(f);function a(){r=Ue(this.value),n(1,r)}return s.$$set=p=>{"title"in p&&n(4,t=p.title)},s.$$.update=()=>{if(s.$$.dirty&1)switch(i){case"none":case"pending":case"error":n(4,t="MCBBS积分分析");break;default:n(4,t="MCBBS积分分析 - "+i.username)}},[i,r,l,o,t,a]}class Ot extends me{constructor(e){super(),ve(this,e,St,At,_e,{title:4})}}export{Ot as component};
