import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_REF_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use Ref Hook';

const UseRefContent: React.FC = () => {
  return <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_REF_PAGE_CONTENTS} />;
};

UseRefContent.displayName = 'UseRefContent';

export default UseRefContent;
