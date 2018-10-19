import { getImgList, getMoreImgList } from '@/api/index'

const state = {
  imgList: [],
  imgMoreList: [],
  block: false,
  Page: 1,
  ImageID: 0,
  current: 0,
  showSwiper: false
}

const mutations = {
  GETIMGLIST(state, payload) {
    state.imgList = payload
    console.log(state.imgList)
  },
  GETMOREIMGLIST(state, payload) {
    state.imgMoreList = state.imgMoreList.concat(payload.List)
    console.log(state.imgMoreList)
    state.Page++;
  },
  block(state, payload) {
    state.block = payload;
  },
  ImageID(state, payload) {
    state.ImageID = payload
  },
  clearImgList(state, payload) {
    state.imgMoreList = []
  },
  changeSwiper(state, payload){
    console.log(payload.id)
    state.showSwiper = payload.show;
    state.current = payload.id
  },
  show(state, payload) {
    state.showSwiper = payload
  }
}

const actions = {
  getImgList({commit}, payload) {
    console.log(payload)
    getImgList(payload).then(res => {
      commit('GETIMGLIST', res.data)
    })
  },
  getMoreImgList({commit}, payload) {
    payload.Page = state.Page
    console.log(payload)
    getMoreImgList(payload).then(res => {
      commit('GETMOREIMGLIST', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}