import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/ToDoItem'
import Aaa from './components/ToDoItem2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent name="test"/>
        <Aaa p="123" d={new Date().toLocaleDateString()}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
