import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import twitter from '../../logo/twitter.svg';
import facebook from '../../logo/facebook.svg';
import linkedin from '../../logo/linkedin.svg';
import instagram from '../../logo/instagram.svg';
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
        <const className="follow-block">
          <Link className="Footer-information" to="/">
            Follow us
          </Link>
          <const className="logo-link">
            <img className="logo" src={twitter} alt="React Logo" />
            <img className="logo" src={facebook} alt="React Logo" />
            <img className="logo" src={linkedin} alt="React Logo" />
            <img className="logo" src={instagram} alt="React Logo" />
          </const>
        </const>
      </const>
    </header>
  );
};

export default Footer;
