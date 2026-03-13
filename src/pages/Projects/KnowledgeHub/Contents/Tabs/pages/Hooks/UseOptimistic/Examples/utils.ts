const downloadDataFake = async () => {
  return new Promise<{ isDownloaded: boolean }>(resolve => {
    setTimeout(() => {
      const result = { isDownloaded: true };
      resolve(result);
      return result;
    }, 1000);
  });
};

const upgradePostFake = async () => {
  return new Promise<{ success: boolean }>(resolve => {
    setTimeout(() => {
      const result = { success: true };
      resolve(result);
      return result;
    }, 1000);
  });
};

const subscribeChannelFake = async () => {
  return new Promise<{ success: boolean }>(resolve => {
    setTimeout(() => {
      const result = { success: true };
      resolve(result);
      return result;
    }, 1000);
  });
};

export { downloadDataFake, subscribeChannelFake, upgradePostFake };
