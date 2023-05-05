/* eslint-disable import/no-cycle */
import React from 'react';
import { BookState, BookForm } from '../../components';

function Books() {
  return (
    <>
      <BookState />
      <BookForm />
    </>
  );
}

export default Books;
