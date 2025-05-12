import SectionContent from '@/pages/Projects/Components/SectionContent';
import { useSwitcher } from '@/Shared/Components/Switcher/Switcher';
import { FlexWithGapBox } from '@/Shared/Utils/Helpers/styled-components';
import { theme } from '@/theme';
import { Box } from '@mui/material';
import React from 'react';
import { PagePanelContent, PagePanelHeadTitle } from '../components';
import ArrayExample from './Examples/ArrayExample';
import SwordCursor from './Examples/SwordCursor';
import UpdateNestedObjectsExample from './Examples/UpdateNestedObjectsExample';

const UseStateContent: React.FC = () => {
  const { SwitcherComponent, isSwitched: closedAll } = useSwitcher({
    isClosed: true,
    showIcons: true,
  });

  return (
    <Box
      sx={{
        padding: `${theme.spacing(2)}px 0`,
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
      }}
    >
      {/* HEAD/TITLE */}
      <PagePanelHeadTitle title="Use State Hook" />
      {/* CONTENT */}
      <PagePanelContent>
        <FlexWithGapBox>
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
        </FlexWithGapBox>
      </PagePanelContent>
    </Box>
  );
};

UseStateContent.displayName = 'UseStateContent';

export default UseStateContent;
