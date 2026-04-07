import { Button } from '@mui/material';
import React, { useEffect, useEffectEvent, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { useUserContext } from '../UserContext';

export const pages = [
  { name: 'Home', path: '/', isPublic: true },
  { name: 'About', path: '/about', isPublic: true },
  { name: 'Posts', path: '/posts', isPublic: false },
  { name: 'Contacts', path: '/contacts', isPublic: false },
  { name: 'Stats', path: '/stats', isPublic: false },
  { name: 'Login', path: '/login', isPublic: true },
  { name: 'Logout', path: '/', isPublic: true },
] as const;

export const paths = pages.map(x => x.path);
export const names = pages.map(x => x.name);

export type Page = (typeof pages)[number];
export type Path = (typeof paths)[number];
export type Name = (typeof names)[number];
interface DisplayPage {
  path: Path;
  name: Name;
  isPublic?: boolean;
  displayed?: boolean;
}

const NavPages: React.FC = () => {
  const [displayPages, setDisplayPages] = useState<DisplayPage[]>(
    pages.map(x => ({ ...x, displayed: true })),
  );

  const navigate = useNavigate();

  const { pathname } = useLocation();
  const basePath =
    pathname.split('/').length > 2 ? pathname.split('/').slice(0, 3).join('/') : pathname;

  const { user, logout } = useUserContext()!;

  const onDisplayChange = useEffectEvent((isAuth: boolean) => {
    const pages = displayPages.map(x => {
      if (x.isPublic) {
        if ((isAuth && x.name === 'Login') || (!isAuth && x.name === 'Logout')) {
          return { ...x, displayed: false };
        }

        return { ...x, displayed: true };
      }

      if (!x.isPublic && isAuth) {
        return { ...x, displayed: true };
      }

      return { ...x, displayed: false };
    });
    setDisplayPages(pages);
  });

  const logoutHandler = () => {
    logout();
    navigate(`${basePath}${pages[5]}`);
  };

  useEffect(() => {
    onDisplayChange(!!user);
  }, [user]);

  return (
    <div>
      <ul style={{ display: 'flex', gap: '1rem', flexDirection: 'row', listStyle: 'none' }}>
        {displayPages
          .filter(x => !!x.displayed)
          .map(({ name, path }, index) => (
            <li key={`${index}-${name}`}>
              {name === 'Logout' ? (
                <Button variant="contained" onClick={logoutHandler}>
                  Logout
                </Button>
              ) : (
                <NavLink
                  to={`${basePath}${path}`}
                  style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
                >
                  {name}
                </NavLink>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

NavPages.displayName = 'NavPages';

export default NavPages;
