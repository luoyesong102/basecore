(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-332c3bcd","chunk-74544602"],{"0eb4":function(e,t,n){},c1a1:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Button",{attrs:{size:"large",type:"text"},on:{click:e.backHome}},[e._v("返回首页")]),n("Button",{attrs:{size:"large",type:"text"},on:{click:e.backPrev}},[e._v("返回上一页("+e._s(e.second)+"s)")])],1)},o=[],r=(n("34a3"),n("0eb4"),{name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:this.$config.homeName})},backPrev:function(){this.$router.go(-1)}},mounted:function(){var e=this;this.timer=setInterval(function(){0===e.second?e.backPrev():e.second--},1e3)},beforeDestroy:function(){clearInterval(this.timer)}}),a=r,i=n("6691"),s=Object(i["a"])(a,c,o,!1,null,null,null);t["default"]=s.exports}}]);