import { theme } from '@/theme';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

const Main = ({ children }: PropsWithChildren) => {
  return <Box sx={{ flexGrow: 1 }}>{children}</Box>;
};

Main.displayName = 'Main';

export default Main;
