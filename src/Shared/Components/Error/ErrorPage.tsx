import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: '#e63946',
      }}
    >
      <h1>ErrorPage</h1>
    </div>
  );
};

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
