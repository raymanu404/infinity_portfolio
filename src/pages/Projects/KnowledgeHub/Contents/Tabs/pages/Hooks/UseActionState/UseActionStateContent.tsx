import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_ACTION_STATE_HOOK_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'UseActionStateContent Hook';
const PAGE_NOTES = [
  {
    note: 'Is a React Hook that lets you update state with side effects using Actions',
  },
  {
    note: 'React queues and executes multiple calls to dispatchAction sequentially. Each call to reducerAction receives the result of the previous call',
  },
  {
    note: 'If dispatchAction throws an error, React cancels all queued actions and shows the nearest Error Boundary',
  },
  {
    note: 'dispatchAction must be called from an Action (Action is called when you perform callbacks inside startTransition)',
  },
  {
    note: 'Unlike reducers in useReducer, the reducerAction can be async and perform side effects',
    subNotes: [
      {
        note: 'React queues and executes them in order so the result of the previous call is passed as previousState for the current call',
      },
    ],
  },
  {
    note: 'So useActionState is a useReducer on steroids which allows you to perform async await actions',
    subNotes: [
      {
        note: 'reducerAction can be sync or async. It can perform sync actions like showing a notification, or async actions like posting updates to a server',
      },
      {
        note: 'When using Server Functions, actionPayload needs to be serializable (values like plain objects, arrays, strings, and numbers)',
      },
    ],
  },
] as NoteI[];

const UseActionStateContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_ACTION_STATE_HOOK_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseActionStateContent.displayName = 'UseActionStateContent';

export default UseActionStateContent;
