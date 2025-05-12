import { Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const PagePanelContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container sx={{ width: '100%', padding: '10px 0' }}>{children}</Container>;
};

PagePanelContent.displayName = 'PagePanelContent';

export default PagePanelContent;
