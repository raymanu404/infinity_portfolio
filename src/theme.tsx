import {
  createTheme,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    extraColors?: {
      warningLight?: string
      successDark?: string
    }
  }
}

const customTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#90CAF9',
      light: '#BBDEFB',
    },
    secondary: {
      main: '#42A5F5',
      '100': '#2196F3',
      '200': '#1E88E5',
      '300': '#1976D2',
      '400': '#1565C0',
      '500': '#0D47A1',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
}

const theme = createTheme(customTheme)

export { theme }
