import { useUrlQueryParams } from '@/Shared/Hooks';
import { theme } from '@/theme';
import { Box, Tabs, tabsClasses } from '@mui/material';
import React from 'react';
import { getArrayGroupedByVariant } from '../../helpful';
import { TabContentI } from '../../interfaces';
import TabLabel from './Components/TabLabel';
import TabPanelPage from './Components/TabPanelPage';

interface VerticalMenuProps {
  tabsPages: TabContentI[];
}

const VerticalMenu: React.FC<VerticalMenuProps> = ({ tabsPages }) => {
  const parentRef = React.useRef(null);
  const { handleURLQueryParams, hashValueIndex } = useUrlQueryParams();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    handleURLQueryParams(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 420, gap: `${theme.spacing(2)}` }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={hashValueIndex}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderColor: 'divider',
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          [`& .${tabsClasses.flexContainer}`]: {},
          borderRadius: theme.custom.borderRadiusContainer?.main,
          boxShadow: theme.custom.boxShadows?.secondary,
        }}
      >
        {tabsPages.map((tab, index) => {
          const { variant } = tab;
          const key = `${variant}-${index}`;

          const groupedTabs = getArrayGroupedByVariant(tabsPages);
          let showHeader = false;
          let showBottom = false;

          groupedTabs.map(x => {
            if (tab.variant === x.key && tab.title === x.array[0].title) {
              showHeader = true;
              if (x.array.length === 1) {
                showBottom = true;
              }
              return;
            }

            if (tab.variant === x.key && tab.title === x.array[x.array.length - 1].title) {
              showBottom = true;
              return;
            }
          });

          return (
            <TabLabel
              index={index}
              key={key}
              tab={tab}
              showHeader={showHeader}
              showBottom={showBottom}
              parentRef={parentRef}
            />
          );
        })}
        {/* <TabsPageList ref={parentRef} tabsPages={tabsPages} /> */}
      </Tabs>
      {tabsPages.map((page, index) => {
        const { children, title } = page;
        const key = `${title}-${index}`;

        return (
          <TabPanelPage index={index} isHidden={hashValueIndex !== index} key={key}>
            {children}
          </TabPanelPage>
        );
      })}
    </Box>
  );
};

VerticalMenu.displayName = 'VerticalMenu';

export default VerticalMenu;
