import { Artist, GENRES } from './interface';

const generateArtists = (count: number) => {
  return Array.from(
    { length: count },
    (_, i) =>
      ({
        id: i + 1,
        name: `Artist ${i + 1}`,
        genre: GENRES[Math.floor(Math.random() * GENRES.length)],
        music: Object.values(
          Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, j) => `Track ${j + 1}`),
        ),
      }) as Artist,
  );
};

const queryArtists = async (query: string, artists: Artist[]) => {
  // setTimeout(() => {
  const result = new Promise<Artist[]>(resolve => {
    const filtered = artists.filter(
      x => x.genre.toLowerCase().includes(query) || x.name.toLowerCase().includes(query),
    );

    resolve(filtered);

    return filtered;
    // }, 10);
  });

  return result;
};

export { generateArtists, queryArtists };
