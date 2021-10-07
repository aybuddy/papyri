import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BookDetail } from '../components';

const BookDetailsPage = ({ match }) => {
  const {
    params: { bookId },
  } = match;

  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    const fetchBook = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get(`${BASE_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchBook();
  }, [bookId]);

  return (
    <div>
      {loading && (
        <div>
          <h1>Loading book detail for book ID: {bookId}</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>Some error occurred while fetching...</h1>
        </div>
      )}
      {book && <BookDetail book={book} />}
    </div>
  );
};

export default BookDetailsPage;
