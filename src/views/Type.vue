<template>
  <div class="type">
    <div v-if="this.$route.query.SerialID" style="background: #fff; color: #00afff; font-size: 0.34rem; text-align: center; line-height: 0.8rem;" @click="clickAll">全部车款</div>
    <div class="car-con">
      <div class="type">
        <span v-for="(item, index) in typeListNext" :key="index" :class="index ==typeInd ? 'active' : ''" @click="clickYear(index)">{{item}}</span>
      </div>
      <list v-on:updata="askPrice"/>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import list from '@/components/typeList'
  export default {
    name: 'detail',
    components: {
      list
    },
    computed: {
      ...mapState({
        typeListNext: state => state.detail.typeListNext,
        typeInd: state => state.detail.typeInd
      })
    },
    mounted() {
      this.getData()
      console.log(this.typeListNext)
    },
    methods: {
      ...mapMutations({
        changeType: 'detail/changeType'
      }),
      clickYear(index) {
        console.log(index)
        this.changeType(index)
      },
      getData() {
        let carId = this.$route.query.carId
        console.log(carId)
      },
      askPrice(carId) {
        console.log(carId)
        if( this.$route.query.carId ) {
          this.$router.push({
            path: '/question',
            query: {
              carId: carId
            }
          })
        }else {
          this.$router.push({
            path: '/morePic',
            query: {
              SerialID: this.$route.query.SerialID,
              CarID: carId
            }
          })
        }
      },
      clickAll() {
        this.$router.push({
          path: '/morePic',
          query: {
            SerialID: this.$route.query.SerialID
          }
        })
      }
    }
  }
</script>
<style>

</style>
