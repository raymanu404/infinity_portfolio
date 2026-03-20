const basicExampleAddCartApi = async (count: number) => {
  return await new Promise<number>(resolve =>
    setTimeout(() => {
      resolve(count);
    }, 1000),
  );
};

export { basicExampleAddCartApi };
