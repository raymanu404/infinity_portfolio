import React from 'react';
import { Route, Routes } from 'react-router';
import { About, BlogPosts, Contacts, Home, Posts } from './MultiPages';
import NavPages, { pages } from './MultiPages/NavPages';

const NestedRoutesExample: React.FC = () => {
  return (
    <div>
      <h3>NestedRoutesExample React router</h3>

      <NavPages />
      <Routes>
        <Route path={`${pages[2].path}`} element={<Posts />}>
          <Route index element={<BlogPosts />} />
        </Route>
        <Route path={`${pages[1].path}`} element={<About />} />
        <Route path={`${pages[3].path}`} element={<Contacts />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

NestedRoutesExample.displayName = 'NestedRoutesExample';

export default NestedRoutesExample;
