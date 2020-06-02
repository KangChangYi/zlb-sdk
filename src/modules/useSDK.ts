interface ISdkParam {
  func: Function;
  params?: Object;
}

function useSDK({ func, params }: ISdkParam) {
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

export { useSDK };
