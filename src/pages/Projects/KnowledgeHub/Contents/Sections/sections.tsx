import { TabContentI } from '../../interfaces';
import { ReferenceValuesWithRefContent } from '../Tabs/pages/EscapeHatches';
import {
  UseContextContent,
  UseCustomHookContent,
  UseEffectContent,
  UseReducerContent,
  UseRefContent,
  UseStateContent,
} from '../Tabs/pages/Hooks';

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
    children: <UseEffectContent />,
  },
  {
    title: 'useContext',
    variant: 'CONTEXT',
    children: <UseContextContent />,
  },
  {
    title: 'useRef',
    variant: 'REF',
    children: <UseRefContent />,
  },
  {
    title: 'useCustomHook',
    variant: 'CUSTOM',
    children: <UseCustomHookContent />,
  },
];

const ESCAPE_HATCHES_TABS_PAGES: TabContentI[] = [
  {
    title: 'How to “remember” information without re-rendering ',
    variant: 'ESCAPE_HATCHES',
    children: <ReferenceValuesWithRefContent />,
  },
];

export { ESCAPE_HATCHES_TABS_PAGES, HOOKS_TABS_PAGES };
