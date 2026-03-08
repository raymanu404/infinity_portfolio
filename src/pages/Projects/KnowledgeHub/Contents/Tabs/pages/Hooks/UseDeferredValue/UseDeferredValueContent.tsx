import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_DEFERRED_VALUE_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseDeferredValueContent Hook';

const PAGE_NOTES = [
  {
    note: 'is a React Hook that lets you defer updating a part of the UI until after the main rendering work is done. It is useful for improving performance and user experience by allowing you to prioritize updates that are more critical to the user.',
  },
  {
    note: 'When an update is inside a Transition, useDeferredValue always returns the new value and does not spawn a deferred render, since the update is already deferred',
  },
  {
    note: 'The values you pass to useDeferredValue should either be primitive values (like strings and numbers) or objects created outside of rendering. If you create a new object during rendering and immediately pass it to useDeferredValue, it will be different on every render, causing unnecessary background re-renders',
    subNotes: [
      {
        note: 'The deferred “background” rendering is interruptible. For example, if you type into the input again, React will abandon it and restart with the new value. React will always use the latest provided value.',
      },
    ],
  },
] as NotesType;

const UseDeferredValueContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_DEFERRED_VALUE_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseDeferredValueContent.displayName = 'UseDeferredValueContent';

export default UseDeferredValueContent;
