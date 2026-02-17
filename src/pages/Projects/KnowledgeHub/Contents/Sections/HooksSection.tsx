import React from 'react';
import VerticalMenu from '../Tabs/VerticalMenu';
import { HOOKS_TABS_PAGES } from './sections';

const HooksSection: React.FC = () => {
  return <VerticalMenu tabsPages={HOOKS_TABS_PAGES} />;
};

HooksSection.displayName = 'HooksSection';

export default HooksSection;
