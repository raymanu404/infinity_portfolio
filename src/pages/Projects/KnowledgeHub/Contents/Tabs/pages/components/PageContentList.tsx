import SectionContent from '@/pages/Projects/Components/SectionContent';
import { NoResult } from '@/Shared/Components';
import { Switcher } from '@/Shared/Components/Switcher/Switcher';
import { useSwitcher } from '@/Shared/Components/Switcher/useSwitcher';
import React from 'react';
import { PageContentI } from '../interfaces';
import PagePanelContent from './PagePanelContent';

interface PageContentListProps {
  pageContentList: PageContentI[];
}

const PageContentList: React.FC<PageContentListProps> = ({ pageContentList = [] }) => {
  const { isSwitched, setIsSwitched } = useSwitcher();

  return (
    <PagePanelContent>
      {pageContentList.length > 0 && (
        <>
          {<Switcher isSwitched={isSwitched} setIsSwitched={setIsSwitched} showIcons />}
          {pageContentList.map(({ elementId, title, children, defaultOpen }) => (
            <SectionContent
              key={`${elementId}-${title}`}
              content={{
                elementId: elementId,
                title: title,
              }}
              brutalClose={isSwitched || !defaultOpen}
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
