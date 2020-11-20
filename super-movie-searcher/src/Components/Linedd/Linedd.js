import { Link } from "react-router-dom";
import { imgPath } from "../../utils/constant";

import "./Linedd.css";

function Linedd({ movie }) {
  const url = "http://localhost:3000/";
  const currentUrl = window.location.href;
  console.log(currentUrl);
  return (
    <Link
      className="Linedd"
      to={url === currentUrl ? `movie/${movie.id}` : `${movie.id}`}
    >
      <img className="Linedd-img" src={imgPath + movie.poster_path} />
      <h4 className="Linedd-info">
        {movie.title}({movie.release_date.substring(0, 4)})
      </h4>
    </Link>
  );
}

export default Linedd;
