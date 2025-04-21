import { theme } from '@/theme';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        backgroundColor: theme.custom.specialPalette?.variant[500],
        height: '80px',
        width: '100%',
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: theme.palette.common.white, padding: theme.spacing(3) }}
      >
        Im a footer
      </Typography>
    </Box>
  );
};

export default Footer;
