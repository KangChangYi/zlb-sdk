const sdkNameList: Array<string> = [
  "dd.device.location.get",

  "dd.biz.user.getUserType",
  "dd.biz.user.login",
  "dd.biz.user.realAuthentication",

  "dd.biz.util.openLink",
  "dd.biz.util.selectLocalCity",
  "dd.biz.util.selectCity",
  "dd.biz.util.close",

  "dd.biz.navigation.setTitle",
];

export { sdkNameList };

// type ApiNamesType =
//   | "zlbGetUserTypeApi"
//   | "zlbSelectLocalCityApi"
//   | "zlbGetUserLocationGPSApi"
//   | "zlbGoSelectCityApi"
//   | "zlbSetZLBTitle"
//   | "zlbGoLogin"
//   | "zlbOpenLinkApi"
//   | "zlbCloseWindowApi";

// type SdkMapType = {
//   [keyName in ApiNamesType]: string[];
// };

// const zlbSdkMap: SdkMapType = {
//   zlbGetUserTypeApi: ["dd", "biz", "user", "getUserType"],
//   zlbSelectLocalCityApi: ["dd", "biz", "util", "selectLocalCity"],
//   zlbGetUserLocationGPSApi: ["dd", "device", "location", "get"],
//   zlbGoSelectCityApi: ["dd", "biz", "util", "selectCity"],
//   zlbSetZLBTitle: ["dd", "biz", "navigation", "setTitle"],
//   zlbGoLogin: ["dd", "biz", "user", "login"],
//   zlbOpenLinkApi: ["dd", "biz", "util", "openLink"],
//   zlbCloseWindowApi: ["dd", "biz", "util", "close"],
// };

// export { SdkMapType, zlbSdkMap };
