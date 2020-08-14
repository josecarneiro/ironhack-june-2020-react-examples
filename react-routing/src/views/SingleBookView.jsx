import React, { Component } from 'react';
import books from './../books.json';

class SingleBookView extends Component {
  constructor() {
    super();
    this.state = {
      book: null
    };
  }

  componentDidMount() {
    this.loadBook();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadBook();
    }
  }

  loadBook() {
    const id = this.props.match.params.id;
    const book = books.find(item => item.id === id);
    this.setState({
      book
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.book && (
          <>
            <h1>{this.state.book.name}</h1>
            <h3>{this.state.book.author}</h3>
            <h5>{this.state.book.date}</h5>
          </>
        )}
        <span>
          {this.props.basket.includes(this.props.match.params.id)
            ? 'Book is in basket'
            : 'Book is not in basket'}
        </span>
      </div>
    );
  }
}

export default SingleBookView;
