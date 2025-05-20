import { FlexWithGapBox, SpaceBetweenRowBox } from '@/Shared/Utils/Helpers/styled-components';
import { theme } from '@/theme';
import { Box, Button, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import { Delete, Pencil } from 'lucide-react';
import React, { useReducer } from 'react';

type ActionReducerType = 'add' | 'delete' | 'update';

interface StateI {
  todoId: number;
  text: string;
  isChecked: boolean;
}

interface StateProps {
  todos: StateI[];
}

interface ActionI {
  type: ActionReducerType;
  nextState?: Partial<StateI>;
}

const reducer = (state: StateProps, action: ActionI): StateProps => {
  const { type } = action;

  switch (type) {
    case 'add': {
      return {
        todos: [...state.todos],
      };
    }
    case 'delete': {
      return {
        todos: [...state.todos],
      };
    }
    case 'update': {
      return {
        todos: [...state.todos],
      };
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
};

const initialState: StateProps = {
  todos: [
    {
      todoId: 1,
      text: 'I want to visit Prague',
      isChecked: false,
    },
    {
      todoId: 2,
      text: 'Let it Roll 2026',
      isChecked: false,
    },
  ],
};

const TodoListExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodoHandler = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextId = state.todos.sort((a: StateI, b: StateI) => a.todoId - b.todoId)[0].todoId++;
    console.log(nextId);
    dispatch({
      type: 'add',
      nextState: {
        isChecked: false,
        text: ev.target.value,
        todoId: nextId,
      },
    });
  };

  const updateTodoHandler = (todoId: number) => {
    dispatch({ type: 'update' });
  };

  const deleteTodoHandler = (todoId: number) => {
    dispatch({ type: 'delete' });
  };

  //TODO: resolve for each case
  return (
    <FlexWithGapBox sx={{ padding: theme.spacing(3) }}>
      <SpaceBetweenRowBox sx={{ width: '100%' }}>
        <TextField placeholder="TODO" variant="standard" onChange={ev => addTodoHandler(ev)} />
        <Button variant="contained">Add Todo</Button>
      </SpaceBetweenRowBox>
      <FlexWithGapBox>
        {state.todos.map(({ isChecked, todoId, text }) => {
          const key = todoId;
          return (
            <SpaceBetweenRowBox key={key}>
              <SpaceBetweenRowBox>
                <Checkbox value={isChecked} />
                <Typography variant="h6">{text}</Typography>
              </SpaceBetweenRowBox>
              <Box>
                <IconButton onClick={() => updateTodoHandler(todoId)}>
                  <Pencil />
                </IconButton>
                <IconButton onClick={() => deleteTodoHandler(todoId)}>
                  <Delete />
                </IconButton>
              </Box>
            </SpaceBetweenRowBox>
          );
        })}
      </FlexWithGapBox>
    </FlexWithGapBox>
  );
};

TodoListExample.displayName = 'TodoListExample';

export default TodoListExample;
