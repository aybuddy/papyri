import React, { useState } from 'react';
import axios from 'axios';
import {
  Hero,
  // InputComponent
} from '../components';
// import BookList from '../components/BookList';
import '../styles/app.scss';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });

  let API_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}&maxResults=5`);
    console.log(result.data);
    setBooks(result.data);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
    setSearchTerm('');
  };

  return (
    <div>
      <Hero />
      <div className='input-container'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h3>Let's Search</h3>
            <input
              type='search'
              placeholder='Enter title of book...'
              value={searchTerm}
              onChange={handleChange}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <div className='bookList-container'>
        {books.items.map((book) => {
          return (
            <div className='book-container' key={book.id}>
              <div className='image-container'>
                <img
                  className='book-image'
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt=''
                />
              </div>
              <div className='text-container'>
                <h5>{book.volumeInfo.title}</h5>

                {book.volumeInfo.authors.length === 1 ? (
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
            </div>
          );
        })}
      </div>
      {/* <InputComponent
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      /> */}
      {/* <BookList books={books} /> */}
    </div>
  );
};

export default Homepage;
