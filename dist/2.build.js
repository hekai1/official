webpackJsonp([2],{189:function(t,e,r){"use strict";function i(t){r(233)}Object.defineProperty(e,"__esModule",{value:!0});var n=r(198),a=r(239),s=r(71),c=i,o=s(n.a,a.a,!1,c,null,null);e.default=o.exports},198:function(t,e,r){"use strict";var i=r(72),n=r(235),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};e.a={name:"detail",components:{list:n.a},computed:a({},Object(i.d)({typeListNext:function(t){return t.detail.typeListNext},typeInd:function(t){return t.detail.typeInd}})),mounted:function(){this.getData(),console.log(this.typeListNext)},methods:a({},Object(i.c)({changeType:"detail/changeType"}),{clickYear:function(t){console.log(t),this.changeType(t)},getData:function(){var t=this.$route.query.carId;console.log(t)},askPrice:function(t){console.log(t),this.$route.query.carId?this.$router.push({path:"/question",query:{carId:t}}):this.$router.push({path:"/morePic",query:{SerialID:this.$route.query.SerialID,CarID:t}})},clickAll:function(){this.$router.push({path:"/morePic",query:{SerialID:this.$route.query.SerialID}})}})}},199:function(t,e,r){"use strict";var i=r(72),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};e.a={name:"detailList",computed:n({},Object(i.d)({list:function(t){return t.detail.allList}})),methods:{askPrice:function(t){this.$emit("updata",t)}}}},233:function(t,e,r){var i=r(234);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r(26)("47e871b5",i,!0,{})},234:function(t,e,r){e=t.exports=r(17)(!1),e.push([t.i,"",""])},235:function(t,e,r){"use strict";function i(t){r(236)}var n=r(199),a=r(238),s=r(71),c=i,o=s(n.a,a.a,!1,c,null,null);e.a=o.exports},236:function(t,e,r){var i=r(237);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r(26)("14feb4b9",i,!0,{})},237:function(t,e,r){e=t.exports=r(17)(!1),e.push([t.i,"",""])},238:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list"},t._l(t.list,function(e,i){return r("div",{key:i,staticClass:"list-item"},[r("p",{staticClass:"list-name"},[t._v(t._s(i))]),t._v(" "),t._l(t.list[i],function(e,i){return r("ul",{key:i,on:{click:function(r){t.askPrice(e.car_id)}}},[r("li",[t._v(t._s(e.market_attribute&&e.market_attribute.year)+"款"+t._s(e.car_name)),r("span",[t._v(t._s(e.market_attribute&&e.market_attribute.dealer_price_min))])]),t._v(" "),r("li",[t._v(t._s(e.horse_power)+"马力"+t._s(e.gear_num)+"档"+t._s(e.trans_type)),r("span",[t._v("指导价"+t._s(e.market_attribute&&e.market_attribute.official_refer_price))])])])})],2)}))},n=[],a={render:i,staticRenderFns:n};e.a=a},239:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"type"},[this.$route.query.SerialID?r("div",{staticStyle:{background:"#fff",color:"#00afff","font-size":"0.34rem","text-align":"center","line-height":"0.8rem"},on:{click:t.clickAll}},[t._v("全部车款")]):t._e(),t._v(" "),r("div",{staticClass:"car-con"},[r("div",{staticClass:"type"},t._l(t.typeListNext,function(e,i){return r("span",{key:i,class:i==t.typeInd?"active":"",on:{click:function(e){t.clickYear(i)}}},[t._v(t._s(e))])})),t._v(" "),r("list",{on:{updata:t.askPrice}})],1)])},n=[],a={render:i,staticRenderFns:n};e.a=a}});
//# sourceMappingURL=2.build.js.map