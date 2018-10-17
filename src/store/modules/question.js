import { getCity, askPrice, getCityList, getTwoCityList, getInfoAnd } from '@/api/index'
import {mergeCar, sortCar, filter} from '@/utils'
const state = {
  city: {},
  askList: {},
  block: [],
  cityList: [],
  twoCityList: [],
  active: false,
  active2: false,
  year: false,
  typeList: []
}

const mutations = {
  cityId() {
    getCity().then(res => {
      state.city = res.data
    })
  },
  block(state, payload) {
    state.block[payload] = !state.block[payload]
  },
  GETCITYLIST(state, payload) {
    console.log(payload)
    state.cityList = payload
  },
  GETTWOLIST(state, payload) {
    state.twoCityList = payload
  },
  changeActive(state, payload) {
    state.active = payload
  },
  changeActive2(state, payload) {
    state.active2 = payload
  },
  cityTwo(state, payload) {
    state.city = payload
  }
}

const actions = {
  askPrice({commit}, payload) {
    askPrice(payload[0], state.city.CityID).then(res => {
      state.askList = res.data
    })
  },
  getCityList({commit}, payload) {
    getCityList().then(res => {
      commit('GETCITYLIST', res.data)
    })
  },
  getTwoCityList({commit}, payload) {
    getTwoCityList(payload).then(res => {
      commit('GETTWOLIST', res.data)
    })
  },
  getTypeList({commit}, payload) {
    console.log(payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}