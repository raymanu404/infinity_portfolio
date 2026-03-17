import Notes from '@/Shared/Components/Notes/Notes';
import { Trash } from 'lucide-react';
import React, { startTransition, useOptimistic, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  sending?: boolean; // optimistic flag
}

type Action =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: number }
  | { type: 'delete'; id: number };

// Fake API calls
const fakeAddTodo = (text: string): Promise<Todo> =>
  new Promise(resolve =>
    setTimeout(() => resolve({ id: Date.now(), text, completed: false }), 1000),
  );

const fakeToggleTodo = (id: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, 1000));

const fakeDeleteTodo = (id: number): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log('deleted', id);
      if (id !== 1) resolve();
      else reject();
    }, 1000),
  );

// Reducer passed as 2nd arg to useOptimistic
const todosReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
          sending: true, // mark as optimistic
        },
      ];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed, sending: true } : todo,
      );
    case 'delete':
      return state.map(x => {
        if (x.id === action.id) {
          return { ...x, sending: true };
        }

        return x;
      });
    default:
      return state;
  }
};

const ReducerValue: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
  ]);

  const [error, setError] = useState<string | null>(null);
  const [optimisticTodos, optimisticDispatch] = useOptimistic(todos, todosReducer);

  const handleAdd = (text: string) => {
    startTransition(async () => {
      optimisticDispatch({ type: 'add', text }); // UI updates immediately

      const newTodo = await fakeAddTodo(text); // wait for server
      setTodos(prev => [...prev, newTodo]); // commit real state
    });
  };

  const handleToggle = (id: number) => {
    startTransition(async () => {
      optimisticDispatch({ type: 'toggle', id }); // UI updates immediately

      await fakeToggleTodo(id);
      setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    });
  };

  const handleDelete = (id: number) => {
    setError(null);
    startTransition(async () => {
      optimisticDispatch({ type: 'delete', id }); // UI updates immediately

      try {
        await fakeDeleteTodo(id);
        setTodos(prev => prev.filter(x => x.id !== id));
      } catch {
        setError('Cannot delete. Permission denied.');
      }
    });
  };

  return (
    <div>
      <Notes
        specialNotes={true}
        notes={[
          {
            note: ` Reducer pattern like useOptimistic(items, fn): If items changes while the Action is pending, React re-runs your reducer with the new items to recalculate the state. This keeps your optimistic additions on top of the latest data.`,
          },
          {
            note: 'Reducers are essential when the base state might change while your Transition is pending. If todos changes while your add is pending (for example, another user added a todo), React will re-run your reducer with the new todos to recalculate what to show. This ensures your new todo is added to the latest list, not an outdated copy.',
            subNotes: [
              {
                note: 'An updater function like setOptimistic(prev => [...prev, newItem]) would only see the state from when the Transition started, missing any updates that happened during the async work.',
              },
            ],
          },
          {
            note: 'Optimistic delete with error recovery, When the delete fails, the item automatically reappears in the list.',
          },
        ]}
      />
      <button
        onClick={() => handleAdd('New todo ' + Date.now())}
        disabled={optimisticTodos.some(x => x.sending)}
      >
        Add Todo
      </button>
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id} style={{ opacity: todo.sending ? 0.5 : 1 }}>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px 0',
              }}
            >
              <span
                onClick={() => handleToggle(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </span>
              {todo.sending && <small> — saving...</small>}
              <Trash onClick={() => handleDelete(todo.id)} size={'1.5em'} />
            </div>
          </li>
        ))}
        {error && <p style={{ color: 'red', padding: 8, background: '#fee' }}>{error}</p>}
      </ul>
    </div>
  );
};

ReducerValue.displayName = 'ReducerValue';

export default ReducerValue;
