import React, { useState } from 'react';
import axios from 'axios';
import { Hero } from '../components';
import '../styles/app.scss';

const LandingPage = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default LandingPage;
