import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

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
