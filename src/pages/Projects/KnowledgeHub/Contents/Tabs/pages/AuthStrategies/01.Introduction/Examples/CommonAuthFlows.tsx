import React from 'react';
import MultipleDefContent from '../../Components/MultipleDefContent';

const CommonAuthFlows: React.FC = () => {
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

CommonAuthFlows.displayName = 'CommonAuthFlows';

export default CommonAuthFlows;
