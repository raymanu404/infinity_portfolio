import { FullCenteredBox } from '@/Shared/Utils/Helpers/styled-components';
import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <FullCenteredBox
      style={{
        backgroundColor: '#e63946',
      }}
    >
      <h1>ErrorPage</h1>
    </FullCenteredBox>
  );
};

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
