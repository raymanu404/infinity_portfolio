import { FlexWithGapBox } from '@/Shared/Utils/Helpers/styled-components';
import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const PagePanelContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ width: '100%', margin: '20px 0' }}>
      <FlexWithGapBox>{children}</FlexWithGapBox>
    </Box>
  );
};

PagePanelContent.displayName = 'PagePanelContent';

export default PagePanelContent;
