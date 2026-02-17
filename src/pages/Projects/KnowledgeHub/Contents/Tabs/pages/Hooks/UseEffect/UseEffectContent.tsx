import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_EFFECT_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use Effect Hook';

const UseEffectContent: React.FC = () => {
  return <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_EFFECT_PAGE_CONTENTS} />;
};

UseEffectContent.displayName = 'UseEffectContent';

export default UseEffectContent;
