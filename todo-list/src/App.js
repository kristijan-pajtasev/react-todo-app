import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskList from "./tasks/TaskList";
import AddTask from "./tasks/Add";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList />
        <AddTask />
      </div>
    );
  }
}

export default App;
