import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='loading-container'>
      <Loader
        className='loader'
        type='TailSpin'
        color='#F9E4C8'
        height={250}
        width={250}
      />
    </div>
  );
};

export default Loading;
