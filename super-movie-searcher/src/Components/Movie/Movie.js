import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  // console.log(movie.poster_path, 'poster') //mettre un string
  const imgPath = 'https://image.tmdb.org/t/p/original';
  return (
    <Link to={`/movie/${movie.id}`} className='Movie-card Movie-link'>
      <div className='Movie-imageContainer'>
        <img
          className='Movie-image'
          src={imgPath + movie.poster_path}
          alt={movie.original_title}
        />
      </div>

      <div className='Movie-infos'>
        <div className='Movie-rated'>{movie.vote_average}</div>
        <h4 className='Movie-content'>
          {movie.original_title} ({movie.release_date.substring(0, 4)})
        </h4>
      </div>
    </Link>
  );
};

export default Movie;
