import React from 'react';
import './App.css';

import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import ContactList from './components/ContactList';
import SortableContactList from './components/SortableContactList';

function App() {
  return (
    <div className="App">
      <SortableContactList />
      {/* <ContactList /> */}
      {/* <Counter message="Hello World" />
      <LikeButton /> */}
    </div>
  );
}

export default App;
