export interface Artist {
  name: string;
  genre: GenreT;
  id: number;
  music: string[];
}

export type GenreT = 'DNB' | 'House' | 'Techno' | 'Trance' | 'Hip-Hop' | 'Pop' | 'Rock';

export const GENRES = [
  'DNB',
  'House',
  'Techno',
  'Trance',
  'Hip-Hop',
  'Pop',
  'Rock',
] as const satisfies GenreT[];
