import { sdkNameList } from "./interface";

const dd = window.dd;

function registerSdkApi(apiList: Array<string>, callBack: Function): void {
  dd.ready({ usage: apiList }, callBack);
}

function sdkReady() {
  let isReady: boolean = false;

  return () => {
    return new Promise((resolve, reject) => {
      if (isReady) {
        return resolve();
      }

      if (!dd) {
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
