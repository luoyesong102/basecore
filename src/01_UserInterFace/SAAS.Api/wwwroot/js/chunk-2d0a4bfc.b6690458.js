(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4bfc"],{"0886":function(n,e,t){"use strict";t.r(e);var c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("Card",[n._v("\n    iview-admin会自动将你程序中的错误收集起来，你可以将错误日志发给后端保存起来。如果你不需要这个功能，将'./src/config/index.js'里的plugin的'error-store'属性删掉即可。\n    另外在开发环境下，你程序中的错误都会被收集起来，这样可能不利于你排查错误，你可以将'./src/config/index.js'的'error-store'的'developmentOff'设为true。\n    如果你只是想收集错误日志，不希望登录用户看到错误日志，你可以不提供查看日志的入口，只需将'./src/config/index.js'的'error-store'的'showInHeader'设为false。\n  ")]),t("Card",{staticStyle:{"margin-top":"20px"}},[t("Row",[t("i-col",{attrs:{span:"8"}},[t("Button",{staticStyle:{display:"block"},on:{click:n.click}},[n._v("点击测试触发程序错误")]),t("Button",{staticStyle:{"margin-top":"10px"},on:{click:n.ajaxClick}},[n._v("点击测试触发ajax接口请求错误")])],1),t("i-col",{attrs:{span:"16"}},[n._v("\n        ajax接口请求是请求easy-mock的一个不存在接口，所以服务端会报404错误，错误收集机制会收集这个错误，测试的时候有一定网络延迟，所以点击按钮之后稍等一会才会收集到错误。\n      ")])],1)],1)],1)},o=[],a=t("7e1e"),r={name:"error_store_page",methods:{click:function(){console.log(admin)},ajaxClick:function(){Object(a["a"])()}}},i=r,s=t("5511"),l=Object(s["a"])(i,c,o,!1,null,null,null);e["default"]=l.exports}}]);