import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

import "./Header.css";

import icon from "../../assets/user.svg";

import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  function useDebounce(callback, delay) {
    const debouncedFn = useCallback(
      debounce((...args) => callback(...args), delay),
      [delay] // will recreate if delay changes
    );
    return debouncedFn;
  }

  // const [value, setValue] = useState("");
  // const [dbValue, saveToDb] = useState(""); // would be an API call normally
  // let dropDownOption = [];

  // const handleChange = (event) => {
  //   const { value: nextValue } = event.target;
  //   setValue(nextValue);
  //   debouncedSave(nextValue);
  // };

  const url =
    "https://api.themoviedb.org/4/search/movie?api_key=b15f77463ee209064e6a74ac153c528c&query=";

  function getMovies(query) {
    return fetch(url + query).then((res) => res.json());
  }

  const [query, setQuery] = useState("");
  const [isDrop, setIsDrop] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      getMovies(query).then((response) =>
        setData(response.results.splice(0, 4))
      );
      setIsDrop(true);
    } else {
      setIsDrop(false);
    }
  }, [query]);

  const debouncedSave = useDebounce((nextValue) => setQuery(nextValue), 1000);

  function handleChange(e) {
    setInputValue(e.target.value);
    debouncedSave(inputValue);
  }

  function handleBlur(e) {
    setTimeout(() => {
      setIsDrop(false);
    }, 100);
  }

  return (
    <header>
      <div className="Header-content">
        <Link className="Header-link" to="/">
          歡迎
        </Link>
        <div onBlur={handleBlur}>
          <input
            type="text"
            placeholder="Search a movie"
            value={inputValue}
            className="Header-search"
            onChange={handleChange}
          />
          {isDrop & (data.length !== 0) ? <Dropdown movies={data} /> : ""}
        </div>

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
