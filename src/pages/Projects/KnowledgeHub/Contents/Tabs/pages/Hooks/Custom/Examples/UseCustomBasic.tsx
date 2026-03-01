import React from 'react';

const UseCustomBasic: React.FC = () => {
  return (
    <div>
      <h1>UseCustomBasic</h1>
      <p>
        For custom hooks, always wrap returned values in a useMemo or useCallback to avoid
        unnecessary re-renders.
      </p>
    </div>
  );
};

UseCustomBasic.displayName = 'UseCustomBasic';

export default UseCustomBasic;
