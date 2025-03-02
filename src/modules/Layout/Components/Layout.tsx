import { Box } from '@mui/material'
import { COLORS } from '@/Shared/constants'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }: { children: JSX.Element | React.ReactNode }) => {
  return (
    <Box sx={{ backgroundColor: COLORS.darkBlue, justifyContent: 'center', height: '100vh' }}>
      <Header />
      <Navbar />
      {children}
    </Box>
  )
}

export default Layout
