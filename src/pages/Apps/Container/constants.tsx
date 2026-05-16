import { PATH_ROUTES } from '@/modules/Router/constants';
import { ProjectI } from '@/Shared/interfaces';
import { v4 } from 'uuid';

//TODO: UPDATE THIS TO HAVE LINK REFERENCE
export const APPLICATIONS_CONTENTS = [
  {
    title: 'Task Manager App',
    route: PATH_ROUTES.TASK_MANAGER_APP,
    description:
      'This app has reference with projects/knowledge_hub#auth-strategies-roadmap project',
    projectId: v4(),
  },
] as ProjectI[];
