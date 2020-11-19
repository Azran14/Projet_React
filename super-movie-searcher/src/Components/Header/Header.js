import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
        <Link className="Header-account" to="/"></Link>
      </div>
    </header>
  );
};

export default Header;
