import React from 'react';
import { TemplatePageContent } from '../../components';
import { useAuthTaskManagerApp } from '../_TaskManagerApp/useAuthTaskManagerApp';
import { PASSWORD_BASED_AUTH_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Password based Authentication';

const PasswordBasedAuthContent: React.FC = () => {
  const { AUTH_TASK_MANAGER_APP } = useAuthTaskManagerApp();

  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      appMenus={[AUTH_TASK_MANAGER_APP]}
      pageContentList={PASSWORD_BASED_AUTH_PAGE_CONTENTS}
    />
  );
};

PasswordBasedAuthContent.displayName = 'PasswordBasedAuthContent';

export default PasswordBasedAuthContent;
