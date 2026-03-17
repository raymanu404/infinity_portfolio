import { Button } from '@mui/material';
import React, { startTransition, useOptimistic, useState } from 'react';

interface StateTodo {
  id: string;
  text: string;
  pending?: boolean;
}

const todosReducer = (currentTodos: StateTodo[], newTodo: StateTodo) => {
  return [
    ...currentTodos,
    {
      ...newTodo,
      pending: true,
    },
  ] as StateTodo[];
};

const fakeAddTodo = async (newTodo: StateTodo) =>
  new Promise<StateTodo>(resolve =>
    setTimeout(() => {
      resolve(newTodo);
    }, 1000),
  );

const AddTodoList: React.FC<{ todos: StateTodo[]; action: (todo: StateTodo) => Promise<void> }> = ({
  action,
  todos,
}) => {
  const [optimisticTodoList, optimisticAddDispatch] = useOptimistic(todos, todosReducer);

  const addTodoHandler = () => {
    const newTodo: StateTodo = { id: crypto.randomUUID(), text: `new TODO ${crypto.randomUUID()}` };

    startTransition(async () => {
      optimisticAddDispatch(newTodo);

      await action(newTodo);
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={addTodoHandler}>
        Add Todo
      </Button>
      <p>Total Todos: {optimisticTodoList.length}</p>
      {optimisticTodoList.map(x => {
        return (
          <div key={x.id.toString()}>
            <p style={{ color: x.pending ? 'GrayText' : 'black' }}>{x.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const BasicReducerExample: React.FC = () => {
  const [todos, setTodos] = useState<StateTodo[]>([{ id: crypto.randomUUID(), text: 'TODO 1' }]);

  const addTodoAction = async (newTodo: StateTodo) => {
    const savedTodo = await fakeAddTodo(newTodo);

    startTransition(() => {
      setTodos([...todos, savedTodo]);
    });
  };

  return (
    <div>
      <h2>BasicReducerExample</h2>

      <AddTodoList todos={todos} action={addTodoAction} />
    </div>
  );
};

BasicReducerExample.displayName = 'BasicReducerExample';

export default BasicReducerExample;
