import { ShopItemI } from './interfaces';

export const ITEMS: ShopItemI[] = [
  {
    id: crypto.randomUUID(),
    title: 'Ice Cream',
    price: 2.3,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    title: 'Pizza',
    price: 12.2,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    title: 'Sandwich',
    price: 4.6,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    title: 'Scrambled Eggs',
    price: 6.2,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    title: 'Burger',
    price: 8.2,
    quantity: 0,
  },
];
