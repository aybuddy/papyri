import React from 'react';
import notAvailableImage from '../assets/images/not-available.png';
import '../styles/app.scss';

const BookList = ({ books }) => {
  return (
    <>
      <div className='bookList-container'>
        {books.items.map((book) => {
          return (
            <div className='book-container' key={book.id}>
              <div className='image-container'>
                <img
                  className='book-image'
                  src={
                    book.volumeInfo.imageLinks?.smallThumbnail ||
                    notAvailableImage
                  }
                  alt={book.volumeInfo.title}
                />
              </div>
              <div className='text-container'>
                <h5>{book.volumeInfo.title}</h5>

                {book.volumeInfo.authors?.length === 1 ||
                !book.volumeInfo.authors ? (
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
        })}
      </div>
    </>
  );
};

export default BookList;
