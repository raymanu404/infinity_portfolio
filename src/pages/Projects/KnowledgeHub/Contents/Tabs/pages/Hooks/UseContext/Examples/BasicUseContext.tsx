import { Button } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../Contexts/ThemeContext';

const BasicUseContext: React.FC = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <>
      <h1>Current theme: {theme}</h1>
      <Button
        variant="contained"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        Toggle Theme
      </Button>
    </>
  );
};

BasicUseContext.displayName = 'BasicUseContext';

export default BasicUseContext;
