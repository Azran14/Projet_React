import "./Linedd.css";
import { Link } from "react-router-dom";

function Linedd({ movie }) {
  return (
    <Link className="Linedd" to={`movie/${movie.id}`}>
      <div className="Linedd-img"></div>
      <h4 className="Linedd-info">
        {movie.title}({movie.release_date.substring(0, 4)})
      </h4>
    </Link>
  );
}

export default Linedd;
