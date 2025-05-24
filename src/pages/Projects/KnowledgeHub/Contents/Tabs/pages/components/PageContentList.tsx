import SectionContent from '@/pages/Projects/Components/SectionContent';
import { DEFAULT_OPEN_ALL } from '@/pages/Projects/KnowledgeHub/constants';
import { NoResult } from '@/Shared/Components';
import { useSwitcher } from '@/Shared/Components/Switcher/useSwitcher';
import React from 'react';
import { PageContentI } from '../interfaces';
import PagePanelContent from './PagePanelContent';

interface PageContentListProps {
  pageContentList: PageContentI[];
}

const PageContentList: React.FC<PageContentListProps> = ({ pageContentList = [] }) => {
  const { SwitcherComponent, isSwitched: closedAll } = useSwitcher({
    isClosed: DEFAULT_OPEN_ALL,
    showIcons: true,
  });

  return (
    <PagePanelContent>
      {pageContentList.length > 0 && (
        <>
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
        </>
      )}

      {pageContentList.length === 0 && <NoResult />}
    </PagePanelContent>
  );
};

PageContentList.displayName = 'PageContentList';

export default PageContentList;
