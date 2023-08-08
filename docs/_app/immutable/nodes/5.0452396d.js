import{S as ve,i as _e,s as $e,e as re,b as L,v as Ae,d as j,f as De,g as J,h as d,y as X,z as Y,A as Q,B as Z,k as A,q as I,a as W,l as D,m as x,r as T,c as G,n as C,D as m,u as le,H as K,I as ie,E as ge,o as Fe,P as He,Q as xe,R as Se,p as ae,T as Ue,w as ye,O as Re,U as be,V as ze,W as Ee}from"../chunks/index.2a7a30eb.js";import{d as qe,c as We,t as de}from"../chunks/common.e1899131.js";import{S as te,P as Ge}from"../chunks/PlainTextView.38d97086.js";import{M as je,F as Je}from"../chunks/MenuEntry.1716e3a1.js";import{M as Xe}from"../chunks/MainContext.f47e6593.js";function se(){}se.prototype={diff:function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=t.callback;typeof t=="function"&&(s=t,t={}),this.options=t;var l=this;function i(v){return s?(setTimeout(function(){s(void 0,v)},0),!0):v}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var f=n.length,o=e.length,a=1,p=f+o;t.maxEditLength&&(p=Math.min(p,t.maxEditLength));var u=[{newPos:-1,components:[]}],c=this.extractCommon(u[0],n,e,0);if(u[0].newPos+1>=f&&c+1>=o)return i([{value:this.join(n),count:n.length}]);function _(){for(var v=-1*a;v<=a;v+=2){var $=void 0,k=u[v-1],B=u[v+1],U=(B?B.newPos:0)-v;k&&(u[v-1]=void 0);var P=k&&k.newPos+1<f,H=B&&0<=U&&U<o;if(!P&&!H){u[v]=void 0;continue}if(!P||H&&k.newPos<B.newPos?($=Qe(B),l.pushComponent($.components,void 0,!0)):($=k,$.newPos++,l.pushComponent($.components,!0,void 0)),U=l.extractCommon($,n,e,v),$.newPos+1>=f&&U+1>=o)return i(Ye(l,$.components,n,e,l.useLongestToken));u[v]=$}a++}if(s)(function v(){setTimeout(function(){if(a>p)return s();_()||v()},0)})();else for(;a<=p;){var b=_();if(b)return b}},pushComponent:function(e,n,t){var s=e[e.length-1];s&&s.added===n&&s.removed===t?e[e.length-1]={count:s.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,s){for(var l=n.length,i=t.length,f=e.newPos,o=f-s,a=0;f+1<l&&o+1<i&&this.equals(n[f+1],t[o+1]);)f++,o++,a++;return a&&e.components.push({count:a}),e.newPos=f,o},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function Ye(r,e,n,t,s){for(var l=0,i=e.length,f=0,o=0;l<i;l++){var a=e[l];if(a.removed){if(a.value=r.join(t.slice(o,o+a.count)),o+=a.count,l&&e[l-1].added){var u=e[l-1];e[l-1]=e[l],e[l]=u}}else{if(!a.added&&s){var p=n.slice(f,f+a.count);p=p.map(function(_,b){var v=t[o+b];return v.length>_.length?v:_}),a.value=r.join(p)}else a.value=r.join(n.slice(f,f+a.count));f+=a.count,a.added||(o+=a.count)}}var c=e[i-1];return i>1&&typeof c.value=="string"&&(c.added||c.removed)&&r.equals("",c.value)&&(e[i-2].value+=c.value,e.pop()),e}function Qe(r){return{newPos:r.newPos,components:r.components.slice(0)}}var Ce=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,ke=/\S/,Ne=new se;Ne.equals=function(r,e){return this.options.ignoreCase&&(r=r.toLowerCase(),e=e.toLowerCase()),r===e||this.options.ignoreWhitespace&&!ke.test(r)&&!ke.test(e)};Ne.tokenize=function(r){for(var e=r.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&Ce.test(e[n])&&Ce.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var Ve=new se;Ve.tokenize=function(r){var e=[],n=r.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var t=0;t<n.length;t++){var s=n[t];t%2&&!this.options.newlineIsToken?e[e.length-1]+=s:(this.options.ignoreWhitespace&&(s=s.trim()),e.push(s))}return e};var Ze=new se;Ze.tokenize=function(r){return r.split(/(\S.+?[.!?])(?=\s+|$)/)};var Ke=new se;Ke.tokenize=function(r){return r.split(/([{}:;,]|\s+)/)};function ue(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ue=function(e){return typeof e}:ue=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(r)}var et=Object.prototype.toString,fe=new se;fe.useLongestToken=!0;fe.tokenize=Ve.tokenize;fe.castInput=function(r){var e=this.options,n=e.undefinedReplacement,t=e.stringifyReplacer,s=t===void 0?function(l,i){return typeof i>"u"?n:i}:t;return typeof r=="string"?r:JSON.stringify(he(r,null,null,s),s,"  ")};fe.equals=function(r,e){return se.prototype.equals.call(fe,r.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function he(r,e,n,t,s){e=e||[],n=n||[],t&&(r=t(s,r));var l;for(l=0;l<e.length;l+=1)if(e[l]===r)return n[l];var i;if(et.call(r)==="[object Array]"){for(e.push(r),i=new Array(r.length),n.push(i),l=0;l<r.length;l+=1)i[l]=he(r[l],e,n,t,s);return e.pop(),n.pop(),i}if(r&&r.toJSON&&(r=r.toJSON()),ue(r)==="object"&&r!==null){e.push(r),i={},n.push(i);var f=[],o;for(o in r)r.hasOwnProperty(o)&&f.push(o);for(f.sort(),l=0;l<f.length;l+=1)o=f[l],i[o]=he(r[o],e,n,t,o);e.pop(),n.pop()}else i=r;return i}var me=new se;me.tokenize=function(r){return r.slice()};me.join=me.removeEmpty=function(r){return r};function tt(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.split(/\r\n|[\n\v\f\r\x85]/),t=r.match(/\r\n|[\n\v\f\r\x85]/g)||[],s=[],l=0;function i(){var a={};for(s.push(a);l<n.length;){var p=n[l];if(/^(\-\-\-|\+\+\+|@@)\s/.test(p))break;var u=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(p);u&&(a.index=u[1]),l++}for(f(a),f(a),a.hunks=[];l<n.length;){var c=n[l];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c))break;if(/^@@/.test(c))a.hunks.push(o());else{if(c&&e.strict)throw new Error("Unknown line "+(l+1)+" "+JSON.stringify(c));l++}}}function f(a){var p=/^(---|\+\+\+)\s+(.*)$/.exec(n[l]);if(p){var u=p[1]==="---"?"old":"new",c=p[2].split("	",2),_=c[0].replace(/\\\\/g,"\\");/^".*"$/.test(_)&&(_=_.substr(1,_.length-2)),a[u+"FileName"]=_,a[u+"Header"]=(c[1]||"").trim(),l++}}function o(){var a=l,p=n[l++],u=p.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),c={oldStart:+u[1],oldLines:typeof u[2]>"u"?1:+u[2],newStart:+u[3],newLines:typeof u[4]>"u"?1:+u[4],lines:[],linedelimiters:[]};c.oldLines===0&&(c.oldStart+=1),c.newLines===0&&(c.newStart+=1);for(var _=0,b=0;l<n.length&&!(n[l].indexOf("--- ")===0&&l+2<n.length&&n[l+1].indexOf("+++ ")===0&&n[l+2].indexOf("@@")===0);l++){var v=n[l].length==0&&l!=n.length-1?" ":n[l][0];if(v==="+"||v==="-"||v===" "||v==="\\")c.lines.push(n[l]),c.linedelimiters.push(t[l]||`
`),v==="+"?_++:v==="-"?b++:v===" "&&(_++,b++);else break}if(!_&&c.newLines===1&&(c.newLines=0),!b&&c.oldLines===1&&(c.oldLines=0),e.strict){if(_!==c.newLines)throw new Error("Added line count did not match for hunk at line "+(a+1));if(b!==c.oldLines)throw new Error("Removed line count did not match for hunk at line "+(a+1))}return c}for(;l<n.length;)i();return s}function nt(r,e,n){var t=!0,s=!1,l=!1,i=1;return function f(){if(t&&!l){if(s?i++:t=!1,r+i<=n)return i;l=!0}if(!s)return l||(t=!0),e<=r-i?-i++:(s=!0,f())}}function rt(r,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string"&&(e=tt(e)),Array.isArray(e)){if(e.length>1)throw new Error("applyPatch only works with a single input.");e=e[0]}var t=r.split(/\r\n|[\n\v\f\r\x85]/),s=r.match(/\r\n|[\n\v\f\r\x85]/g)||[],l=e.hunks,i=n.compareLine||function(M,w,S,F){return w===F},f=0,o=n.fuzzFactor||0,a=0,p=0,u,c;function _(M,w){for(var S=0;S<M.lines.length;S++){var F=M.lines[S],R=F.length>0?F[0]:" ",ee=F.length>0?F.substr(1):F;if(R===" "||R==="-"){if(!i(w+1,t[w],R,ee)&&(f++,f>o))return!1;w++}}return!0}for(var b=0;b<l.length;b++){for(var v=l[b],$=t.length-v.oldLines,k=0,B=p+v.oldStart-1,U=nt(B,a,$);k!==void 0;k=U())if(_(v,B+k)){v.offset=p+=k;break}if(k===void 0)return!1;a=v.offset+v.oldStart+v.oldLines}for(var P=0,H=0;H<l.length;H++){var N=l[H],y=N.oldStart+N.offset+P-1;P+=N.newLines-N.oldLines;for(var g=0;g<N.lines.length;g++){var O=N.lines[g],h=O.length>0?O[0]:" ",E=O.length>0?O.substr(1):O,V=N.linedelimiters[g];if(h===" ")y++;else if(h==="-")t.splice(y,1),s.splice(y,1);else if(h==="+")t.splice(y,0,E),s.splice(y,0,V),y++;else if(h==="\\"){var z=N.lines[g-1]?N.lines[g-1][0]:null;z==="+"?u=!0:z==="-"&&(c=!0)}}}if(u)for(;!t[t.length-1];)t.pop(),s.pop();else c&&(t.push(""),s.push(`
`));for(var q=0;q<t.length-1;q++)t[q]=t[q]+s[q];return t.join("")}function st(r){let e,n;return e=new te({props:{$$slots:{default:[ut]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&130&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function lt(r){let e,n;return e=new te({props:{$$slots:{default:[at]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&131&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function it(r){let e,n;return e=new te({props:{$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&128&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function ot(r){let e,n;return e=new te({props:{$$slots:{default:[pt]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&129&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function ft(r){let e,n;return e=new je({props:{content:"安装用户脚本",href:r[4]}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.href=t[4]),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function ut(r){let e,n,t,s;return{c(){e=A("p"),n=I("出现了一个错误："),t=W(),s=I(r[1]),this.h()},l(l){e=D(l,"P",{class:!0});var i=x(e);n=T(i,"出现了一个错误："),i.forEach(d),t=G(l),s=T(l,r[1]),this.h()},h(){C(e,"class","svelte-xxdyl3")},m(l,i){L(l,e,i),m(e,n),L(l,t,i),L(l,s,i)},p(l,i){i&2&&le(s,l[1])},d(l){l&&d(e),l&&d(t),l&&d(s)}}}function at(r){let e,n,t,s,l,i,f,o,a,p,u,c,_,b,v;return c=new Ge({props:{data:r[1]}}),{c(){e=A("p"),n=I("将以下内容复制到TamperMonkey的“添加新脚本’页面中，然后保存。"),t=W(),s=A("p"),l=A("button"),i=I("复制"),f=W(),o=A("button"),a=I("取消"),p=W(),u=A("p"),X(c.$$.fragment),this.h()},l($){e=D($,"P",{class:!0});var k=x(e);n=T(k,"将以下内容复制到TamperMonkey的“添加新脚本’页面中，然后保存。"),k.forEach(d),t=G($),s=D($,"P",{class:!0});var B=x(s);l=D(B,"BUTTON",{class:!0});var U=x(l);i=T(U,"复制"),U.forEach(d),f=G(B),o=D(B,"BUTTON",{class:!0});var P=x(o);a=T(P,"取消"),P.forEach(d),B.forEach(d),p=G($),u=D($,"P",{class:!0});var H=x(u);Y(c.$$.fragment,H),H.forEach(d),this.h()},h(){C(e,"class","svelte-xxdyl3"),C(l,"class","svelte-xxdyl3"),C(o,"class","svelte-xxdyl3"),C(s,"class","svelte-xxdyl3"),C(u,"class","svelte-xxdyl3")},m($,k){L($,e,k),m(e,n),L($,t,k),L($,s,k),m(s,l),m(l,i),m(s,f),m(s,o),m(o,a),L($,p,k),L($,u,k),Q(c,u,null),_=!0,b||(v=[K(l,"click",r[3]),K(o,"click",r[6])],b=!0)},p($,k){const B={};k&2&&(B.data=$[1]),c.$set(B)},i($){_||(J(c.$$.fragment,$),_=!0)},o($){j(c.$$.fragment,$),_=!1},d($){$&&d(e),$&&d(t),$&&d(s),$&&d(p),$&&d(u),Z(c),b=!1,ie(v)}}}function ct(r){let e;return{c(){e=I("下载中。。。")},l(n){e=T(n,"下载中。。。")},m(n,t){L(n,e,t)},d(n){n&&d(e)}}}function pt(r){let e,n,t,s,l,i,f,o,a,p,u,c,_,b,v,$,k,B,U,P,H,N,y,g,O;return{c(){e=A("p"),n=I(`快乐小方编写的MCBBS
			CreditAnalysis是闭源软件，因此无法直接提供带洞穴夜莺补丁的MCBBS
			CreditAnalysis。`),t=W(),s=A("p"),l=I("如果选择继续，则本页面会分别下载"),i=A("a"),f=I("MCBBS CreditAnalysis"),o=I("和"),a=A("a"),p=I("洞穴夜莺补丁"),u=I(`，然后将补丁打到MCBBS
			CreditAnalysis上。`),c=W(),_=A("p"),b=I("需要"),v=A("a"),$=I("TamperMonkey"),k=I(`浏览器插件才能使用MCBBS
			CreditAnalysis。由于技术原因，此类由网页生成的脚本无法打开TamperMonkey的安装界面。因此，在下载完成后需要您手动将脚本复制粘贴到TamperMonkey的“添加新脚本”页面（可在TamperMonkey主菜单中找到）中去安装。`),B=W(),U=A("button"),P=I("确定"),H=W(),N=A("button"),y=I("取消"),this.h()},l(h){e=D(h,"P",{class:!0});var E=x(e);n=T(E,`快乐小方编写的MCBBS
			CreditAnalysis是闭源软件，因此无法直接提供带洞穴夜莺补丁的MCBBS
			CreditAnalysis。`),E.forEach(d),t=G(h),s=D(h,"P",{class:!0});var V=x(s);l=T(V,"如果选择继续，则本页面会分别下载"),i=D(V,"A",{href:!0,class:!0});var z=x(i);f=T(z,"MCBBS CreditAnalysis"),z.forEach(d),o=T(V,"和"),a=D(V,"A",{href:!0,class:!0});var q=x(a);p=T(q,"洞穴夜莺补丁"),q.forEach(d),u=T(V,`，然后将补丁打到MCBBS
			CreditAnalysis上。`),V.forEach(d),c=G(h),_=D(h,"P",{class:!0});var M=x(_);b=T(M,"需要"),v=D(M,"A",{href:!0,class:!0});var w=x(v);$=T(w,"TamperMonkey"),w.forEach(d),k=T(M,`浏览器插件才能使用MCBBS
			CreditAnalysis。由于技术原因，此类由网页生成的脚本无法打开TamperMonkey的安装界面。因此，在下载完成后需要您手动将脚本复制粘贴到TamperMonkey的“添加新脚本”页面（可在TamperMonkey主菜单中找到）中去安装。`),M.forEach(d),B=G(h),U=D(h,"BUTTON",{class:!0});var S=x(U);P=T(S,"确定"),S.forEach(d),H=G(h),N=D(h,"BUTTON",{class:!0});var F=x(N);y=T(F,"取消"),F.forEach(d),this.h()},h(){C(e,"class","svelte-xxdyl3"),C(i,"href",Pe),C(i,"class","svelte-xxdyl3"),C(a,"href",Oe),C(a,"class","svelte-xxdyl3"),C(s,"class","svelte-xxdyl3"),C(v,"href","https://www.tampermonkey.net/"),C(v,"class","svelte-xxdyl3"),C(_,"class","svelte-xxdyl3"),C(U,"class","svelte-xxdyl3"),C(N,"class","svelte-xxdyl3")},m(h,E){L(h,e,E),m(e,n),L(h,t,E),L(h,s,E),m(s,l),m(s,i),m(i,f),m(s,o),m(s,a),m(a,p),m(s,u),L(h,c,E),L(h,_,E),m(_,b),m(_,v),m(v,$),m(_,k),L(h,B,E),L(h,U,E),m(U,P),L(h,H,E),L(h,N,E),m(N,y),g||(O=[K(U,"click",r[2]),K(N,"click",r[5])],g=!0)},p:ge,d(h){h&&d(e),h&&d(t),h&&d(s),h&&d(c),h&&d(_),h&&d(B),h&&d(U),h&&d(H),h&&d(N),g=!1,ie(O)}}}function dt(r){let e,n,t,s;const l=[ft,ot,it,lt,st],i=[];function f(o,a){return o[0]=="none"?0:o[0]=="confirm"?1:o[0]=="pending"?2:o[0]=="data"?3:o[0]=="error"?4:-1}return~(e=f(r))&&(n=i[e]=l[e](r)),{c(){n&&n.c(),t=re()},l(o){n&&n.l(o),t=re()},m(o,a){~e&&i[e].m(o,a),L(o,t,a),s=!0},p(o,[a]){let p=e;e=f(o),e===p?~e&&i[e].p(o,a):(n&&(Ae(),j(i[p],1,1,()=>{i[p]=null}),De()),~e?(n=i[e],n?n.p(o,a):(n=i[e]=l[e](o),n.c()),J(n,1),n.m(t.parentNode,t)):n=null)},i(o){s||(J(n),s=!0)},o(o){j(n),s=!1},d(o){~e&&i[e].d(o),o&&d(t)}}}const Pe="https://greasyfork.org/scripts/407846-mcbbs-creditanalysis/code/MCBBS%20CreditAnalysis.user.js",Oe="/assets/creditchart/userscript.patch";function ht(r,e,n){let t="none",s="";function l(){return n(0,t="pending"),Promise.all([fetch(Pe).then(p=>p.text()),fetch(Oe).then(p=>p.text())]).then(([p,u])=>{n(1,s=rt(p,u)),n(0,t="data")}).catch(p=>{n(0,t="error"),n(1,s=p.stack)})}function i(){navigator.clipboard.writeText(s),qe("已复制脚本")}return[t,s,l,i,()=>n(0,t="confirm"),()=>n(0,t="none"),()=>n(0,t="none")]}class mt extends ve{constructor(e){super(),_e(this,e,ht,dt,$e,{})}}function Be(r,e,n){const t=r.slice();return t[20]=e[n],t}function Me(r,e,n){const t=r.slice();return t[23]=e[n],t}function Ie(r){let e,n=r[0].userGroupEx,t=[];for(let s=0;s<n.length;s+=1)t[s]=Te(Me(r,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=re()},l(s){for(let l=0;l<t.length;l+=1)t[l].l(s);e=re()},m(s,l){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(s,l);L(s,e,l)},p(s,l){if(l&1){n=s[0].userGroupEx;let i;for(i=0;i<n.length;i+=1){const f=Me(s,n,i);t[i]?t[i].p(f,l):(t[i]=Te(f),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(s){Ue(t,s),s&&d(e)}}}function Te(r){let e,n,t=r[23]+"",s;return{c(){e=I("，"),n=new xe(!1),s=re(),this.h()},l(l){e=T(l,"，"),n=Se(l,!1),s=re(),this.h()},h(){n.a=s},m(l,i){L(l,e,i),n.m(t,l,i),L(l,s,i)},p(l,i){i&1&&t!==(t=l[23]+"")&&n.p(t)},d(l){l&&d(e),l&&d(s),l&&n.d()}}}function Le(r){let e,n,t,s,l,i=r[20][1]+"",f,o,a,p=r[5][r[20][1]]+"",u,c,_,b=(100*r[5][r[20][1]]*r[20][2]/r[1]).toFixed(2)+"",v,$,k,B,U=ce(r[5][r[20][1]],r[20][3])+"",P,H,N,y,g;function O(){return r[13](r[20])}return{c(){e=A("div"),n=A("div"),t=A("div"),s=W(),l=A("div"),f=I(i),o=W(),a=A("div"),u=I(p),c=W(),_=A("div"),v=I(b),$=I("%"),k=W(),B=A("div"),P=I(U),H=W(),this.h()},l(h){e=D(h,"DIV",{class:!0,style:!0});var E=x(e);n=D(E,"DIV",{class:!0});var V=x(n);t=D(V,"DIV",{class:!0,style:!0}),x(t).forEach(d),V.forEach(d),s=G(E),l=D(E,"DIV",{class:!0});var z=x(l);f=T(z,i),z.forEach(d),o=G(E),a=D(E,"DIV",{class:!0});var q=x(a);u=T(q,p),q.forEach(d),c=G(E),_=D(E,"DIV",{class:!0});var M=x(_);v=T(M,b),$=T(M,"%"),M.forEach(d),k=G(E),B=D(E,"DIV",{class:!0});var w=x(B);P=T(w,U),w.forEach(d),H=G(E),E.forEach(d),this.h()},h(){C(t,"class","color-example svelte-3f2djp"),ae(t,"background-color",r[20][0]),C(n,"class","color svelte-3f2djp"),C(l,"class","name svelte-3f2djp"),C(a,"class","count svelte-3f2djp"),C(_,"class","percent svelte-3f2djp"),C(B,"class","rank svelte-3f2djp"),C(e,"class","lines svelte-3f2djp"),C(e,"style",N=r[6]===r[20][1]?"background: #d8d8d8;":"")},m(h,E){L(h,e,E),m(e,n),m(n,t),m(e,s),m(e,l),m(l,f),m(e,o),m(e,a),m(a,u),m(e,c),m(e,_),m(_,v),m(_,$),m(e,k),m(e,B),m(B,P),m(e,H),y||(g=[K(e,"click",O),K(e,"keypress",yt)],y=!0)},p(h,E){r=h,E&32&&p!==(p=r[5][r[20][1]]+"")&&le(u,p),E&34&&b!==(b=(100*r[5][r[20][1]]*r[20][2]/r[1]).toFixed(2)+"")&&le(v,b),E&32&&U!==(U=ce(r[5][r[20][1]],r[20][3])+"")&&le(P,U),E&64&&N!==(N=r[6]===r[20][1]?"background: #d8d8d8;":"")&&C(e,"style",N)},d(h){h&&d(e),y=!1,ie(g)}}}function vt(r){let e,n,t=r[0].username+"",s,l,i,f,o=r[0].userGroup+"",a,p,u,c,_,b,v,$,k,B,U,P,H,N,y,g=ce(r[1],r[7])+"",O,h,E,V,z=r[0].userGroupEx&&Ie(r),q=r[8],M=[];for(let w=0;w<q.length;w+=1)M[w]=Le(Be(r,q,w));return{c(){e=A("div"),n=A("a"),s=I(t),i=I(`
		(
		`),f=new xe(!1),a=re(),z&&z.c(),p=I(`
		)
		`),u=A("div"),c=A("div"),_=W(),b=A("div"),v=I("总积分"),$=W(),k=A("div"),B=I(r[1]),U=W(),P=A("div"),H=I("100.00%"),N=W(),y=A("div"),O=I(g),h=W();for(let w=0;w<M.length;w+=1)M[w].c();this.h()},l(w){e=D(w,"DIV",{class:!0});var S=x(e);n=D(S,"A",{style:!0,href:!0,target:!0});var F=x(n);s=T(F,t),F.forEach(d),i=T(S,`
		(
		`),f=Se(S,!1),a=re(),z&&z.l(S),p=T(S,`
		)
		`),u=D(S,"DIV",{class:!0});var R=x(u);c=D(R,"DIV",{class:!0}),x(c).forEach(d),_=G(R),b=D(R,"DIV",{class:!0});var ee=x(b);v=T(ee,"总积分"),ee.forEach(d),$=G(R),k=D(R,"DIV",{class:!0});var oe=x(k);B=T(oe,r[1]),oe.forEach(d),U=G(R),P=D(R,"DIV",{class:!0});var ne=x(P);H=T(ne,"100.00%"),ne.forEach(d),N=G(R),y=D(R,"DIV",{class:!0});var we=x(y);O=T(we,g),we.forEach(d),R.forEach(d),h=G(S);for(let pe=0;pe<M.length;pe+=1)M[pe].l(S);S.forEach(d),this.h()},h(){ae(n,"font-size","24px"),ae(n,"color","black"),C(n,"href",l="https://www.mcbbs.net/home.php?mod=space&username="+r[0].username),C(n,"target","_blank"),f.a=a,C(c,"class","color svelte-3f2djp"),C(b,"class","name svelte-3f2djp"),C(k,"class","count svelte-3f2djp"),C(P,"class","percent svelte-3f2djp"),C(y,"class","rank svelte-3f2djp"),C(u,"class","lines svelte-3f2djp"),C(e,"class","parent svelte-3f2djp")},m(w,S){L(w,e,S),m(e,n),m(n,s),m(e,i),f.m(o,e),m(e,a),z&&z.m(e,null),m(e,p),m(e,u),m(u,c),m(u,_),m(u,b),m(b,v),m(u,$),m(u,k),m(k,B),m(u,U),m(u,P),m(P,H),m(u,N),m(u,y),m(y,O),m(e,h);for(let F=0;F<M.length;F+=1)M[F]&&M[F].m(e,null);E||(V=[K(u,"click",r[12]),K(u,"keypress",wt)],E=!0)},p(w,S){if(S&1&&t!==(t=w[0].username+"")&&le(s,t),S&1&&l!==(l="https://www.mcbbs.net/home.php?mod=space&username="+w[0].username)&&C(n,"href",l),S&1&&o!==(o=w[0].userGroup+"")&&f.p(o),w[0].userGroupEx?z?z.p(w,S):(z=Ie(w),z.c(),z.m(e,p)):z&&(z.d(1),z=null),S&2&&le(B,w[1]),S&2&&g!==(g=ce(w[1],w[7])+"")&&le(O,g),S&2402){q=w[8];let F;for(F=0;F<q.length;F+=1){const R=Be(w,q,F);M[F]?M[F].p(R,S):(M[F]=Le(R),M[F].c(),M[F].m(e,null))}for(;F<M.length;F+=1)M[F].d(1);M.length=q.length}},d(w){w&&d(e),z&&z.d(),Ue(M,w),E=!1,ie(V)}}}function _t(r){let e,n,t,s,l;return{c(){e=A("div"),n=A("canvas"),t=I("请更新浏览器！"),this.h()},l(i){e=D(i,"DIV",{class:!0});var f=x(e);n=D(f,"CANVAS",{width:!0,height:!0});var o=x(n);t=T(o,"请更新浏览器！"),o.forEach(d),f.forEach(d),this.h()},h(){C(n,"width",r[4]),C(n,"height",r[4]),C(e,"class","canvas-parent svelte-3f2djp")},m(i,f){L(i,e,f),m(e,n),m(n,t),r[14](n),r[15](e),s||(l=[K(e,"click",r[10]),K(e,"keypress",bt)],s=!0)},p(i,f){f&16&&C(n,"width",i[4]),f&16&&C(n,"height",i[4])},d(i){i&&d(e),r[14](null),r[15](null),s=!1,ie(l)}}}function $t(r){let e,n,t,s,l,i;return e=new te({props:{$$slots:{default:[vt]},$$scope:{ctx:r}}}),t=new te({props:{$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment),n=W(),X(t.$$.fragment)},l(f){Y(e.$$.fragment,f),n=G(f),Y(t.$$.fragment,f)},m(f,o){Q(e,f,o),L(f,n,o),Q(t,f,o),s=!0,l||(i=K(window,"resize",r[9]),l=!0)},p(f,[o]){const a={};o&67108963&&(a.$$scope={dirty:o,ctx:f}),e.$set(a);const p={};o&67108892&&(p.$$scope={dirty:o,ctx:f}),t.$set(p)},i(f){s||(J(e.$$.fragment,f),J(t.$$.fragment,f),s=!0)},o(f){j(e.$$.fragment,f),j(t.$$.fragment,f),s=!1},d(f){Z(e,f),f&&d(n),Z(t,f),l=!1,i()}}}function ce(r,e){return r>=e[0]?"A":r>=e[1]?"B":r>=e[2]?"C":r>=0?"D":"E"}function gt(r){let e=(r+Math.PI/2)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI/2}const wt=()=>{},yt=()=>{},bt=()=>{};function Et(r,e,n){const t=[12564,7348,4827],s=[["#2dc6c8","人气",3,[1770,829,395]],["#5daf7a","金粒",0,[23372,14581,9110]],["#9c3a4b","金锭",0,[72,40,23]],["#3866b9","宝石",0,[20,9,5]],["#82de76","下界之心",0,[8,4,1]],["#b6a2dd","贡献",10,[61,21,6]],["#5ab1ee","爱心",4,[139,51,18]],["#d7797f","钻石",2,[2641,2014,1531]],["#e6399b","发帖数",1/3,[6677,3504,1911]],["#9f3ed5","主题数",2,[262,166,103]],["#ff4040","精华数",45,[20,3,0]]];let{renderingUser:l}=e,i,f,o=600,a=0,p={},u=0,c,_="",b;function v(){let y=getComputedStyle(i).width;n(4,o=Math.min(parseInt(/^([\s\S]+)px$/.exec(y)[1])-48,600)),$(),b=setInterval($,30)}function $(y=!1){if(!f)return;y&&n(6,_=""),u===1&&(clearInterval(b),b=0),u+=.03,u>=1&&(u=1);let g=f.getContext("2d"),O=0,h=o/2;g.clearRect(0,0,o,o);for(let[E,V,z]of s){if(z==0||p[V]==0)continue;g.fillStyle=E,g.strokeStyle=E,g.lineWidth=2,g.font="400 "+o/60+"px serif";let q=Math.abs(a),M=2*Math.PI*(O/q*u-1/4),w=2*Math.PI*((O+=p[V]*z)/q*u-1/4);M>w&&([M,w]=[w,M]);let S=(M+w)/2;y&&c>M&&c<w&&n(6,_=V);let F=V===_?o/2.7:o/3,R=h+Math.cos(S)*o/2.5,ee=h+Math.sin(S)*o/2.5,oe=(100*p[V]*z/a).toFixed(2)+"%";if(g.beginPath(),g.moveTo(h,h),g.arc(h,h,F,M,w),g.closePath(),g.fill(),g.moveTo(h,h),g.lineTo(R,ee),g.stroke(),gt(S)>Math.PI/2){let ne=R-o/10;g.lineTo(ne,ee),g.fillText(V+p[V],ne,ee-o/120),g.fillText(oe,ne,ee+o/40),g.stroke()}else{let ne=R+o/10;g.lineTo(ne,ee),g.fillText(V+p[V],R,ee-o/120),g.fillText(oe,R,ee+o/40),g.stroke()}}}function k(y){let g=o/2,O=y.offsetX-g,h=y.offsetY-g,E=(O**2+h**2)**.5;if(E<=o/2.6){let V=O/E;c=h/E>=0?Math.acos(V):2*Math.PI-Math.acos(V),c=c>=3*Math.PI/2?c-2*Math.PI:c,$(!0)}else c=void 0,$(!0)}function B(y){n(6,_=y),$()}Fe(v),He(()=>b!=0?clearInterval(b):0);const U=()=>B(""),P=y=>B(y[1]);function H(y){ye[y?"unshift":"push"](()=>{f=y,n(3,f)})}function N(y){ye[y?"unshift":"push"](()=>{i=y,n(2,i)})}return r.$$set=y=>{"renderingUser"in y&&n(0,l=y.renderingUser)},r.$$.update=()=>{if(r.$$.dirty&3){n(1,a=l.credits.积分);let y={},g=0;for(let O of s){let h;switch(O[1]){case"发帖数":h=l.posts+l.threads;break;case"主题数":h=l.threads;break;case"精华数":h=(a-g)/45;break;default:h=l.credits[O[1]]}y[O[1]]=h,g+=Math.floor(h*O[2]+.5)}n(5,p=y)}},[l,a,i,f,o,p,_,t,s,v,k,B,U,P,H,N]}class Ct extends ve{constructor(e){super(),_e(this,e,Et,$t,$e,{renderingUser:0})}}function kt(r){let e,n,t,s,l,i;return{c(){e=I(`输入用户的UID：
		`),n=A("input"),t=A("button"),s=I("确定"),this.h()},l(f){e=T(f,`输入用户的UID：
		`),n=D(f,"INPUT",{type:!0,class:!0}),t=D(f,"BUTTON",{class:!0});var o=x(t);s=T(o,"确定"),o.forEach(d),this.h()},h(){C(n,"type","number"),C(n,"class","svelte-1vc10mp"),C(t,"class","svelte-1vc10mp")},m(f,o){L(f,e,o),L(f,n,o),Ee(n,r[1]),L(f,t,o),m(t,s),l||(i=[K(n,"input",r[3]),K(t,"click",r[2])],l=!0)},p(f,o){o&2&&ze(n.value)!==f[1]&&Ee(n,f[1])},d(f){f&&d(e),f&&d(n),f&&d(t),l=!1,ie(i)}}}function Bt(r){let e,n;return e=new Ct({props:{renderingUser:r[0]}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.renderingUser=t[0]),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Mt(r){let e,n;return e=new mt({}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p:ge,i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function It(r){let e,n;return e=new te({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&128&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Tt(r){let e,n;return e=new te({props:{$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,s){const l={};s&128&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Lt(r){let e;return{c(){e=I("加载中。。。")},l(n){e=T(n,"加载中。。。")},m(n,t){L(n,e,t)},d(n){n&&d(e)}}}function At(r){let e,n;return{c(){e=A("span"),n=I("找不到这个用户"),this.h()},l(t){e=D(t,"SPAN",{style:!0});var s=x(e);n=T(s,"找不到这个用户"),s.forEach(d),this.h()},h(){ae(e,"color","red")},m(t,s){L(t,e,s),m(e,n)},p:ge,d(t){t&&d(e)}}}function Dt(r){let e;return{c(){e=I("说明：等级判定与排位有关，前150名判为A级，前400名判为B级，前1000名判为C级，除此之外大于等于零的判D级，小于零的判E级。采用2022年4月xmdhs统计数据。页面使用的跨域代理为https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=，Netlify超时时间长达10秒而且访问MCBBS速度较慢，故可能出现长时间加载的情况，可以尝试再次点击“确定”。")},l(n){e=T(n,"说明：等级判定与排位有关，前150名判为A级，前400名判为B级，前1000名判为C级，除此之外大于等于零的判D级，小于零的判E级。采用2022年4月xmdhs统计数据。页面使用的跨域代理为https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=，Netlify超时时间长达10秒而且访问MCBBS速度较慢，故可能出现长时间加载的情况，可以尝试再次点击“确定”。")},m(n,t){L(n,e,t)},d(n){n&&d(e)}}}function Ft(r){let e,n,t,s,l,i,f;e=new te({props:{$$slots:{default:[kt]},$$scope:{ctx:r}}});const o=[Tt,It,Mt,Bt],a=[];function p(u,c){return u[0]==="error"?0:u[0]==="pending"?1:u[0]==="none"?2:3}return t=p(r),s=a[t]=o[t](r),i=new Je({props:{$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment),n=W(),s.c(),l=W(),X(i.$$.fragment)},l(u){Y(e.$$.fragment,u),n=G(u),s.l(u),l=G(u),Y(i.$$.fragment,u)},m(u,c){Q(e,u,c),L(u,n,c),a[t].m(u,c),L(u,l,c),Q(i,u,c),f=!0},p(u,c){const _={};c&130&&(_.$$scope={dirty:c,ctx:u}),e.$set(_);let b=t;t=p(u),t===b?a[t].p(u,c):(Ae(),j(a[b],1,1,()=>{a[b]=null}),De(),s=a[t],s?s.p(u,c):(s=a[t]=o[t](u),s.c()),J(s,1),s.m(l.parentNode,l));const v={};c&128&&(v.$$scope={dirty:c,ctx:u}),i.$set(v)},i(u){f||(J(e.$$.fragment,u),J(s),J(i.$$.fragment,u),f=!0)},o(u){j(e.$$.fragment,u),j(s),j(i.$$.fragment,u),f=!1},d(u){Z(e,u),u&&d(n),a[t].d(u),u&&d(l),Z(i,u)}}}function xt(r){let e,n;return e=new Xe({props:{$$slots:{default:[Ft]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),n=!0},p(t,[s]){const l={};s&131&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}const St="https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=";async function Ut(r){let e,n=0;for(;!e&&n++<3;)try{e=await(await fetch(St+r)).json()}catch{}if(e){if(e.error)throw new Error(e.error);if(e.username)return e;throw new Error("Function returns improper data")}else throw new Error("Cannot connect to proxy")}function zt(r,e,n){let t;Re(r,de,p=>n(4,t=p));let s=()=>{i!="none"?(n(0,i="none"),history.pushState({},"","/creditchart")):open("/","_self")},l="",i="none";async function f(p,u=!0){let c=parseInt(l);if(isFinite(c)&&c>0){n(0,i="pending");try{n(0,i=await Ut(c)),u&&history.pushState({},"",location.pathname+"?uid="+c)}catch{n(0,i="error")}}else n(0,i="error")}function o(){n(1,l=new URLSearchParams(location.search).get("uid")||""),l!=""?f(0,!1):n(0,i="none")}Fe(o),We("MCBBS积分分析",s);function a(){l=ze(this.value),n(1,l)}return r.$$.update=()=>{if(r.$$.dirty&1)switch(i){case"none":case"pending":case"error":be(de,t="MCBBS积分分析",t);break;default:be(de,t="MCBBS积分分析 - "+i.username,t)}},[i,l,f,a]}class Rt extends ve{constructor(e){super(),_e(this,e,zt,xt,$e,{})}}export{Rt as component};
