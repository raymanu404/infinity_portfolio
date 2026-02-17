import React from 'react';
import VerticalMenu from '../Tabs/VerticalMenu';
import { ESCAPE_HATCHES_TABS_PAGES } from './sections';

const EscapeHatches: React.FC = () => {
  return <VerticalMenu tabsPages={ESCAPE_HATCHES_TABS_PAGES} />;
};

EscapeHatches.displayName = 'EscapeHatches';

export default EscapeHatches;
