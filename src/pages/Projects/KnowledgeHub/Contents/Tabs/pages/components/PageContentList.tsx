import SectionContent from '@/pages/Projects/Components/SectionContent';
import { useSwitcher } from '@/Shared/Components/Switcher/useSwitcher';
import React from 'react';
import { PageContentI } from '../interfaces';
import PagePanelContent from './PagePanelContent';

interface PageContentListProps {
  pageContentList: PageContentI[];
}

const PageContentList: React.FC<PageContentListProps> = ({ pageContentList = [] }) => {
  const { SwitcherComponent, isSwitched: closedAll } = useSwitcher({
    isClosed: true,
    showIcons: true,
  });

  return (
    <PagePanelContent>
      {SwitcherComponent}
      {pageContentList.map(({ elementId, title, children }) => (
        <SectionContent
          key={`${elementId}-${title}`}
          content={{
            elementId: elementId,
            title: title,
          }}
          brutalClose={closedAll}
        >
          {children}
        </SectionContent>
      ))}
    </PagePanelContent>
  );
};

PageContentList.displayName = 'PageContentList';

export default PageContentList;
