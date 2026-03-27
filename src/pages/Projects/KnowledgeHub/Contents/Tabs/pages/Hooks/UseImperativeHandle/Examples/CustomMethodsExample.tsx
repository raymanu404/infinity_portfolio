import { theme } from '@/theme';
import { Button, TextField } from '@mui/material';
import React, { Ref, useImperativeHandle, useRef } from 'react';

interface CustomMethodsType {
  focusAndScroll: () => void;
}

interface PostListMethodsType {
  scrollToBottom: () => void;
}

interface FocusCommentMethodsType {
  customFocus: () => void;
}

const FocusComment: React.FC<{ ref: Ref<FocusCommentMethodsType | null> }> = ({ ref }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      customFocus: () => {
        inputRef.current?.focus();
      },
    };
  }, []);

  return <TextField variant="standard" inputRef={inputRef} />;
};

const PostList: React.FC<{ ref: Ref<PostListMethodsType | null> }> = ({ ref }) => {
  const listRef = useRef<null | HTMLUListElement>(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom: () => {
        const node = listRef.current;
        node?.scrollIntoView({
          block: 'end',
        });
      },
    };
  }, []);

  const posts = [];
  for (let i = 1; i <= 50; i++) {
    posts.push(
      <li key={crypto.randomUUID()} id={crypto.randomUUID()} style={{ padding: '10px 0' }}>
        <span style={{ color: 'ActiveText' }}>Post Article {i}</span>
      </li>,
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: '100%',
        overflow: 'auto',
        backgroundColor: theme.custom.specialPalette?.variant[300],
      }}
    >
      <ul ref={listRef}>{posts}</ul>
    </div>
  );
};

const Article: React.FC<{ ref: Ref<CustomMethodsType | null> }> = ({ ref }) => {
  const postListRef = useRef<null | PostListMethodsType>(null);
  const FocusCommentRef = useRef<null | FocusCommentMethodsType>(null);

  useImperativeHandle(ref, () => {
    return {
      focusAndScroll: () => {
        postListRef.current?.scrollToBottom();
        FocusCommentRef.current?.customFocus();
      },
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <PostList ref={postListRef} />
      <FocusComment ref={FocusCommentRef} />
    </div>
  );
};

const CustomMethodsExample: React.FC = () => {
  const parentRef = useRef<CustomMethodsType | null>(null);

  const handleClick = () => {
    parentRef.current?.focusAndScroll();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <h3> UseImperativeHandle multiple custom methods example</h3>
        <Button variant="contained" onClick={handleClick}>
          Focus and Scroll
        </Button>
      </div>
      <Article ref={parentRef} />
    </div>
  );
};

CustomMethodsExample.displayName = 'CustomMethodsExample';

export default CustomMethodsExample;
