import { useDebugValue } from 'react';

export const useCustomHookExample = () => {
  const isWeb = window !== undefined;

  useDebugValue(isWeb ? 'isWeb' : 'mobile');
  return { isWeb };
};
