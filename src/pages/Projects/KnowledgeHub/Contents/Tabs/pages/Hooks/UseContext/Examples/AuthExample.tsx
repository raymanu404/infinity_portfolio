import { Button } from '@mui/material';
import React from 'react';
import { useAuthContext } from '../Contexts/AuthContext';

const AuthExample: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuthContext();
  return (
    <div>
      <h1>AuthExample</h1>
      <p>Is authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
      <p>User: {user || 'None'}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="contained" onClick={() => login?.('john_doe')}>
          Login
        </Button>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

AuthExample.displayName = 'AuthExample';

export default AuthExample;
