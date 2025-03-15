import { ThemeProvider } from '@emotion/react'
import { CustomRouter } from './modules/Router'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomRouter />
    </ThemeProvider>
  )
}

export default App
