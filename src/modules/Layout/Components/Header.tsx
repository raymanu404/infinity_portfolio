import { theme } from '@/theme';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.custom.specialPalette?.variant[400],
        height: '40px',
      }}
    ></Box>
  );
};

export default Header;
