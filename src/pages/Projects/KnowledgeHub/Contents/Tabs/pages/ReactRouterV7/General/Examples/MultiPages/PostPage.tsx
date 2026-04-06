import React from 'react';
import { useParams } from 'react-router';
import { POSTS } from './BlogPosts';

const PostPage: React.FC = () => {
  const { postId } = useParams();

  const post = postId ? POSTS[postId] : undefined;

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
      }}
    >
      <h2>{post.title}</h2>
      <p>Post ID: {postId}</p>
      <p>{post.content}</p>
      <small>{post.date}</small>
    </div>
  );
};

PostPage.displayName = 'PostPage';

export default PostPage;
