import { FullModal } from '@/Shared/Components';
import { useModal } from '@/Shared/Components/Modal/useModal';
import Notes from '@/Shared/Components/Notes/Notes';
import { Box } from '@mui/material';
import React, { ComponentProps } from 'react';
import { PageContentI } from '../interfaces';
import PageContentList from './PageContentList';
import PagePanelHeadTitle from './PagePanelHeadTitle';

interface TemplatePageContentProps {
  pageTitle: string;
  pageContentList: PageContentI[];
  notes?: ComponentProps<typeof Notes>;
}

const TemplatePageContent: React.FC<TemplatePageContentProps> = ({
  pageContentList,
  pageTitle,
  notes,
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
      <PagePanelHeadTitle
        title={pageTitle}
        handleDialogOpen={handleOpen}
        isDisabledModal={pageContentList.length === 0}
      />

      {/* NOTES */}
      {notes && <Notes {...notes} />}

      {/* CONTENT */}
      <FullModal isOpen={isOpen} handleClose={handleClose} title={pageTitle}>
        <PageContentList pageContentList={pageContentList} />
      </FullModal>
    </Box>
  );
};

TemplatePageContent.displayName = 'TemplatePageContent';

export default TemplatePageContent;
