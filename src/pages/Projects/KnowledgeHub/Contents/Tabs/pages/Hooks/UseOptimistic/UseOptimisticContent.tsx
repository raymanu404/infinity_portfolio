import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_OPTIMISTIC_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseOptimisticContent Hook';

const PAGE_NOTES = [] as NotesType;

const UseOptimisticContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_OPTIMISTIC_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseOptimisticContent.displayName = 'UseOptimisticContent';

export default UseOptimisticContent;
