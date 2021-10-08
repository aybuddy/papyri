import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Papyri.png';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <Link to='/'>
          <img src={logo} alt='Papyri logo' />
        </Link>
      </div>
      <ul className='page-links'>
        <li>
          <Link className='nav-link' to='/home'>
            Add Book
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='#'>
            My Library
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='#'>
            Trending Books
          </Link>
        </li>
      </ul>
      <ul className='user-links'>
        <li>
          <Link className='nav-link' to='#'>
            Sign In
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='#'>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
