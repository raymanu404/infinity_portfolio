import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_IMPERATIVE_HANDLE_HOOK_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'UseImperativeHandle Hook';
const PAGE_NOTES = [
  {
    note: `Is a React Hook that lets you customize the handle exposed as a ref`,
  },
] as NoteI[];

const UseImperativeHandleContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_IMPERATIVE_HANDLE_HOOK_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseImperativeHandleContent.displayName = 'UseImperativeHandleContent';

export default UseImperativeHandleContent;
