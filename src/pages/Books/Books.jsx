/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBooksAsync, deleteBookAsync } from '../../redux/books/BooksSlice';
import { BookForm, BookState } from '../../components';
import './Books.scss';

function Books() {
  const books = useSelector((state) => state.book.books);
  const { Loading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  const booksList = Object.entries(books).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });

  const clickHandler = (e) => {
    dispatch(deleteBookAsync(e.target.id));
  };

  if (Loading) return (<h4>Loading...</h4>);

  if (error) return (<h5>Error!!</h5>);
  return (
    <>
      <div className="books-container">
        {booksList.map((book) => (
          <BookState
            key={book.id + book.author}
            title={book.title}
            author={book.author}
            category={book.category}
            bookId={book.id}
            onClick={clickHandler}
          />
        ))}
      </div>
      <hr />
      <BookForm className="book-form" />
    </>
  );
}

export default Books;
