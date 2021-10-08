import React from 'react';
import libraryImage from '../assets/images/library.jfif';

const BookSearch = ({ handleChange, handleSubmit, searchTerm, error }) => {
  return (
    <section
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
    </section>
  );
};

export default BookSearch;
