import { Button, Checkbox, FormControlLabel, FormGroup, Link, TextField } from '@mui/material';
import React from 'react';
import { v4 } from 'uuid';
import { useAuthStore, useAuthStoreLocalStorage } from '../store/authStore';

/***
 * TODO:
 * 1. Enhance the HTML Structure: Add a "Remember Me" checkbox and a "Forgot Password" link to the login form. Style them using CSS to improve their appearance
 * 2. Validate the username and password fields before submitting the form. For example, you can check if the username is empty or if the password meets certain complexity requirements
 * 3. Modify the simulated authentication logic to handle different scenarios, such as an incorrect username, an incorrect password, or a disabled account. Display appropriate error messages to the use
 *
 */

const LoginForm: React.FC = () => {
  const { setUser } = useAuthStoreLocalStorage();
  const { setUser: setUserLocal } = useAuthStore();

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
            flexDirection: 'column',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <FormGroup>
            <div>
              <TextField type={'email'} name="email" id="email" />
            </div>
            <div>
              <TextField type={'password'} name="password" />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
                name="rememberMe"
              />
            </div>
            <div>
              <Link href={'/'}>Forgot Password</Link>
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
