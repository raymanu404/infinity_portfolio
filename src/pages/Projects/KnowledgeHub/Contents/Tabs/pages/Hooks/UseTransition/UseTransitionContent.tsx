import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_TRANSITION_PAGE_CONTENTS } from '../constants';

const PAGE_TITLE = 'Use Transition Hook';

const PAGE_NOTES: NotesType = [];

const UseTransitionContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={USE_TRANSITION_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

UseTransitionContent.displayName = 'UseTransitionContent';

export default UseTransitionContent;
