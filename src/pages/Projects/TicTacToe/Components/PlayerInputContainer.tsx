import { Box, Typography } from '@mui/material';
import CustomTextField from '../../Components/CustomTextField';
import { PlayerStartDataI } from '../utils/interfaces';
import { useState } from 'react';
import { DEFAULT_USER_INPUT, MAXIMUM_PLAYERS_ALLOWED } from '../utils/constants';

interface PropsI {
  title?: string;
  idPlayer: string;
  userInput: PlayerStartDataI[];
  setUserInput: React.Dispatch<React.SetStateAction<PlayerStartDataI[]>>;
}

interface DataPropsI {
  nickname: string;
  color: string;
}

const PlayerInputContainer = (props: PropsI) => {
  const { title, idPlayer, setUserInput, userInput } = props;

  const [data, setData] = useState<DataPropsI>({
    nickname: DEFAULT_USER_INPUT.NICKNAME,
    color: DEFAULT_USER_INPUT.COLOR,
  });

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = ev.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onBlurHandler = (_: React.FocusEvent<HTMLInputElement>) => {
    if (
      data.nickname !== DEFAULT_USER_INPUT.NICKNAME &&
      data.color !== DEFAULT_USER_INPUT.COLOR &&
      userInput.filter((x) => x.idPlayer !== idPlayer).length < MAXIMUM_PLAYERS_ALLOWED &&
      userInput.length < MAXIMUM_PLAYERS_ALLOWED
    ) {
      setUserInput((prev) => {
        return [...prev, { idPlayer: idPlayer, userInput: data }];
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Typography variant="h5">{title}</Typography>
      <CustomTextField
        type={'text'}
        placeholder="Nickname"
        value={data.nickname}
        name={'nickname'}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <CustomTextField
        type={'color'}
        value={data.color}
        sx={{ width: '50px' }}
        name={'color'}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </Box>
  );
};

export { PlayerInputContainer };
