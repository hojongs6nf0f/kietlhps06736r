(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bind-index"],{"04a7":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.image=r,a.sendSmsCaptcha=o;var n=i(e("c05a")),s={image:"captcha/image",sendSmsCaptcha:"captcha/sendSmsCaptcha"};function r(){return n.default.get(s.image,{},{load:!1})}function o(t){return n.default.post(s.sendSmsCaptcha,t,{load:!1})}},"15f6":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.bindMobile=a.assets=a.info=void 0;var n=i(e("5530")),s=i(e("c05a")),r={userInfo:"user/info",assets:"user/assets",bindMobile:"user/bindMobile"},o=function(t,a){var e=(0,n.default)({isPrompt:!0,load:!0},a);return s.default.get(r.userInfo,t,e)};a.info=o;var c=function(t,a){return s.default.get(r.assets,t,a)};a.assets=c;var u=function(t,a){return s.default.post(r.bindMobile,t,a)};a.bindMobile=u},2613:function(t,a,e){"use strict";var i=e("dbce"),n=e("4ea4");e("a9e3"),e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n(e("bfc8"));var s=i(e("15f6")),r=i(e("04a7")),o=i(e("e4c6")),c=60,u=10,l=20,d={data:function(){return{isLoading:!1,captcha:{},smsState:!1,times:c,mobile:"",captchaCode:"",smsCode:""}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=this;r.image().then((function(a){return t.captcha=a.data}))},handelSmsCaptcha:function(){var t=this;t.isLoading||t.smsState||!t.formValidation(u)||(t.sendSmsCaptcha(),t.getCaptcha())},formValidation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=this;return!!(t!==u||a.validteMobile(a.mobile)&&a.validteCaptchaCode(a.captchaCode))&&!!(t!==l||a.validteMobile(a.mobile)&&a.validteSmsCode(a.smsCode))},validteMobile:function(t){return o.isEmpty(t)?(this.$toast("请先输入手机号"),!1):!!o.isMobile(t)||(this.$toast("请输入正确格式的手机号"),!1)},validteCaptchaCode:function(t){return!o.isEmpty(t)||(this.$toast("请先输入图形验证码"),!1)},validteSmsCode:function(t){return!o.isEmpty(t)||(this.$toast("请先输入短信验证码"),!1)},sendSmsCaptcha:function(){var t=this;t.isLoading=!0,r.sendSmsCaptcha({form:{captchaKey:t.captcha.key,captchaCode:t.captchaCode,mobile:t.mobile}}).then((function(a){t.$toast(a.message),t.timer()})).finally((function(){return t.isLoading=!1}))},timer:function(){var t=this;t.smsState=!0;var a=setInterval((function(){t.times=t.times-1,t.times<=0&&(t.smsState=!1,t.times=c,clearInterval(a))}),1e3)},handleSubmit:function(){var t=this;!t.isLoading&&t.formValidation(l)&&t.onSubmitEvent()},onSubmitEvent:function(){var t=this;t.isLoading=!0,s.bindMobile({form:{smsCode:t.smsCode,mobile:t.mobile}}).then((function(a){t.$toast(a.message),setTimeout((function(){t.onNavigateBack(1)}),2e3)})).finally((function(){return t.isLoading=!1}))},onNavigateBack:function(t){uni.navigateBack({delta:Number(t||1)})}}};a.default=d},"49f1":function(t,a,e){var i=e("c723");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4612374c",i,!0,{sourceMap:!1,shadowMode:!1})},"544a":function(t,a,e){"use strict";e.r(a);var i=e("8ee0"),n=e("d894");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("54ea");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"2a505886",null,!1,i["a"],r);a["default"]=c.exports},"54ea":function(t,a,e){"use strict";var i=e("49f1"),n=e.n(i);n.a},"8ee0":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("绑定您的手机号")])],1),e("v-uni-view",{staticClass:"sub-title"},[e("v-uni-text",[t._v("为了更好的服务您，请绑定手机号")])],1)],1),e("v-uni-view",{staticClass:"submit-form"},[e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号码"},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"form-item--input",attrs:{type:"text",maxlength:"5",placeholder:"请输入图形验证码"},model:{value:t.captchaCode,callback:function(a){t.captchaCode=a},expression:"captchaCode"}}),e("v-uni-view",{staticClass:"form-item--parts"},[e("v-uni-view",{staticClass:"captcha",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getCaptcha()}}},[e("v-uni-image",{staticClass:"image",attrs:{src:t.captcha.base64}})],1)],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",maxlength:"6",placeholder:"请输入短信验证码"},model:{value:t.smsCode,callback:function(a){t.smsCode=a},expression:"smsCode"}}),e("v-uni-view",{staticClass:"form-item--parts"},[e("v-uni-view",{staticClass:"captcha-sms",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handelSmsCaptcha()}}},[t.smsState?e("v-uni-text",{staticClass:"un-activate"},[t._v("重新发送("+t._s(t.times)+")秒")]):e("v-uni-text",{staticClass:"activate"},[t._v("获取验证码")])],1)],1)],1),e("v-uni-view",{staticClass:"submit-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleSubmit()}}},[e("v-uni-text",[t._v("确认绑定")])],1)],1)],1)},s=[]},c723:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-2a505886]{padding:%?100?% %?60?%;min-height:100vh;background-color:#fff}.header[data-v-2a505886]{margin-bottom:%?50?%}.header .title[data-v-2a505886]{color:#191919;font-size:%?50?%}.header .sub-title[data-v-2a505886]{margin-top:%?20?%;color:#b3b3b3;font-size:%?25?%}.form-item[data-v-2a505886]{display:flex;padding:%?18?%;border-bottom:%?1?% solid #f3f1f2;margin-bottom:%?25?%;height:%?96?%}.form-item--input[data-v-2a505886]{font-size:%?26?%;letter-spacing:%?1?%;flex:1;height:100%}.form-item--parts[data-v-2a505886]{min-width:%?100?%;height:100%}.form-item .captcha[data-v-2a505886]{height:100%}.form-item .captcha .image[data-v-2a505886]{display:block;width:%?192?%;height:100%}.form-item .captcha-sms[data-v-2a505886]{font-size:%?22?%;line-height:%?50?%;padding-right:%?20?%}.form-item .captcha-sms .activate[data-v-2a505886]{color:#cea26a}.form-item .captcha-sms .un-activate[data-v-2a505886]{color:#9e9e9e}.submit-button[data-v-2a505886]{width:100%;height:%?86?%;margin-top:%?70?%;background:linear-gradient(90deg,#ecb53c,#ff9211);text-align:center;line-height:%?86?%;color:#fff;border-radius:%?80?%;box-shadow:0 10px 20px 0 rgba(0,0,0,.1);letter-spacing:%?5?%}',""]),t.exports=a},d894:function(t,a,e){"use strict";e.r(a);var i=e("2613"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},e4c6:function(t,a,e){"use strict";e("ac1f"),e("466d"),e("498a"),Object.defineProperty(a,"__esModule",{value:!0}),a.isDouble=a.isInteger=a.isPositiveInteger=a.isNumber=a.isEmail=a.isMobile=a.isPhone=a.isEmpty=void 0;var i=function(t){return""==t.trim()};a.isEmpty=i;var n=function(t){var a=/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;return a.test(t)};a.isPhone=n;var s=function(t){var a=/^(1[3456789]\d{9})$/;return a.test(t)};a.isMobile=s;var r=function(t){if(null==t||""==t)return!1;var a=t.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);return null!=a};a.isEmail=r;var o=function(t){return!(!l(t)&&!u(t))};a.isNumber=o;var c=function(t){return/(^[0-9]\d*$)/.test(t)};a.isPositiveInteger=c;var u=function(t){if(null==t||""==t)return!1;var a=t.match(/^[-\+]?\d+$/);return null!=a};a.isInteger=u;var l=function(t){if(null==t||""==t)return!1;var a=t.match(/^[-\+]?\d+(\.\d+)?$/);return null!=a};a.isDouble=l}}]);