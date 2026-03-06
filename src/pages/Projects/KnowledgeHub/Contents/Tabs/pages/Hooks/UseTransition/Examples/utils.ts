const updateQuantityApi = async (quantity: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(quantity);
    }, 2000);
  });
};

export { updateQuantityApi };
