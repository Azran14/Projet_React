import { useState, useEffect } from 'react';
import './MoviePage.css';
import { getMovie, getMovieByGenre } from '../../service/movie/movie';
import { imgPath } from '../../utils/constant';

import MovieCover from '../MovieCover/MovieCover';

const MoviePage = (id) => {
  console.log(id.match.params.id, 'id');
  const [movie, setMovie] = useState({});
  const [movieSuggestion, setMovieSuggestion] = useState([]);

  useEffect(() => {
    getMovie(id.match.params.id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  useEffect(() => {
    getMovieByGenre(movie?.genres?.[0].id).then((data) => {
      setMovieSuggestion(data);
    });
  }, [movie.genres]);

  return (
    <main>
      <section className='MoviePage-main'>
        <div className='MoviePage-image'>
          <h2>{movie.title}</h2>
          <img src={imgPath + movie.poster_path} alt={movie.original_title} />
          <div className='MoviePage-aside'>
            <div className='MoviePage-content'>
              rating: {movie.vote_average}
            </div>
            <p className='MoviePage-content'>
              Release date: {movie.release_date}
            </p>
            {/* <p className='MoviePage-content'>Runtime: {movie.runtime}</p> */}
          </div>
        </div>
        <div className='MoviePage-body'>
          <h3 className='MoviePage-subtitle'>Synopsis :</h3>
          <p className='MoviePage-info'>{movie.overview}</p>
          <h3 className='MoviePage-subtitle'>Genres :</h3>
          <p className='MoviePage-info'>
            {movie?.genres?.map((genre) => genre.name + ', ')}
          </p>
          <h3 className='MoviePage-subtitle'>Producers :</h3>
          <p className='MoviePage-info'>
            {movie?.production_companies?.map(
              (production) => production.name + ' '
            )}
          </p>
        </div>
      </section>
      <section className='MoviePage-suggestion'>
        <h3 className='MoviePage-subtitle'>You may like</h3>
        <div className='MoviePage-container'>
          {movieSuggestion.results?.slice(0, 3).map((movie) => (
            <MovieCover key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MoviePage;
