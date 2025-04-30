import { forwardRef } from 'react';
import { HOOKS_TABS_PAGES } from '../../constants';
import { getArrayGroupedByVariant } from '../../helpful';
import TabLabel from './TabLabel';

const TabsPageList = forwardRef<HTMLDivElement>(function TabsPageList(_, ref) {
  return (
    <>
      {HOOKS_TABS_PAGES.map((tab, index) => {
        const { variant } = tab;
        const key = `${variant}-${index}`;

        const groupedTabs = getArrayGroupedByVariant(HOOKS_TABS_PAGES);
        let showHeader = false;
        let showBottom = false;

        groupedTabs.map(x => {
          if (tab.variant === x.key && tab.title === x.array[0].title) {
            showHeader = true;
            return;
          }

          if (tab.variant === x.key && tab.title === x.array[x.array.length - 1].title) {
            showBottom = true;
            return;
          }
        });

        console.log(key);
        return (
          <TabLabel
            index={index}
            key={key}
            tab={tab}
            showHeader={showHeader}
            showBottom={showBottom}
            parentRef={ref}
          />
        );
      })}
    </>
  );
});

TabsPageList.displayName = 'TabsPageList';

export default TabsPageList;
