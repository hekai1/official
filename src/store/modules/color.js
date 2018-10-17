import { getYearColor } from '@/api/index'
const state = {
  colorList: {},
  typeList: [],
  num: 0
}

const mutations = {
  GETCOLORLIST(state, payload) {
    var obj = {};
    for(let i in payload) {
      if (!obj[i]) {
          obj[i] = {
              title: i,
              list: []
          }
      }
      obj[i].list=payload[i]
    }
    var arr = [];
    for (var k in obj) {
      arr.push(obj[k]);
    }
    arr.sort(function(x, y) {
      return Number(x.title) < Number(y.title)
    })
    state.colorList = arr;

    state.colorList.forEach((item, index) => {
      if(index == 0) {
        state.typeList = item.list
      }
    })
  },
  CHANGECOLOR(state, payload) {
    state.colorList.forEach((item, index) => {
      if(item.title == payload) {
        state.typeList = item.list
        state.num = index
      }
    })
  }
}

const actions = {
  getColorList({commit}, payload) {
    getYearColor(payload).then(res => {
      commit('GETCOLORLIST', res.data)
    })
  },
  changeList({commit}, payload) {
    commit('CHANGECOLOR', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}