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
          {
            note: 'Don’t call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks. ',
          },
          {
            note: 'always use Hooks at the top level of your React function, before any early returns',
          },
          {
            note: ' You can only call Hooks while React is rendering a function component:',
            subNotes: [
              { note: 'Call them at the top level in the body of a function component.' },
              { note: 'Call them at the top level in the body of a custom Hook.' },
            ],
          },
        ]}
      />
    </div>
  );
};

UseCustomBasic.displayName = 'UseCustomBasic';

export default UseCustomBasic;
