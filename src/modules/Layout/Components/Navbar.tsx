import { PATH_ROUTES } from '@/modules/Router/constants';
import { theme } from '@/theme';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navbarTabsConst, tabsSx, tabSx } from '../constants';

const currentPathDefault = (pathname: string[]) => {
  let defaultValue = '/';
  if (pathname.length > 1 && pathname[1] === PATH_ROUTES.PROJECTS)
    defaultValue += PATH_ROUTES.PROJECTS;
  return defaultValue;
};

export const Navbar = () => {
  const { pathname } = useLocation();
  // you can use useTransition to defer the navigation update, allowing the UI to remain responsive during the transition
  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState<string>(currentPathDefault(pathname.split('/')));
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    startTransition(() => {
      navigate(newValue);
    });
  };

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
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ ...tabsSx }}
      >
        {navbarTabsConst.map(x => {
          return <Tab label={x.displayName} key={x.path} value={x.path} sx={{ ...tabSx }} />;
        })}
      </Tabs>
    </Box>
  );
};

export default Navbar;
