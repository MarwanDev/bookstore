/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './BookState.scss';

function BookState(props) {
  const { book } = props;
  const {
    id,
    title,
    author,
    genre,
  } = book;
  return (
    <div className="book-container">
      <div className="book-info-container">
        <h2 className="book-genre">
          {genre}
        </h2>
        <h3 className="book-title">
          {title}
        </h3>
        <h4 className="book-author">
          {author}
        </h4>
      </div>
      <ul className="options-container">
        <li><a href="/">Comments</a></li>
        <li><a href="/">Remove</a></li>
        <li><a href="/">Edit</a></li>
      </ul>
    </div>
  );
}

BookState.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookState;
