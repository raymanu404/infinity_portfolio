import { Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const PagePanelContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container sx={{ width: '94%' }}>{children}</Container>;
};

PagePanelContent.displayName = 'PagePanelContent';

export default PagePanelContent;
