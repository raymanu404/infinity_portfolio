import Notes from '@/Shared/Components/Notes/Notes';
import React from 'react';

const UseCustomBasic: React.FC = () => {
  return (
    <div>
      <h2>Use Custom hooks: rules-of-hooks</h2>
      <Notes
        notes={[
          {
            note: ' For custom hooks, always wrap returned values in a useMemo or useCallback to avoid unnecessary re-renders.',
          },
        ]}
      />
    </div>
  );
};

UseCustomBasic.displayName = 'UseCustomBasic';

export default UseCustomBasic;
