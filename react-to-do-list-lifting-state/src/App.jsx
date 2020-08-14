import React, { Component } from 'react';
import TaskAdditionForm from './components/TaskAdditionForm';
import TaskItem from './components/TaskItem';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  handleTaskAddition = item => {
    // App component will only handle handleTaskAddition calls
    // made from the child component in which an entire new task is passed
    const tasksClone = [...this.state.tasks, item];
    this.setState({
      tasks: tasksClone
    });
  };

  handleTaskCompletion = index => {
    const tasksClone = [...this.state.tasks];
    tasksClone.splice(index, 1);
    this.setState({
      tasks: tasksClone
    });
  };

  render() {
    return (
      <div className="App">
        <TaskAdditionForm onTaskAddition={this.handleTaskAddition} />
        {(this.state.tasks.length && (
          <ul>
            {this.state.tasks.map((item, index) => (
              <TaskItem
                key={item.id}
                content={item.content}
                onTaskCompletion={() => this.handleTaskCompletion(index)}
              />
            ))}
          </ul>
        )) || <p>Add an item by filling the input above...</p>}
      </div>
    );
  }
}

export default App;
