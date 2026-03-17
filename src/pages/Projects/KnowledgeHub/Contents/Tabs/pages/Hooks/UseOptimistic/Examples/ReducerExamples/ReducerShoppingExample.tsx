import React, { startTransition, useState } from 'react';
import ItemsContainer from './components/ItemsContainer';
import { ITEMS } from './constants';
import { ShopItemI } from './interfaces';

const ReducerShoppingExample: React.FC = () => {
  const [items, setItems] = useState<ShopItemI[]>(ITEMS);

  const actionsCallbacks = {
    updateQuantityHandler: async (quantity: number, id: string) => {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(quantity);
        }, 1000);
      });

      startTransition(() => {
        const updatedItems = items.map(x => {
          if (x.id === id) {
            return { ...x, quantity };
          }

          return x;
        });
        setItems(updatedItems);
      });
    },
    deleteHandler: async (id: string) => {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(id);
        }, 1000);
      });

      startTransition(() => {
        const updatedItems = items.filter(x => x.id !== id);
        setItems(updatedItems);
      });
    },
  };

  return (
    <div>
      <h1>ReducerShoppingExample</h1>

      <ItemsContainer items={items} actions={actionsCallbacks} />
    </div>
  );
};

ReducerShoppingExample.displayName = 'ReducerShoppingExample';

export default ReducerShoppingExample;
