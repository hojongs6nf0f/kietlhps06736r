(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-index"],{"24e0":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"EXPRESS",name:"快递配送",value:10}]);t.default=o},"3a11":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DeliveryStatusEnum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"DeliveryTypeEnum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"OrderSourceEnum",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"OrderStatusEnum",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"PayStatusEnum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"PayTypeEnum",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ReceiptStatusEnum",{enumerable:!0,get:function(){return c.default}});var i=n(a("c21f")),o=n(a("24e0")),r=n(a("e985")),s=n(a("9dc9")),u=n(a("b0db")),d=n(a("e685")),c=n(a("d223"))},"3dd3":function(e,t,a){var n=a("4746");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("6f6d0608",n,!0,{sourceMap:!1,shadowMode:!1})},"43dc":function(e,t,a){"use strict";var n=a("4ea4");a("c975"),a("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("d4ec")),o=n(a("bee2")),r=function(){function e(t){var a=this;(0,i.default)(this,e);var n=[],o=[];if(!Array.isArray(t))throw new Error("param is not an array!");t.map((function(e){e.key&&e.name&&(n.push(e.key),o.push(e.value),a[e.key]=e,e.key!==e.value&&(a[e.value]=e))})),this.data=t,this.keyArr=n,this.valueArr=o}return(0,o.default)(e,[{key:"keyOf",value:function(e){return this.data[this.keyArr.indexOf(e)]}},{key:"valueOf",value:function(e){return this.data[this.valueArr.indexOf(e)]}},{key:"getNameByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getNameByValue",value:function(e){var t=this.valueOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getValueByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.key}},{key:"getData",value:function(){return this.data}}]),e}(),s=r;t.default=s},4746:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.order-item[data-v-73ced01c]{margin:%?20?% auto %?20?% auto;padding:%?30?% %?30?%;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);border-radius:%?16?%;background:#fff}.item-top[data-v-73ced01c]{display:flex;justify-content:space-between;font-size:%?26?%;margin-bottom:%?40?%}.item-top .order-time[data-v-73ced01c]{color:#777}.item-top .state-text[data-v-73ced01c]{color:#fa2209}.goods-list .goods-item[data-v-73ced01c]{display:flex;margin-bottom:%?40?%}.goods-list .goods-item .goods-image[data-v-73ced01c]{width:%?180?%;height:%?180?%}.goods-list .goods-item .goods-image .image[data-v-73ced01c]{display:block;width:100%;height:100%;border-radius:%?8?%}.goods-list .goods-item .goods-content[data-v-73ced01c]{flex:1;padding-left:%?16?%;padding-top:%?16?%}.goods-list .goods-item .goods-content .goods-title[data-v-73ced01c]{font-size:%?26?%;max-height:%?76?%}.goods-list .goods-item .goods-content .goods-props[data-v-73ced01c]{margin-top:%?14?%;height:%?40?%;color:#ababab;font-size:%?24?%;overflow:hidden}.goods-list .goods-item .goods-content .goods-props .goods-props-item[data-v-73ced01c]{display:inline-block;margin-right:%?14?%;padding:%?4?% %?16?%;border-radius:%?12?%;background-color:#f5f5f5;width:auto}.goods-list .goods-item .goods-trade[data-v-73ced01c]{padding-top:%?16?%;width:%?150?%;text-align:right;color:#999;font-size:%?26?%}.goods-list .goods-item .goods-trade .goods-price[data-v-73ced01c]{vertical-align:bottom;margin-bottom:%?16?%}.goods-list .goods-item .goods-trade .goods-price .unit[data-v-73ced01c]{margin-right:%?-2?%;font-size:%?24?%}.order-total[data-v-73ced01c]{font-size:%?26?%;vertical-align:bottom;text-align:right;height:%?40?%;margin-bottom:%?30?%}.order-total .unit[data-v-73ced01c]{margin-left:%?8?%;margin-right:%?-2?%;font-size:%?26?%}.order-total .money[data-v-73ced01c]{font-size:%?28?%}.order-handle .btn-group .btn-item[data-v-73ced01c]{border-radius:%?10?%;padding:%?6?% %?20?%;font-size:%?28?%;float:right;color:#383838;border:%?1?% solid #a8a8a8}.order-handle .btn-group .btn-item.active[data-v-73ced01c]{color:#fa2209;border:%?1?% solid #fa2209}.pay-popup[data-v-73ced01c]{padding:%?24?%}.pay-popup .title[data-v-73ced01c]{font-size:%?30?%;margin-bottom:%?40?%;font-weight:700;text-align:center}.pay-popup .pop-content[data-v-73ced01c]{min-height:%?260?%;padding:0 %?10?%}.pay-popup .pop-content .pay-item[data-v-73ced01c]{padding:%?24?% %?35?%;font-size:%?28?%;border-bottom:%?1?% solid #f1f1f1}.pay-popup .pop-content .pay-item[data-v-73ced01c]:last-child{border-bottom:none}.pay-popup .pop-content .pay-item .item-left_icon[data-v-73ced01c]{margin-right:%?20?%;font-size:%?32?%}.pay-popup .pop-content .pay-item .item-left_icon.wechat[data-v-73ced01c]{color:#00c800}.pay-popup .pop-content .pay-item .item-left_icon.balance[data-v-73ced01c]{color:#ff9700}',""]),e.exports=t},"4aeb":function(e,t,a){"use strict";a.r(t);var n=a("7435"),i=a("d343");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("b83f");var r,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"73ced01c",null,!1,n["a"],r);t["default"]=u.exports},5933:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.todoCounts=s,t.list=u,t.detail=d,t.express=c,t.cancel=l,t.receipt=v,t.pay=f;var i=n(a("5530")),o=n(a("c05a")),r={todoCounts:"order/todoCounts",list:"order/list",detail:"order/detail",express:"order/express",cancel:"order/cancel",receipt:"order/receipt",pay:"order/pay"};function s(e,t){return o.default.get(r.todoCounts,e,t)}function u(e,t){return o.default.get(r.list,e,t)}function d(e,t){return o.default.get(r.detail,(0,i.default)({orderId:e},t))}function c(e,t){return o.default.get(r.express,(0,i.default)({orderId:e},t))}function l(e,t){return o.default.post(r.cancel,(0,i.default)({orderId:e},t))}function v(e,t){return o.default.post(r.receipt,(0,i.default)({orderId:e},t))}function f(e,t,a){return o.default.get(r.pay,(0,i.default)({orderId:e,payType:t},a))}},7435:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uTabs:a("30e0").default,uPopup:a("43de").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("mescroll-body",{ref:"mescrollRef",attrs:{sticky:!0,down:{native:!0},up:e.upOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[a("u-tabs",{attrs:{list:e.tabs,"is-scroll":!1,current:e.curTab,"active-color":"#FA2209",duration:.2},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChangeTab.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"order-list"},e._l(e.list.data,(function(t,n){return a("v-uni-view",{key:n,staticClass:"order-item"},[a("v-uni-view",{staticClass:"item-top"},[a("v-uni-view",{staticClass:"item-top-left"},[a("v-uni-text",{staticClass:"order-time"},[e._v(e._s(t.create_time))])],1),a("v-uni-view",{staticClass:"item-top-right"},[a("v-uni-text",{staticClass:"state-text"},[e._v(e._s(t.state_text))])],1)],1),a("v-uni-view",{staticClass:"goods-list",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleTargetDetail(t.order_id)}}},e._l(t.goods,(function(t,n){return a("v-uni-view",{key:n,staticClass:"goods-item"},[a("v-uni-view",{staticClass:"goods-image"},[a("v-uni-image",{staticClass:"image",attrs:{src:t.goods_image,mode:"scaleToFill"}})],1),a("v-uni-view",{staticClass:"goods-content"},[a("v-uni-view",{staticClass:"goods-title"},[a("v-uni-text",{staticClass:"twoline-hide"},[e._v(e._s(t.goods_name))])],1),a("v-uni-view",{staticClass:"goods-props clearfix"},e._l(t.goods_props,(function(t,n){return a("v-uni-view",{key:n,staticClass:"goods-props-item"},[a("v-uni-text",[e._v(e._s(t.value.name))])],1)})),1)],1),a("v-uni-view",{staticClass:"goods-trade"},[a("v-uni-view",{staticClass:"goods-price"},[a("v-uni-text",{staticClass:"unit"},[e._v("￥")]),a("v-uni-text",{staticClass:"value"},[e._v(e._s(t.is_user_grade?t.grade_goods_price:t.goods_price))])],1),a("v-uni-view",{staticClass:"goods-num"},[a("v-uni-text",[e._v("×"+e._s(t.total_num))])],1)],1)],1)})),1),a("v-uni-view",{staticClass:"order-total"},[a("v-uni-text",[e._v("共"+e._s(t.total_num)+"件商品，总金额")]),a("v-uni-text",{staticClass:"unit"},[e._v("￥")]),a("v-uni-text",{staticClass:"money"},[e._v(e._s(t.pay_price))])],1),t.order_status!=e.OrderStatusEnum.CANCELLED.value?a("v-uni-view",{staticClass:"order-handle"},[a("v-uni-view",{staticClass:"btn-group clearfix"},[t.pay_status==e.PayStatusEnum.PENDING.value?[a("v-uni-view",{staticClass:"btn-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onCancel(t.order_id)}}},[e._v("取消")])]:e._e(),t.order_status!=e.OrderStatusEnum.APPLY_CANCEL.value?[t.pay_status==e.PayStatusEnum.SUCCESS.value&&t.delivery_status==e.DeliveryStatusEnum.NOT_DELIVERED.value?[a("v-uni-view",{staticClass:"btn-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onCancel(t.order_id)}}},[e._v("申请取消")])]:e._e()]:a("v-uni-view",{staticClass:"f-28 col-8"},[e._v("取消申请中")]),t.pay_status==e.PayStatusEnum.PENDING.value?[a("v-uni-view",{staticClass:"btn-item active",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onPay(t.order_id)}}},[e._v("去支付")])]:e._e(),t.delivery_status==e.DeliveryStatusEnum.DELIVERED.value&&t.receipt_status==e.ReceiptStatusEnum.NOT_RECEIVED.value?[a("v-uni-view",{staticClass:"btn-item active",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onReceipt(t.order_id)}}},[e._v("确认收货")])]:e._e(),t.order_status==e.OrderStatusEnum.COMPLETED.value&&0==t.is_comment?[a("v-uni-view",{staticClass:"btn-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleTargetComment(t.order_id)}}},[e._v("评价")])]:e._e()],2)],1):e._e()],1)})),1)],1),a("u-popup",{attrs:{mode:"bottom","border-radius":"26",closeable:!0},model:{value:e.showPayPopup,callback:function(t){e.showPayPopup=t},expression:"showPayPopup"}},[a("v-uni-view",{staticClass:"pay-popup"},[a("v-uni-view",{staticClass:"title"},[e._v("请选择支付方式")]),a("v-uni-view",{staticClass:"pop-content"},[a("v-uni-view",{staticClass:"pay-item dis-flex flex-x-between",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelectPayType(e.PayTypeEnum.BALANCE.value)}}},[a("v-uni-view",{staticClass:"item-left dis-flex flex-y-center"},[a("v-uni-view",{staticClass:"item-left_icon balance"},[a("v-uni-text",{staticClass:"iconfont icon-qiandai"})],1),a("v-uni-view",{staticClass:"item-left_text"},[a("v-uni-text",[e._v(e._s(e.PayTypeEnum.BALANCE.name))])],1)],1)],1)],1)],1)],1)],1)},o=[]},"9dc9":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"NORMAL",name:"进行中",value:10},{key:"CANCELLED",name:"已取消",value:20},{key:"APPLY_CANCEL",name:"待取消",value:21},{key:"COMPLETED",name:"已完成",value:30}]);t.default=o},b0db:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"PENDING",name:"待支付",value:10},{key:"SUCCESS",name:"已支付",value:20}]);t.default=o},b83f:function(e,t,a){"use strict";var n=a("3dd3"),i=a.n(n);i.a},c21f:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"NOT_DELIVERED",name:"未发货",value:10},{key:"DELIVERED",name:"已发货",value:20}]);t.default=o},d223:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"NOT_RECEIVED",name:"未收货",value:10},{key:"RECEIVED",name:"已收货",value:20}]);t.default=o},d343:function(e,t,a){"use strict";a.r(t);var n=a("ee4d"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},e685:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"BALANCE",name:"余额支付",value:10},{key:"WECHAT",name:"微信支付",value:20}]);t.default=o},e985:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("43dc")),o=new i.default([{key:"MASTER",name:"普通订单",value:10},{key:"BARGAIN",name:"砍价订单",value:20},{key:"SHARP",name:"秒杀订单",value:30}]);t.default=o},ee4d:function(e,t,a){"use strict";var n=a("dbce"),i=a("4ea4");a("c740"),a("4160"),a("d3b7"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("3a11"),r=i(a("cf12")),s=i(a("88b5")),u=a("c824"),d=n(a("5933")),c=15,l=[{name:"全部",value:"all"},{name:"待支付",value:"payment"},{name:"待发货",value:"delivery"},{name:"待收货",value:"received"},{name:"待评价",value:"comment"}],v={components:{MescrollBody:r.default},mixins:[s.default],data:function(){return{DeliveryStatusEnum:o.DeliveryStatusEnum,DeliveryTypeEnum:o.DeliveryTypeEnum,OrderStatusEnum:o.OrderStatusEnum,PayStatusEnum:o.PayStatusEnum,PayTypeEnum:o.PayTypeEnum,ReceiptStatusEnum:o.ReceiptStatusEnum,options:{dataType:"all"},tabs:l,curTab:0,list:(0,u.getEmptyPaginateObj)(),upOption:{auto:!0,page:{size:c},noMoreSize:4,empty:{tip:"亲，暂无订单记录"}},canReset:!1,showPayPopup:!1}},onLoad:function(e){this.initCurTab(e)},onShow:function(){this.canReset&&this.onRefreshList(),this.canReset=!0},methods:{initCurTab:function(e){var t=this;if(e.dataType){var a=t.tabs.findIndex((function(t){return t.value==e.dataType}));t.curTab=a>-1?a:0}},upCallback:function(e){var t=this;t.getOrderList(e.num).then((function(e){var a=e.data.length,n=e.data.total;t.mescroll.endBySize(a,n)})).catch((function(){return t.mescroll.endErr()}))},getOrderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this;return new Promise((function(a,n){d.list({dataType:t.getTabValue(),page:e},{load:!1}).then((function(n){var i=t.initList(n.data.list);t.list.data=(0,u.getMoreListData)(i,t.list,e),a(i)}))}))},initList:function(e){return e.data.forEach((function(e){e.total_num=0,e.goods.forEach((function(t){e.total_num+=t.total_num}))})),e},getTabValue:function(){return this.tabs[this.curTab].value},onChangeTab:function(e){var t=this;t.curTab=e,t.onRefreshList()},onRefreshList:function(){var e=this;this.list=(0,u.getEmptyPaginateObj)(),setTimeout((function(){e.mescroll.resetUpScroll()}),120)},onCancel:function(e){var t=this;uni.showModal({title:"友情提示",content:"确认要取消该订单吗？",success:function(a){a.confirm&&d.cancel(e).then((function(e){t.$toast(e.message),t.onRefreshList()}))}})},onReceipt:function(e){var t=this;uni.showModal({title:"友情提示",content:"确认收到商品了吗？",success:function(a){a.confirm&&d.receipt(e).then((function(e){t.$success(e.message),t.onRefreshList()}))}})},onPay:function(e){this.payOrderId=e,this.showPayPopup=!0},onSelectPayType:function(e){var t=this;this.showPayPopup=!1,d.pay(t.payOrderId,e).then((function(e){return t.onSubmitCallback(e)}))},onSubmitCallback:function(e){var t=this;e.data.pay_type==o.PayTypeEnum.WECHAT.value&&(0,u.wxPayment)(e.data.payment).then((function(){t.$success("支付成功"),setTimeout((function(){t.onRefreshList()}),1500)})).catch((function(e){t.$error("订单未支付")})).finally((function(){t.disabled=!1})),e.data.pay_type==o.PayTypeEnum.BALANCE.value&&(t.$success("支付成功"),t.disabled=!1,setTimeout((function(){t.onRefreshList()}),1500))},handleTargetDetail:function(e){this.$navTo("pages/order/detail",{orderId:e})},handleTargetComment:function(e){this.$navTo("pages/order/comment/index",{orderId:e})}}};t.default=v}}]);