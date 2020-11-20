import React, { useEffect, useState } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import './MoviesPage.css';
/* import heropng from "../../assets/heropng.png";
 */
import { getListMovies } from '../../service/movie/movie';

function MoviesPage() {
  //TO DO : passer en props les objets de movies et mapper
  const [movies, setMovies] = useState([]);
  const [Recentmovies, setRecentMovies] = useState([]);
  const [topRatedMovies, setTopRatedMoviesMovies] = useState([]);
  //  const MOVIE_API="https://api.themoviedb.org/3/movie/550?api_key=b15f77463ee209064e6a74ac153c528c";
  /* const MOVIE_API =
    " https://api.themoviedb.org/4/list/1?page=1&api_key=b15f77463ee209064e6a74ac153c528c&sort_by=original_order.asc"; */

  useEffect(() => {
    getListMovies('original_order.asc').then((data) => {
      setMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getListMovies('release_date.desc').then((data) => {
      setRecentMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getListMovies('vote_average.desc').then((data) => {
      setTopRatedMoviesMovies(data.results);
    });
  }, []);

  return (
    <main>
      <div className='MoviesPage-main'>
        {/* image à mettre */}
        <div className='MoviesPage-banniere'>
          {/*           <img src={heropng} alt="hero" />
           */}
          <div className='MoviesPage-title'>.Ciné</div>
          <div className='MoviesPage-info'>
            Discover the best choices of movies.
          </div>
        </div>
        <MoviesList movies={movies} title='Trending movies:' />
        {/* <div className="MoviesPage-trending">
        <h3>Trending movies:</h3>
        <div className=" MoviesPage-affichage">
          {movies.slice(0, 3).map((movie) => (
            <Link className='MoviesPage-link' to={`/movie/${movie.id}`}>
              <Movie key={movie.id} movie={movie} />
            </Link>
          ))}
        </div>
      </div> */}
        <MoviesList movies={Recentmovies} title='Recent movies:' />
        {/* <div className="MoviesPage-recent">
        <h3>Recent movies:</h3>
        <div className=" MoviesPage-affichage">
          {movies.slice(0, 3).map((movie) => (
            <Movie key={movie.id} movie={movie} />

          ))}
        </div>
      </div> */}
        <MoviesList movies={topRatedMovies} title='Top-rated movies:' />
        {/* <div className="MoviesPage-top-rated">
        <h3>Top-rated movies:</h3>
        <div className="MoviesPage-affichage">
          {movies.slice(0, 3).map((movie) => (
            <Movie key={movie.id} movie={movie} />

          ))}
        </div>
      </div> */}
      </div>
    </main>
  );
}

export default MoviesPage;
