import { Button, TextField } from '@mui/material';
import React from 'react';
import { useAuthStore } from '../store/authStore';

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
          <div>
            <TextField type={'email'} name="email" id="email" />
          </div>
          <div>
            <TextField type={'password'} name="password" />
          </div>
          <div>
            <Button type="submit" variant={'contained'}>
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

LoginForm.displayName = 'LoginForm';

export default LoginForm;
