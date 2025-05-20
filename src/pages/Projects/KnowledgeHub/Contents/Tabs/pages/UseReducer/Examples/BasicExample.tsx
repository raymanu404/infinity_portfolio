import { FlexWithGapBox } from '@/Shared/Utils/Helpers/styled-components';
import { Button, TextField } from '@mui/material';
import React, { useReducer } from 'react';

interface StateI {
  name: string;
  age: number;
}

type ActionReducerType = 'increment_age' | 'change_name';
interface ActionI {
  type: ActionReducerType;
  nextName?: string;
}

const basicReducer = (state: StateI, action: ActionI): StateI => {
  const { type } = action;

  switch (type) {
    case 'increment_age': {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case 'change_name': {
      return {
        ...state,
        name: action.nextName ?? '',
      };
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
};

const initialState: StateI = {
  age: 26,
  name: 'Manu',
};

const BasicExample: React.FC = () => {
  const [state, dispatch] = useReducer(basicReducer, initialState);

  const incrementAgeHandler = () => {
    dispatch({ type: 'increment_age' });
  };

  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'change_name', nextName: e.target.value });
  };

  return (
    <FlexWithGapBox>
      <FlexWithGapBox>
        <label htmlFor="age-input-id">Your Age: {state.age}</label>
        <Button
          id="age-input-id"
          onClick={incrementAgeHandler}
          variant="contained"
          disableRipple
          sx={{ width: '50%' }}
        >
          Increment Age
        </Button>
      </FlexWithGapBox>
      <FlexWithGapBox>
        <label htmlFor="name-input-id">Your name is {state.name}</label>
        <TextField id="name-input-id" value={state.name} onChange={changeNameHandler} />
      </FlexWithGapBox>
    </FlexWithGapBox>
  );
};

BasicExample.displayName = 'BasicExample';

export default BasicExample;
