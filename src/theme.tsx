import { Theme } from '@emotion/react'
import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {}

interface CustomThemeOptions {
  extraColors?: ExtraActionsPalette
  typographyColors?: BasicPalette
}

interface VariantColor {
  200?: string
  100?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
}

interface BasicPalette {
  variantMain?: string
  variantMainLight?: string
  variantMainDark?: string
  variantSecondary?: string
  variantSecondaryLight?: string
  variantSecondaryDark?: string
  variant: VariantColor
}
interface ExtraActionsPalette {
  warningLight?: string
  successDark?: string
}
interface CustomTheme extends Theme {
  specialPalette: CustomThemeOptions
}

const localTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#74C69D',
      light: '#D8F3DC',

      dark: '#081C15',
    },
    secondary: {
      main: '#42A5F5',
      '100': '#ade8f4',
      '200': '#90e0ef',
      '300': '#00b4d8',
      '400': '#0096c7',
      '500': '#0D47A1',
      '600': '#0077b6',
      '700': '#03045e',
      light: '#caf0f8',
      dark: '#023e8a',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
}

const customTheme: CustomTheme = {
  specialPalette: {
    typographyColors: {
      variantMain: '#E9ECEF',
      variantMainLight: '#DEE2E6',
      variantMainDark: '#CED4DA',
      variantSecondary: '#495057',
      variantSecondaryLight: '#6C757D',
      variantSecondaryDark: '#343A40',
      variant: {
        100: '#D8F3DC',
        200: '#B7E4C7',
        300: '#95D5B2',
        400: '#52B788',
        500: '#40916C',
        600: '#2D6A4F',
        700: '#1B4332',
      },
    },
  },
}

const theme = { ...createTheme(localTheme), custom: customTheme }

export { theme }
