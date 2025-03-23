import { Box } from '@mui/material'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { theme } from '@/theme'
import Footer from './Components/Footer'
import { PropsWithChildren } from 'react'
import Main from './Components/Main'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.custom.specialPalette.typographyColors?.variant[100],
        minHeight: '100vh',
      })}
    >
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Box>
  )
}

export { Layout }
