import React from 'react';
import MultipleDefContent from '../../Components/MultipleDefContent';

const AuthVsAuthorization: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MultipleDefContent
        contents={[
          {
            title: '',
            content: <></>,
          },
        ]}
      />
    </div>
  );
};

AuthVsAuthorization.displayName = 'AuthVsAuthorization';

export default AuthVsAuthorization;
