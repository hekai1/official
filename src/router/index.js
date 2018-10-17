import Vue from 'vue'
import Router from 'vue-router'

const Index = ()=>import ('@/views/Index')
const Detail = ()=>import ('@/views/Detail')
const MorePic = ()=>import ('@/views/MorePic')
const ColorType = ()=>import ('@/views/ColorType')
const Question = ()=>import ('@/views/Question')
const Login = ()=>import ('@/views/Login')
const Type = ()=>import ('@/views/Type')

Vue.use(Router)

let router =  new Router ({
  routes: [{
    path: '/type',
    name: 'Type',
    component: Type
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }, {
    path: '/morePic',
    name: 'MorePic',
    component: MorePic
  }, {
    path: '/colorType',
    name: 'ColorType',
    component: ColorType
  }, {
    path: '/question',
    name: 'Question',
    component: Question
  }, {
    path: '*',
    redirect: '/index'
  }]
})

router.beforeEach((to, from, next) => {
  let login = window.localStorage.getItem('login') || '';
  if(!login && to.path != '/login') {
    next('/login')
  }else {
    next()
  }
})

export default router;