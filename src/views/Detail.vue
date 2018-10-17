<template>
  <div class="detail">
    <div class="content">
      <div class="img" @click="tabImg">
        <img :src="detailList.CoverPhoto" alt="">
        <span>{{detailList.pic_group_count}}张照片</span>
      </div>
      <div class="info">
        <div class="price">
          <p>{{detailList.market_attribute && detailList.market_attribute.dealer_price}}</p>
          <p>指导价{{detailList.market_attribute && detailList.market_attribute.official_refer_price}}</p>
        </div>
        <p class='btn' @click="askPrice(detailList.list[0].car_id)">{{detailList.BottomEntranceTitle}}</p>
      </div>
      <div class="car-con">
        <div class="type">
          <span v-for="(item, index) in typeList" :key="index" :class="index ==ind ? 'active' : ''" @click="clickYear(index)">{{item}}</span>
        </div>
        <list v-on:updata="askPrice"/>
      </div>
    </div>
    <div class="footer" @click="askPrice(detailList.list[0].car_id)">
      <p>{{detailList.BottomEntranceTitle}}</p>
      <p>本地经销商为您报价</p>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import list from '@/components/detailList'
  export default {
    name: 'detail',
    components: {
      list
    },
    computed: {
      ...mapState({
        detailList: state => state.detail.detailList,
        typeList: state => state.detail.typeList,
        ind: state => state.detail.ind
      })
    },
    mounted() {
      this.getData()
    },
    methods: {
      tabImg() {
        this.$router.push({
          path: '/morePic',
          query: {
            SerialID: this.$route.query.SerialID
          }
        })
      },
      ...mapMutations({
        indList: 'detail/indList'
      }),
      clickYear(index) {
        console.log(index)
        this.indList(index)
      },
      ...mapActions({
        getDetail: 'detail/getDetail'
      }),
      getData() {
        let SerialID = this.$route.query.SerialID
        this.getDetail(SerialID)
      },
      askPrice(carId) {
        console.log(carId)
        this.$router.push({
          path: '/question',
          query: {
            carId: carId
          }
        })
      }
    }
  }
</script>
<style>

</style>
