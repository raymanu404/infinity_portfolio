import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { GENERAL_REACT_ROUTER_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'General content of React Router v7';
const PAGE_NOTES = [
  {
    note: 'React Router Modes',
    subNotes: [
      {
        note: 'Declarative mode – This mode provides basic routing capabilities for React single-page applications. Use this mode if you just want minimal routing for your pages and nothing else',
      },
      {
        note: 'Data mode – This is an extended version of the declarative mode that provides more components, hooks, and capabilities. For example, in this mode, React Router can handle data fetching and form submissions, and it comes with a <ScrollRestoration/> component',
      },
      {
        note: 'Framework mode – This is the successor of Remix v2. This mode turns React Router into a full-stack React framework similar to Next.js',
      },
    ],
  },
] as NoteI[];

const GeneralContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={GENERAL_REACT_ROUTER_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

GeneralContent.displayName = 'GeneralContent';

export default GeneralContent;
