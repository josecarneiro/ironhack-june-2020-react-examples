import React from 'react';
import './App.css';

import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import ContactList from './components/ContactList';
import SortableContactList from './components/SortableContactList';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      <SortableContactList />
      {/* <ContactList /> */}
      {/* <Counter message="Hello World" />
      <LikeButton /> */}
    </div>
  );
}

export default App;
