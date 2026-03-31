import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_MEMO_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use Memo Hook';

const PAGE_NOTES = [
  {
    note: 'useMemo is a React hook that allows you to cache the result of a calculation between re-renders.',
  },
  {
    note: 'Caching return values like this is also known as memoization, which is why this Hook is called useMemo.',
  },
  {
    note: 'To cache a calculation between re-renders, wrap it in a useMemo call at the top level of your component.',
  },
];

const UseMemoContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_MEMO_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseMemoContent.displayName = 'UseMemoContent';

export default UseMemoContent;
