import { NavbarTabI } from './interfaces'
import { PATH_ROUTES } from '../Router/constants'
import { convertToPathURI } from '../Shared/Utils/utilsFct'

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
