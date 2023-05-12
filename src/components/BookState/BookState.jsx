import React from 'react';
import PropTypes from 'prop-types';
import './BookState.scss';

function BookState({
  bookId,
  title,
  author,
  category,
  onClick,
}) {
  return (
    <div className="book-container">
      <div className="book-info-container">
        <h2 className="book-genre">
          {category}
        </h2>
        <h3 className="book-title">
          {title}
        </h3>
        <h4 className="book-author">
          {author}
        </h4>
        <ul className="options-container">
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={onClick} id={bookId}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="book-progress-container">
        <div className="progress-bar">
          <progress
            value="75"
            min="0"
            max="100"
            style={{
              height: 0,
              width: 0,
            }}
          >
            75%
          </progress>
        </div>
        <div className="book-progress-info-container">
          <h3 className="book-progress-percentage">40%</h3>
          <p className="book-progress-status">Completed</p>
        </div>
        <div className="chapter-container">
          <p className="crnt-ch-head">
            Current Chapter
          </p>
          <h4 className="crnt-ch">
            Chapter 17
          </h4>
          <button className="update-btn" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

BookState.defaultProps = {
  title: '',
  author: '',
  bookId: '',
  onClick: '',
  category: '',
};

BookState.propTypes = {
  bookId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func,
};

export default BookState;
