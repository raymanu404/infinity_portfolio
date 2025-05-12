import { SpaceBetweenRowBox } from '@/Shared/Utils/Helpers/styled-components';
import { IconButton, Typography } from '@mui/material';
import { Maximize } from 'lucide-react';
import React from 'react';

interface PagePanelHeadTitleProps {
  title: string;
  handleDialogOpen?: () => void;
}

const PagePanelHeadTitle: React.FC<PagePanelHeadTitleProps> = ({ title, handleDialogOpen }) => {
  return (
    <SpaceBetweenRowBox>
      <Typography variant="h6">{title}</Typography>
      <IconButton onClick={handleDialogOpen}>
        <Maximize />
      </IconButton>
    </SpaceBetweenRowBox>
  );
};

PagePanelHeadTitle.displayName = 'PagePanelHeadTitle';

export default PagePanelHeadTitle;
