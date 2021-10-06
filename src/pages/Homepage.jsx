import React, { useState } from 'react';
import axios from 'axios';
// import { InputComponent } from '../components';
// import BookList from '../components/BookList';
import '../styles/app.scss';
import { Loading } from '../components';
import libraryImage from '../assets/images/library.jfif';
import notAvailableImage from '../assets/images/not-available.png';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}&maxResults=5`);
      //  console.log(result.data);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
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
    <main>
      <div
        className='input-container'
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(15,13,12,0.8) 50%, rgba(255,192,105,0.8) 100%), url(${libraryImage})`,
        }}
      >
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h3>Let's Search</h3>
            <input
              type='search'
              placeholder='Find Your book...'
              value={searchTerm}
              onChange={handleChange}
              required
            />
            <button type='submit'>Submit</button>
            {error && <div style={{ color: 'red' }}>An error has occured</div>}
          </form>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
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
              </div>
            );
          })}
        </div>
      )}
      {/* <InputComponent
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      /> */}
      {/* <BookList books={books} /> */}
    </main>
  );
};

export default HomePage;
