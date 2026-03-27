import { Box } from '@mui/material';
import React from 'react';
import SectionContentList from './SectionContentList';

const MainContent: React.FC = () => {
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <SectionContentList />
    </Box>
  );
};

MainContent.displayName = 'MainContent';

export default MainContent;
