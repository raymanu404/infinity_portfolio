import { PATH_ROUTES } from '@/modules/Router/constants';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { v4 } from 'uuid';
import { useAuthStore, useAuthStoreLocalStorage } from '../store/authStore';

/***
 * TODO:
 * 2. Validate the username and password fields before submitting the form. For example, you can check if the username is empty or if the password meets certain complexity requirements
 * 3. Modify the simulated authentication logic to handle different scenarios, such as an incorrect username, an incorrect password, or a disabled account. Display appropriate error messages to the use
 */

const LoginForm: React.FC = () => {
  const { setUser } = useAuthStoreLocalStorage();
  const { setUser: setUserLocal } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const submitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password, remember } = {
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      remember: formData.get('rememberMe') === 'on',
    };

    if (remember) {
      setUser({
        email,
        password,
        session: v4(),
      });
    }

    setUserLocal({
      email,
      password,
      session: v4(),
    });
  };

  const redirectForgotPasswordHandler = () => {
    navigate(`${pathname}/${PATH_ROUTES.FORGOT_PASSWORD}`, {
      replace: true,
    });
  };

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <form
        onSubmit={submitHandler}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
          }}
        >
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '30%' }}>
              <Typography>Email</Typography>
              <TextField type={'email'} name="email" id="email" sx={{ width: '100%' }} />
            </div>
            <div style={{ width: '30%' }}>
              <Typography>Password</Typography>
              <TextField type={'password'} name="password" sx={{ width: '100%' }} />
            </div>
            <div
              style={{
                width: '30%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
                name="rememberMe"
                sx={{ width: '100%' }}
              />
              <Link
                sx={{ width: '100%', cursor: 'pointer', fontSize: '16px' }}
                onClick={redirectForgotPasswordHandler}
              >
                Forgot Password
              </Link>
            </div>

            <div>
              <Button type="submit" variant={'contained'}>
                Login
              </Button>
            </div>
          </FormGroup>
        </div>
      </form>
    </div>
  );
};

LoginForm.displayName = 'LoginForm';

export default LoginForm;
