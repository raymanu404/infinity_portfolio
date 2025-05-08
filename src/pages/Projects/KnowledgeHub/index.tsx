import { theme } from '@/theme';
import { Box, Stack } from '@mui/material';
import React from 'react';
import MainContent from './MainContent';
import SideNavigation from './SideNavigation';

const KnowledgeHub: React.FC = () => {
  return (
    <Box
      sx={{
        padding: `${theme.spacing(2)}`,
        margin: `0 ${theme.spacing(2)}`,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          gap: `${theme.spacing(4)}`,
          margin: 0,
        }}
        direction={{ xs: 'column-reverse', sm: 'row' }}
      >
        <MainContent />
        <SideNavigation />
      </Stack>
    </Box>
  );
};

KnowledgeHub.displayName = 'KnowledgeHub';

export default KnowledgeHub;
