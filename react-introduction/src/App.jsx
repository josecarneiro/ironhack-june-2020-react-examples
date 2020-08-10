import React from 'react';
import logo from './logo.svg';
import './App.css';

// Doesn't work,
// I'm not able to import with JS a file outside of src/ or node_modules/
// import alternativeLogo from './../public/logo192.png';

// A component is a function that returns a JSX template **

// ** Components can also be classes, they can be renderless

const message = 'Olá Mundo';

function MessageComponent() {
  return (
    <div>
      <h1>{message}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aliquid.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={alternativeLogo} className="App-logo" alt="logo" /> */}
        {/* <img src="./logo.svg" className="App-logo" alt="logo" /> */}
        <img src="./logo192.png" className="App-logo" alt="logo" />
        <MessageComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// module.exports = App;
export default App;
