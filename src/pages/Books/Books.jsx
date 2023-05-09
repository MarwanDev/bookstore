/* eslint-disable import/no-cycle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from '../../redux/books/BooksSlice';
import { BookForm, BookState } from '../../components';

function Books() {
  const books = useSelector((state) => state.book.books);

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <>
      {books.map((book) => (
        <BookState
          key={book.bookId + book.author}
          title={book.title}
          author={book.author}
          genre={book.genre}
          id={book.bookId}
          onClick={clickHandler}
        />
      ))}
      <BookForm />
    </>
  );
}

export default Books;
