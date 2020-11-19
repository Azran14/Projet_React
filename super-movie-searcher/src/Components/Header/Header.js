import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import icon from "../../assets/user.svg";

const Header = () => {
  const [movie, setMovie] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setMovie(event.target.value);
  }

  return (
    <header>
      <div className="Header-content">
        <Link className="Header-link" to="/">
          歡迎
        </Link>
        <input
          type="search"
          className="Header-search"
          onChange={handleChange}
          placeholder="Search a movie"
        />
        <Link className="Header-account" to="/">
          <div className="Header-icon">
            <img src={icon} alt="user" />
          </div>
        </Link>
        <div className="Header-sign">
          <div className="Header-signin">Sign In</div>
          <div className="Header-signup">Sign Up</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
