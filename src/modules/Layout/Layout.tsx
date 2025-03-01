import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import React from 'react'
import { COLORS } from '@/modules/Shared/constants'

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
