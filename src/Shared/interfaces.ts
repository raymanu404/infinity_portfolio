export type CustomColorI = Record<string, string>;
export type SearchQueryParamsT = 'openAll' | 'fullMode';

export const SearchQueryParamsV = {
  openAll: 'openAll',
  fullMode: 'fullMode',
} as const satisfies Record<SearchQueryParamsT, SearchQueryParamsT>;
