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
          <div className="Footer-link">歡迎</div>
          <div className="Footer-sublink">© 2020</div>
        </div>
        {
          <div className="Footer-infos">
            <div className="Information-block">
              <div className="Footer-information">Information</div>
              <div className="Footer-subinfo">News</div>
              <div className="Footer-subinfo">Privacy policy</div>
              <div className="Footer-subinfo">Conctact us</div>
            </div>
            <div className="follow-block">
              <div className="Footer-information">Follow us</div>
              <div className="logo-link">
                <img className="logo" src={twitter} alt="React Logo" />
                <img className="logo" src={facebook} alt="React Logo" />
                <img className="logo" src={linkedin} alt="React Logo" />
                <img className="logo" src={instagram} alt="React Logo" />
              </div>
            </div>
          </div>
        }
      </div>
    </footer>
  );
};

export default Footer;
