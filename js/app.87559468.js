(function(e){function t(t){for(var a,r,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-150be608":"4aeb1d6e","chunk-6e21fe3b":"54561b43","chunk-aeb7d8a4":"e362eadc"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-150be608":1,"chunk-6e21fe3b":1,"chunk-aeb7d8a4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-150be608":"fa9fb2bb","chunk-6e21fe3b":"b4e2b6ed","chunk-aeb7d8a4":"43e70483"}[e]+".css",i=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],d=c.getAttribute("data-href");if(d===a||d===i)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],l.parentNode.removeChild(l),n(o)},l.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var f=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-multiple-tabs/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ea":function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var a={storeName:"tab-view-router-list",dynamicName:"dynamic-router-list"};t["a"]={GoodDetail:function(){return n.e("chunk-6e21fe3b").then(n.bind(null,"aac6"))}}},3927:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=n("ed08"),s={name:"app",data:function(){return{}},beforeCreate:function(){var e=this;o["a"].refreshRouterSync(this),setTimeout((function(){e.$store.commit("setOpenedList")}),0)}},u=s,c=(n("5c0b"),n("2877")),d=Object(c["a"])(u,r,i,!1,null,null,null),f=d.exports,l=(n("7f7f"),n("8c4f")),m=n("c0d6"),p={addOpendPage:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=m["a"].state.pageOpendList,s=o.length,u=0,c=!1;if(s>0)for(;u<s;u++)if(t===o[u].name){e.$store.commit("setPageOpendList",{index:u,params:n,query:a,meta:r}),c=!0;break}if(!c&&t){var d={name:t};if(n&&(d.params=n),a&&(d.query=a),r&&r.isTabView)d.meta=r;else if(r&&!r.isTabView)return;i&&(d.path=i),m["a"].commit("increateTag",d)}}},h=n("d046");a["default"].use(l["a"]);var v=new l["a"]({mode:"hash",routes:h["a"]});v.beforeEach((function(e,t,n){n()})),v.afterEach((function(e,t,n){p.addOpendPage(v.app,e.name,e.params,e.query,e.meta,e.path)}));var b=v,g=n("5c96"),y=n.n(g);n("0fae");a["default"].use(y.a);(function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?417e3468daf68dcfa33329790b8f8fbf";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})(),new a["default"]({router:b,store:m["a"],render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),r=n.n(a);r.a},7047:function(e,t,n){},7782:function(e,t,n){"use strict";var a=n("7047"),r=n.n(a);r.a},"8ad3":function(e,t,n){"use strict";var a=n("c310"),r=n.n(a);r.a},a006:function(e,t,n){"use strict";var a=n("e907"),r=n.n(a);r.a},c0d6:function(e,t,n){"use strict";n("7f7f");var a=n("a026"),r=n("2f62"),i=n("01ea");a["default"].use(r["a"]);var o=i["b"].storeName,s={pageOpendList:[{path:"/dashboard",name:"dashboard_index",component:function(){return n.e("chunk-aeb7d8a4").then(n.bind(null,"dd7a"))},meta:{title:"首页",isTabView:!0}}]},u={setOpenedList:function(e){var t=sessionStorage[o]&&JSON.parse(sessionStorage[o]).length>0;t&&(e.pageOpendList=JSON.parse(sessionStorage[o]))},setPageOpendList:function(e,t){var n=t.index,a=t.query,r=t.params,i=t.meta,s=t.path,u=e.pageOpendList[n];r&&(u.params=r),a&&(u.query=a),i&&(u.meta=i),s&&(u.path=s),e.pageOpendList.splice(n,1,u),sessionStorage[o]=JSON.stringify(e.pageOpendList)},increateTag:function(e,t){e.pageOpendList.push(t)},closeOpendList:function(e,t){var n=e.pageOpendList;if("dashboard_index"!==t.name)for(var a=0;a<n.length;a++)if(n[a].name===t.name){var r=e.pageOpendList[a-1].name;e.pageOpendList.splice(a,1),sessionStorage.setItem(o,JSON.stringify(e.pageOpendList)),t.vm.$router.push({name:r})}}},c=new r["a"].Store({state:s,mutations:u});t["a"]=c},c310:function(e,t,n){},cd56:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrapper"},[n("header-area"),n("aside-area"),n("div",{staticClass:"main-container"},[n("tab-view"),n("router-view")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[e._v("\n  Vue项目多tab标签实战\n  "),n("a",{attrs:{href:"https://github.com/BiYuqi/vue-multiple-tabs",target:"_blank"}},[e._v("@author")])])}],s=(n("d2be"),n("2877")),u={},c=Object(s["a"])(u,i,o,!1,null,"4385b2b9",null),d=c.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aside-container"},[n("div",{staticClass:"aside-container__text"},[e._v("侧边栏")])])}],m=(n("7782"),{}),p=Object(s["a"])(m,f,l,!1,null,"f9d1e9e2",null),h=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-view-wrap"},e._l(e.tagList,(function(t){return n("el-tag",{key:t.id,staticClass:"tag-view",class:{active:t.name===e.$route.name},attrs:{closable:"dashboard_index"!==t.name},on:{close:function(n){return e.close(t.name)}},nativeOn:{click:function(n){return e.jump(t)}}},[e._v("\n    "+e._s(t.meta.title)+"\n  ")])})),1)},b=[],g=(n("7f7f"),n("ed08")),y={computed:{tagList:function(){return this.$store.state.pageOpendList}},methods:{jump:function(e){var t=e.params,n=e.query;t?this.$router.push({name:e.name,params:t}):n?this.$router.push({name:e.name,query:n}):n&&t?this.$router.push({name:e.name,params:t,query:n}):this.$router.push({name:e.name})},close:function(e){g["a"].removeRouter(this,e)}}},O=y,_=(n("8ad3"),Object(s["a"])(O,v,b,!1,null,null,null)),w=_.exports,S={data:function(){return{}},components:{HeaderArea:d,AsideArea:h,TabView:w}},k=S,L=(n("a006"),Object(s["a"])(k,a,r,!1,null,null,null));t["default"]=L.exports},d046:function(e,t,n){"use strict";t["a"]=[{path:"/",name:"home_index",component:function(){return Promise.resolve().then(n.bind(null,"cd56"))},redirect:"/dashboard",children:[{path:"dashboard",name:"dashboard_index",component:function(){return n.e("chunk-aeb7d8a4").then(n.bind(null,"dd7a"))},meta:{isTabView:!0,title:"首页"}},{path:"docs",name:"docs_index",component:function(){return n.e("chunk-150be608").then(n.bind(null,"52bc"))},meta:{isTabView:!0,title:"文档使用"}}]}]},d2be:function(e,t,n){"use strict";var a=n("3927"),r=n.n(a);r.a},e332:function(e,t,n){},e907:function(e,t,n){},ed08:function(e,t,n){"use strict";var a=n("75fc"),r=n("8c4f"),i=n("d046"),o=function(e){var t=Object(a["a"])(i["a"]),n=new r["a"]({mode:"hash",routes:t});e.$router.matcher=n.matcher},s=(n("7f7f"),n("01ea")),u=function(e){var t=s["b"].dynamicName,n=sessionStorage.getItem(t)&&JSON.parse(sessionStorage.getItem(t));if(n&&n.length>0)for(var a=0;a<n.length;a++)if(n[a].name===e){n.splice(a,1),sessionStorage.setItem(t,JSON.stringify(n));break}},c=n("cd56"),d=s["b"].dynamicName,f=function(e){var t=sessionStorage.getItem(d)&&JSON.parse(sessionStorage.getItem(d))||[],n=[],a={path:"/",name:d,component:c["default"],children:[]};if(t.length>0){for(var r=0;r<t.length;r++){var i=t[r].meta.component,o=i.substring(i.lastIndexOf("/")+1,i.lastIndexOf("."));t[r].component=s["a"][o],a.children.push(t[r])}n.push(a),e.$router.addRoutes(n)}},l=n("c0d6");function m(e,t){u(t),o(e),f(e),l["a"].commit("closeOpendList",{vm:e,name:t})}var p=s["b"].dynamicName,h=function(e){var t=e.vm,n=e.com,a=e.name,r=e.params,i=e.query,o=e.component,s={name:a,path:"/"+a,component:o,meta:{component:n,title:a,isTabView:!0,params:r,query:i}},u=!1,d=[],f={path:"/",name:p,component:c["default"],children:[]},l=sessionStorage.getItem(p)&&JSON.parse(sessionStorage.getItem(p))||[];if(l.length>0)for(var m=l.length,h=0;h<m;h++)if(l[h].name===a){u=!0;break}u||(f.children.push(s),d.push(f),l.push(s),sessionStorage.setItem(p,JSON.stringify(l)),t.$router.addRoutes(d)),t.$router.push({name:a,params:r,query:i})},v=function(e){var t={vm:e.vm,component:s["a"][e.component],com:e.com,name:e.name,params:e.params,query:e.query};h(t)};t["a"]={removeRouter:m,insertRouter:v,refreshRouterSync:f}}});