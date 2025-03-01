import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#48BFE3',
      light: '#219ebc',
      dark: '#7400B8',
      '100': '#5E60CE',
      '200': '#5390D9',
      '300': '4EA8DE',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
})

export { theme }
