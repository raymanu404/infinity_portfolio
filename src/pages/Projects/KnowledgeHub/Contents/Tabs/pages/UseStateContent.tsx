import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PagePanelContent, PagePanelHeadTitle } from './components';

const createInitialTodos = () => [
  { id: 1, name: 'Boris' },
  { id: 2, name: 'Chase and status' },
  { id: 3, name: 'Boris' },
  { id: 4, name: 'Boris' },
];
const UseStateContent: React.FC = () => {
  //its best to use function reference instead of calling it, on each rerender we rerender everything if we call the fn
  const [todos, setTodos] = useState(createInitialTodos);
  return (
    <Box
      sx={{
        padding: '0 5px',
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
      }}
    >
      {/* HEAD/TITLE */}
      <PagePanelHeadTitle title="Use State Hook" />
      {/* CONTENT */}
      <PagePanelContent>
        {todos.map(x => {
          return (
            <div key={x.id}>
              <Typography>{x.name}</Typography>
            </div>
          );
        })}
      </PagePanelContent>
    </Box>
  );
};

UseStateContent.displayName = 'UseStateContent';

export default UseStateContent;
