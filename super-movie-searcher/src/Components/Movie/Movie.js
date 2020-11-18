import React from 'react';

const MOVIE_API="https://api.themoviedb.org/3/movie/550?api_key=b15f77463ee209064e6a74ac153c528c";

const Movie = ({original_title, poster_path, release_date, overview, vote_average}) => (
    <div class='movie-preview'>
        <img src = {poster_path, MOVIE_API} alt={original_title}/>
        <div class='movie-information'>
            <span>{vote_average}</span>
            <h3>{original_title} {release_date}</h3>
        </div>
    </div>
);

export default Movie;