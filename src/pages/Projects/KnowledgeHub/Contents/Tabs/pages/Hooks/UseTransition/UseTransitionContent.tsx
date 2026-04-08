import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_TRANSITION_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use Transition Hook';

const PAGE_NOTES: NotesType = [
  {
    note: "lets you render a part of the UI in the background and display a placeholder while that's happening.",
  },
  {
    note: 'The function passed to startTransition is called the “Action”',
    subNotes: [
      {
        note: 'You can update state and (optionally) perform side effects within an Action, and the work will be done in the background without blocking user interactions on the page',
      },
      {
        note: 'A Transition can include multiple Actions, and while a Transition is in progress, your UI stays responsive and interactive.',
      },
      {
        note: 'For example if the user clicks a tab but then changes their mind and clicks another tab, the second click will be immediately handled without waiting for the first update to finish',
      },
    ],
  },
];

const UseTransitionContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_TRANSITION_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseTransitionContent.displayName = 'UseTransitionContent';

export default UseTransitionContent;
