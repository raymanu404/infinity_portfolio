import { PATH_ROUTES } from '@/pages/Router/constants'

export interface ProjectI {
  title: string
  route: PATH_ROUTES
  description?: string
  projectId: string
}
