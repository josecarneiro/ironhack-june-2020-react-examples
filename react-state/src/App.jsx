import React from 'react';
import './App.css';

import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList />
      <Counter message="Hello World" />
      <LikeButton />
    </div>
  );
}

export default App;
