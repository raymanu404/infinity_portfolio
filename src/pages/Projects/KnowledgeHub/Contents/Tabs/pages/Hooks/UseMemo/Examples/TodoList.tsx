import React, { useMemo } from 'react';
import { TabExampleT, ThemeExampleT, Todo } from './interfaces';
import { filterTodos } from './utils';

interface TodoListProps {
  theme: ThemeExampleT;
  skipReRendering?: boolean;
  tab: TabExampleT;
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ theme, skipReRendering = true, tab, todos }) => {
  const filteredTodos = skipReRendering
    ? useMemo(() => filterTodos(todos, tab), [todos, tab])
    : filterTodos(todos, tab, true);

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '5px',
      }}
    >
      <h1>TodoList UseMemo Example</h1>
      <p>Filtered Todos Count: {filteredTodos.length}</p>

      {filteredTodos.map(todo => (
        <div
          key={todo.id}
          style={{
            marginBottom: '10px',
            textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
          }}
        >
          <span>{todo.text}</span>
          <span
            style={{
              marginLeft: '10px',
              color: todo.isCompleted ? 'green' : 'GrayText',
            }}
          >
            {todo.isCompleted ? 'Completed' : 'Active'}
          </span>
        </div>
      ))}
    </div>
  );
};

TodoList.displayName = 'TodoList';

export default TodoList;
