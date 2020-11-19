function Linedd({ movie }) {
  console.log("loaded");

  return (
    <div className="Linedd">
      <div className="Linedd-img"></div>
      <h4 className="Linedd-title">{movie.orginal_title}</h4>
      <p className="Linedd-date">{movie.release_date.substring(0, 4)}</p>
    </div>
  );
}

export default Linedd;
