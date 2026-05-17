import { PageContentList } from '@/pages/Projects/KnowledgeHub/Contents/Tabs/pages/components';
import { FlexWithGapBox } from '@/Shared/Utils/Helpers/styled-components';
import React from 'react';
import LoginForm from './Components/LoginForm';
import TaskManagerApp from './Components/TaskManagerApp';
import { AUTH_TASK_MANAGER_APP_CONTENTS } from './constants';
import { useAuthStore } from './store/authStore';

const TaskManagerAppContent: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <FlexWithGapBox sx={{ padding: '20px', gap: '4px', flexGrow: 1 }}>
      {user ? (
        <>
          <PageContentList pageContentList={AUTH_TASK_MANAGER_APP_CONTENTS} />
          <TaskManagerApp />
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </FlexWithGapBox>
  );
};

TaskManagerAppContent.displayName = 'TaskManagerAppContent';
export { TaskManagerAppContent };
