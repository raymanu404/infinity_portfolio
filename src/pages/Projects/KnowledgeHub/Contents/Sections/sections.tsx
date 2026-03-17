import { TabContentI } from '../../interfaces';
import { ReferenceValuesWithRefContent } from '../Tabs/pages/EscapeHatches';
import {
  UseCallbackContent,
  UseContextContent,
  UseCustomHookContent,
  UseDeferredValueContent,
  UseEffectContent,
  UseIdContent,
  UseImperativeHandleContent,
  UseMemoContent,
  UseOptimisticContent,
  UseReducerContent,
  UseRefContent,
  UseStateContent,
  UseTransitionContent,
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
    title: 'useCallback',
    variant: 'MEMO',
    children: <UseCallbackContent />,
  },
  {
    title: 'useMemo',
    variant: 'MEMO',
    children: <UseMemoContent />,
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
    title: 'useImperativeHandle',
    variant: 'REF',
    children: <UseImperativeHandleContent />,
  },
  {
    title: 'useTransition',
    variant: 'TRANSITION',
    children: <UseTransitionContent />,
  },
  {
    title: 'useDeferredValue',
    variant: 'TRANSITION',
    children: <UseDeferredValueContent />,
  },
  {
    title: 'useOptimistic',
    variant: 'TRANSITION',
    children: <UseOptimisticContent />,
  },
  {
    title: 'useId',
    variant: 'GENERAL',
    children: <UseIdContent />,
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
