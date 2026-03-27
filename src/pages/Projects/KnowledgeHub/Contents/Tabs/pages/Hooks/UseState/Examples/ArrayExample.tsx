import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const createInitialTodos = () => [
  { id: 1, name: 'Boris' },
  { id: 2, name: 'Chase and status' },
  { id: 3, name: 'Boris' },
  { id: 4, name: 'Boris' },
];

const ArrayExample: React.FC = () => {
  //its best to use function reference instead of calling it, on each rerender we rerender everything if we call the fn
  const [todos, setTodos] = useState(() => createInitialTodos());

  return (
    <Box>
      {todos.map(x => {
        return (
          <div key={x.id}>
            <Typography>{x.name}</Typography>
          </div>
        );
      })}
    </Box>
  );
};

ArrayExample.displayName = 'ArrayExample';

export default ArrayExample;
