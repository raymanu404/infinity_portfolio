import { AuthStrategies, EscapeHatches, HooksSection, ReactRouterV7 } from './Contents/Sections';
import {
  AUTH_STRATEGIES_TABS_PAGES,
  ESCAPE_HATCHES_TABS_PAGES,
  HOOKS_TABS_PAGES,
  REACT_ROUTER_TABS_PAGES,
} from './Contents/Sections/sections';
import { ContentI, TabContentI } from './interfaces';

//TODO: Add lazy loading + Routing for each section and content to be opened whenever user has the link
// + also lazy load contents because performance stuff
const LEARNING_SECTIONS: ContentI[] = [
  {
    title: 'Hooks',
    elementId: 'hooks',
    children: <HooksSection />,
    subTitle: 'All React v19 Hooks',
  },
  {
    title: 'React Router v7',
    elementId: 'react-router-v7',
    children: <ReactRouterV7 />,
    subTitle: 'React Router v7',
  },
  {
    title: 'Auth Strategies Roadmap',
    elementId: 'auth-strategies-roadmap',
    children: <AuthStrategies />,
    subTitle: 'Everything you need to know about Auth',
  },
  {
    title: 'Escape Hatches',
    elementId: 'escape-hatches',
    children: <EscapeHatches />,
    subTitle: 'Escape Hatches',
  },
];

const HOOK_CATEGORY_TYPE = {
  STATE: 'STATE',
  EFFECT: 'EFFECT',
  CONTEXT: 'CONTEXT',
  REF: 'REF',
  TRANSITION: 'TRANSITION',
  REACT_19: 'REACT_19',
  CUSTOM: 'CUSTOM',
  MEMO: 'MEMO',
  GENERAL: 'GENERAL',
} as const;

const SECTION_VARIANTS = {
  HOOKS: 'HOOKS',
  REACT_ROUTER_v7: 'REACT_ROUTER_v7',
  AUTH_STRATEGIES: 'AUTH_STRATEGIES',
  ESCAPE_HATCHES: 'ESCAPE_HATCHES',
  CUSTOM: 'CUSTOM',
} as const;

const ALL_TABS_PAGES_ARRAY = [
  HOOKS_TABS_PAGES,
  REACT_ROUTER_TABS_PAGES,
  AUTH_STRATEGIES_TABS_PAGES,
  ESCAPE_HATCHES_TABS_PAGES,
].flat();

const ALL_SUB_SECTION_ARRAY = Object.values(ALL_TABS_PAGES_ARRAY).map(
  x =>
    x.title.charAt(0).toLowerCase() +
    x.title
      .substring(1)
      .replaceAll(/[A-Z]/g, '-$&')
      .replaceAll(' ', '-')
      .replaceAll('--', '-')
      .toLocaleLowerCase(),
) as string[];

const ALL_LEARNING_SECTIONS_ELEMENT_ID_ARRAY = Object.values(LEARNING_SECTIONS).map(
  x => x.elementId,
) as string[];

const ALL_SECTIONS_ARRAY: Record<string, TabContentI[]> = {
  hooks: HOOKS_TABS_PAGES,
  'react-router-v7': REACT_ROUTER_TABS_PAGES,
  'auth-strategies-roadmap': AUTH_STRATEGIES_TABS_PAGES,
  'escape-hatches': ESCAPE_HATCHES_TABS_PAGES,
};

const URL_QUERY_TYPE = {
  openAll: 'openAll',
  fullMode: 'fullMode',
} as const;

const OPTIONS_APP_MENU_TYPE = {
  fullMode: 'fullMode',
  authTaskManager: 'authTaskManager',
} as const;

const DEFAULT_OPEN_ALL = false;

export {
  ALL_LEARNING_SECTIONS_ELEMENT_ID_ARRAY,
  ALL_SECTIONS_ARRAY,
  ALL_SUB_SECTION_ARRAY,
  DEFAULT_OPEN_ALL,
  HOOK_CATEGORY_TYPE,
  LEARNING_SECTIONS,
  OPTIONS_APP_MENU_TYPE,
  SECTION_VARIANTS,
  URL_QUERY_TYPE,
};
