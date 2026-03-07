interface PostExample {
  id: number;
  title: string;
  content: string;
}

const updateQuantityApi = async (quantity: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(quantity);
    }, 2000);
  });
};

const generatePosts = (count: number): PostExample[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
    content: `This is the content of Post ${i + 1}.`,
  }));
};

export { generatePosts, updateQuantityApi };
export type { PostExample };
