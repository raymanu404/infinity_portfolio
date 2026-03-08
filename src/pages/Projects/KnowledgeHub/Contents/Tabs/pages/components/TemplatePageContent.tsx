import { FullModal } from '@/Shared/Components';
import { useModal } from '@/Shared/Components/Modal/useModal';
import Notes from '@/Shared/Components/Notes/Notes';
import { useUrlQueryParams } from '@/Shared/Hooks';
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
  const { handleClose, handleOpen, isOpen } = useModal({ fullModal: true });

  const { getUrlQuery } = useUrlQueryParams();

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

      {/* CONTENT */}
      <FullModal
        isOpen={isOpen || getUrlQuery.fullMode}
        handleClose={handleClose}
        title={pageTitle}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
          }}
        >
          {/* NOTES */}
          {notes && <Notes {...notes} />}
          <PageContentList pageContentList={pageContentList} />
        </Box>
      </FullModal>
    </Box>
  );
};

TemplatePageContent.displayName = 'TemplatePageContent';

export default TemplatePageContent;
