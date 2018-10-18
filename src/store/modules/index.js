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
  /**
   * 对车辆数据进行修改
   * [{title:a,list:[]},{title:b,list:[]}]
   * @param {*} state 
   * @param {*} payload 
   */
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
  // 车系数据赋值
  GETMARKELIST(state, payload) {
    state.getMakeList = payload
  },
  // 判断车系弹框显示隐藏
  block(state, payload) {
    state.block = payload
  },
  id(state, payload) {
    state.id = payload
  },
  // 手指开始滑动
  start(state, payload) {
    state.start = payload
  },
  // 判断loading是否显示隐藏
  isShow(state, payload) {
    state.isShow = payload
  }
}

const actions = {
  // 获取车辆数据
  getBrandList({commit}, payload) {
    getBrandList().then(res => {
      commit('GETBRANDLIST', res.data)
    })
  },
  // 获取车系数据
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