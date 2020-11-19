import Movie from "../Movie/Movie";

import "./MoviesList.css";

function MoviesList({ movies, title }) {
  return (
    <section className="MoviesList">
      <h3 className="MoviesList-title">{title}</h3>
      <div className="MoviesList-items">
        {movies.slice(0, 3).map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MoviesList;
