import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_DEBUG_VALUE_HOOK_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseDebugValueContent Hook';
const PAGE_NOTES = [
  {
    note: 'is a React Hook that lets you add a label to a custom Hook in React DevTools',
  },
  {
    note: 'Call useDebugValue at the top level of your custom Hook to display a readable debug value',
  },
  {
    note: "Don't add debug values to every custom Hook. It's most valuable for custom Hooks that are part of shared libraries and that have a complex internal data structure that's difficult to inspect.",
  },
] as NoteI[];

const UseDebugValueContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_DEBUG_VALUE_HOOK_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseDebugValueContent.displayName = 'UseDebugValueContent';

export default UseDebugValueContent;
