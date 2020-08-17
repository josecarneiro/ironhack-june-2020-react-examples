import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import CountryView from './views/CountryView';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/country/:id" component={CountryView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
