import { NotesType } from '@/Shared/Components/Notes/interfaces';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { INTRODUCTION_TO_AUTH_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Introduction to Authentication';
const PAGE_NOTES: NotesType = [];

const IntroductionAuthContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={INTRODUCTION_TO_AUTH_PAGE_CONTENTS}
      notes={{
        notes: PAGE_NOTES,
        specialNotes: true,
      }}
    />
  );
};

IntroductionAuthContent.displayName = 'IntroductionAuthContent';

export default IntroductionAuthContent;
