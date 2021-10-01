import React from 'react';
import '../styles/app.scss';
import bgImage1 from '../assets/images/andrew-solomon-new-york-city-townhouse-0317-9.jpg';
import bgImage2 from '../assets/images/villa-papyri-min.jpg';

const Hero = () => {
  return (
    <div
      className='hero-image'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(15,13,12,0.8) 50%, rgba(255,192,105,0.8) 100%), url(${bgImage1})`,
      }}
    >
      <div className='hero-text-container'>
        <h1 className='hero-text-headline'>Papyri</h1>
      </div>
    </div>
  );
};

export default Hero;
