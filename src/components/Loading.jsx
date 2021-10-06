import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='loading-container'>
      <Loader
        className='loader'
        type='Grid'
        color='#A45D5D'
        height={250}
        width={250}
      />
    </div>
  );
};

export default Loading;
