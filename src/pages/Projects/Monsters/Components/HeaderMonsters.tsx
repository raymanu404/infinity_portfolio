import { Box, Typography } from '@mui/material';

const HeaderMonsters = () => {
  return (
    <Box
      sx={{
        padding: '20px 0',
        fontFamily: 'Robot +Mono',
        color: '#023047',
        cursor: 'default',
      }}
    >
      <Typography variant="h1">Monsters Rolodex</Typography>
    </Box>
  );
};

export default HeaderMonsters;
