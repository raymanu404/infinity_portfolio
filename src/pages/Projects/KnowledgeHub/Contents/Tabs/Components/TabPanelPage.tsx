import { theme } from '@/theme';
import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface TabPanelProps extends PropsWithChildren {
  index: number;
  isHidden: boolean;
}

const TabPanelPage: React.FC<TabPanelProps> = props => {
  const { children, isHidden, index } = props;

  if (isHidden) {
    return null;
  }

  return (
    <Box
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{
        borderRadius: theme.custom.borderRadiusContainer?.main,
        boxShadow: theme.custom.boxShadows?.secondary,
        flexBasis: '90%',
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        width: '100%',
        overflowY: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

TabPanelPage.displayName = 'TabPanelPage';

export default TabPanelPage;
