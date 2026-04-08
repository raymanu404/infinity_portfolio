import React from 'react';
import VerticalMenu from '../../Tabs/VerticalMenu';
import { REACT_ROUTER_TABS_PAGES } from '../sections';

const ReactRouterV7: React.FC = () => {
  return <VerticalMenu tabsPages={REACT_ROUTER_TABS_PAGES} />;
};

ReactRouterV7.displayName = 'ReactRouterV7';

export default ReactRouterV7;
