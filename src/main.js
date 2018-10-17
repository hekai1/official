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
  loading: require('./assets/icon-brand.jpg'),
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
