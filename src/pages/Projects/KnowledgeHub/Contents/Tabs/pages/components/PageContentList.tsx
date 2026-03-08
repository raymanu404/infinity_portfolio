import SectionContent from '@/pages/Projects/Components/SectionContent';
import { NoResult } from '@/Shared/Components';
import React from 'react';
import { PageContentI } from '../interfaces';
import PagePanelContent from './PagePanelContent';

interface PageContentListProps {
  pageContentList: PageContentI[];
}

const PageContentList: React.FC<PageContentListProps> = ({ pageContentList = [] }) => {
  // const { isSwitched, setIsSwitched } = useSwitcher();

  return (
    <PagePanelContent>
      {pageContentList.length > 0 && (
        <>
          {/* TODO: ENABLE THIS WHEN WE FIX TOGGLE + QUERY PARAM URL ISSUES */}
          {/* {<Switcher isSwitched={isSwitched} setIsSwitched={setIsSwitched} showIcons />} */}
          {pageContentList.map(({ elementId, title, children, defaultOpen }) => (
            <SectionContent
              key={`${elementId}-${title}`}
              content={{
                elementId: elementId,
                title: title,
              }}
              brutalClose={!defaultOpen}
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
