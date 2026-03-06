import { getArrayGroupedByVariant } from '../../../helpful';
import { TabContentI } from '../../../interfaces';
import TabLabel from './TabLabel';

/**
 * DEPRECATED
 * TODO:Make this useable later
 */

const TabsPageList = function TabsPageList({
  ref,
  tabsPages,
}: { tabsPages: TabContentI[] } & {
  ref: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {tabsPages.map((tab, index) => {
        const { variant } = tab;
        const key = `${variant}-${index}`;

        const groupedTabs = getArrayGroupedByVariant(tabsPages);
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

        return (
          <TabLabel
            index={index}
            key={key}
            tab={tab}
            showHeader={showHeader}
            showBottom={showBottom}
            ref={ref}
          />
        );
      })}
    </>
  );
};

TabsPageList.displayName = 'TabsPageList';

export default TabsPageList;
