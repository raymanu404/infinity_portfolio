import { PlayerI } from './interfaces'
import { winningMoves, winningSums } from './constants'

// const getSumOfPlayerMoves = (numbersArray: number[]): number =>
//   numbersArray.reduce((prevValue, currentValue) => prevValue + currentValue, 0)

// const getStatusOfPlayerMovesBoolean = (sum: number): boolean => winningSums.includes(sum)

// const getStatusPosition = (playerMoves: number[]): number[] | null => {
//   return null
// }

export const getWinner = (currentPlayer: PlayerI, previousPlayer: PlayerI): PlayerI | null => {
  const currentPlayerObj = currentPlayer
  const previousPlayerObj = previousPlayer

  //   const sumOfCurrentPlayer = getSumOfPlayerMoves(currentPlayer.moves)
  //   const sumOfPreviousPlayer = getSumOfPlayerMoves(previousPlayer.moves)

  //   currentPlayerObj.isWinner = getStatusOfPlayerMovesBoolean(sumOfCurrentPlayer)
  //   previousPlayerObj.isWinner = getStatusOfPlayerMovesBoolean(sumOfPreviousPlayer)

  //   if (currentPlayerObj.isWinner) {
  //     currentPlayerObj.winningLines = getStatusPosition(currentPlayerObj.moves)

  //     return currentPlayerObj
  //   } else if (previousPlayerObj.isWinner) {
  //     previousPlayerObj.winningLines = getStatusPosition(previousPlayerObj.moves)

  //     return previousPlayerObj
  //   }

  return null
}
