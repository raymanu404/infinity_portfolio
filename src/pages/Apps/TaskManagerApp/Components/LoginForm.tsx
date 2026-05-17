import { Button, Checkbox, FormControlLabel, FormGroup, Link, TextField } from '@mui/material';
import React from 'react';
import { useAuthStore } from '../store/authStore';

/***
 * TODO:
 * 1. Enhance the HTML Structure: Add a "Remember Me" checkbox and a "Forgot Password" link to the login form. Style them using CSS to improve their appearance
 * 2. Validate the username and password fields before submitting the form. For example, you can check if the username is empty or if the password meets certain complexity requirements
 * 3. Modify the simulated authentication logic to handle different scenarios, such as an incorrect username, an incorrect password, or a disabled account. Display appropriate error messages to the use
 * 4. Implement a Basic "Logout" Function: After a successful login, display a "Logout" button. When the user clicks the button, clear the username and password fields and display a message indicating that the user has been logged out
 *
 */

const LoginForm: React.FC = () => {
  const { setUser } = useAuthStore();

  const submitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
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
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
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
