import { PageContentList } from '../../components';
import { AUTH_TASK_MANAGER_APP_CONTENTS } from '../contents';
import TaskManagerApp from './TaskManagerApp';

const TaskManagerAppContent = (
  <>
    <PageContentList pageContentList={AUTH_TASK_MANAGER_APP_CONTENTS} />
    <TaskManagerApp />
  </>
);

export default TaskManagerAppContent;
