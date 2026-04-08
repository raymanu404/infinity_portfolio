import { Button, FormControl, FormLabel, TextField } from '@mui/material';
import React, { useEffect, useEffectEvent } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useUserContext } from '../UserContext';
import { pages } from './NavPages';

const LoginPage: React.FC = () => {
  const { login, user } = useUserContext()!;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const basePath =
    pathname.split('/').length > 2 ? pathname.split('/').slice(0, 3).join('/') : pathname;

  const redirectToStats = useEffectEvent(() => {
    navigate(`${basePath}${pages[4].path}`);
  });

  useEffect(() => {
    if (user) {
      redirectToStats();
    }
  }, [basePath, user]);

  const submitLoginHandler = async (formData: FormData) => {
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    const result = login({
      email,
      password,
    });

    if (result) {
      toast('Login successfully', { type: 'success' });
    } else {
      toast('Email or password is incorrect!', {
        type: 'warning',
      });
    }
  };

  return (
    <div
      style={{
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
      }}
    >
      <h2>LoginPage</h2>
      <form
        action={submitLoginHandler}
        style={{
          padding: '10px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField id="email" type="email" name="email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField id="password" type="password" name="password" />
        </FormControl>

        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

LoginPage.displayName = 'LoginPage';

export default LoginPage;
