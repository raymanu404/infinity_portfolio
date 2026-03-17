import { Divider, IconButton, Stack, Typography } from '@mui/material';
import { Trash2 } from 'lucide-react';
import React, { startTransition, useMemo, useOptimistic } from 'react';
import { ShopItemI } from '../interfaces';
import CartItemContainer from './CartItemContainer';

interface ActionCallbacks {
  updateQuantityHandler: (quantity: number, id: string) => Promise<void>;
  deleteHandler: (id: string) => Promise<void>;
}

interface ItemsContainerProps {
  items: ShopItemI[];
  actions: ActionCallbacks;
}

interface ActionCartI {
  actionType: 'updateQuantity' | 'delete';
  nextState: Partial<ShopItemI>;
}

const VAT = 0.21;

const itemsCartReducer = (currentItems: ShopItemI[], action: ActionCartI): ShopItemI[] => {
  switch (action.actionType) {
    case 'updateQuantity': {
      const existsItem = currentItems.find(x => x.id === action.nextState.id);
      if (existsItem) {
        const updatedCart = currentItems.map(x => {
          if (x.id === action.nextState.id) {
            return {
              ...x,
              quantity: action.nextState.quantity || 0,
              isPending: true,
            };
          } else {
            return { ...x };
          }
        });

        return updatedCart;
      }

      const newItem = { ...action.nextState, isPending: true } as ShopItemI;

      return [...currentItems, newItem];
    }
    case 'delete': {
      const updatedCart = currentItems.map(x =>
        x.id === action.nextState.id
          ? { ...x, isDeleted: true, isPending: true, quantity: 0 }
          : { ...x },
      );

      return updatedCart;
    }

    default:
      return currentItems;
  }
};

const ItemsContainer: React.FC<ItemsContainerProps> = ({ items, actions }) => {
  const [optimisticItems, useOptimisticDispatch] = useOptimistic(items, itemsCartReducer);

  const totalWoVAT = useMemo(
    () => optimisticItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0),
    [optimisticItems],
  );

  const totalCart = useMemo(() => totalWoVAT + totalWoVAT * VAT, [optimisticItems]);

  const deleteHandler = (id: string) => {
    startTransition(async () => {
      useOptimisticDispatch({
        actionType: 'delete',
        nextState: {
          id,
        },
      });
      await actions.deleteHandler(id);
    });
  };

  const updateQuantityHandler = async (quantity: number, id: string) => {
    useOptimisticDispatch({
      actionType: 'updateQuantity',
      nextState: {
        quantity,
        id,
      },
    });

    startTransition(async () => {
      await actions.updateQuantityHandler(quantity, id);
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {optimisticItems.map(x => (
          <CartItemContainer
            key={x.id}
            {...x}
            actionHandler={value => updateQuantityHandler(value, x.id)}
          />
        ))}
      </div>
      <div>
        <Divider />
        {optimisticItems
          .filter(x => x.quantity !== 0)
          .filter(x => !x.isDeleted)
          .map(({ id, price, quantity, title, isPending }) => {
            const subTotal = price * quantity;
            return (
              <div key={id.toString()}>
                <Stack
                  direction={'row'}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    width: '40%',
                  }}
                >
                  <div style={{ color: isPending ? 'GrayText' : 'black' }}>
                    <Typography variant="subtitle1">
                      {title} x {quantity}
                    </Typography>
                    <Typography variant="subtitle2">$ {subTotal.toFixed(2)}</Typography>
                  </div>
                  <IconButton
                    onClick={() => {
                      deleteHandler(id);
                    }}
                    disabled={isPending}
                  >
                    <Trash2 />
                  </IconButton>
                </Stack>
              </div>
            );
          })}

        <Divider />
        <div>
          <Typography variant="h6">Total : ${totalCart.toFixed(2)}</Typography>
        </div>
      </div>
    </div>
  );
};

ItemsContainer.displayName = 'ItemsContainer';

export default ItemsContainer;
