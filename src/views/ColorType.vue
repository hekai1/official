<template>
  <div class="color">
    <button @click="clickAll">全部颜色</button>
    <div class="color-top">
      <span v-for="(item, index) in colorList" :key="index" @click="clickYear(item.title)" :class="index==num ? 'active': ''">{{item.title}}</span>
    </div>
    <ul class="color-con">
      <li v-for="(value, key) in typeList" :key="key" @click="clickColor(value.ColorId)">
        <span :style="`background-color: ${value.Value}`"></span>
        {{value.Name}}
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'index',
    mounted() {
      this.getJson()
    },
    computed: {
      ...mapState({
        colorList: state => state.color.colorList,
        typeList: state => state.color.typeList,
        num: state => state.color.num
      })
    },
    methods: {
      ...mapActions({
        getColorList: 'color/getColorList',
        changeList: 'color/changeList'
      }),
      getJson() {
        this.getColorList(this.$route.query.SerialID);
      },
      clickYear(year) {
        this.changeList(year)
      },
      clickColor(ColorId) {
        console.log(ColorId)
        this.$router.push({
          path: '/morePic',
          query: {
            SerialID: this.$route.query.SerialID,
            ColorId: ColorId
          }
        })
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
