import { Box, Typography } from '@mui/material';
import React from 'react';

//TODO: Make shared component for tabsPanelPage content
const UseStateContent: React.FC = () => {
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
      <Box>
        <Typography variant="h6">Use State Hook</Typography>
      </Box>
      {/* CONTENT */}
      <Box sx={{ width: '94%', height: '300px', backgroundColor: 'white' }}>Content</Box>
      {/* NOTES */}
      <Box sx={{ width: '94%', minHeight: '100px' }}>Notes</Box>
    </Box>
  );
};

UseStateContent.displayName = 'UseStateContent';

export default UseStateContent;
