import Notes from '@/Shared/Components/Notes/Notes';
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
        setItems(prev =>
          prev.map(item => (item.id === id ? { ...item, quantity: quantity } : item)),
        );
      });
    },
    deleteHandler: async (id: string) => {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(id);
        }, 1000);
      });

      startTransition(() => {
        setItems(prevItems => prevItems.map(x => (x.id === id ? { ...x, quantity: 0 } : { ...x })));
      });
    },
  };

  return (
    <div>
      <h1>ReducerShoppingExample</h1>

      <Notes
        notes={[
          {
            note: 'The most important thing for performing multiple actions in parallel is PREV STATE from setState',
          },
        ]}
        specialNotes={true}
      />

      <ItemsContainer items={items} actions={actionsCallbacks} />
    </div>
  );
};

ReducerShoppingExample.displayName = 'ReducerShoppingExample';

export default ReducerShoppingExample;
