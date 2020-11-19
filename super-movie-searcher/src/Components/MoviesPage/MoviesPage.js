import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './MoviesPage.css';

function MoviesPage() {
  //TO DO : passer en props les objets de movies et mapper
  const [movies, setMovies] = useState([]);
  //  const MOVIE_API="https://api.themoviedb.org/3/movie/550?api_key=b15f77463ee209064e6a74ac153c528c";
  const MOVIE_API =
    ' https://api.themoviedb.org/4/list/1?page=1&api_key=b15f77463ee209064e6a74ac153c528c&sort_by=original_order.asc';

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className='MoviePage-main'>
      {/* image à mettre */}
      <div className='MoviesPage-banniere'>
        <img className='MoviesPage-imgBanniere' src='' alt='' />
      </div>
      <section className='MoviesPage-affichage'>
        {movies.slice(0, 3).map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>

      <div className='MoviesPage-trending MoviesPage-affichage'>
        Trending movies
      </div>

      <div className='MoviesPage-recent MoviesPage-affichage'>
        Recent movies
      </div>

      <div className='MoviesPage-top-rated MoviesPage-affichage'>
        Top-rated movies
      </div>
    </div>
  );

  return <div>page d'accueil</div>;
}

export default MoviesPage;
