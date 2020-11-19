import { useEffect, useState } from "react";
import Linedd from "../Linedd/Linedd";
import "./Dropdown.css";

function Dropdown({ movies }) {
  return (
    <div className="Dropdown">
      {movies.map((movie) => (
        <Linedd movie={movie} />
      ))}
    </div>
  );
}

export default Dropdown;
