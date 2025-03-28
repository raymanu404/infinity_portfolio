import { Box, Stack } from '@mui/material'
import React from 'react'
import MainContent from './Components/MainContent'
import SideNavigation from './Components/SideNavigation'
import { theme } from '@/theme'

const KnowledgeHub: React.FC = () => {
  return (
    <Box sx={{ padding: `${theme.spacing(2)}`, margin: `0 ${theme.spacing(2)}` }}>
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }} direction={{ xs: 'column-reverse', sm: 'row' }}>
        <MainContent />
        <SideNavigation />
      </Stack>
    </Box>
  )
}

KnowledgeHub.displayName = 'KnowledgeHub'

export default KnowledgeHub
