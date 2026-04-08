import React from 'react';
import { Outlet } from 'react-router';

const Posts: React.FC = () => {
  return (
    <div>
      <h3>Check the Posts</h3>
      <Outlet />
    </div>
  );
};

Posts.displayName = 'Posts';

export default Posts;
