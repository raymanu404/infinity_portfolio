import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

const Main = ({ children }: PropsWithChildren) => {
  return <Box sx={{ minHeight: '88vh' }}>{children}</Box>
}

Main.displayName = 'Main'

export default Main
