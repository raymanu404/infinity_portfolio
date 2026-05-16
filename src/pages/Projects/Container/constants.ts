import { PATH_ROUTES } from '@/modules/Router/constants';
import { ProjectI } from '@/Shared/interfaces';
import { v4 } from 'uuid';

export const PROJECTS_CONST = [
  {
    title: 'Knowledge Hub',
    route: PATH_ROUTES.KNOWLEDGE_HUB,
    description: 'short description',
    projectId: v4(),
  },
] as ProjectI[];
