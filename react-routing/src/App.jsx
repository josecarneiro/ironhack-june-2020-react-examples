import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomeView from './views/HomeView';
import BookListView from './views/BookListView';
import SingleBookView from './views/SingleBookView';
import MissingPageView from './views/MissingPageView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      basket: ['1984-george-orwell']
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/books/1984-george-orwell">Featured book of the month</Link>
            <Link to="/books/coders-clive-thompson">Top rated book</Link>
            <span>{this.state.basket.length} books in basket</span>
          </nav>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/books" component={BookListView} exact />
            <Route
              path="/books/:id"
              render={props => <SingleBookView basket={this.state.basket} {...props} />}
              exact
            />
            <Route path="/" component={MissingPageView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
