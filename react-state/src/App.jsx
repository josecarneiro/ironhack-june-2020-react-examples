import React from 'react';
import './App.css';

import Counter from './components/Counter';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
      <Counter message="Hello World" />
      <LikeButton />
    </div>
  );
}

export default App;
