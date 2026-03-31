import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_LAYOUT_EFFECT_EVENT_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Use UseLayoutEffectContent Hook';
const PAGE_NOTES = [
  { note: 'useLayoutEffect can hurt performance. Prefer useEffect when possible' },
  {
    note: 'useLayoutEffect is a version of useEffect that fires before the browser repaints the screen',
  },
] as NotesType;

const UseLayoutEffectContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_LAYOUT_EFFECT_EVENT_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseLayoutEffectContent.displayName = 'UseLayoutEffectContent';

export default UseLayoutEffectContent;
