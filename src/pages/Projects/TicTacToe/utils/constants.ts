import { MoveI } from './interfaces';

export const winningMoves = [
  //per diagonal
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 2,
    },
  ],
  [
    {
      row: 2,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 0,
      col: 2,
    },
  ],
  // per column
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 1,
      col: 0,
    },
    {
      row: 2,
      col: 0,
    },
  ],
  [
    {
      row: 0,
      col: 1,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 1,
    },
  ],
  [
    {
      row: 0,
      col: 2,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 2,
      col: 2,
    },
  ],
  //per line
  [
    {
      row: 0,
      col: 0,
    },
    {
      row: 0,
      col: 1,
    },
    {
      row: 0,
      col: 2,
    },
  ],
  [
    {
      row: 1,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 2,
    },
  ],
  [
    {
      row: 2,
      col: 0,
    },
    {
      row: 2,
      col: 1,
    },
    {
      row: 2,
      col: 2,
    },
  ],
] as MoveI[][];

export const winningSums = [0, 3, 6, 9];

export const DEFAULT_USER_INPUT = {
  NICKNAME: '',
  COLOR: '#FFFFFF',
};

export const MAXIMUM_PLAYERS_ALLOWED = 2;
