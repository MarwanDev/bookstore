import React from 'react';
import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/scss/styles.scss';
import './BookForm.scss';

function BookForm() {
  return (
    <>
      <h1>add newe book</h1>
      <form action="">
        <input type="text" placeholder="Book Title" />
        <DropdownList
          defaultValue="Action"
          data={['Action', 'Sci-Fi', 'Horror', 'Mystery']}
        />
        <button type="submit">
          add book
        </button>
      </form>
    </>
  );
}

export default BookForm;
