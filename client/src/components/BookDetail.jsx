import React from 'react';
import { Link } from 'react-router-dom';
import notAvailableImage from '../assets/images/not-available.png';

const BookDetail = ({ book }) => {
  return (
    <div className='book-container' key={book.id}>
      <div className='image-container'>
        <img
          className='book-image'
          src={book.volumeInfo.imageLinks?.smallThumbnail || notAvailableImage}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className='text-container'>
        <h5>{book.volumeInfo.title}</h5>

        {book.volumeInfo.authors?.length === 1 || !book.volumeInfo.authors ? (
          <>
            <h6>{book.volumeInfo.authors}</h6>
          </>
        ) : (
          <>
            {book.volumeInfo.authors.map((author, index) => (
              <h6 key={index}>{author}</h6>
            ))}
          </>
        )}
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
      <div className='button-container'>
        <button className='btn'>Add To Library</button>
      </div>
    </div>
  );
};

export default BookDetail;
