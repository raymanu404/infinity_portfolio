import React from 'react';
import VerticalMenu from '../../Tabs/VerticalMenu';
import { AUTH_STRATEGIES_TABS_PAGES } from '../sections';

const AuthStrategies: React.FC = () => {
  return <VerticalMenu tabsPages={AUTH_STRATEGIES_TABS_PAGES} />;
};

AuthStrategies.displayName = 'AuthStrategies';

export default AuthStrategies;
