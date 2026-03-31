import { PageContentI } from '../interfaces';
import { BasicExample } from './General/Examples';

const GENERAL_REACT_ROUTER_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'basic-example-id',
    title: 'Basic Example',
    children: <BasicExample />,
  },
];

export { GENERAL_REACT_ROUTER_PAGE_CONTENTS };
