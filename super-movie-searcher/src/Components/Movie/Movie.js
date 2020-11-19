import React from 'react';
import { imgPath } from '../../utils/constant';
import './Movie.css';

const Movie = ({ movie }) => {
  return (
    <div className='Movie-card'>
      <img
        className='Movie-image'
        src={imgPath + movie.poster_path}
        alt={movie.original_title}
      />
      <div className='Movie-infos'>
        <div className='Movie-rated'>{movie.vote_average}</div>
        <h4 className='Movie-content'>
          {movie.original_title} ({movie.release_date})
        </h4>
      </div>
    </div>
  );
};

export default Movie;
