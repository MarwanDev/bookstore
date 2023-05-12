import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xA9KgD3y9zfmUss1FmYF';

const getBooksAsync = createAsyncThunk('books/getBooksAsync', async () => {
  const res = await axios.get(`${API_URL}/books`);
  return res.data;
});

const addBookAsync = createAsyncThunk('books/addBookAsync', async (book, thAPI) => {
  try {
    await axios.post(`${API_URL}/books`, book);
    thAPI.dispatch(getBooksAsync());
    const res = thAPI.getState().books;
    console.log(res.data);
    return res;
  } catch (error) {
    throw new Error('Failed to add data');
  }
});

const deleteBookAsync = createAsyncThunk('books/deleteBookAsync', async (id, thAPI) => {
  try {
    await axios.delete(`${API_URL}/books/${id}`);
    thAPI.dispatch(getBooksAsync());
    const res = thAPI.getState().books;
    return res;
  } catch (error) {
    throw new Error('Failed to delete data');
  }
});

const initialState = {
  books: [],
  Loading: false,
  error: null,
};

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.bookId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      state.Loading = false;
      Object.assign(state.books, action.payload);
    });
    builder.addCase(getBooksAsync.fulfilled, (state, action) => {
      state.Loading = false;
      state.error = null;
      state.books = action.payload;
    });
    builder.addCase(getBooksAsync.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getBooksAsync.pending, (state) => {
      state.Loading = true;
      state.error = null;
    });
    builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
      delete state.books[action.payload];
    });
  },
});

export { getBooksAsync, addBookAsync, deleteBookAsync };

export const { addBook, removeBook } = booksSlice.actions;
export const showBook = (state) => state.book.books;
export default booksSlice.reducer;
