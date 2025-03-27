import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components'
import { theme } from '@/theme'
import { Link, Typography } from '@mui/material'
import React from 'react'
import { LEARNING_SECTIONS } from '../constants'

const SideNavigation: React.FC = () => {
  return (
    <BoxCardContent
      sx={{
        backgroundColor: theme.custom.specialPalette?.variant[300],
        flexGrow: 0,
        alignSelf: 'baseline',
        position: 'sticky',
        top: `calc(40px + ${theme.spacing(4)})`,
        flexBasis: '20%',
      }}
    >
      {LEARNING_SECTIONS.map((item) => (
        <Link
          key={item.elementId}
          href={`#${item.elementId}`}
          underline="hover"
          sx={{ color: `${theme.custom.specialPalette?.variantSecondaryDark}` }}
        >
          <Typography>{item.title}</Typography>
        </Link>
      ))}
    </BoxCardContent>
  )
}

SideNavigation.displayName = 'SideNavigation'

export default SideNavigation
