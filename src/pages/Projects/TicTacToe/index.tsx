import { FullCenteredBox } from '@/Shared/Utils/Helpers/styled-components';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Game from './Components/Game';
import StartGame from './Components/StartGame';
import { GameStatus } from './utils/interfaces';

const style = {
  // position: 'absolute' as 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

const TicTacToe = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.NEW);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location.search);
    if (location.search.includes('?gameSession=1')) {
      handleOpen();
    }
    // if (gameStatus === GameStatus.IN_PROGRESS) {
    //   handleOpen()
    // }
  }, [location]);

  //Maybe this piece of code will be removed after we develop useContext scope of game
  // useEffect(() => {
  //   const { search } = location
  //   const queryParamString = search.substring(1)
  //   if (queryParamString) {
  //     const queryParams = queryParamString.split('&')
  //     const gameSession = queryParams[0].split('=')

  //     if (gameSession.length === 2 && gameSession[1] !== '') {
  //       console.log(gameSession)
  //       setOpen(true)
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.search])

  return (
    <FullCenteredBox>
      <Box>
        {/* {gameStatus !== GameStatus.NEW && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              sx={{
                color: '#161925',
                width: '50px',
                height: '50px',
                backgroundColor: '#FDFFFC',
                ':hover': {
                  backgroundColor: '#FDFFF3',
                },
              }}
              onClick={() => {
                if (gameStatus === GameStatus.IN_PROGRESS) {
                  setGameStatus(GameStatus.NEW)
                }
              }}
            >
              <RestartAltIcon fontSize="large" />
            </IconButton>
          </Box>
        )} */}

        {gameStatus === GameStatus.NEW && (
          <StartGame gameStatus={gameStatus} setGameStatus={setGameStatus} />
        )}
        {gameStatus === GameStatus.IN_PROGRESS && (
          <>
            {/* 
          in this scope, the best solution will be useContext, here just set the future state for game only once
          
          */}

            <Game player1={{ moves: [], idPlayer: 'a' }} player2={{ moves: [], idPlayer: 'b' }} />
          </>
        )}
      </Box>
    </FullCenteredBox>
  );
};

export default TicTacToe;
