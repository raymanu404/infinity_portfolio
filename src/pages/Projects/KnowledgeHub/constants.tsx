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

const HOOKS_TABS_PAGES: TabContentI[] = [
  {
    title: 'useState',
    variant: 'STATE HOOKS',
    children: <UseStateContent />,
  },
  {
    title: 'useReducer',
    variant: 'STATE HOOKS',
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

export { HOOKS_TABS_LABELS, HOOKS_TABS_PAGES, LEARNING_SECTIONS };
