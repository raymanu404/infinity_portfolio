import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components';
import React from 'react';
import SectionContentList from './SectionContentList';

const MainContent: React.FC = () => {
  return (
    <BoxCardContent sx={{ flexBasis: '80%' }}>
      <SectionContentList />
    </BoxCardContent>
  );
};

MainContent.displayName = 'MainContent';

export default MainContent;
