import { Box, TextField } from '@mui/material';
import React from 'react';

interface PropsI {
  className?: string;
  placeholder?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = (props: PropsI) => {
  const { onChangeHandler, ...rest } = props;

  return (
    <Box sx={{}}>
      <TextField
        id="outlined-basic"
        label="Monsters"
        variant="outlined"
        type="search"
        onChange={onChangeHandler}
        autoComplete="off"
        {...rest}
      />
    </Box>
  );
};

export default SearchBox;
