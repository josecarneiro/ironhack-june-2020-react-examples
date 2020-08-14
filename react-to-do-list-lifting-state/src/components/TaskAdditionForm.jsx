import React, { Component } from 'react';

const generateId = () => Math.random().toString();

class TaskAdditionForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }

  handleTaskContentChange = event => {
    const value = event.target.value;
    this.setState({
      content: value
    });
  };

  handleSubmission = event => {
    event.preventDefault();
    const { content } = this.state;
    const item = { id: generateId(), content };
    this.props.onTaskAddition(item);
    this.setState({
      content: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
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
    );
  }
}

export default TaskAdditionForm;
