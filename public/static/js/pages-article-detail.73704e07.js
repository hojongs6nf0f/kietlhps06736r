(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-detail"],{"0304":function(t,e,i){"use strict";var n=i("dbce"),a=i("4ea4");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("21ed"));var r=a(i("e4df")),s=n(i("21ec")),c={components:{Shortcut:r.default},data:function(){return{articleId:null,isLoading:!0,detail:null}},onLoad:function(t){this.articleId=t.articleId,this.getArticleDetail()},methods:{getArticleDetail:function(){var t=this;t.isLoading=!0,s.detail(t.articleId).then((function(e){t.detail=e.data.detail})).finally((function(){return t.isLoading=!1}))}}};e.default=c},"085f":function(t,e,i){"use strict";i.r(e);var n=i("77d6"),a=i("f28b");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("1efa");var s,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"28ef9cf1",null,!1,n["a"],s);e["default"]=l.exports},"1efa":function(t,e,i){"use strict";var n=i("74a8"),a=i.n(n);a.a},"21ec":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.list=s,e.detail=c;var a=n(i("2827")),r={list:"article/list",detail:"article/detail"};function s(t,e){return a.default.get(r.list,t,e)}function c(t){return a.default.get(r.detail,{articleId:t})}},"6cea":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-28ef9cf1]{min-height:100vh;padding:%?20?%;background:#fff}.article-content[data-v-28ef9cf1]{font-size:%?28?%}',""]),t.exports=e},"74a8":function(t,e,i){var n=i("6cea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("82e8c788",n,!0,{sourceMap:!1,shadowMode:!1})},"77d6":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={jyfParser:i("21ed").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isLoading?t._e():i("v-uni-view",{staticClass:"container b-f p-b"},[i("v-uni-view",{staticClass:"article-title"},[i("v-uni-text",{staticClass:"f-32"},[t._v(t._s(t.detail.title))])],1),i("v-uni-view",{staticClass:"article-little dis-flex flex-x-between m-top10"},[i("v-uni-view",{staticClass:"article-little__left"},[i("v-uni-text",{staticClass:"article-views f-24 col-8"},[t._v(t._s(t.detail.show_views)+"次浏览")])],1),i("v-uni-view",{staticClass:"article-little__right"},[i("v-uni-text",{staticClass:"article-views f-24 col-8"},[t._v(t._s(t.detail.view_time))])],1)],1),i("v-uni-view",{staticClass:"article-content m-top20"},[i("jyf-parser",{attrs:{html:t.detail.content}})],1),i("shortcut")],1)},r=[]},f28b:function(t,e,i){"use strict";i.r(e);var n=i("0304"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}}]);