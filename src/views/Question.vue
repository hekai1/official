<template>
  <div class="question">
    <div class="msg" @click="showYear">
      <div class='img'>
        <img :src="[askList.details && askList.details.serial.Picture]" alt="">
      </div>
      <h4>
        <p>{{askList.details && askList.details.serial.AliasName}}</p>
        <p>{{askList.details && askList.details.market_attribute.year}}款{{askList.details && askList.details.car_name}}</p>
      </h4>
      <p>&gt;</p>
    </div>
    <div class="info">
      <p class="tip">个人信息</p>
      <ul class="info-list">
        <li>
          <span>姓名</span>
          <input type="text" placeholder="输入你的真是中文姓名" ref="name">
        </li>
        <li>
          <span>手机</span>
          <input type="text" placeholder="输入你的真是手机号码" ref="tel">
        </li>
        <li @click="cityBtn">
          <span>城市</span>
          <span>{{city.CityName}}</span>
        </li>
        <li>
          <p @click="askSmall">询问最低价</p>
        </li>
      </ul>
    </div>
    <div class="distributor">
      <p class="tip">选择报价经销商</p>
      <ul>
        <li v-for="(item, index) in askList.list" :key="index" @click="blockClick(index)" :class="block[index] ? 'active' : ''">
          <p>
            <span>{{item.dealerShortName}}</span><span>{{parseInt(item.vendorPrice)}}万</span>
          </p>
          <p>
            <span>{{item.address}}</span><span>售{{item.saleRange}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div :class="active?'active allCity':'allCity'">
      <p>自动定位</p>
      <h5>{{city.CityName}}</h5>
      <p>省份</p>
      <ul>
        <li v-for="(item, index) in cityList" :key="index" @click="clickItem(item.CityID)">{{item.CityName}}<span>&gt;</span></li>
      </ul>
    </div>
    <div :class="active2?'active2 twoCity':'twoCity'">
      <div class="left" @click="noneTwoCity">

      </div>
      <div class="right">
        <p v-for="(item, index) in twoCityList" :key="index" @click="clickTwoCity(item)">{{item.CityName}}<span>&gt;</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'question',
    computed: {
      ...mapState({
        city: state => state.question.city,
        askList: state => state.question.askList,
        block: state => state.question.block,
        cityList: state => state.question.cityList,
        active: state => state.question.active,
        active2: state => state.question.active2,
        twoCityList: state => state.question.twoCityList,
      })
    },
    mounted() {
      this.getCityId()
      setTimeout(()=>{
        this.getCarId()
      },1000)
      this.changeActive(false)
    },
    methods: {
      askSmall() {
        let name = this.$refs.name.value;
        let tel = this.$refs.tel.value;
        if (!/[\u4e00-\u9fa5]{2,5}/.test(name)){
          this.$alert('请输入真实的姓名');
          return;
        }
        if(!(/^1[34578]\d{9}$/.test(tel))){ 
          this.$alert("请输入正确的手机号码");  
          return; 
        }
        this.$alert('询价成功', '稍后会有专业的汽车顾问为您服务')
      },
      getCarId() {
        let carId = this.$route.query.carId
        console.log(carId)
        this.askPrice([carId, this.city.CityID])
      },
      blockClick(index) {
        this.setBlock(index)
      },
      ...mapMutations({
        getCityId: 'question/cityId',
        setBlock: 'question/block',
        changeActive: 'question/changeActive',
        changeActive2: 'question/changeActive2',
        cityTwo: 'question/cityTwo',
      }),
      ...mapActions({
        askPrice: 'question/askPrice',
        getCityList: 'question/getCityList',
        getTwoCityList: 'question/getTwoCityList'
      }),
      cityBtn() {
        console.log(1)
        this.getCityList()
        this.changeActive(true)
      },
      clickItem(cId) {
        console.log(cId)
        this.getTwoCityList(cId)
        this.changeActive2(true)
      },
      noneTwoCity() {
        this.changeActive2(false)
      },
      clickTwoCity(city) {
        console.log(city)
        this.cityTwo(city)
        this.changeActive(false)
        this.changeActive2(false)
        this.askPrice([this.$route.query.carId])
      },
      showYear() {
        this.$router.push({
          path: '/type',
          query: {
            carId: this.$route.query.carId
          }
        })
      }
    }
  }
</script>
<style>

</style>
