import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const CounterExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const counterHandler = () => {
    setCount(prev => prev + 1);
  };
  return (
    <Box>
      <Button onClick={counterHandler}>Click me</Button>
      <Typography>Counter: {count}</Typography>
    </Box>
  );
};

CounterExample.displayName = 'CounterExample';

export default CounterExample;
