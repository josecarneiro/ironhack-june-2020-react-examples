import React from 'react';
import { Link } from 'react-router-dom';
import books from './../books.json';

const BookListView = () => {
  return (
    <div>
      <h1>Books for sale</h1>
      {books.map(book => (
        <Link key={book.id} to={`/books/${book.id}`}>
          {book.name}
        </Link>
      ))}
    </div>
  );
};

export default BookListView;
