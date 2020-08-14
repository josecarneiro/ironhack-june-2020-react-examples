import React, { Component } from 'react';
import IncrementTrigger from './components/IncrementTrigger';
import CountDisplay from './components/CountDisplay';
import EditCount from './components/EditCount';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleEdit = count => {
    this.setState({
      count
    });
  };

  render() {
    return (
      <div className="App">
        <IncrementTrigger count={this.state.count} onIncrement={this.handleIncrement} />
        <EditCount count={this.state.count} onEdit={this.handleEdit} />
        <CountDisplay count={this.state.count} />
      </div>
    );
  }
}

export default App;
