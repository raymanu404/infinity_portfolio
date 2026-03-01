import { PageContentI } from '../interfaces';
import { UseCustomBasic } from './Custom/Examples';
import { NoSkippingRerendering, SkippingReRendering } from './UseCallback/Examples';
import { AuthExample, BasicUseContext } from './UseContext/Examples';
import { Basic, CounterEffect } from './UseEffect/Examples';
import { BasicUseMemo } from './UseMemo/Examples';
import { BasicExample, TodoListExample } from './UseReducer/Examples';
import { BasicUseRef, CounterRef, ManipulateDOM, ParentRef } from './UseRef/Examples';
import {
  ArrayExample,
  CounterExample,
  SwordCursor,
  UpdateNestedObjectsExample,
} from './UseState/Examples';

const DASH_SPLIT_STRING = '-';

const USE_STATE_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'array-example-id',
    title: 'Array Example',
    children: <ArrayExample />,
  },
  {
    elementId: 'counter-example-id',
    title: 'Updater Function for setState',
    children: <CounterExample />,
  },
  {
    elementId: 'use-nested-objects-example-id',
    title: 'Use Nested Objects Example With Immer',
    children: <UpdateNestedObjectsExample />,
  },
  {
    elementId: 'update-objects-example-id',
    title: 'Update Objects Properly with useState',
    children: <SwordCursor />,
  },
];

const USE_REDUCER_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example',
    children: <BasicExample />,
  },
  {
    elementId: 'todo-list-example-id',
    title: 'Todo List Example',
    children: <TodoListExample />,
    defaultOpen: true,
  },
];

const USE_EFFECT_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example UseEffect',
    children: <Basic />,
  },
  {
    elementId: 'counter-example-id',
    title: 'Counter Example UseEffect',
    children: <CounterEffect />,
  },
];

const USE_CONTEXT_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example UseContext',
    children: <BasicUseContext />,
  },
  {
    elementId: 'auth-context-example-id',
    title: 'Auth Context Example',
    children: <AuthExample />,
  },
];

const USE_REF_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example UseRef',
    children: <BasicUseRef />,
  },
  {
    elementId: 'counter-example-id',
    title: 'Counter Example UseRef',
    children: <CounterRef />,
  },
  {
    elementId: 'manipulate-dom-example-id',
    title: 'Manipulate DOM Example UseRef',
    children: <ManipulateDOM />,
  },
  {
    elementId: 'parent-ref-example-id',
    title: 'Parent Ref Example UseRef',
    children: <ParentRef />,
  },
];

const USE_CALLBACK_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'skipping-rerendering-example-id',
    title: 'Skipping Re-rendering Example UseCallback',
    children: <SkippingReRendering />,
  },
  {
    elementId: 'no-skipping-rerendering-example-id',
    title: 'No Skipping Re-rendering Example',
    children: <NoSkippingRerendering />,
  },
];

const USE_MEMO_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example UseMemo',
    children: <BasicUseMemo />,
  },
];

const USE_CUSTOM_HOOK_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example UseCustomHook',
    children: <UseCustomBasic />,
  },
];

export {
  DASH_SPLIT_STRING,
  USE_CALLBACK_PAGE_CONTENTS,
  USE_CONTEXT_PAGE_CONTENTS,
  USE_CUSTOM_HOOK_PAGE_CONTENTS,
  USE_EFFECT_PAGE_CONTENTS,
  USE_MEMO_PAGE_CONTENTS,
  USE_REDUCER_PAGE_CONTENTS,
  USE_REF_PAGE_CONTENTS,
  USE_STATE_PAGE_CONTENTS,
};
