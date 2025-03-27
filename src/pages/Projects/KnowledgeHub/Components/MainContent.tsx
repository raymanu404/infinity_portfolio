import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components'
import { Box } from '@mui/material'
import React from 'react'

interface MainContentProps {
  // Define props here
}

const MainContent: React.FC<MainContentProps> = (props) => {
  return (
    <BoxCardContent sx={{ flexBasis: '85%', backgroundColor: 'blue', minHeight: '160vh' }}>
      <h1>MainContent</h1>
    </BoxCardContent>
  )
}

MainContent.displayName = 'MainContent'

export default MainContent
