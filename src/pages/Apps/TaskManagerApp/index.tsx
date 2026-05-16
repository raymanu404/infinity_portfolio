import { AUTH_TASK_MANAGER_APP_CONTENTS } from '@/pages/Projects/KnowledgeHub/Contents/Tabs/pages/AuthStrategies/contents';
import { PageContentList } from '@/pages/Projects/KnowledgeHub/Contents/Tabs/pages/components';
import { FlexWithGapBox } from '@/Shared/Utils/Helpers/styled-components';
import React from 'react';
import TaskManagerApp from './TaskManagerApp';

const TaskManagerAppContent: React.FC = () => (
  <FlexWithGapBox sx={{ padding: '20px', gap: '4px' }}>
    <PageContentList pageContentList={AUTH_TASK_MANAGER_APP_CONTENTS} />
    <TaskManagerApp />
  </FlexWithGapBox>
);

TaskManagerAppContent.displayName = 'TaskManagerAppContent';
export { TaskManagerAppContent };
