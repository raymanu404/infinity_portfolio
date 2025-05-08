import { Box, Typography } from '@mui/material';
import React from 'react';

interface PagePanelHeadTitleProps {
  title: string;
}

const PagePanelHeadTitle: React.FC<PagePanelHeadTitleProps> = ({ title }) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};

PagePanelHeadTitle.displayName = 'PagePanelHeadTitle';

export default PagePanelHeadTitle;
