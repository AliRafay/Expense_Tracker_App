import React from 'react';
import './App.css';
import TaskManager from './TaskManager';
import {GlobalProvider} from './GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <TaskManager />
    </GlobalProvider>
  );
}

export default App;
