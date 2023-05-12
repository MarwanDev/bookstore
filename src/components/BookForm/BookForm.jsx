import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/scss/styles.scss';
import './BookForm.scss';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBookAsync } from '../../redux/books/BooksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const id = Math.floor(Math.random() * 100000);
    dispatch(addBookAsync({
      item_id: `book-${id + 1}`,
      title,
      author,
      category,
    }));
    e.preventDefault();
    document.getElementById('bookForm').reset();
  };

  return (
    <div className="form-container">
      <h1>add new book</h1>
      <form id="bookForm" onSubmit={submitHandler}>
        <input type="text" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} name="title" />
        <input type="text" placeholder="Book Author" onChange={(e) => setAuthor(e.target.value)} name="author" />
        <DropdownList
          className="drop-down"
          defaultValue={category}
          data={['Action', 'Sci-Fi', 'Horror', 'Mystery']}
          name="genre"
          onChange={(category) => setCategory(category)}
        />
        <button type="submit" className="form-submit">
          add book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
