import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_EFFECT_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use Effect Hook';
const PAGE_NOTES = [
  {
    note: 'UseEffect is a React hook that allows you to perform side effects in functional components.',
  },
  {
    note: "An Effect lets you keep your component synchronized with some external system (like a chat service). Here, external system means any piece of code that's not controlled by React such as:",
    subNotes: [
      {
        note: 'A timer managed with setInterval() and clearInterval()',
      },
      {
        note: 'Manually changing the DOM',
      },
      {
        note: 'An event subscription using window.addEventListener() and window.removeEventListener()',
      },
    ],
  },
  {
    note: 'Fetching data with Effects',
  },
] as NotesType;

const UseEffectContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_EFFECT_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseEffectContent.displayName = 'UseEffectContent';

export default UseEffectContent;
