webpackJsonp([4],{186:function(t,i,s){"use strict";function e(t){s(226)}Object.defineProperty(i,"__esModule",{value:!0});var c=s(195),n=s(228),a=s(71),o=e,l=a(c.a,n.a,!1,o,null,null);i.default=l.exports},195:function(t,i,s){"use strict";var e=s(72),c=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e])}return t};i.a={name:"question",computed:c({},Object(e.d)({city:function(t){return t.question.city},askList:function(t){return t.question.askList},block:function(t){return t.question.block},cityList:function(t){return t.question.cityList},active:function(t){return t.question.active},active2:function(t){return t.question.active2},twoCityList:function(t){return t.question.twoCityList}})),mounted:function(){var t=this;this.getCityId(),setTimeout(function(){t.getCarId()},1e3),this.changeActive(!1)},methods:c({askSmall:function(){var t=this.$refs.name.value,i=this.$refs.tel.value;return/[\u4e00-\u9fa5]{2,5}/.test(t)?/^1[34578]\d{9}$/.test(i)?void this.$alert("询价成功","稍后会有专业的汽车顾问为您服务"):void this.$alert("请输入正确的手机号码"):void this.$alert("请输入真实的姓名")},getCarId:function(){var t=this.$route.query.carId;console.log(t),this.askPrice([t,this.city.CityID])},blockClick:function(t){this.setBlock(t)}},Object(e.c)({getCityId:"question/cityId",setBlock:"question/block",changeActive:"question/changeActive",changeActive2:"question/changeActive2",cityTwo:"question/cityTwo"}),Object(e.b)({askPrice:"question/askPrice",getCityList:"question/getCityList",getTwoCityList:"question/getTwoCityList"}),{cityBtn:function(){console.log(1),this.getCityList(),this.changeActive(!0)},clickItem:function(t){console.log(t),this.getTwoCityList(t),this.changeActive2(!0)},noneTwoCity:function(){this.changeActive2(!1)},clickTwoCity:function(t){console.log(t),this.cityTwo(t),this.changeActive(!1),this.changeActive2(!1),this.askPrice([this.$route.query.carId])},showYear:function(){this.$router.push({path:"/type",query:{carId:this.$route.query.carId}})}})}},226:function(t,i,s){var e=s(227);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(26)("16a2fec3",e,!0,{})},227:function(t,i,s){i=t.exports=s(17)(!1),i.push([t.i,"",""])},228:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"question"},[s("div",{staticClass:"msg",on:{click:t.showYear}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:[t.askList.details&&t.askList.details.serial.Picture],alt:""}})]),t._v(" "),s("h4",[s("p",[t._v(t._s(t.askList.details&&t.askList.details.serial.AliasName))]),t._v(" "),s("p",[t._v(t._s(t.askList.details&&t.askList.details.market_attribute.year)+"款"+t._s(t.askList.details&&t.askList.details.car_name))])]),t._v(" "),s("p",[t._v(">")])]),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"tip"},[t._v("个人信息")]),t._v(" "),s("ul",{staticClass:"info-list"},[s("li",[s("span",[t._v("姓名")]),t._v(" "),s("input",{ref:"name",attrs:{type:"text",placeholder:"输入你的真是中文姓名"}})]),t._v(" "),s("li",[s("span",[t._v("手机")]),t._v(" "),s("input",{ref:"tel",attrs:{type:"text",placeholder:"输入你的真是手机号码"}})]),t._v(" "),s("li",{on:{click:t.cityBtn}},[s("span",[t._v("城市")]),t._v(" "),s("span",[t._v(t._s(t.city.CityName))])]),t._v(" "),s("li",[s("p",{on:{click:t.askSmall}},[t._v("询问最低价")])])])]),t._v(" "),s("div",{staticClass:"distributor"},[s("p",{staticClass:"tip"},[t._v("选择报价经销商")]),t._v(" "),s("ul",t._l(t.askList.list,function(i,e){return s("li",{key:e,class:t.block[e]?"active":"",on:{click:function(i){t.blockClick(e)}}},[s("p",[s("span",[t._v(t._s(i.dealerShortName))]),s("span",[t._v(t._s(parseInt(i.vendorPrice))+"万")])]),t._v(" "),s("p",[s("span",[t._v(t._s(i.address))]),s("span",[t._v("售"+t._s(i.saleRange))])])])}))]),t._v(" "),s("div",{class:t.active?"active allCity":"allCity"},[s("p",[t._v("自动定位")]),t._v(" "),s("h5",[t._v(t._s(t.city.CityName))]),t._v(" "),s("p",[t._v("省份")]),t._v(" "),s("ul",t._l(t.cityList,function(i,e){return s("li",{key:e,on:{click:function(s){t.clickItem(i.CityID)}}},[t._v(t._s(i.CityName)),s("span",[t._v(">")])])}))]),t._v(" "),s("div",{class:t.active2?"active2 twoCity":"twoCity"},[s("div",{staticClass:"left",on:{click:t.noneTwoCity}}),t._v(" "),s("div",{staticClass:"right"},t._l(t.twoCityList,function(i,e){return s("p",{key:e,on:{click:function(s){t.clickTwoCity(i)}}},[t._v(t._s(i.CityName)),s("span",[t._v(">")])])}))])])},c=[],n={render:e,staticRenderFns:c};i.a=n}});
//# sourceMappingURL=4.build.js.map