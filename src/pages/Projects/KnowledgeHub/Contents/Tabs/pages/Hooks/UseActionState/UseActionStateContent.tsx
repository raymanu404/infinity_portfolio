import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_ACTION_STATE_HOOK_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseActionStateContent Hook';
const PAGE_NOTES = [] as NoteI[];

const UseActionStateContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_ACTION_STATE_HOOK_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

UseActionStateContent.displayName = 'UseActionStateContent';

export default UseActionStateContent;
