import { theme } from '@/theme';
import { Box, Tabs, tabsClasses } from '@mui/material';
import React from 'react';
import { HOOKS_TABS_PAGES } from '../../constants';
import { getArrayGroupedByVariant } from '../../helpful';
import TabLabel from './TabLabel';
import TabPanelPage from './TabPanelPage';

const VerticalMenu: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const parentRef = React.useRef(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 420, gap: `${theme.spacing(2)}` }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
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
        {HOOKS_TABS_PAGES.map((tab, index) => {
          const { variant } = tab;
          const key = `${variant}-${index}`;

          const groupedTabs = getArrayGroupedByVariant(HOOKS_TABS_PAGES);
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
        {/* <TabsPageList ref={parentRef} /> */}
      </Tabs>
      {HOOKS_TABS_PAGES.map((page, index) => {
        const { children, title } = page;
        const key = `${title}-${index}`;

        return (
          <TabPanelPage index={index} isHidden={value !== index} key={key}>
            {children}
          </TabPanelPage>
        );
      })}
    </Box>
  );
};

VerticalMenu.displayName = 'VerticalMenu';

export default VerticalMenu;
