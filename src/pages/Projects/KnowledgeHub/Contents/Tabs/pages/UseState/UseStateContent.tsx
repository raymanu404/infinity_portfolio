import SectionContent from '@/pages/Projects/Components/SectionContent';
import { FullModal } from '@/Shared/Components';
import { useModal } from '@/Shared/Components/Modal/useModal';
import { useSwitcher } from '@/Shared/Components/Switcher/useSwitcher';
import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import { PagePanelContent, PagePanelHeadTitle } from '../components';
import { ArrayExample, CounterExample, SwordCursor, UpdateNestedObjectsExample } from './Examples';

const PAGE_TITLE = 'Use State Hook';

const UseStateContent: React.FC = () => {
  const { SwitcherComponent, isSwitched: closedAll } = useSwitcher({
    isClosed: true,
    showIcons: true,
  });
  const { handleClose, handleOpen, isOpen } = useModal();

  const PageContent = useMemo(
    () => (
      <PagePanelContent>
        {SwitcherComponent}
        <SectionContent
          content={{
            elementId: 'array-example-id',
            title: 'Array Example',
          }}
          brutalClose={closedAll}
        >
          <ArrayExample />
        </SectionContent>
        <SectionContent
          content={{
            elementId: 'counter-example-id',
            title: 'Updater Function for setState',
          }}
          brutalClose={closedAll}
        >
          <CounterExample />
        </SectionContent>
        <SectionContent
          content={{
            elementId: 'use-nested-objects-example-id',
            title: 'Use Nested Objects Example With Immer',
          }}
          brutalClose={closedAll}
        >
          <UpdateNestedObjectsExample />
        </SectionContent>
        <SectionContent
          content={{
            elementId: 'update-objects-example-id',
            title: 'Update Objects Properly with useState',
          }}
          brutalClose={closedAll}
        >
          <SwordCursor />
        </SectionContent>
      </PagePanelContent>
    ),
    [closedAll],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
      }}
    >
      {/* HEAD/TITLE */}
      <PagePanelHeadTitle title={PAGE_TITLE} handleDialogOpen={handleOpen} />
      {/* CONTENT */}

      <FullModal isOpen={isOpen} handleClose={handleClose} title={PAGE_TITLE}>
        {PageContent}
      </FullModal>
    </Box>
  );
};

UseStateContent.displayName = 'UseStateContent';

export default UseStateContent;
