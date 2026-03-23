import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_LAYOUT_EFFECT_EVENT_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use UseLayoutEffectContent Hook';
const PAGE_NOTES = [] as NotesType;

const UseLayoutEffectContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_LAYOUT_EFFECT_EVENT_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseLayoutEffectContent.displayName = 'UseLayoutEffectContent';

export default UseLayoutEffectContent;
