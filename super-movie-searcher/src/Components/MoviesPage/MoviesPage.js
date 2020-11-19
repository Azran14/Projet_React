import React, { useEffect, useState } from "react";
import MoviesList from "../MoviesList/MoviesList";
import "./MoviesPage.css";

function MoviesPage() {
  //TO DO : passer en props les objets de movies et mapper
  const [movies, setMovies] = useState([]);
  //  const MOVIE_API="https://api.themoviedb.org/3/movie/550?api_key=b15f77463ee209064e6a74ac153c528c";
  const MOVIE_API =
    " https://api.themoviedb.org/4/list/1?page=1&api_key=b15f77463ee209064e6a74ac153c528c&sort_by=original_order.asc";

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="MoviesPage-main">
      {/* image à mettre */}
      <div className="MoviesPage-banniere">
        <img className="MoviesPage-imgBanniere" src="" alt="" />
      </div>
      <MoviesList movies={movies} title="Trending movies:" />
      {/* <div className="MoviesPage-trending">
        <h3>Trending movies:</h3>
        <div className=" MoviesPage-affichage">
          {movies.slice(0, 3).map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div> */}
      <MoviesList movies={movies} title="Recent movies:" />
      {/* <div className="MoviesPage-recent">
        <h3>Recent movies:</h3>
        <div className=" MoviesPage-affichage">
          {movies.slice(0, 3).map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div> */}
      <MoviesList movies={movies} title="Top-rated movies:" />
      {/* <div className="MoviesPage-top-rated">
        <h3>Top-rated movies:</h3>
        <div className="MoviesPage-affichage">
          {movies.slice(0, 3).map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default MoviesPage;
