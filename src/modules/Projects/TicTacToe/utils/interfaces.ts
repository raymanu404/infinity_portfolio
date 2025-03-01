export interface PlayerI {
  moves: number[]
  name?: string
  winningLines?: number[] | null
  isWinner?: boolean
  isFirst?: boolean
  idPlayer: string
}

export interface UserInputI {
  nickname: string
  color: string
}

export interface PlayerStartDataI {
  userInput: UserInputI
  idPlayer: string
}

export interface MoveI {
  row: number
  col: number
}

export interface ValueOnBoardI {
  value: ValueEnum
  position: MoveI
  currentPlayerId: string
}

export enum GameStatus {
  NEW = 'new',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export enum ValueEnum {
  X = 'X',
  ZERO = '0',
}
