import { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { navbarTabsConst } from '../constants'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH_ROUTES } from '@/modules/Router/constants'

const currentPathDefault = (pathname: string[]) => {
  let defaultValue = '/'
  if (pathname.length > 1 && pathname[1] === PATH_ROUTES.PROJECTS) defaultValue += PATH_ROUTES.PROJECTS
  return defaultValue
}

const Navbar = () => {
  const { pathname } = useLocation()

  const [value, setValue] = useState<string>(currentPathDefault(pathname.split('/')))
  const navigate = useNavigate()

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            '& .Mui-selected': {
              color: '#FBFEF9',
            },
          }}
        >
          {navbarTabsConst.map((x) => {
            return <Tab label={x.displayName} key={x.path} value={x.path} />
          })}
        </Tabs>
      </Box>
    </Box>
  )
}

export default Navbar
