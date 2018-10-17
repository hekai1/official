import { getBrandList, getMakeList } from '../../api/index'
const state = {
  getBrandList: [],
  touchStatus: false,
  getMakeList: [],
  block: false,
  id: 0,
  start: 0,
  isShow: true
}

const mutations = {
  GETBRANDLIST(state, payload) {
    var obj = {};
    payload.forEach((item) => {
      var key = item.Spelling.substr(0, 1).toUpperCase();
      if (!obj[key]) {
          obj[key] = {
              title: key,
              list: []
          }
      }
      obj[key].list.push(item);
    })
    var arr = [];
    for (var k in obj) {
      arr.push(obj[k]);
    }
    arr.sort(function(x, y) {
      return x.title.charCodeAt(0) - y.title.charCodeAt(0);
    })
    state.getBrandList = arr
  },
  GETMARKELIST(state, payload) {
    state.getMakeList = payload
  },
  block(state, payload) {
    state.block = payload
  },
  id(state, payload) {
    state.id = payload
  },
  start(state, payload) {
    state.start = payload
  },
  isShow(state, payload) {
    state.isShow = payload
  }
}

const actions = {
  getBrandList({commit}, payload) {
    getBrandList().then(res => {
      commit('GETBRANDLIST', res.data)
    })
  },
  getMakeList({commit}, payload) {
    getMakeList(payload).then(res => {
      commit('GETMARKELIST', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}