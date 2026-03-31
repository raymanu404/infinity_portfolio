import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_REF_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use Ref Hook';

const PAGE_NOTES = [
  {
    note: "useRef is a React hook that allows you to that lets you reference a value that's not needed for rendering.",
    subNotes: [
      {
        note: 'Referencing a value with a ref',
      },
      {
        note: 'Manipulating the DOM with a ref',
      },
      {
        note: 'Avoiding recreating the ref contents on every render',
      },
    ],
  },
  {
    note: 'Refs are not appropriate for storing information you want to display on the screen',
  },
  {
    note: 'Do not write or read ref.current during rendering.',
    subNotes: [
      {
        note: 'You can read or write refs from event handlers or effects instead.',
      },
    ],
  },
] as NotesType;

const UseRefContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_REF_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseRefContent.displayName = 'UseRefContent';

export default UseRefContent;
