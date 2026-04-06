import { Button, FormControl, FormLabel, TextField } from '@mui/material';
import React, { SubmitEventHandler } from 'react';
import { Form, useNavigate } from 'react-router';
import { useUserContext } from '../UserContext';
import { pages } from './NavPages';

const LoginPage: React.FC = () => {
  const { login, user } = useUserContext()!;
  const navigate = useNavigate();

  if (user) {
    navigate(pages[4].path);
  }

  const submitLoginHandler: SubmitEventHandler<HTMLFormElement> = async event => {
    const { target } = event;
    event.preventDefault();

    const values = target.childNodes.entries();
    console.log(values);
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
      <Form
        onSubmit={submitLoginHandler}
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
      </Form>
    </div>
  );
};

LoginPage.displayName = 'LoginPage';

export default LoginPage;
