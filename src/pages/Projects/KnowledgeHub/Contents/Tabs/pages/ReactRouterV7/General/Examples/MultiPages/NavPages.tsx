import React from 'react';
import { NavLink, useLocation } from 'react-router';

export const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Posts', path: '/posts' },
  { name: 'Contacts', path: '/contacts' },
] as const;

export type Page = (typeof pages)[number];

const NavPages: React.FC = () => {
  const { pathname } = useLocation();
  const basePath =
    pathname.split('/').length > 2 ? pathname.split('/').slice(0, 3).join('/') : pathname;

  return (
    <div>
      <ul style={{ display: 'flex', gap: '1rem', flexDirection: 'row', listStyle: 'none' }}>
        {pages.map(({ name, path }) => (
          <li key={path}>
            <NavLink
              to={`${basePath}${path}`}
              style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavPages.displayName = 'NavPages';

export default NavPages;
