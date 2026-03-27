const basicExampleCartApi = async (count: number | undefined) => {
  return await new Promise<number>((resolve, reject) =>
    setTimeout(() => {
      if (!count) {
        reject({
          error: 'Invalid undefined!',
        });
        return;
      }

      if (isNaN(count)) {
        reject({
          error: 'Invalid NaN!',
        });
        return;
      }
      if (count < 0) {
        reject({
          error: 'Invalid ticket number, lower than 0!',
        });
        return;
      }

      resolve(count);
    }, 1000),
  );
};

const countCartApi = async (count: number | undefined, prevCount: number) => {
  return await new Promise<{ count: number; error?: string | null }>((resolve, reject) =>
    setTimeout(() => {
      if (!count) {
        reject({
          error: 'Invalid undefined!',
        });
        return;
      }

      if (isNaN(count)) {
        reject({
          error: 'Invalid NaN!',
        });
        return;
      }
      if (count < 0) {
        resolve({
          count: 0,
          error: 'Invalid ticket number, lower than 0!',
        });
        return;
      }

      const totalCount = count + prevCount;

      if (totalCount > 20) {
        resolve({
          count: 0,
          error: 'Invalid total Tickets number, greater than 20!',
        });
        return;
      }

      resolve({
        count: totalCount,
        error: null,
      });
    }, 1000),
  );
};

export { basicExampleCartApi, countCartApi };
