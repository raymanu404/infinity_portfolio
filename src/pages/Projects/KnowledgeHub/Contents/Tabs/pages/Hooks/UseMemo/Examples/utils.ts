import { TabExampleT, Todo } from './interfaces';

const generateTodos = (num: number) => {
  const todos: Todo[] = [];
  for (let i = 0; i < num; i++) {
    todos.push({ id: i, text: `Todo ${i}`, isCompleted: Math.random() < 0.5 });
  }
  return todos;
};

export const todos = generateTodos(100);

export const filterTodos = (todos: Todo[], tabs: TabExampleT) => {
  console.log('filterTodos called');
  const start = Date.now();
  while (Date.now() - start < 200) {
    // Simulate expensive calculation
  }

  switch (tabs) {
    case 'completed':
      return todos.filter(todo => todo.isCompleted);
    case 'active':
      return todos.filter(todo => !todo.isCompleted);
    default:
      return todos;
  }
};
