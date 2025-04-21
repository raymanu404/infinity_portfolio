import { Box, IconButton } from '@mui/material';
import { PlayerInputContainer } from './PlayerInputContainer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useMemo, useState } from 'react';
import { GameStatus, PlayerStartDataI } from '../utils/interfaces';
import { DEFAULT_USER_INPUT, MAXIMUM_PLAYERS_ALLOWED } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface PropsI {
  gameStatus: GameStatus;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
}

const StartGame = (props: PropsI) => {
  const { gameStatus, setGameStatus } = props;
  const [userInput, setUserInput] = useState<PlayerStartDataI[]>([]);
  const navigate = useNavigate();

  const gamePreconditions: boolean = useMemo(
    () =>
      userInput.length === MAXIMUM_PLAYERS_ALLOWED &&
      userInput.every(
        (x) =>
          x.userInput.nickname !== DEFAULT_USER_INPUT.NICKNAME &&
          x.userInput.color !== DEFAULT_USER_INPUT.COLOR,
      ),
    [userInput],
  );

  const startGameHandler = () => {
    if (gameStatus === GameStatus.NEW && gamePreconditions) {
      setGameStatus(GameStatus.IN_PROGRESS);
      navigate(`?gameSession=${'1'}`);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
        <PlayerInputContainer
          title="Player 1"
          idPlayer="player1"
          setUserInput={setUserInput}
          userInput={userInput}
        />
        <PlayerInputContainer
          title="Player 2"
          idPlayer="player2"
          setUserInput={setUserInput}
          userInput={userInput}
        />
      </Box>
      <Box sx={{ margin: '100px' }}>
        <IconButton
          sx={{
            color: '#161925',
            width: '50px',
            height: '50px',
            backgroundColor: '#81d4fa',
            ':hover': {
              backgroundColor: '#4fc3f7',
            },
            ':disabled': {
              backgroundColor: '#b3e5fc',
            },
          }}
          onClick={startGameHandler}
        >
          <PlayArrowIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StartGame;
