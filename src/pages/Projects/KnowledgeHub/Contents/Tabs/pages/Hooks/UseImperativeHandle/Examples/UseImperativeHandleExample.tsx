import { Button, TextField } from '@mui/material';
import React, { Ref, useImperativeHandle, useRef } from 'react';

interface CustomImperativeMethods {
  customFocus: () => void;
}

const ChildExampleInput: React.FC<{ ref: Ref<CustomImperativeMethods | null> }> = ({ ref }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      customFocus() {
        inputRef.current?.focus();
      },
    };
  }, []);

  return (
    <div>
      <TextField inputRef={inputRef} />
    </div>
  );
};

const UseImperativeHandleExample: React.FC = () => {
  const parentRef = useRef<CustomImperativeMethods | null>(null);

  const handleClick = () => {
    parentRef.current?.customFocus();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <h1> UseImperativeHandle basic example</h1>
        <Button variant="contained" onClick={handleClick}>
          Focus Input
        </Button>
      </div>
      <ChildExampleInput ref={parentRef} />
    </div>
  );
};

UseImperativeHandleExample.displayName = 'UseImperativeHandleExample';

export default UseImperativeHandleExample;
