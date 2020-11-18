import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link className='Header-link' to='/'>
        Accueil
      </Link>
    </header>
  );
};

export default Header;
