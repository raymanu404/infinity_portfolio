import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components'
import { theme } from '@/theme'
import React from 'react'

const SideNavigation: React.FC = () => {
  return (
    <BoxCardContent
      sx={{
        backgroundColor: 'yellow',
        flexGrow: 0,
        alignSelf: 'baseline',
        bottom: 0,
        position: 'sticky',
        top: `calc(40px + ${theme.spacing(4)})`,
      }}
    >
      <h1>SideNavigation</h1>
    </BoxCardContent>
  )
}

SideNavigation.displayName = 'SideNavigation'

export default SideNavigation
