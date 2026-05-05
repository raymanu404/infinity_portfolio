import { OPTIONS_APP_MENU_TYPE, URL_QUERY_TYPE } from '@/pages/Projects/KnowledgeHub/constants';

export type CustomColorI = Record<string, string>;
export type SearchQueryParamsT = 'openAll' | 'fullMode';

export const SearchQueryParamsV = {
  openAll: 'openAll',
  fullMode: 'fullMode',
} as const satisfies Record<SearchQueryParamsT, SearchQueryParamsT>;

export interface UrlQueryType {
  openAll: boolean;
  fullMode: boolean;
}

export type UseUrlQueryParamsReturnType = (typeof URL_QUERY_TYPE)[keyof typeof URL_QUERY_TYPE];
export type OptionsAppMenuType = (typeof OPTIONS_APP_MENU_TYPE)[keyof typeof OPTIONS_APP_MENU_TYPE];
