import { useUrlQueryParams } from '@/Shared/Hooks';
import { theme } from '@/theme';
import { Box, Tabs, tabsClasses } from '@mui/material';
import React, { useCallback, useEffect, useEffectEvent } from 'react';
import { getArrayGroupedByVariant } from '../../helpful';
import { TabContentI } from '../../interfaces';
import TabLabel from './Components/TabLabel';
import TabPanelPage from './Components/TabPanelPage';

interface VerticalMenuProps {
  tabsPages: TabContentI[];
}

const VerticalMenu: React.FC<VerticalMenuProps> = ({ tabsPages }) => {
  const parentRef = React.useRef<HTMLDivElement[] | null>(null);
  const { handleURLQueryParams, hashValueIndex } = useUrlQueryParams();
  const [tabIndex, setTabIndex] = React.useState(0);

  const updateTabIndex = useEffectEvent(() => {
    setTabIndex(+hashValueIndex);
  });

  useEffect(() => {
    if (isNaN(hashValueIndex)) return;
    if (hashValueIndex < 0) return;
    if (hashValueIndex >= tabsPages.length) return;

    if (hashValueIndex === tabIndex) return;

    if (parentRef.current) {
      const parent = parentRef.current.find(el =>
        el.id.includes(`vertical-tab-${hashValueIndex}`),
      ) as HTMLDivElement;

      parent.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
    updateTabIndex();
  }, [hashValueIndex, tabIndex, tabsPages.length]);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: number) => {
      handleURLQueryParams(+newValue);
      setTabIndex(newValue);

      console.log({ newValue });
    },
    [handleURLQueryParams],
  );

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: 420, gap: `${theme.spacing(2)}` }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        value={isNaN(tabIndex) ? 0 : tabIndex}
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
            }

            if (tab.variant === x.key && tab.title === x.array[x.array.length - 1].title) {
              showBottom = true;
            }
          });

          return (
            <TabLabel
              index={index}
              key={key}
              tab={tab}
              showHeader={showHeader}
              showBottom={showBottom}
              ref={el => {
                if (el && !parentRef.current?.includes(el)) {
                  parentRef.current = [...(parentRef.current ?? []), el];
                }
              }}
            />
          );
        })}
        {/* <TabsPageList ref={parentRef} tabsPages={tabsPages} /> */}
      </Tabs>
      {tabsPages.map((page, index) => {
        const { children, title } = page;
        const key = `${title}-${index}`;

        return (
          <TabPanelPage index={index} isHidden={tabIndex !== index} key={key}>
            {children}
          </TabPanelPage>
        );
      })}
    </Box>
  );
};

VerticalMenu.displayName = 'VerticalMenu';

export default VerticalMenu;
