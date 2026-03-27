import React from 'react';
import { generatePosts } from '../utils';

const Posts: React.FC = () => {
  const posts = generatePosts(1000);
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '8px' }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

Posts.displayName = 'Posts';

export default Posts;
