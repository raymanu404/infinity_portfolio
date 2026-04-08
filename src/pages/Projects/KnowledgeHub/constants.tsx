import { AuthStrategies, EscapeHatches, HooksSection, ReactRouterV7 } from './Contents/Sections';
import { HOOKS_TABS_PAGES } from './Contents/Sections/sections';
import { ContentI } from './interfaces';

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

const HOOKS_SUB_SECTION_ARRAY = Object.values(HOOKS_TABS_PAGES).map(x =>
  x.title.replaceAll(/[A-Z]/g, '-$&').toLocaleLowerCase(),
) as string[];

const DEFAULT_OPEN_ALL = false;

export {
  DEFAULT_OPEN_ALL,
  HOOK_CATEGORY_TYPE,
  HOOKS_SUB_SECTION_ARRAY,
  LEARNING_SECTIONS,
  SECTION_VARIANTS,
};
