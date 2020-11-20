import { useEffect, useState } from "react";
import Linedd from "../Linedd/Linedd";
import "./Dropdown.css";

function Dropdown({ movies }) {
  return (
    <div className="Dropdown">
      {movies.map((movie, i) => (
        <Linedd key={i} movie={movie} />
      ))}
    </div>
  );
}

export default Dropdown;
