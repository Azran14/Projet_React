import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import twitter from "../../logo/twitter.svg";
import facebook from "../../logo/facebook.svg";
import linkedin from "../../logo/linkedin.svg";
import instagram from "../../logo/instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div className="Footer-content">
        <div className="Logo-block">
          <Link className="Footer-link" to="/">
            歡迎
          </Link>
          <Link className="Footer-sublink" to="/">
            © 2020
          </Link>
        </div>
        <div className="Information-block">
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
        </div>
        <div className="follow-block">
          <Link className="Footer-information" to="/">
            Follow us
          </Link>
          <div className="logo-link">
            <img className="logo" src={twitter} alt="React Logo" />
            <img className="logo" src={facebook} alt="React Logo" />
            <img className="logo" src={linkedin} alt="React Logo" />
            <img className="logo" src={instagram} alt="React Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;