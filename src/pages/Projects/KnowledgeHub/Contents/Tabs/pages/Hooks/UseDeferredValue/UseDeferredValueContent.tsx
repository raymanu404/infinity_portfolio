import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_DEFERRED_VALUE_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'UseDeferredValueContent Hook';

const PAGE_NOTES = [] as NotesType;

const UseDeferredValueContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_DEFERRED_VALUE_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseDeferredValueContent.displayName = 'UseDeferredValueContent';

export default UseDeferredValueContent;
