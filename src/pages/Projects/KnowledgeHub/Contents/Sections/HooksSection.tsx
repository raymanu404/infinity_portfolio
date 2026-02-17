import React from 'react';
import { HOOKS_TABS_PAGES } from '../../constants';
import VerticalMenu from '../Tabs/VerticalMenu';

const HooksSection: React.FC = () => {
  return <VerticalMenu tabsPages={HOOKS_TABS_PAGES} />;
};

HooksSection.displayName = 'HooksSection';

export default HooksSection;
