import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_EFFECT_EVENT_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use UseEffectEventContent Hook';
const PAGE_NOTES = [
  {
    note: 'is a React Hook that lets you separate events from Effects.',
  },
] as NotesType;

const UseEffectEventContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_EFFECT_EVENT_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseEffectEventContent.displayName = 'UseEffectEventContent';

export default UseEffectEventContent;
