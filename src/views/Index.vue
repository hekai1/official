<template>
  <div class="wrap">
    <div class="brand-list"  ref="MasterBrandList">
      <div>
        <div v-for="(item, index) in brandList" :key="index" :id="item.title">
          <p :ref="'a'+index">{{item.title}}</p>
          <ul class="car-list">
            <li class="car-item" v-for="(value, key) in item.list" :key="key" @click="carBrandList(value.MasterID)">
              <img v-lazy="value.CoverPhoto" alt="">
              <span>{{value.Name}}</span>
            </li>
          </ul>  
        </div>
      </div>
    </div>
    <div class="brand-bar">
      <span v-for="(item, ind) in brandList" :key="ind" :data-index="ind" @touchstart="touchstart(ind, $event)" @touchmove.stop.prevent="touchmove" @touchend="touchend">{{item.title}}</span>
    </div>
    <div id="car-system" :class=" block ? 'active' : '' ">
      <div class="mark-list">
        <div v-for="(item, index) in makeList" :key="index">
          <p>{{item.GroupName}}</p>
          <ul class="car-list">
            <router-link v-for="(value, key) in item.GroupList" :key="key" :to="{path: '/detail', query: {SerialID: value.SerialID}}">
              <li class="car-item">
                <dl>
                  <dt>
                    <img v-lazy="value.Picture" alt="">
                  </dt>
                  <dd>
                    <span>{{value.AliasName}}</span>
                    <span>{{value.DealerPrice}}</span>
                  </dd>
                </dl>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <loading v-if="isShow"/>
  </div>
</template>
<script>

  import loading from '@/components/Loading'
  import { mapState, mapActions } from 'vuex'
  import bScroll from 'better-scroll'
  export default {
    name: 'index',
    components: {
      loading
    },
    computed: {
      ...mapState({
        brandList: state => state.index.getBrandList,
        block: state => state.index.block,
        id: state => state.index.id,
        start: state => state.index.start,
        isShow: state => state.index.isShow
      }),
      makeList(){
        return this.$store.state.index.getMakeList
      }
    },
    updated() {
      this.$store.commit('index/isShow', false)
    },
    methods: {
      myScroll() {
        this._initscroll = new bScroll(this.$refs.MasterBrandList, {
          probeType: 3,
          click: true,
          scrollY: true
        })
      },
      ...mapActions({
        getBrandList:'index/getBrandList'
      }),
      touchstart(id, e) {
        this.$store.commit('index/id', id)
        this.$store.commit('index/start', e.changedTouches[0].clientY)
      },
      touchmove(e) {
        let newID = this.id + parseInt((e.changedTouches[0].clientY - this.start) / e.target.clientHeight)
        if(newID < 0) {
          newID = 0
        }
        if(newID > 20) {
          newID = 20
        }
        this._initscroll.scrollToElement(this.$refs['a'+newID][0])
      },
      touchend(e) {
        console.log(e)
        let newID = this.id + parseInt((e.changedTouches[0].clientY - this.start) / e.target.clientHeight)
        if(newID < 0) {
          newID = 0
        }
        if(newID > 20) {
          newID = 20
        }
        this._initscroll.scrollToElement(this.$refs['a'+newID][0])
      },
      carBrandList(MasterID) {
        _hmt.push(['_trackEvent', '汽车报价', 'tap', '品牌点击'])
        this.$store.dispatch('index/getMakeList', MasterID)
        this.$store.commit('index/block', true)
      },
      moveRight() {
        //返回角度
          function GetSlideAngle(dx, dy) {
              return Math.atan2(dy, dx) * 180 / Math.PI;
          }
          //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
          function GetSlideDirection(startX, startY, endX, endY) {
              var dy = startY - endY;
              var dx = endX - startX;
              var result = 0;
 
              //如果滑动距离太短
              if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                  return result;
              }
 
              var angle = GetSlideAngle(dx, dy);
              if(angle >= -45 && angle < 45) {
                  result = 4;
              }else if (angle >= 45 && angle < 135) {
                  result = 1;
              }else if (angle >= -135 && angle < -45) {
                  result = 2;
              }
              else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                  result = 3;
              }
 
              return result;
          }
 
          //滑动处理
          var startX, startY;
          document.addEventListener('touchstart',(ev) => {
              startX = ev.touches[0].pageX;
              startY = ev.touches[0].pageY;  
          }, false);
          document.addEventListener('touchend',(ev) => {
              var endX, endY;
              endX = ev.changedTouches[0].pageX;
              endY = ev.changedTouches[0].pageY;
              var direction = GetSlideDirection(startX, startY, endX, endY);
              switch(direction) {
                  case 0:
                      break;
                  case 1:
                      break;
                  case 2:
                      break;
                  case 3:
                      break;
                  case 4:
                      this.$store.commit('index/block', false)
                      break;
                  default:           
              }
          }, false)
      }
    },
    mounted() {
      this.getBrandList()
      this.moveRight()
      this.myScroll()
    }
  }
</script>
<style>
  div {
    font-size: 0.3rem;
  }
</style>
