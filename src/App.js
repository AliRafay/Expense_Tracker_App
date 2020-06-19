import React from 'react';
import './App.css';
import ExpenseTracker from './ExpenseTracker';
import {GlobalProvider} from './GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <ExpenseTracker />
    </GlobalProvider>
  );
}

export default App;
