import { PATH_ROUTES } from '@/modules/Router/constants';
import { ProjectI } from './interfaces';
import { v4 } from 'uuid';

export const PROJECTS_CONST = [
  {
    title: 'Tic Tac Toe',
    route: PATH_ROUTES.TIC_TAC_TOE,
    description: 'short description',
    projectId: v4(),
  },
  {
    title: 'Monsters',
    route: PATH_ROUTES.MONSTERS,
    description: 'short description',
    projectId: v4(),
  },
  {
    title: 'Knowledge Hub',
    route: PATH_ROUTES.KNOWLEDGE_HUB,
    description: 'short description',
    projectId: v4(),
  },
] as ProjectI[];
