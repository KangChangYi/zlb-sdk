declare global {
    interface Window {
        dd: any;
    }
}
/**
 * 浙里办 jssdk -> 获取用户类型
 * @description 0 为公务员、1 为个人（除公务员）、2 为法人
 */
export declare function zlbGetUserType(): Promise<{
    userType: 0 | 1 | 2;
}>;
/**
 * 浙里办 jssdk -> 登录
 * @description 未登录，弹出登录框，登录成功后走成功回调；已登录，走失败回调
 */
declare function zlbGoLogin(): Promise<any>;
/**
 * 浙里办 jssdk -> 获取位置信息
 * @description 返回经纬度等位置信息
 */
declare function zlbGetLocation(): Promise<{
    longitude: number;
    latitude: number;
    cityName: string;
    region: string;
    townCode?: number;
    detailAddress: string;
}>;
/**
 * 浙里办 jssdk -> 在新的 webview 中打开链接
 */
declare function zlbOpenLinkInNewWebView(url: string): Promise<any>;
/**
 * 浙里办 jssdk -> 获取用户当前城市
 */
declare function zlbGetLocalCity(): Promise<{
    cityId: string;
    cityName: string;
    orgCode: string;
}>;
/**
 * 浙里办 jssdk -> 打开浙里办选择城市页面（选择到区）
 */
declare function zlbSelectCity(): Promise<{
    cityId: string;
    cityName: string;
    webId: string;
}>;
/**
 * 浙里办 jssdk -> 关闭当前 webView 窗口
 */
declare function zlbCloseWindow(title: string): Promise<any>;
/**
 * 浙里办 jssdk -> 设置导航栏标题
 */
declare function zlbSetTitle(title: string): Promise<any>;
/**
 * 浙里办 jssdk -> 实人认证
 */
declare function zlbRealAuthentication(appId: string, certNo: string, certName: string): Promise<{
    status: "success" | "fail" | "complete";
    msg: string;
    pass: boolean;
    passId: string;
}>;
declare const _default: {
    zlbRealAuthentication: typeof zlbRealAuthentication;
    zlbSetTitle: typeof zlbSetTitle;
    zlbCloseWindow: typeof zlbCloseWindow;
    zlbSelectCity: typeof zlbSelectCity;
    zlbGetLocalCity: typeof zlbGetLocalCity;
    zlbOpenLinkInNewWebView: typeof zlbOpenLinkInNewWebView;
    zlbGetLocation: typeof zlbGetLocation;
    zlbGoLogin: typeof zlbGoLogin;
    zlbGetUserType: typeof zlbGetUserType;
};
export default _default;
