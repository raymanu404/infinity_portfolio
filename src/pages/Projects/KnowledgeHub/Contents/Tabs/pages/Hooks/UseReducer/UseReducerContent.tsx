import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_REDUCER_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use Reducer Hook';

const UseReducerContent: React.FC = () => {
  return <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_REDUCER_PAGE_CONTENTS} />;
};

UseReducerContent.displayName = 'UseReducerContent';

export default UseReducerContent;
