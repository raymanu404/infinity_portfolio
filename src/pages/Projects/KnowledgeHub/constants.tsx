import { EscapeHatches, HooksSection } from './Contents/Sections';
import { ContentI } from './interfaces';

//TODO: Add lazy loading + Routing for each section and content to be opened whenever user has the link
// + also lazy load contents because performance stuff
const LEARNING_SECTIONS: ContentI[] = [
  {
    title: 'Hooks',
    elementId: 'hooks',
    children: <HooksSection />,
    subTitle: 'All Hooks',
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
} as const;

const SECTION_VARIANTS = {
  HOOKS: 'HOOKS',
  ESCAPE_HATCHES: 'ESCAPE_HATCHES',
  CUSTOM: 'CUSTOM',
} as const;

const HOOKS_SUB_SECTION = {
  useState: 'use-state',
  useReducer: 'use-reducer',
  useEffect: 'use-effect',
  useContext: 'use-context',
} as const;

const DEFAULT_OPEN_ALL = false;

export {
  DEFAULT_OPEN_ALL,
  HOOK_CATEGORY_TYPE,
  HOOKS_SUB_SECTION,
  LEARNING_SECTIONS,
  SECTION_VARIANTS,
};
