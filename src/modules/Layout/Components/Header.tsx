import { Box } from '@mui/material'
import { theme } from '@/theme'

const Header = () => {
  return <Box sx={{ backgroundColor: theme.palette.primary.dark, position: 'sticky', height: '40px' }}></Box>
}

export default Header
