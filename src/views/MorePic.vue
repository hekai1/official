<template>
  <div class="big-img">
    <div class="top">
      <p @click="clickColor"><span>颜色</span><span></span></p>
      <p @click="clickCar"><span>车款</span><span></span></p>
    </div>
    <div class="con">
      <ul>
        <li v-for="(item, index) in imgList" :key="index">
          <img v-for="(value, key) in item.List" :key="key" v-lazy="`${value.Url.replace('{0}', value.LowSize)}`" >
          <div @click="clickImgType(item.Id)">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}&gt;</p>
          </div>
        </li>
      </ul>
    </div>
    <div :class="block ? 'block moreList':'moreList'" ref="moreImg" @click="imgClick">
      <p ref="imgItem">
        <img v-for="(item, index) in imgMoreList" :key="index" v-lazy="`${item.Url.replace('{0}', item.LowSize)}`" alt="" :data-id="index">
      </p>
    </div>
    <!-- 轮播图片 -->
    <div :class="block ? 'block swiper':'swiper'" v-show="showSwiper" @click="swiperClick">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgMoreList" :key="index">
          <img :src="`${item.Url.replace('{0}', item.HighSize)}`" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <p>{{1+current*1}}/{{imgMoreList.length}}</p>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex';
  import {debounce} from '@/utils/utils'
  import { swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'morePic',
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      ...mapState({
        imgList: state => state.img.imgList,
        imgMoreList: state => state.img.imgMoreList,
        block: state => state.img.block,
        Page: state => state.img.Page,
        ImageID: state => state.img.ImageID,
        current: state=>state.img.current,
        showSwiper: state=>state.img.showSwiper
      }),
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      swiperOption() {
        let that = this;
        return {
          on: {
            slideChange: function(){
              if(this.activeIndex > ((that.Page-1)*30)-5) {
                that.getMoreImgList({
                  SerialID: that.$route.query.SerialID,
                  ImageID: that.ImageID,
                  Page: that.Page
                })
              }
              that.changeSwiper({
                id: this.activeIndex,
                show: true
              })
            }
          }
        }
      }
    },
    mounted() {
      this.getImg();
      this.$store.commit('img/clearImgList')
      this.$store.commit('img/show', false)
      let func = debounce(this.scroll, 100);
      this.$refs.moreImg.addEventListener('scroll', func)
    },
    methods: {
      // 图片点击
      imgClick(e){
        let id = e.target.dataset.id
        this.changeSwiper({
          show: true,
          id: id
        })
        this.swiper.slideTo(id, 1000, false)
      },
      swiperClick(e) {
        if(e.target.nodeName === 'DIV') {
          this.changeSwiper({
            show: false
          })
        }
      },
      clickColor() {
        this.$router.push({
          path: '/colorType',
          query: {
            SerialID: this.$route.query.SerialID
          }
        })
      },
      clickCar() {
        this.$router.push({
          path: '/type',
          query: {
            SerialID: this.$route.query.SerialID
          }
        })
      },
      ...mapActions({
        getImgList: 'img/getImgList',
        getMoreImgList: 'img/getMoreImgList'
      }),
      ...mapMutations({
        changeSwiper: 'img/changeSwiper'
      }),
      getImg() {
        if(this.$route.query.ColorId) {
          this.getImgList({
            SerialID: this.$route.query.SerialID,
            ColorID: this.$route.query.ColorId
          })
        }else if(this.$route.query.CarID){
          this.getImgList({
            SerialID: this.$route.query.SerialID,
            CarID: this.$route.query.CarID,
          })
        }else {
          this.getImgList({
            SerialID: this.$route.query.SerialID
          })
        }
        this.$store.commit('img/block', false)
      },
      // 点击进入更多图片
      clickImgType(ImageID) {
        this.$store.commit('img/block', true)
        this.$store.commit('img/ImageID', ImageID)
        if(this.$route.query.ColorId) {
          this.getMoreImgList({
            SerialID: this.$route.query.SerialID,
            ImageID: ImageID,
            ColorID: this.$route.query.ColorId
          });
        }else if(this.$route.query.CarID){
          this.getMoreImgList({
            SerialID: this.$route.query.SerialID,
            ImageID: ImageID,
            CarID: this.$route.query.CarID
          });
        }else {
          this.getMoreImgList({
            SerialID: this.$route.query.SerialID,
            ImageID: ImageID
          });
        }
      },
      scroll() {
        let scrollTop = this.$refs.moreImg.scrollTop;
        let height = this.$refs.imgItem.getBoundingClientRect().height
        if((scrollTop > ((height - window.innerHeight) - 20))) {
          console.log('加载下一页')
          console.log(this.Page)
          if(this.$route.query.ColorId) {
            this.getMoreImgList({
              SerialID: this.$route.query.SerialID,
              ImageID: this.ImageID,
              ColorID: this.$route.query.ColorId,
              Page: this.Page
            })
          }else if(this.$route.query.CarID){
           this.getMoreImgList({
              SerialID: this.$route.query.SerialID,
              ImageID: this.ImageID,
              CarID: this.$route.query.CarID,
              Page: this.Page
            })
          }else {
            this.getMoreImgList({
              SerialID: this.$route.query.SerialID,
              ImageID: this.ImageID,
              Page: this.Page
            })
          }
        }
      }
    }
  }
</script>
<style>
.swiper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0,0,0,1);
  display: flex;
  display: none;
  justify-content: center;
  align-items: center;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.swiper img{
  width: 100%;
  height: 5rem;
  border: none;
}
.swiper p{
  position: absolute;
  bottom: .5rem;
  left: 0;
  color: #fff;
  font-size: .34rem;
  text-align: center;
  width: 100%;
}
.swiper-lazy-preloader{
  color: red;
}
</style>
