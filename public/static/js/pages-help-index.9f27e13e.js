(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-index"],{"174b":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("mescroll-body",{ref:"mescrollRef",attrs:{sticky:!0,down:{use:!1},up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},t._l(t.list.data,(function(n,r){return e("v-uni-view",{key:r,staticClass:"help cont-box b-f"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v(t._s(n.title))])],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-text",[t._v(t._s(n.content))])],1)],1)})),1)],1)},a=[]},"22b6":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.help[data-v-d95477a8]{border-bottom:%?1?% solid #f6f6f9}.help .title[data-v-d95477a8]{font-size:%?32?%;color:#333;margin-bottom:%?10?%}.help .content[data-v-d95477a8]{font-size:%?26?%;color:#666}',""]),t.exports=n},2345:function(t,n,e){"use strict";var r=e("9d92"),i=e.n(r);i.a},3959:function(t,n,e){"use strict";e.r(n);var r=e("bf4f"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"9d92":function(t,n,e){var r=e("22b6");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("c822de72",r,!0,{sourceMap:!1,shadowMode:!1})},a93c:function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.list=void 0;var i=r(e("86e5")),a={list:"help/list"},o=function(t){return i.default.get(a.list,t)};n.list=o},be69:function(t,n,e){"use strict";e.r(n);var r=e("174b"),i=e("3959");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("2345");var o,s=e("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"d95477a8",null,!1,r["a"],o);n["default"]=u.exports},bf4f:function(t,n,e){"use strict";var r=e("dbce"),i=e("4ea4");e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("413a")),o=i(e("ff76")),s=r(e("a93c")),u=e("1b21"),c=15,l={components:{MescrollBody:a.default},mixins:[o.default],data:function(){return{list:(0,u.getEmptyPaginateObj)(),upOption:{auto:!0,page:{size:c},noMoreSize:12,empty:{tip:"亲，暂无相关数据"}}}},onLoad:function(t){},methods:{upCallback:function(t){var n=this;n.getHelpList(t.num).then((function(t){var e=t.data.length,r=t.data.total;n.mescroll.endBySize(e,r)})).catch((function(){return n.mescroll.endErr()}))},getHelpList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this;return new Promise((function(e,r){s.list({page:t}).then((function(r){var i=r.data.list;n.list.data=(0,u.getMoreListData)(i,n.list,t),e(i)}))}))}}};n.default=l}}]);