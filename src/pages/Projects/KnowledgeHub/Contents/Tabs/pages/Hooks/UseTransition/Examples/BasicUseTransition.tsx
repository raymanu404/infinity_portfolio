import React from 'react';
import QuantityInput from './QuantityInput';
import { updateQuantityApi } from './utils';

const BasicUseTransition: React.FC = () => {
  const [quantity, setQuantity] = React.useState(1);
  const [isPending, startTransition] = React.useTransition();

  const updateQuantityHandler = async (newQuantity: number) => {
    startTransition(async () => {
      await updateQuantityApi(newQuantity);

      startTransition(() => {
        setQuantity(prev => prev + 1);
      });
    });
  };

  return (
    <div>
      <h1>Updating the quantity in an Action </h1>

      <p>Quantity: {quantity}</p>

      {isPending && <p>Loading...</p>}

      <QuantityInput updateQuantity={updateQuantityHandler} />
    </div>
  );
};

BasicUseTransition.displayName = 'BasicUseTransition';

export default BasicUseTransition;
