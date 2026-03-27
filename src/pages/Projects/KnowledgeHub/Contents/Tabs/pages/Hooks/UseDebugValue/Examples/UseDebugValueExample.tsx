import React from 'react';
import { useCustomHookExample } from '../../Custom/Examples/UseHooks';

const UseDebugValueExample: React.FC = () => {
  const { isWeb } = useCustomHookExample();
  console.log({ isWeb });
  return (
    <div>
      <h1>UseDebugValueExample</h1>

      <p>{isWeb}</p>
    </div>
  );
};

UseDebugValueExample.displayName = 'UseDebugValueExample';

export default UseDebugValueExample;
