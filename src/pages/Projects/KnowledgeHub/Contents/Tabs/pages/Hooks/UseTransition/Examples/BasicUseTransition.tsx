import { Spinner } from '@/Shared/Components';
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
        setQuantity(newQuantity);
      });
    });
  };

  const totalPrice = quantity * 102.34;

  return (
    <div>
      <h2>Updating the quantity in an Action </h2>

      {isPending ? (
        <Spinner size="1.4em" />
      ) : (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <p>Quantity: {quantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      )}

      <QuantityInput updateQuantity={updateQuantityHandler} />
    </div>
  );
};

BasicUseTransition.displayName = 'BasicUseTransition';

export default BasicUseTransition;
