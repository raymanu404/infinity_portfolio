import { HooksSection, UseReducerContent, UseStateContent } from './Contents';
import { ContentI, TabContentI } from './interfaces';

const LEARNING_SECTIONS: ContentI[] = [
  {
    title: 'Hooks',
    elementId: 'hooks',
    children: <HooksSection />,
    subTitle: 'All Hooks',
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
} as const;

const HOOKS_TABS_PAGES: TabContentI[] = [
  {
    title: 'useState',
    variant: 'STATE',
    children: <UseStateContent />,
  },
  {
    title: 'useReducer',
    variant: 'STATE',
    children: <UseReducerContent />,
  },
  {
    title: 'useEffect',
    variant: 'EFFECT',
    children: <UseReducerContent />,
  },
];

const HOOKS_TABS_LABELS = HOOKS_TABS_PAGES.map(x => ({
  label: x.title,
  variant: x.variant,
}));

export { HOOK_CATEGORY_TYPE, HOOKS_TABS_LABELS, HOOKS_TABS_PAGES, LEARNING_SECTIONS };
