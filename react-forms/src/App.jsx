import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'John Doe',
      email: 'john@doe.com',
      content: 'This is the default message...'
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const property = event.target.name;

    // const data = {};
    // data[property] = value;
    // this.setState(data);

    this.setState({
      [property]: value
    });
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="name-input">First and Last Name</label>
        <input
          id="name-input"
          type="text"
          name="name"
          placeholder="First and Last Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label htmlFor="content-input">Contents of message</label>
        <input
          id="content-input"
          type="text"
          name="content"
          placeholder="Contents of message"
          value={this.state.content}
          onChange={this.handleInputChange}
        />
        <p>
          Message will be sent to {this.state.name} with email {this.state.email} and contents
          {this.state.content}.
        </p>
      </div>
    );
  }
}

export default App;
