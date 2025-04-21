import { Box, Grid } from '@mui/material';
import TicTacToeBox from './TicTacToeBox';
import { MoveI, PlayerI, ValueEnum, ValueOnBoardI } from '../utils/interfaces';
import { useState } from 'react';

interface PropsI {
  player1: PlayerI;
  player2: PlayerI;
}

const Game = (props: PropsI) => {
  const { player1, player2 } = props;
  //in this case we replace props from parent, with props from useContext global state about game(just game not in entirely app) state
  const [currentPlayer, setCurrentPlayer] = useState<PlayerI | null>(player1);
  const [valueOnBoard, setValueOnBoard] = useState<ValueOnBoardI[]>([]);

  const onClickHandler = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, value: MoveI) => {
    console.log(value);

    //to be refactored
    if (currentPlayer?.idPlayer === player1.idPlayer) {
      setValueOnBoard([
        ...valueOnBoard,
        {
          value: ValueEnum.X,
          position: { col: value.col, row: value.row },
          currentPlayerId: currentPlayer.idPlayer,
        },
      ]);
    }
    if (currentPlayer?.idPlayer === player2.idPlayer) {
      setValueOnBoard([
        ...valueOnBoard,
        {
          value: ValueEnum.ZERO,
          position: { col: value.col, row: value.row },
          currentPlayerId: currentPlayer.idPlayer,
        },
      ]);
    }
  };
  return (
    <>
      <Grid container>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '100px' }}>
          {Array.from(Array(3)).map((el, i) => {
            return (
              <Box sx={{ display: 'flex', flexDirection: 'row' }} key={`${el}-${i}`}>
                {Array.from(Array(3)).map((_, index) => (
                  <Grid item key={index}>
                    <TicTacToeBox
                      value={{ row: i, col: index }}
                      currentValueOnBoard={
                        valueOnBoard.find(
                          (x) =>
                            x.currentPlayerId === currentPlayer?.idPlayer &&
                            x.position.col === index &&
                            x.position.row === i,
                        )?.value ?? ''
                      }
                      onClickHandler={onClickHandler}
                    />
                  </Grid>
                ))}
              </Box>
            );
          })}
        </Box>
      </Grid>
    </>
  );
};

export default Game;
