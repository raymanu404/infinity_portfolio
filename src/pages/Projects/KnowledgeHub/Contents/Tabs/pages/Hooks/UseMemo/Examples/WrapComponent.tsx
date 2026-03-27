import { Button } from '@mui/material';
import React, { memo, useMemo, useState } from 'react';
import { ThemeExampleT } from './interfaces';
import TodoList from './TodoList';
import { filterTodos, todos } from './utils';

const TodoListWithMemo = memo(TodoList);

const WrapComponent: React.FC = () => {
  const [darkMode, setDarkMode] = useState<ThemeExampleT>('light');
  const activeTodos = useMemo(() => filterTodos(todos, 'active'), []);

  return (
    <div>
      <h1>WrapComponent</h1>
      <p>
        Toggling the theme, thanks to useMemo together with memo, the component should not re-render
        the child components (TodoList)
      </p>
      <Button
        variant="contained"
        onClick={() => setDarkMode(prev => (prev === 'light' ? 'dark' : 'light'))}
      >
        {`Toggle ${darkMode === 'light' ? 'Dark' : 'Light'} Mode`}
      </Button>
      <TodoListWithMemo theme={darkMode} tab="active" todos={activeTodos} />
    </div>
  );
};

WrapComponent.displayName = 'WrapComponent';

export default WrapComponent;
