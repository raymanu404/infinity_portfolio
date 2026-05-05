import React from 'react';
import { TemplatePageContent } from '../../components';
import { useAuthTaskManagerApp } from '../_TaskManagerApp/useAuthTaskManagerApp';
import { INTRODUCTION_TO_AUTH_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Introduction to Authentication';

const IntroductionAuthContent: React.FC = () => {
  const { AUTH_TASK_MANAGER_APP } = useAuthTaskManagerApp();

  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      appMenus={[AUTH_TASK_MANAGER_APP]}
      pageContentList={INTRODUCTION_TO_AUTH_PAGE_CONTENTS}
    />
  );
};

IntroductionAuthContent.displayName = 'IntroductionAuthContent';

export default IntroductionAuthContent;
