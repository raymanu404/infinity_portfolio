import { Button, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { TabExampleT, ThemeExampleT } from './interfaces';
import TodoList from './TodoList';

interface ExampleContainerProps {
  skipReRendering?: boolean;
  title: string;
}

const ExampleContainer: React.FC<ExampleContainerProps> = ({ skipReRendering = false, title }) => {
  const [darkMode, setDarkMode] = useState<ThemeExampleT>('light');
  const [tab, setTab] = useState<TabExampleT>('all');

  const handleTabChange = (_: React.SyntheticEvent, newValue: TabExampleT) => {
    setTab(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1>{title}</h1>
        <Button
          variant="contained"
          onClick={() => setDarkMode(prev => (prev === 'light' ? 'dark' : 'light'))}
        >
          {`Toggle ${darkMode === 'light' ? 'Dark' : 'Light'} Mode`}
        </Button>
      </div>
      <div
        style={{
          backgroundColor: darkMode === 'dark' ? '#333' : '#fff',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="All" value="all" />
          <Tab label="Completed" value="completed" />
          <Tab label="Active" value="active" />
        </Tabs>
      </div>
      <TodoList theme={darkMode} skipReRendering={skipReRendering} tab={tab} />
    </div>
  );
};

ExampleContainer.displayName = 'ExampleContainer';

export default ExampleContainer;
