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

  if (Loading) return (<h4>Loading...</h4>);

  if (error) return (<h5>Error!!</h5>);

  const booksList = Object.entries(books).map(([id, items]) => {
    const [item] = items;
    return { id, ...item };
  });
  return (
    <>
      <div className="books-container">
        {booksList.map((book) => (
          <BookState
            key={book.id + book.author}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.id}
            onClick={(e) => dispatch(deleteBookAsync(e.target.id))}
          />
        ))}
      </div>
      <hr />
      <BookForm className="book-form" />
    </>
  );
}

export default Books;
