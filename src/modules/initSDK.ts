const sdkNameList: Array<string> = [
  "dd.device.location.get",
  "dd.device.notification.saveImage",

  "dd.biz.user.getUserType",
  "dd.biz.user.login",
  "dd.biz.user.realAuthentication",

  "dd.biz.util.openLink",
  "dd.biz.util.selectLocalCity",
  "dd.biz.util.selectCity",
  "dd.biz.util.close",

  "dd.biz.navigation.setTitle",

];

function registerSdkApi(apiList: Array<string>, callBack: Function): void {
  window.dd.ready({ usage: apiList }, callBack);
}

function sdkReady() {
  let isReady: boolean = false;

  return () => {
    return new Promise<void>((resolve, reject) => {
      if (isReady) {
        return resolve();
      }

      if (!window.dd) {
        return reject("未引入浙里办 jssdk");
      }

      registerSdkApi(sdkNameList, () => {
        isReady = true;
        resolve();
      });
    });
  };
}

const getReady = sdkReady();

export { getReady };
