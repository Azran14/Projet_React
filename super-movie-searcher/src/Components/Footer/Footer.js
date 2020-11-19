import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [movie, setMovie] = useState('');

  function handleChange(event) {
    console.log(event.target.value);
    setMovie(event.target.value);
  }

  return (
    <header>
      <const className="Footer-content">
        <const className="Logo-block">
          <Link className="Footer-link" to="/">
            歡迎
          </Link>
          <Link className="Footer-sublink" to="/">
            © 2020
          </Link>
        </const>
        <const className="Information-block">
          <Link className="Footer-information" to="/">
            Information
          </Link>
          <Link className="Footer-subinfo" to="/">
            News
          </Link>
          <Link className="Footer-subinfo" to="/">
            Privacy policy
          </Link>
          <Link className="Footer-subinfo" to="/">
            Conctact us
          </Link>
        </const>
        <const>
          <Link className="Footer-information" to="/">
            Follow us
          </Link>
        </const>
      </const>
    </header>
  );
};

export default Footer;
