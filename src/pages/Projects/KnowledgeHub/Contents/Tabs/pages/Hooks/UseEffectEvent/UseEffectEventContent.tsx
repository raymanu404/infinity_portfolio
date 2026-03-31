import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_EFFECT_EVENT_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use UseEffectEventContent Hook';
const PAGE_NOTES = [
  {
    note: 'is a React Hook that lets you separate events from Effects.',
  },
  {
    note: "Don't use Effect Events to skip dependencies, identify no-reactive elements/logic and extract them",
    subNotes: [
      {
        note: 'If a value should cause your Effect to re-run, keep it as a dependency. Only use Effect Events for logic that genuinely should not re-trigger your Effect',
      },
    ],
  },
] as NotesType;

const UseEffectEventContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_EFFECT_EVENT_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseEffectEventContent.displayName = 'UseEffectEventContent';

export default UseEffectEventContent;
