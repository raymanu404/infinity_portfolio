import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_CUSTOM_HOOK_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use Custom Hook';

const UseCustomHookContent: React.FC = () => {
  return (
    <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_CUSTOM_HOOK_PAGE_CONTENTS} />
  );
};

UseCustomHookContent.displayName = 'UseCustomHookContent';

export default UseCustomHookContent;
