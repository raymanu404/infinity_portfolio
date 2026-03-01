import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_MEMO_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use Memo Hook';

const PAGE_NOTES = [
  {
    note: "useMemo is a React hook that allows you to that lets you memoize a value that's not needed for rendering.",
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
