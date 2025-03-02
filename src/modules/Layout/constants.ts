import { NavbarTabI } from './interfaces'
import { convertToPathURI } from '../../Shared/Utils/Helpers/global-utils'
import { PATH_ROUTES } from '@/modules/Router/constants'

export const navbarTabsConst = [
  { path: '/', displayName: PATH_ROUTES.HOME },
  {
    path: convertToPathURI([PATH_ROUTES.PROJECTS]),
    displayName: PATH_ROUTES.PROJECTS,
  },
] as NavbarTabI[]

// export const navbarTabsConst = [
//   { path: '/', displayName: PATH_ROUTES.HOME },
//   {
//     path: '/monsters',
//     displayName: PATH_ROUTES.MONSTERS,
//   },
//   {
//     path: '/games',
//     displayName: PATH_ROUTES.GAMES,
//   },
// ] as NavbarTabI[]
