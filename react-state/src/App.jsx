import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import ContactList from './components/ContactList';
import SortableContactList from './components/SortableContactList';
import Message from './components/Message';

class App extends Component {
  constructor() {
    super();
    this.state = {
      likeButtonActive: true
    };
  }

  handleLikeButtonToggle = () => {
    this.setState({
      likeButtonActive: !this.state.likeButtonActive
    });
  };

  // Runs when error is thrown in child component
  componentDidCatch(error) {
    console.log('There was an uncaught error in the liked button component');
    console.log(error);
  }

  render() {
    return (
      <div className="App">
        {/* <Message />
        <SortableContactList />
        <ContactList />
        <Counter message="Hello World" /> */}
        <button onClick={this.handleLikeButtonToggle}>Toggle like button active</button>
        {this.state.likeButtonActive && <LikeButton />}
      </div>
    );
  }
}

export default App;
