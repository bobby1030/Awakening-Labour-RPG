(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{412:function(t,n,e){"use strict";e.r(n);var o=e(422),r=e(475);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e(497);var a=e(15),c=Object(a.a)(r.default,o.render,o.staticRenderFns,!1,null,"3e9b604b",null),u=e(45);u.install(e(14)),u.compatible&&(t.hot.accept(),t.hot.data?u.reload("3e9b604b",c.options):u.createRecord("3e9b604b",c.options),t.hot.accept(422,function(t){o=e(422),u.rerender("3e9b604b",{render:o.render,staticRenderFns:o.staticRenderFns})})),c.options.__file="src/components/LabourStandardsAct.vue",n.default=c.exports},422:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("sui-header",{tag:"h2"},[t._v("勞ㄐ法")]),t._v(" "),e("sui-grid",{attrs:{celled:"internally"}},[e("sui-grid-row",[e("sui-grid-column",{attrs:{width:"four"}},[e("sui-header",{tag:"h3"},[t._v("目錄")]),t._v(" "),e("div",{attrs:{id:"articleMenu"}},[e("sui-menu",{attrs:{secondary:"",vertical:"",fluid:""}},t._l(t.actData,function(n){return e("sui-menu-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#section-"+n.article,expression:"`#section-${articleItem.article}`"}],attrs:{link:""},on:{click:function(e){t.onArticleMenuClick(n.article)}}},[t._v("\n\t\t\t\t\t\t\t\t§ "+t._s(n.article)+"\n\t\t\t\t\t\t\t\t"),e("div",{staticClass:"itemDesc"},[t._v(t._s(n.content))])])}))],1)]),t._v(" "),e("sui-grid-column",{attrs:{width:"twelve"}},t._l(t.actData,function(n){return e("section",{class:{article:!0,active:t.isActiveArticle(n.article)},attrs:{id:"section-"+n.article}},[e("sui-header",{tag:"h3"},[t._v("第 "+t._s(n.article)+" 條")]),t._v(" "),e("p",[t._v(t._s(n.content))])])}))],1)],1)],1)},r=[];o._withStripped=!0,e.d(n,"render",function(){return o}),e.d(n,"staticRenderFns",function(){return r})},471:function(t,n,e){(t.exports=e(71)(!1)).push([t.i,"\n@keyframes blink-data-v-3e9b604b {\n0% {\n\t\tbackground-color: transparent\n}\n20% {\n\t\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n80% {\n\t\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n100% {\n\t\tbackground-color: transparent\n}\n}\nsection.article[data-v-3e9b604b] {\n\tmargin-bottom: 2em;\n\tpadding: 0.8em 1em;\n\tborder-radius: 5px;\n}\nsection.article.active[data-v-3e9b604b] {\n\tanimation-name: blink-data-v-3e9b604b;\n\tanimation-iteration-count: 1;\n\tanimation-timing-function: cubic-bezier(0,.41,1,.59);\n\tanimation-duration: 0.6s;\n}\nsection.article > p[data-v-3e9b604b] {\n\twhite-space: pre-wrap;\n\tline-height: 1.7em;\n}\n#articleMenu[data-v-3e9b604b] {\n\tposition: sticky;\n\ttop: -1px;\n}\n#articleMenu .itemDesc[data-v-3e9b604b] {\n\tdisplay: block;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tmargin-top: 5px;\n\n\tfont-size: 95%;\n\tcolor: #9c9c9c;\n}\n",""])},472:function(t,n,e){var o=e(471);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=e(70)(o,r);o.locals&&(t.exports=o.locals),t.hot.accept(471,function(){var n=e(471);if("string"==typeof n&&(n=[[t.i,n,""]]),!function(t,n){var e,o=0;for(e in t){if(!n||t[e]!==n[e])return!1;o++}for(e in n)o--;return 0===o}(o.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),t.hot.dispose(function(){i()})},473:function(t,n,e){t.exports=function(){"use strict";var t=4,n=.001,e=1e-7,o=10,r=11,i=1/(r-1),a="function"==typeof Float32Array;function c(t,n){return 1-3*n+3*t}function u(t,n){return 3*n-6*t}function l(t){return 3*t}function s(t,n,e){return((c(n,e)*t+u(n,e))*t+l(n))*t}function f(t,n,e){return 3*c(n,e)*t*t+2*u(n,e)*t+l(n)}var d=function(c,u,l,d){if(!(0<=c&&c<=1&&0<=l&&l<=1))throw new Error("bezier x values must be in [0, 1] range");var v=a?new Float32Array(r):new Array(r);if(c!==u||l!==d)for(var p=0;p<r;++p)v[p]=s(p*i,c,l);function b(a){for(var u=0,d=1,p=r-1;d!==p&&v[d]<=a;++d)u+=i;var b=(a-v[--d])/(v[d+1]-v[d]),m=u+b*i,h=f(m,c,l);return h>=n?function(n,e,o,r){for(var i=0;i<t;++i){var a=f(e,o,r);if(0===a)return e;var c=s(e,o,r)-n;e-=c/a}return e}(a,m,c,l):0===h?m:function(t,n,r,i,a){var c,u,l=0;do{(c=s(u=n+(r-n)/2,i,a)-t)>0?r=u:n=u}while(Math.abs(c)>e&&++l<o);return u}(a,u,u+i,c,l)}return function(t){return c===u&&l===d?t:0===t?0:1===t?1:s(b(t),u,d)}},v={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},p=!1;try{var b=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,b)}catch(t){}var m={$:function(t){return"string"!=typeof t?t:document.querySelector(t)},on:function(t,n,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};n instanceof Array||(n=[n]);for(var r=0;r<n.length;r++)t.addEventListener(n[r],e,!!p&&o)},off:function(t,n,e){n instanceof Array||(n=[n]);for(var o=0;o<n.length;o++)t.removeEventListener(n[o],e)},cumulativeOffset:function(t){var n=0,e=0;do{n+=t.offsetTop||0,e+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:n,left:e}}},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},w=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],g={container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function _(t){g=y({},g,t)}var A=function(){var t=void 0,n=void 0,e=void 0,o=void 0,r=void 0,i=void 0,a=void 0,c=void 0,u=void 0,l=void 0,s=void 0,f=void 0,p=void 0,b=void 0,y=void 0,_=void 0,A=void 0,k=void 0,S=void 0,x=function(t){i&&(S=t,k=!0)},L=void 0,M=void 0,T=void 0,D=void 0;function O(t){if(k)return C();M||(M=t),T=t-M,D=Math.min(T/e,1),D=L(D),E(n,b+A*D,f+_*D),T<e?window.requestAnimationFrame(O):C()}function C(){k||E(n,y,p),M=!1,m.off(n,w,x),k&&u&&u(S,t),!k&&c&&c(t)}function E(t,n,e){s&&(t.scrollTop=n),l&&(t.scrollLeft=e),"body"===t.tagName.toLowerCase()&&(s&&(document.documentElement.scrollTop=n),l&&(document.documentElement.scrollLeft=e))}return function(M,T){var D=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===T?"undefined":h(T))?D=T:"number"==typeof T&&(D.duration=T),!(t=m.$(M)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+M);n=m.$(D.container||g.container),e=D.duration||g.duration,o=D.easing||g.easing,r=D.offset||g.offset,i=D.hasOwnProperty("cancelable")?!1!==D.cancelable:g.cancelable,a=D.onStart||g.onStart,c=D.onDone||g.onDone,u=D.onCancel||g.onCancel,l=void 0===D.x?g.x:D.x,s=void 0===D.y?g.y:D.y;var C=m.cumulativeOffset(n),E=m.cumulativeOffset(t);return"function"==typeof r&&(r=r()),b=function(t){var n=t.scrollTop;return"body"===t.tagName.toLowerCase()&&(n=n||document.documentElement.scrollTop),n}(n),y=E.top-C.top+r,f=function(t){var n=t.scrollLeft;return"body"===t.tagName.toLowerCase()&&(n=n||document.documentElement.scrollLeft),n}(n),p=E.left-C.left+r,k=!1,A=y-b,_=p-f,"string"==typeof o&&(o=v[o]||v.ease),L=d.apply(d,o),A||_?(a&&a(t),m.on(n,w,x,{passive:!0}),window.requestAnimationFrame(O),function(){S=null,k=!0}):void 0}}(),k=[];function S(t){var n=function(t){for(var n=0;n<k.length;++n)if(k[n].el===t)return k[n]}(t);return n||(k.push(n={el:t,binding:{}}),n)}function x(t){t.preventDefault();var n=S(this).binding;if("string"==typeof n.value)return A(n.value);A(n.value.el||n.value.element,n.value)}var L={bind:function(t,n){S(t).binding=n,m.on(t,"click",x)},unbind:function(t){!function(t){for(var n=0;n<k.length;++n)if(k[n].el===t)return k.splice(n,1),!0}(t),m.off(t,"click",x)},update:function(t,n){S(t).binding=n},scrollTo:A,bindings:k},M=function(t,n){n&&_(n),t.directive("scroll-to",L),t.prototype.$scrollTo=L.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=L,window.VueScrollTo.setDefaults=_,Vue.use(M)),L.install=M,L}()},474:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(e(14)),r=a(e(473)),i=a(e(498));function a(t){return t&&t.__esModule?t:{default:t}}o.default.use(r.default,{offset:-10}),n.default={data:function(){return{activeArticle:null}},computed:{actData:function(){return i.default}},methods:{isActiveArticle:function(t){return this.activeArticle===t},onArticleMenuClick:function(t){var n=this;this.activeArticle=null,setTimeout(function(){n.activeArticle=t},100)}}}},475:function(t,n,e){"use strict";e.r(n);var o=e(474),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n.default=r.a},497:function(t,n,e){"use strict";var o=e(472);e.n(o).a},498:function(t){t.exports=[{article:5,content:"本法之法條若有兩種以上的處罰方式，由勞檢單位決定適用何者。"},{article:6,content:"事業單位違法本法者，勞檢單位應以初犯或累犯、違反規定情節輕重作為處罰標準。"},{article:21,content:"工資由勞雇雙方議定之，但不得低於基本工資時薪十貝殼幣。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:25,content:"雇主對勞工不得因種族、宗教、年齡之因素而有差別之待遇。工作相同、效率相同者，給付同等之工資。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:26,content:"雇主不得任意降低勞工之工資，降低勞工工資者，應於兩週前主動告知勞工檢查機構說明事由並取得核准。雇主經勞工個人同意者不在此限。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:30,content:"勞工正常工作時間，每日不得超過八小時，每週不得超過四十小時（星期日到星期六）。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:32,content:"雇主經勞工個人同意者，得將工作時間延長，一天不可超過四小時，一週不可超過八小時（星期日到星期六）。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:36,content:"勞工從每週（星期日到星期六）應有兩日之休息。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:37,content:"凡屬中央主管機關指定之應放假日，均應休假。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:72,content:"雇主不得因勞工向勞動檢查單位提出申訴處以不利之處分。\n違者處貝殼幣一千二百元以上一千八百元以下罰鍰，或強迫為所有員工加薪一至二元。"},{article:86,content:"勞工分娩前後，應停止工作，給予產假一星期。\n違者處貝殼幣三千元以上九千元以下罰鍰。"}]}}]);