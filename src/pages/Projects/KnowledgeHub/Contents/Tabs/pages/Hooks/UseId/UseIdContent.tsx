import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_ID_HOOK_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseId Hook';

const UseIdContent: React.FC = () => {
  return <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_ID_HOOK_PAGE_CONTENTS} />;
};

UseIdContent.displayName = 'UseIdContent';

export default UseIdContent;
