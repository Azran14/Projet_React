import { Link } from 'react-router-dom';
import React from "react";
//import Rating from "../Rating/Rating.js";
import "./Movie.css";
import ReactStars from "react-rating-stars-component";
// import RatingFull from "../../assets/RatingEmpty.svg";
// import RatingEmpty from "../../assets/RatingFull.svg";

const Movie = ({ movie }) => {
  // console.log(movie.poster_path, 'poster') //mettre un string
  const imgPath = "https://image.tmdb.org/t/p/original";
  const rateParams = {
    edit: false,
    value: movie.vote_average / 2,
    isHalf: true,
    size: 25,
  };
  

  return (
    <Link to={`/movie/${movie.id}`} className='Movie-card Movie-link'>
      <div className='Movie-imageContainer'>
        <img
          className='Movie-image'
          src={imgPath + movie.poster_path}
          alt={movie.original_title}
        />
      </div>
      <div className="Movie-infos">
        <ReactStars className="Movie-rated" {...rateParams} />
        <h4 className="Movie-content">
          {movie.original_title} ({movie.release_date.substring(0, 4)})
        </h4>
      </div>
    </Link>
  );
};

export default Movie;