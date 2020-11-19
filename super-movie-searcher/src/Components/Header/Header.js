import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";
import debounce from "lodash.debounce";

import "./Header.css";

const Header = () => {
  function useDebounce(callback, delay) {
    const debouncedFn = useCallback(
      debounce((...args) => callback(...args), delay),
      [delay] // will recreate if delay changes
    );
    return debouncedFn;
  }

  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState(""); // would be an API call normally
  let dropDownOption = [];

  const debouncedSave = useDebounce((nextValue) => saveToDb(nextValue), 1000);

  useEffect(() => {
    if (dbValue.length > 2) {
    }
  }, [dbValue]);

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedSave(nextValue);
  };

  return (
    <header>
      <div className="Header-content">
        <Link className="Header-link" to="/">
          歡迎
        </Link>
        <Dropdown
          className="Header-search"
          onChange={handleChange}
          placeholder="Search a movie"
          // fluid
          search
          selection
          value={value}
          options={dropDownOption}
        />
        <Link className="Header-account" to="/"></Link>
      </div>
    </header>
  );
};

export default Header;
