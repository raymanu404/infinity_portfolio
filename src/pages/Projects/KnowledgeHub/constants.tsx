import { HooksSection, UseReducerContent, UseStateContent } from './Contents';
import { ContentI, TabContentI } from './interfaces';

//TODO: Add lazy loading + Routing for each section and content to be opened whenever user has the link
// + also lazy load contents because performance stuff
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
  {
    title: 'useContext',
    variant: 'CONTEXT',
    children: <UseStateContent />,
  },
];

export { HOOK_CATEGORY_TYPE, HOOKS_TABS_PAGES, LEARNING_SECTIONS };
