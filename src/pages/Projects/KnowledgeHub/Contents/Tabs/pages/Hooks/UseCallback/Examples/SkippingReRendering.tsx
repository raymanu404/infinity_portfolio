import { Box } from '@mui/material';
import React, { useCallback } from 'react';

const ShippingForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  //if we don t use useCallback, the onSubmit function will be recreated on every render, causing the ShippingForm component to re-render unnecessarily. By using useCallback, we ensure that the onSubmit function is only recreated when its dependencies change, which in this case is never, since it has an empty dependency array.
  // also use with memo to prevent unnecessary re-renders of the ShippingForm component when the parent component re-renders due to state changes that do not affect the onSubmit function.
  console.log('ShippingForm rendered');
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

const ShippingFormMemo = React.memo(ShippingForm);

const BasicUseCallback: React.FC = () => {
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
      <h1>Skipping re-rendering with useCallback and memo Example</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <ShippingFormMemo onSubmit={handleSubmit} />
    </Box>
  );
};

BasicUseCallback.displayName = 'BasicUseCallback';

export default BasicUseCallback;
