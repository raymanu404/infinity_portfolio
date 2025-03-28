import { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { navbarTabsConst, tabsSx, tabSx } from '../constants'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH_ROUTES } from '@/modules/Router/constants'
import { theme } from '@/theme'

const currentPathDefault = (pathname: string[]) => {
  let defaultValue = '/'
  if (pathname.length > 1 && pathname[1] === PATH_ROUTES.PROJECTS) defaultValue += PATH_ROUTES.PROJECTS
  return defaultValue
}

export const Navbar = () => {
  const { pathname } = useLocation()

  const [value, setValue] = useState<string>(currentPathDefault(pathname.split('/')))
  const navigate = useNavigate()

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        borderRadius: '0 0 10px 10px',
        boxShadow: theme.custom.boxShadows?.main,
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ ...tabsSx }}>
        {navbarTabsConst.map((x) => {
          return <Tab label={x.displayName} key={x.path} value={x.path} sx={{ ...tabSx }} />
        })}
      </Tabs>
    </Box>
  )
}

export default Navbar
