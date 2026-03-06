import { TextField } from '@mui/material';
import React, { startTransition } from 'react';

interface QuantityInputProps {
  updateQuantity: (newQuantity: number) => Promise<void>;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ updateQuantity }) => {
  const onChangeHandler = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +ev.target.value;
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await updateQuantity(newQuantity);
    });
  };

  return (
    <div>
      <h1>QuantityInput</h1>
      <TextField onChange={onChangeHandler} type="number" defaultValue={1} />
    </div>
  );
};

QuantityInput.displayName = 'QuantityInput';

export default QuantityInput;
