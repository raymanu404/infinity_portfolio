import React from 'react';
import { TemplatePageContent } from '../../components';
import { ESCAPE_HATCHES_PAGES_CONTENT } from '../contents';

const PAGE_TITLE = 'Reference Values with Ref';

const ReferenceValuesWithRefContent: React.FC = () => {
  return (
    <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={ESCAPE_HATCHES_PAGES_CONTENT} />
  );
};

ReferenceValuesWithRefContent.displayName = 'ReferenceValuesWithRefContent';

export default ReferenceValuesWithRefContent;
