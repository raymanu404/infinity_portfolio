import React from 'react';
import { Link, useLocation } from 'react-router';

export interface Post {
  title: string;
  content: string;
  description: string;
  date: string;
}

export type Posts = Record<string, Post>;

export const POSTS: Posts = {
  'react-router-v7': {
    title: 'React Router v7 Released',
    content: 'React Router v7 has been released with new features and improvements.',
    description: 'An overview of the new features in React Router v7.',
    date: '2024-06-01',
  },
  'react-router-v6': {
    title: 'React Router v6 Released',
    content: 'React Router v6 has been released with new features and improvements.',
    description: 'An overview of the new features in React Router v6.',
    date: '2021-12-08',
  },
  'Material-UI-v5': {
    title: 'Material UI v5 Released',
    content: 'Material UI v5 has been released with new features and improvements.',
    description: 'An overview of the new features in Material UI v5.',
    date: '2021-12-08',
  },
  'Material-UI-v6': {
    title: 'Material UI v6 Released',
    content: 'Material UI v6 has been released with new features and improvements.',
    description: 'An overview of the new features in Material UI v6.',
    date: '2023-06-01',
  },
};

const BlogPosts: React.FC = () => {
  const { pathname } = useLocation();
  const basePath =
    pathname.split('/').length > 3 ? pathname.split('/').slice(0, 4).join('/') : pathname;

  return (
    <div>
      <h4>BlogPosts</h4>
      <ul>
        {Object.entries(POSTS).map(([key, { content, title, description, date }]) => (
          <li
            key={key}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              textDecoration: 'none',
            }}
          >
            <Link to={`${basePath}/${key}`}>{title}</Link>
            <p>{description}</p>
            <small>{date}</small>

            <span>{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

BlogPosts.displayName = 'BlogPosts';

export default BlogPosts;
