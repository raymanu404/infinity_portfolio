import { Box } from '@mui/material';
import React from 'react';
import SectionContentList from './SectionContentList';

const MainContent: React.FC = () => {
  return (
    <Box sx={{ flexBasis: '100%' }}>
      <SectionContentList />
    </Box>
  );
};

MainContent.displayName = 'MainContent';

export default MainContent;
