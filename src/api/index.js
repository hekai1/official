// 动态判断域名
const host = /localhost/.test(window.location.host) ? 'http://baojia.chelun.com' : 'https://baojia.chelun.com';

function sendRequest(url, method = 'GET', data = {}) {
  let params = {
    method
  };
  // 判断如果是一个post请求，带上请求体信息
  if(method == 'POST') {
    params.body = JSON.stringify(data);
  }
  // 判断请求查询url是否携带query
  if(url.indexOf('?') == -1) {
    url += `?_=${+new Date()}`
  }else {
    url += `&_=${+new Date()}`
  }
  return fetch(host + url, params).then(res => res.json()).then(body => body)
}

/**
 * 获取车辆品牌数据
 * @return promise
 */
export let getBrandList = () => {
  return sendRequest('/v2-car-getMasterBrandList.html');
}

/**
 * 获取车系数据
 * @param {*} id 
 * @return promise
 */
export let getMakeList = (id) => {
  return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}

/** 
 * 获取详情页数据
 * @param {*} id
 * @return promise
*/
export let getInfoAnd = (id) => {
  return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}
/** 
 * 获取询价页数据
 * @param {*} carid  车辆id
 * @param {*} cityid 城市id
 * @return promise
*/
export let askPrice = (carId, cityId) => {
  return sendRequest(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}
/** 
 * 获取城市id
 * @param {*} carid  车辆id
 * @param {*} cityid 城市id
 * @return promise
*/
export let getCity = () => {
  return sendRequest(`/location-client.html`)
}
/** 
 * 获取图片页面数据
 * @param {*} SerialID  车辆id
 * @return promise
*/
export let getImgList = (param) => {
  let search = '';
  for(let i in param) {
    search +=  `&${i}=${param[i]}`
  }
  return sendRequest(`/v2-car-getImageList.html?${search.slice(1, search.length)}`)
}
/** 
 * 获取图片更多页数据
 * @param {*} SerialID  车辆id
 * @param {*} ImageID  图片id
 * @param {*} page  加载页数
 * @param {*} pagesize  加载数量
 * @return promise
*/
export let getMoreImgList = (param) => {
  let search = ``;
  for(let i in param) {
    search += `&${i}=${param[i]}`;
  }
  // page pageSize
  if(!param['Page']) {
    search += `&Page=1`;
  }
  if(!param['PageSize']) {
    search += `&PageSize=30`;
  }
  return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1, search.length)}`)
}
/** 
 * 获取城市列表
 * @return promise
*/
export let getCityList = () => {
  return sendRequest(`/v1-city-alllist.html`)
}
/** 
 * 获取二级城市列表
 * @return promise
*/
export let getTwoCityList = (cId) => {
  return sendRequest(`/v1-city-alllist.html?provinceid=${cId}`)
}
/** 
 * 获取颜色
 * @param {*} SerialID
 * @return promise
*/
export let getYearColor = (SerialID) => {
  return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`)
}