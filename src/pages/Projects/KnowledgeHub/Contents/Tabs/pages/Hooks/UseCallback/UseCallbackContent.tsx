import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_CALLBACK_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use Ref Hook';

const PAGE_NOTES = [
  {
    note: 'useCallback is a React hook that allows you to cache a function definition between re-renders.',
  },
  {
    note: 'React Compiler automatically memoizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memoization automatically. (check https://react.dev/learn/react-compiler)',
  },
  {
    note: 'You should only rely on useCallback as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useCallback back.',
  },
];

const UseCallbackContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_CALLBACK_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseCallbackContent.displayName = 'UseCallbackContent';

export default UseCallbackContent;
