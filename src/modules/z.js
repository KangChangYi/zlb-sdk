/**
 *  api 参数详情查看:
 *  https://portal.zjzwfw.gov.cn/assets/jsbridge/1.0.0/public/
 */

 const zlbSdkMap = {
  zlbGetUserTypeApi: ["dd", "biz", "user", "getUserType"],
  zlbSelectLocalCityApi: ["dd", "biz", "util", "selectLocalCity"],
  zlbGetUserLocationGPSApi: ["dd", "device", "location", "get"],
  zlbGoSelectCityApi: ["dd", "biz", "util", "selectCity"],
  zlbSetZLBTitle: ["dd", "biz", "navigation", "setTitle"],
  zlbGoLogin: ["dd", "biz", "user", "login"],
  zlbOpenLinkApi: ["dd", "biz", "util", "openzLink"],
  zlbCloseWindowApi: ["dd", "biz", "navigation", "close"],
};

export default zlbSdkMap;

/**
 * 获取用户类型
 * zlbGetUserTypeApi
 * @returns { => { userType: Number }
 * 0 为公务员、1 为个人（除公务员）、2 为法人
 */


/**
 * 当前城市
 * zlbSelectLocalCityApi
 * @returns {  
 * "cityId": String,
 * "orgCode": String,
 * "cityName": String 
 */

function zlbSelectLocalCityApi(sdk){
  return 
}

zlbSelectLocalCityApi()

/**
 * 获取位置信息  返回经纬度
 * zlbGetUserLocationGPSApi
 * @returns { data => { 
 * "longitude": String,
 * "latitude": String,
 * "cityName":"String",
 * "region":"String" 
 * "townCode":"String" 
 * "detailAddress":"String" 
 *  }
 */

/**
 * 当前城市
 * zlbSelectLocalCityApi
 * @returns { data => { 
  * "cityId": String,
  * "orgCode": String,
  * "cityName": String 
  * }
  */

export function initSDK() {
  console.log(123);
}


