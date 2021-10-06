import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Papyri.png';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <img src={logo} alt='Papyri logo' />
      </div>
      <ul className='page-links'>
        <li>
          <Link to='/home'>Add Book</Link>
        </li>
        <li>
          <Link to='#'>My Library</Link>
        </li>
        <li>
          <Link to='#'>Trending Books</Link>
        </li>
      </ul>
      <ul className='user-links'>
        <li>
          <Link to='#'>Sign In</Link>
        </li>
        <li>
          <Link to='#'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
