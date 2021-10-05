import React from 'react';
import '../styles/app.scss';

const InputComponent = ({ value, handleSubmit, handleChange }) => {
  return (
    <div className='input-container'>
      <div className='wrapper'>
        <form action='' onSubmit={handleSubmit}>
          <h3>Let's Search</h3>
          <input
            type='text'
            placeholder='Enter title of book...'
            value={value}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InputComponent;
