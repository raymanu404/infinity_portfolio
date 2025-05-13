import { PageContentI } from './interfaces';
import { BasicExample } from './UseReducer/Examples';
import {
  ArrayExample,
  CounterExample,
  SwordCursor,
  UpdateNestedObjectsExample,
} from './UseState/Examples';

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

const USE_REDCUER_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example',
    children: <BasicExample />,
  },
];

const USE_EFFECT_PAGE_CONTENTS: PageContentI[] = [];

const USE_CONTEXT_PAGE_CONTENTS: PageContentI[] = [];

export {
  USE_CONTEXT_PAGE_CONTENTS,
  USE_EFFECT_PAGE_CONTENTS,
  USE_REDCUER_PAGE_CONTENTS,
  USE_STATE_PAGE_CONTENTS,
};
