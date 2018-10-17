import { getInfoAnd } from '@/api/index'
import {mergeCar, sortCar, filter} from '@/utils'
const state = {
  detailList: {},
  allList: {},
  typeList: ['全部'],
  typeListNext: [],
  ind: 0,
  typeInd: 0
}

const mutations = {
  GETDETAIL(state, payload) {
    state.detailList = payload;
    state.typeList = ['全部'];
    state.typeListNext = [];
    payload.list.forEach(item => {
      if(state.typeList.indexOf(item.market_attribute.year) == -1) {
        state.typeList.push(item.market_attribute.year)
        state.typeListNext.push(item.market_attribute.year)
      }
    })
    state.allList = mergeCar(sortCar(payload.list));
  },
  indList(state, payload) {
    state.ind = payload;
    if(isNaN(Number(state.typeList[payload]))) {
      state.allList = mergeCar(sortCar(state.detailList.list));
    }else {
      state.allList = mergeCar(sortCar(filter(Number(state.typeList[payload]), state.detailList.list)));
    }
  },
  changeType(state, payload) {
    state.typeInd = payload;
    state.allList = mergeCar(sortCar(filter(Number(state.typeListNext[payload]), state.detailList.list)));
  }
}

const actions = {
  getDetail({commit}, payload) {
    getInfoAnd(payload).then(res =>{
      commit('GETDETAIL', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}