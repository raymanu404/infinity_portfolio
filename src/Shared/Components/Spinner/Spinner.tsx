import React from 'react'
import { Box, CircularProgress } from '@mui/material'

interface PropsI {
  size?: string
}
const Spinner = (props: PropsI) => {
  const { size } = props
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={size} />
    </Box>
  )
}

export default Spinner
