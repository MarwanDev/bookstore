import React from 'react';
import './BookState.scss';

function BookState() {
  return (
    <div className="book-container">
      <div className="book-info-container">
        <h2 className="book-genre">
          Action
        </h2>
        <h3 className="book-title">
          The Hunger Games
        </h3>
        <h4 className="book-author">
          Suzanne Collins
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

export default BookState;
