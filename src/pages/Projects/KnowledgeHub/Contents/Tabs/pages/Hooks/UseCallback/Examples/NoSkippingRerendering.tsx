import { Box } from '@mui/material';
import React, { useCallback } from 'react';

const ShippingForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  console.log('ShippingForm rendered');
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

const NoSkippingRerendering: React.FC = () => {
  const [theme, setTheme] = React.useState('light');
  const handleSubmit = useCallback(() => {
    console.log('Form submitted');
  }, []);

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h1>Allow re-rendering without useCallback and memo Example</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <ShippingForm onSubmit={handleSubmit} />
    </Box>
  );
};

NoSkippingRerendering.displayName = 'NoSkippingRerendering';

export default NoSkippingRerendering;
