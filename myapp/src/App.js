import React from 'react';
import './App.css';

import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import Counter from './components/counter/Counter';

import TodoApp from './components/todo/TodoApp';
import { LoginComponent } from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <LearningComponents /> */}
        {/*<Counter/>*/}
        <TodoApp/>
    </div>
  );
}

function LearningComponents() {
  return (
    <div className='LearningComponents'>
        My Application
      <FirstComponent/>
      <SecondComponent/>
    </div>
  );
}

export default App;
