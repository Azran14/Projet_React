import React from 'react';




const Movie = ({movie}) => {
    console.log(movie.poster_path, 'poster'); //mettre un string
    return(
        <div className='movie-preview'>
        <img src = {movie.poster_path} alt={movie.original_title}/>
        <div className='movie-information'>
            <span>{movie.vote_average}</span>
            <h3>{movie.original_title} {movie.release_date}</h3>
        </div>
    </div>
    );
    
};

export default Movie;