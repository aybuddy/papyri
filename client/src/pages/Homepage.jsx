import React, { useState } from 'react';
import axios from 'axios';
// import BookList from '../components/BookList';
import '../styles/app.scss';
import { BookSearch, Loading } from '../components';

import BookList from '../components/BookList';

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
      <BookSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        searchTerm={searchTerm}
      />
      {loading ? <Loading /> : <BookList books={books} />}
    </main>
  );
};

export default HomePage;
