import React from 'react';
import { TemplatePageContent } from '../components';
import { USE_STATE_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use State Hook';

const UseStateContent: React.FC = () => {
  return <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_STATE_PAGE_CONTENTS} />;
};

UseStateContent.displayName = 'UseStateContent';

export default UseStateContent;
