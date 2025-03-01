import { PATH_ROUTES } from '@/pages/Router/constants'
import { ProjectI } from './interfaces'
import { v4 } from 'uuid'

export const PROJECTS_CONST = [
  { title: 'Tic Tac Toe', route: PATH_ROUTES.TIC_TAC_TOE, description: 'short description', projectId: v4() },
  { title: 'Monsters', route: PATH_ROUTES.MONSTERS, description: 'short description', projectId: v4() },
  { title: 'Online Shopping', route: PATH_ROUTES.ONLINE_SHOPPING, description: 'short description', projectId: v4() },
  { title: 'Sandbox', route: PATH_ROUTES.SANDBOX, description: 'short description', projectId: v4() },
  { title: 'Calculator', route: PATH_ROUTES.SANDBOX, description: 'short description', projectId: v4() },
  { title: 'Marvel Universe', route: PATH_ROUTES.SANDBOX, description: 'short description', projectId: v4() },
  {
    title: 'TODO List Upgraded',
    route: PATH_ROUTES.SPECIAL_TODO,
    description:
      'In this TODO List we can add multiple items in our todo list, but the special case of this mini app will be like: Adding [number] items (different type of items from dynamic list), this dynamic list would be created and updated by user with different items, and the goal for this mini app will be: I add 2 items of type study, final results should concatenated everything into one result like this: In last month you achieved next goals: 2 hours of studying react, 16 km on running outdoor, 10 hours reading and learning English and last but not least you have saved 200Lei without smoking, you have 3 months without smoking etc...',
    projectId: v4(),
  },
] as ProjectI[]
