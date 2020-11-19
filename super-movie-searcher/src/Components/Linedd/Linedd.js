import "./Linedd.css";

function Linedd({ movie }) {
  console.log("loaded");

  return (
    <div className="Linedd">
      <div className="Linedd-img"></div>
      <h4 className="Linedd-info">
        {movie.title}({movie.release_date.substring(0, 4)})
      </h4>
    </div>
  );
}

export default Linedd;
