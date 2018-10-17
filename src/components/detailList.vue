<template>
  <div class="list">
    <!-- {{JSON.stringify(list)}} -->
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <p class="list-name">{{index}}</p>
      <ul v-for="(value, key) in list[index]" :key="key">
        <li>{{value.market_attribute && value.market_attribute.year}}款{{value.car_name}}</li>
        <li>{{value.horse_power}}马力{{value.gear_num}}档{{value.trans_type}}</li>
        <li>指导价{{value.market_attribute && value.market_attribute.official_refer_price}}<span>{{value.market_attribute && value.market_attribute.dealer_price_min}}</span></li>
        <li class="ask" @click="askPrice(value.car_id)">询问底价</li>
      </ul>
    </div>
  </div>
</template>
<script>
 import {mapState, mapActions} from 'vuex'
  export default {
    name: 'detailList',
     computed: {
      ...mapState({
       list: state => state.detail.allList
      })
    },
    methods: {
      askPrice(carId) {
        this.$emit('updata', carId)
      }
    }
  }
</script>
<style>

</style>
