import { Box } from '@mui/material'
import { theme } from '@/theme'

const Header = () => {
  return (
    <Box height={'50px'} position={'sticky'} sx={{ backgroundColor: theme.palette.primary.main }}>
      <Box></Box>
    </Box>
  )
}

export default Header
