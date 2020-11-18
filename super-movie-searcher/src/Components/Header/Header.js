import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [movie, setMovie] = useState('');

  function handleChange(event) {
    console.log(event.target.value);
    setMovie(event.target.value);
  }

  return (
    <header>
      <Link className='Header-link' to='/'>
        Accueil
      </Link>
      <input
        type='search'
        className='Header-search'
        onChange={handleChange}
        placeholder='Search a movie'
      />
    </header>
  );
};

export default Header;
