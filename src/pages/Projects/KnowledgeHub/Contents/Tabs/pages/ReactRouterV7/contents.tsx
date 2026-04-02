import { PageContentI } from '../interfaces';
import { NestedRoutesExample } from './General/Examples';

const GENERAL_REACT_ROUTER_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'nested-routes-example-id',
    title: 'Nested Routes Example',
    children: <NestedRoutesExample />,
  },
];

export { GENERAL_REACT_ROUTER_PAGE_CONTENTS };
