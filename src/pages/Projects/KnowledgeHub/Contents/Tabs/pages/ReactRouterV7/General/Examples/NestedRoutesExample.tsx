import React from 'react';
import { Route, Routes } from 'react-router';
import { About, BlogPosts, Contacts, Home, Posts } from './MultiPages';
import LoginPage from './MultiPages/LoginPage';
import NavPages, { pages } from './MultiPages/NavPages';
import PostPage from './MultiPages/PostPage';
import StatsPage from './MultiPages/StatsPage';
import ProtectedRouter from './ProtectedRouter';
import { UserProvider } from './UserContext';

const NestedRoutesExample: React.FC = () => {
  return (
    <div>
      <h3>NestedRoutesExample React router</h3>

      <UserProvider>
        <NavPages />
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route index element={<Home />} />
          <Route path={`${pages[1].path}`} element={<About />} />
          <Route path={`${pages[3].path}`} element={<Contacts />} />
          <Route path={pages[5].path} element={<LoginPage />} />

          {/* PROTECTED ROUTES */}
          <Route
            path={pages[4].path}
            element={
              <ProtectedRouter>
                <StatsPage />
              </ProtectedRouter>
            }
          />
          <Route
            path={`${pages[2].path}`}
            element={
              <ProtectedRouter>
                <Posts />
              </ProtectedRouter>
            }
          >
            <Route index element={<BlogPosts />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
};

NestedRoutesExample.displayName = 'NestedRoutesExample';

export default NestedRoutesExample;
