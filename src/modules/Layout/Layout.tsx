import { theme } from '@/theme';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.custom.specialPalette?.variant[100],
        minHeight: '100vh',
      })}
    >
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};

export { Layout };
