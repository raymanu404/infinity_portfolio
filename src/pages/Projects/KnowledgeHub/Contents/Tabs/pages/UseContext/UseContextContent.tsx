import React from 'react';
import { TemplatePageContent } from '../components';
import { USE_CONTEXT_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use Context Hook';

const UseContextContent: React.FC = () => {
  return <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_CONTEXT_PAGE_CONTENTS} />;
};

UseContextContent.displayName = 'UseContextContent';

export default UseContextContent;
