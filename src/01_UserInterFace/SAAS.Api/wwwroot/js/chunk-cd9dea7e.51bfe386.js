(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd9dea7e"],{"360c":function(e,t,r){},"4b4f":function(e,t,r){"use strict";var s=r("360c"),n=r.n(s);n.a},"6c04":function(e,t,r){"use strict";var s=r("b821"),n=r.n(s);n.a},b821:function(e,t,r){},e49c:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"bg bg-blur"}),r("div",{staticClass:"content content-front"},[r("div",{staticClass:"login"},[r("div",{staticClass:"login-con"},[r("Card",{attrs:{icon:"log-in",title:"欢迎登录",bordered:!1}},[r("div",{staticClass:"form-con"},[r("login-form",{attrs:{processing:e.processing,loading:e.loading},on:{"on-success-valid":e.handleSubmit}})],1)])],1)])])])},n=[],o=(r("2338"),r("f763"),r("fb37"),r("a506")),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit(t)}}},[r("FormItem",{attrs:{prop:"userName"}},[r("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:16,type:"ios-person"}})],1)])],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:14,type:"md-lock"}})],1)])],1),r("FormItem",{attrs:{label:"测试账户"}},[r("RadioGroup",{attrs:{type:"button"},on:{"on-change":e.handleUserTypeChange},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},[r("Radio",{attrs:{label:"超级管理员"}}),r("Radio",{attrs:{label:"普通用户"}})],1)],1),r("FormItem",[r("Button",{attrs:{disabled:e.processing,type:"primary",long:"",loading:e.loading},on:{click:e.handleSubmit}},[e._v(e._s(e.btnLoginText))])],1),r("p",{staticClass:"login-tip"},[e._v("欢迎使用通用权限管理框架")])],1)},i=[],c={name:"LoginForm",props:{userNameRules:{type:Array,default:function(){return[{required:!0,message:"账号不能为空",trigger:"blur"}]}},passwordRules:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"}]}},processing:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},data:function(){return{form:{userName:"",password:"",userType:1}}},computed:{btnLoginText:function(){return this.processing?"正在处理,请稍候...":"登录"},rules:function(){return{userName:this.userNameRules,password:this.passwordRules}}},methods:{handleSubmit:function(){var e=this;this.$refs.loginForm.validate(function(t){t&&e.$emit("on-success-valid",{userName:e.form.userName,password:e.form.password})})},handleUserTypeChange:function(e){switch(e){case"超级管理员":this.form.userName="administrator";break;case"普通用户":this.form.userName="admin";break}this.form.password="111111"}}},u=c,l=r("6691"),d=Object(l["a"])(u,a,i,!1,null,null,null),p=d.exports,m=p,f=r("591a"),g=(r("66df"),r("4360"),r("9658"));function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={components:{LoginForm:m},data:function(){return{processing:!1,loading:!1}},methods:h({},Object(f["b"])(["handleLogin","getUserInfo"]),{handleSubmit:function(e){var t=this,r=e.userName,s=e.password,n=this;this.loading=!0,this.handleLogin({userName:r,password:s}).then(function(e){console.log(e.data.success),1==e.data.success?(t.processing=!0,t.$Message.loading({duration:0,closable:!1,content:"用户信息验证成功,正在登录系统..."}),t.getUserInfo().then(function(e){setTimeout(function(){Object(g["b"])(n),t.$router.push({name:"home"}),setTimeout(function(){t.$Message.destroy()},1e3)},1500)})):(t.processing=!1,t.loading=!1,t.$Message.error(e.data.message))}).catch(function(e){n.loading=!1,e.status||t.$Message.error({content:"网络出错,请检查你的网络或者服务是否可用",duration:5})})}})},w=y,v=(r("4b4f"),r("6c04"),Object(l["a"])(w,s,n,!1,null,null,null));t["default"]=v.exports}}]);