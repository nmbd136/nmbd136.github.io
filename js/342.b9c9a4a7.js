"use strict";(self["webpackChunka"]=self["webpackChunka"]||[]).push([[342],{6342:function(t,l,o){o.r(l),o.d(l,{default:function(){return c}});var s=function(){var t=this,l=t._self._c;return l("div",{staticClass:"scroll",class:t.isDirection},[l("div",{ref:"leftView"},[l("el-button",{on:{click:t.scrollLeftTop}},[t._v(t._s("horizontal"===t.scrollDirection?"左":"上"))])],1),l("div",{ref:"nav",staticClass:"navBar",class:t.isDirection,style:{overflowX:"horizontal"===t.scrollDirection?"auto":"hidden",overflowY:"vertical"===t.scrollDirection?"auto":"hidden"},on:{mousedown:t.handleMouseDown,mousemove:t.handleMouseMove,mouseup:t.handleMouseUp,mouseleave:t.handleMouseLeave}},[t._t("default")],2),l("div",{ref:"rightView"},[l("el-button",{on:{click:t.scrollRightDown}},[t._v(t._s("horizontal"===t.scrollDirection?"右":"下"))])],1)])},e=[],i={props:{scrollDirection:{type:String,default:"horizontal"}},data(){return{flag:!1,downX:0,downY:0,scrollLeft:0,scrollTop:0,scrollAmount:100}},computed:{isDirection(){return"horizontal"==this.$props.scrollDirection?"row":"column"}},watch:{scrollDirection(t){this.updateScrollbarStyle(t),this.updateWhFnc()}},mounted(){this.nav=this.$refs.nav,this.nav.addEventListener("mousewheel",(t=>t.preventDefault())),this.updateScrollbarStyle(this.scrollDirection),this.updateWhFnc()},methods:{updateWhFnc(){let t=this.$refs.leftView,l=this.$refs.rightView;"horizontal"===this.scrollDirection?(t.style.width="10%",l.style.width="10%",this.nav.style.width="60%"):(t.style.height="10%",l.style.height="10%",this.nav.style.height="60%")},updateScrollbarStyle(t){const l="horizontal"===t?{"--scrollbar-width":"10px","--scrollbar-height":"15px","--scrollbar-thumb-width":"30%","--scrollbar-thumb-height":"100%"}:{"--scrollbar-width":"15px","--scrollbar-height":"10px","--scrollbar-thumb-width":"100%","--scrollbar-thumb-height":"30%","--scrollbar-thumb-color":"red"};for(const[o,s]of Object.entries(l))this.nav.style.setProperty(o,s)},handleMouseDown(t){t.preventDefault(),this.flag=!0,"horizontal"===this.scrollDirection?(this.downX=t.clientX,this.scrollLeft=this.nav.scrollLeft):(this.downY=t.clientY,this.scrollTop=this.nav.scrollTop)},handleMouseMove(t){if(this.flag)if("horizontal"===this.scrollDirection){var l=t.clientX,o=l-this.downX;this.nav.scrollLeft=this.scrollLeft-o}else{var s=t.clientY,e=s-this.downY;this.nav.scrollTop=this.scrollTop-e}},handleMouseUp(){this.flag=!1},handleMouseLeave(){this.flag=!1},scrollLeftTop(){"horizontal"===this.scrollDirection?this.nav.scrollLeft-=this.scrollAmount:this.nav.scrollTop-=this.scrollAmount},scrollRightDown(){"horizontal"===this.scrollDirection?this.nav.scrollLeft+=this.scrollAmount:this.nav.scrollTop+=this.scrollAmount}}},r=i,n=o(1656),h=(0,n.A)(r,s,e,!1,null,"0576b2d4",null),c=h.exports}}]);
//# sourceMappingURL=342.b9c9a4a7.js.map