import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import VueLazyLoad from 'vue-lazyload'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Alert from '@/utils/alert'
import './css/alert.css'

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: 'https://img.zcool.cn/community/0132a45975569da8012193a3e6a1e3.gif',
  attempt: 1
})
Vue.use(Element)
Vue.prototype.$alert = Alert;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
