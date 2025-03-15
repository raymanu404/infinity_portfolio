import { theme } from '@/theme'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component={'footer'} sx={{ backgroundColor: theme.palette.primary.dark, height: '50px' }}>
      <Typography variant="body1">Im a footer</Typography>
    </Box>
  )
}

export default Footer
