import React, { Component } from 'react';
import './App.css';

const generateId = () => Math.random().toString();

class App extends Component {
  constructor() {
    super();
    const tasks = this.loadTasks();
    this.state = {
      content: '',
      tasks: tasks || []
    };
  }

  saveTasks(tasks) {
    const tasksAsJSON = JSON.stringify(tasks);
    window.localStorage.setItem('tasks', tasksAsJSON);
  }

  loadTasks() {
    const tasksAsJSON = window.localStorage.getItem('tasks');
    const tasks = JSON.parse(tasksAsJSON);
    return tasks;
  }

  handleTaskAddition = event => {
    event.preventDefault();
    const { content } = this.state;
    const item = { id: generateId(), content };
    const tasksClone = [...this.state.tasks, item];
    this.setState({
      content: '',
      tasks: tasksClone
    });
    this.saveTasks(tasksClone);
  };

  handleTaskCompletion = index => {
    const tasksClone = [...this.state.tasks];
    tasksClone.splice(index, 1);
    this.setState({
      tasks: tasksClone
    });
    this.saveTasks(tasksClone);
  };

  handleTaskContentChange = event => {
    const value = event.target.value;
    this.setState({
      content: value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleTaskAddition}>
          <input
            id="task-input"
            type="text"
            placeholder="Write anything here..."
            required
            value={this.state.content}
            onChange={this.handleTaskContentChange}
          />
          <button>Add to list</button>
        </form>
        {(this.state.tasks.length && (
          <ul>
            {this.state.tasks.map((item, index) => (
              <li key={item.id}>
                <span>{item.content}</span>
                <button onClick={() => this.handleTaskCompletion(index)}>X</button>
              </li>
            ))}
          </ul>
        )) || <p>Add an item by filling the input above...</p>}
      </div>
    );
  }
}

export default App;
