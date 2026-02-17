import { FlexWithGapBox, SpaceBetweenRowBox } from '@/Shared/Utils/Helpers/styled-components';
import { theme } from '@/theme';
import { Box, Button, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import { Delete, Pencil, SaveIcon } from 'lucide-react';
import React, { useReducer } from 'react';

type ActionReducerType = 'add' | 'delete' | 'update';

interface StateI {
  todoId: number;
  text: string;
  isChecked: boolean;
  readonly isUpdating?: boolean;
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

  console.log({
    state,
  });

  switch (type) {
    case 'add': {
      const updatedTodos = [...state.todos, action.nextState as StateI];
      return {
        todos: updatedTodos,
      };
    }
    case 'delete': {
      const updatedTodos = state.todos.filter(todo => todo.todoId !== action.nextState?.todoId);
      return {
        todos: updatedTodos,
      };
    }
    case 'update': {
      const updatedTodos = state.todos.map(todo => {
        if (todo.todoId === action.nextState?.todoId) {
          return {
            ...todo,
            isUpdating: action.nextState?.isUpdating ?? todo.isUpdating,
            text: action.nextState?.text || todo.text,
            isChecked: action.nextState?.isChecked ?? todo.isChecked,
          };
        }
        return todo;
      });

      return {
        todos: updatedTodos,
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
      text: 'Let it Roll 2027',
      isChecked: false,
    },
  ],
};

const TodoListExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [localText, setLocalText] = React.useState('');

  const addTodoHandler = (text: string) => {
    const nextId = state.todos.reduce((max, todo) => Math.max(max, todo.todoId), 0) + 1;

    dispatch({
      type: 'add',
      nextState: {
        isChecked: false,
        text: text,
        todoId: nextId,
      },
    });
  };

  const updateTodoHandler = (nextState: Partial<StateI>) => {
    dispatch({ type: 'update', nextState });
  };

  const deleteTodoHandler = (todoId: number) => {
    dispatch({ type: 'delete', nextState: { todoId } });
  };

  return (
    <FlexWithGapBox sx={{ padding: theme.spacing(3) }}>
      <SpaceBetweenRowBox sx={{ width: '100%' }}>
        <TextField
          placeholder="TODO"
          variant="standard"
          onChange={ev => setLocalText(ev.target.value)}
        />
        <Button variant="contained" onClick={() => addTodoHandler(localText)}>
          Add Todo
        </Button>
      </SpaceBetweenRowBox>
      <FlexWithGapBox>
        {state.todos.map(({ isChecked, todoId, text, isUpdating }) => {
          const key = todoId;
          return (
            <SpaceBetweenRowBox key={key}>
              <SpaceBetweenRowBox>
                <Checkbox
                  value={isChecked}
                  disabled={!isUpdating}
                  onChange={ev => updateTodoHandler({ todoId, isChecked: ev.target.checked })}
                />
                {isUpdating ? (
                  <>
                    <TextField
                      variant="standard"
                      defaultValue={text}
                      onChange={ev => updateTodoHandler({ todoId, text: ev.target.value })}
                    />
                  </>
                ) : (
                  <Typography variant="h6">{text}</Typography>
                )}
              </SpaceBetweenRowBox>
              <Box>
                {isUpdating ? (
                  <IconButton onClick={() => updateTodoHandler({ todoId, isUpdating: false })}>
                    <SaveIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => updateTodoHandler({ todoId, isUpdating: true })}>
                    <Pencil />
                  </IconButton>
                )}
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
