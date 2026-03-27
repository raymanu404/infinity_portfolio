import { ThemeProvider } from '@emotion/react';
import { Bounce, ToastContainer } from 'react-toastify';
import { CustomRouter } from './modules/Router';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </ThemeProvider>
  );
};

export default App;
