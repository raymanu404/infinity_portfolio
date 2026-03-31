import { NoteI } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { GENERAL_REACT_ROUTER_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'General content of React Router v7';
const PAGE_NOTES = [] as NoteI[];

const GeneralContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={GENERAL_REACT_ROUTER_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
      }}
    />
  );
};

GeneralContent.displayName = 'GeneralContent';

export default GeneralContent;
