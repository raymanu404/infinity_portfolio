import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_ID_HOOK_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'UseId Hook';
const PAGE_NOTES = [
  {
    note: 'Is a React Hook for generating unique IDs that can be passed to accessibility attributes',
  },
  {
    note: ` should not be used to generate cache keys for use(). The ID is stable when a component is mounted but may change during rendering. Cache keys should be generated from your data.`,
  },
  {
    note: `should not be used to generate keys in a list`,
  },
  {
    note: `currently cannot be used in async Server Components.`,
  },
] as NoteI[];

const UseIdContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_ID_HOOK_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseIdContent.displayName = 'UseIdContent';

export default UseIdContent;
