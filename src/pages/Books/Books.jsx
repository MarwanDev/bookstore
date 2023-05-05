/* eslint-disable import/no-cycle */
import React from 'react';
import { BookState, BookForm } from '../../components';

const booksList = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
  },
];

function Books() {
  return (
    <>
      {booksList.map((book) => (
        <BookState key={book.id} book={book} />
      ))}
      <BookForm />
    </>
  );
}

export default Books;
