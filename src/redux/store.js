import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BooksSlice';
import categoriesReducer from './categories/categoriesSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    book: booksReducer,
    category: categoriesReducer,
  },
});
