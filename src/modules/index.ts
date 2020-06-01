import { getReady } from "./initSDK";

interface ISdkParam {
  func: Function;
  params?: {};
}

function _useSdk({ func, params }: ISdkParam) {
  return new Promise<any>((resolve, reject) => {
    func({
      ...params,
      onSuccess: (data: any) => resolve(data),
      onCancel: (error: any) => reject(error),
      onFail: (error: any) => reject(error),
      onError: (error: any) => reject(error),
    });
  });
}

//  ———————————————————————— api ——————————————————————————

const dd = window.dd;

/**
 * 浙里办 jssdk -> 获取用户类型
 * @description 0 为公务员、1 为个人（除公务员）、2 为法人
 */
export function _zlbGetUserType(): Promise<{
  userType: number;
}> {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.user.getUserType,
    });
  });
}

/**
 * 浙里办 jssdk -> 登录
 * @description 未登录，弹出登录框，登录成功后走成功回调；已登录，走失败回调
 */
export function _zlbGoLogin() {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.user.login,
    });
  });
}

/**
 * 浙里办 jssdk -> 获取位置信息
 * @description 返回经纬度等位置信息
 */
export function _zlbGetLocation(): Promise<{
  longitude: number;
  latitude: number;
  cityName: string;
  region: string;
  townCode: number;
  detailAddress: string;
}> {
  return getReady().then(() => {
    return _useSdk({
      func: dd.device.location.get,
    });
  });
}

/**
 * 浙里办 jssdk -> 在新的 webview 中打开链接
 */
export function _zlbOpenLinkInNewWebView(url: string) {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.util.openLink,
      params: {
        url,
      },
    });
  });
}

/**
 * 浙里办 jssdk -> 获取用户当前城市
 */
export function _zlbGetLocalCity(): Promise<{
  cityId: string;
  cityName: string;
  orgCode: string;
}> {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.util.selectLocalCity,
    });
  });
}

/**
 * 浙里办 jssdk -> 打开浙里办选择城市页面（选择到区）
 */
export function _zlbSelectCity(): Promise<{
  cityId: string;
  cityName: string;
  webId: string;
}> {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.util.selectCity,
    });
  });
}

/**
 * 浙里办 jssdk -> 关闭当前 webView 窗口
 */
export function _zlbCloseWindow(title: string) {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.util.close,
      params: {
        title,
      },
    });
  });
}

/**
 * 浙里办 jssdk -> 设置导航栏标题
 */
export function _zlbSetTitle(title: string) {
  return getReady().then(() => {
    return _useSdk({
      func: dd.biz.navigation.setTitle,
      params: {
        title,
      },
    });
  });
}
