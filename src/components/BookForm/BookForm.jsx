import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/scss/styles.scss';
import './BookForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../../redux/books/BooksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  const submitHandler = (e) => {
    const id = books.length + 1;
    dispatch(addBook({
      bookId: `book-${id + 1}`,
      title,
      author,
      genre,
    }));
    e.preventDefault();
    document.getElementById('bookForm').reset();
  };

  return (
    <>
      <h1>add newe book</h1>
      <form id="bookForm" onSubmit={submitHandler}>
        <input type="text" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} name="title" />
        <input type="text" placeholder="Book Author" onChange={(e) => setAuthor(e.target.value)} name="author" />
        <DropdownList
          defaultValue={genre}
          data={['Action', 'Sci-Fi', 'Horror', 'Mystery']}
          name="genre"
          onChange={(genre) => setGenre(genre)}
        />
        <button type="submit">
          add book
        </button>
      </form>
    </>
  );
}

export default BookForm;
