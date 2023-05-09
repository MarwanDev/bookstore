import React from 'react';
import PropTypes from 'prop-types';
import './BookState.scss';

function BookState({
  id,
  title,
  author,
  genre,
  onClick,
}) {
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
        <li><button type="button">Comments</button></li>
        <li><button type="button" onClick={onClick} id={id}>Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  );
}

BookState.defaultProps = {
  title: '',
  author: '',
  id: '',
  onClick: '',
  genre: '',
};

BookState.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  onClick: PropTypes.func,
};

export default BookState;
