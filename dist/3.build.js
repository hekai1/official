webpackJsonp([3],{184:function(t,i,e){"use strict";function a(t){e(209)}Object.defineProperty(i,"__esModule",{value:!0});var s=e(192),r=e(215),n=e(71),c=a,l=n(s.a,r.a,!1,c,null,null);i.default=l.exports},192:function(t,i,e){"use strict";var a=e(72),s=e(211),r=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};i.a={name:"detail",components:{list:s.a},computed:r({},Object(a.d)({detailList:function(t){return t.detail.detailList},typeList:function(t){return t.detail.typeList},ind:function(t){return t.detail.ind}})),mounted:function(){this.getData()},methods:r({tabImg:function(){this.$router.push({path:"/morePic",query:{SerialID:this.$route.query.SerialID}})}},Object(a.c)({indList:"detail/indList"}),{clickYear:function(t){console.log(t),this.indList(t)}},Object(a.b)({getDetail:"detail/getDetail"}),{getData:function(){var t=this.$route.query.SerialID;this.getDetail(t)},askPrice:function(t){console.log(t),this.$router.push({path:"/question",query:{carId:t}})}})}},193:function(t,i,e){"use strict";var a=e(72),s=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};i.a={name:"detailList",computed:s({},Object(a.d)({list:function(t){return t.detail.allList}})),methods:{askPrice:function(t){this.$emit("updata",t)}}}},209:function(t,i,e){var a=e(210);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(26)("76fefd2c",a,!0,{})},210:function(t,i,e){i=t.exports=e(17)(!1),i.push([t.i,"",""])},211:function(t,i,e){"use strict";function a(t){e(212)}var s=e(193),r=e(214),n=e(71),c=a,l=n(s.a,r.a,!1,c,null,null);i.a=l.exports},212:function(t,i,e){var a=e(213);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(26)("9a4b15ac",a,!0,{})},213:function(t,i,e){i=t.exports=e(17)(!1),i.push([t.i,"",""])},214:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list"},t._l(t.list,function(i,a){return e("div",{key:a,staticClass:"list-item"},[e("p",{staticClass:"list-name"},[t._v(t._s(a))]),t._v(" "),t._l(t.list[a],function(i,a){return e("ul",{key:a},[e("li",[t._v(t._s(i.market_attribute&&i.market_attribute.year)+"款"+t._s(i.car_name))]),t._v(" "),e("li",[t._v(t._s(i.horse_power)+"马力"+t._s(i.gear_num)+"档"+t._s(i.trans_type))]),t._v(" "),e("li",[t._v("指导价"+t._s(i.market_attribute&&i.market_attribute.official_refer_price)),e("span",[t._v(t._s(i.market_attribute&&i.market_attribute.dealer_price_min))])]),t._v(" "),e("li",{staticClass:"ask",on:{click:function(e){t.askPrice(i.car_id)}}},[t._v("询问底价")])])})],2)}))},s=[],r={render:a,staticRenderFns:s};i.a=r},215:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail"},[e("div",{staticClass:"content"},[e("div",{staticClass:"img",on:{click:t.tabImg}},[e("img",{attrs:{src:t.detailList.CoverPhoto,alt:""}}),t._v(" "),e("span",[t._v(t._s(t.detailList.pic_group_count)+"张照片")])]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"price"},[e("p",[t._v(t._s(t.detailList.market_attribute&&t.detailList.market_attribute.dealer_price))]),t._v(" "),e("p",[t._v("指导价"+t._s(t.detailList.market_attribute&&t.detailList.market_attribute.official_refer_price))])]),t._v(" "),e("p",{staticClass:"btn",on:{click:function(i){t.askPrice(t.detailList.list[0].car_id)}}},[t._v(t._s(t.detailList.BottomEntranceTitle))])]),t._v(" "),e("div",{staticClass:"car-con"},[e("div",{staticClass:"type"},t._l(t.typeList,function(i,a){return e("span",{key:a,class:a==t.ind?"active":"",on:{click:function(i){t.clickYear(a)}}},[t._v(t._s(i))])})),t._v(" "),e("list",{on:{updata:t.askPrice}})],1)]),t._v(" "),e("div",{staticClass:"footer",on:{click:function(i){t.askPrice(t.detailList.list[0].car_id)}}},[e("p",[t._v(t._s(t.detailList.BottomEntranceTitle))]),t._v(" "),e("p",[t._v("本地经销商为您报价")])])])},s=[],r={render:a,staticRenderFns:s};i.a=r}});
//# sourceMappingURL=3.build.js.map