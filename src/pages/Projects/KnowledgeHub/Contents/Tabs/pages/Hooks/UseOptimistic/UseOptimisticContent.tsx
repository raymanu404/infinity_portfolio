import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_OPTIMISTIC_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseOptimisticContent Hook';

const PAGE_NOTES = [
  { note: 'is a React Hook that lets you optimistically update the UI.' },
  {
    note: 'To use the optimistic state, call the set function inside an Action',
    subNotes: [
      {
        note: 'Actions are functions called inside startTransition',
      },
    ],
  },
  { note: 'We can only call optimistic Setter from event handlers, effects, or other callbacks' },
] as NotesType;

const UseOptimisticContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_OPTIMISTIC_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseOptimisticContent.displayName = 'UseOptimisticContent';

export default UseOptimisticContent;
