import { NavbarTabI } from './interfaces'
import { convertToPathURI } from '../../Shared/Utils/Helpers/global-utils'
import { PATH_ROUTES } from '@/modules/Router/constants'
import { SxProps, Theme } from '@mui/material'
import { theme } from '@/theme'
import { Navbar } from './Components/Navbar'

const navbarTabsConst = [
  { path: '/', displayName: PATH_ROUTES.HOME },
  {
    path: convertToPathURI([PATH_ROUTES.PROJECTS]),
    displayName: PATH_ROUTES.PROJECTS,
  },
] as NavbarTabI[]

const tabsSx: SxProps<Theme> = {
  color: theme.custom.specialPalette.typographyColors?.variant[100],
  backgroundColor: theme.custom.specialPalette.typographyColors?.variant[300],
  ':hover': {
    color: theme.custom.specialPalette.typographyColors?.variant[700],
  },
  '[aria-selected="false"]': {
    color: theme.custom.specialPalette.typographyColors?.variant[700],
    borderBottom: 0,
    ':hover': {
      color: theme.custom.specialPalette.typographyColors?.variantSecondary,
      backgroundColor: theme.custom.specialPalette.typographyColors?.variant[300],
    },
  },
  '& .Mui-selected': {
    backgroundColor: theme.custom.specialPalette.typographyColors?.variant[500],
    color: theme.custom.specialPalette.typographyColors?.variantMainLight,
  },
}

const tabSx: SxProps<Theme> = {
  borderColor: theme.custom.specialPalette.typographyColors?.variant[100],
}

export { navbarTabsConst, tabsSx, tabSx }

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
