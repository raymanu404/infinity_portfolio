import React, { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { pages } from './MultiPages/NavPages';
import { useUserContext } from './UserContext';

const ProtectedRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUserContext()!;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const basePath =
    pathname.split('/').length > 2 ? pathname.split('/').slice(0, 3).join('/') : pathname;

  useEffect(() => {
    console.log({ basePath, user });
    if (!user) {
      navigate(`${basePath}${pages[5].path}`);
    }
  }, [basePath, navigate, user]);

  return children;
};

ProtectedRouter.displayName = 'ProtectedRouter';

export default ProtectedRouter;
