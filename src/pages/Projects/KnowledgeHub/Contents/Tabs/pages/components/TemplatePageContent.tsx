import { FullModal } from '@/Shared/Components';
import { useModal } from '@/Shared/Components/Modal/useModal';
import { Box } from '@mui/material';
import React from 'react';
import { PageContentI } from '../interfaces';
import PageContentList from './PageContentList';
import PagePanelHeadTitle from './PagePanelHeadTitle';

interface TemplatePageContentProps {
  pageTitle: string;
  pageContentList: PageContentI[];
}

const TemplatePageContent: React.FC<TemplatePageContentProps> = ({
  pageContentList,
  pageTitle,
}) => {
  const { handleClose, handleOpen, isOpen } = useModal();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
      }}
    >
      {/* HEAD/TITLE */}
      <PagePanelHeadTitle title={pageTitle} handleDialogOpen={handleOpen} />

      {/* CONTENT */}
      <FullModal isOpen={isOpen} handleClose={handleClose} title={pageTitle}>
        <PageContentList pageContentList={pageContentList ?? []} />
      </FullModal>
    </Box>
  );
};

TemplatePageContent.displayName = 'TemplatePageContent';

export default TemplatePageContent;
