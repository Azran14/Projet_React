import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie'

function MoviesPage(){

  //TO DO : passer en props les objets de movies et mapper
   const [movies, setMovies] = useState([]); 
  //  const MOVIE_API="https://api.themoviedb.org/3/movie/550?api_key=b15f77463ee209064e6a74ac153c528c";
  const MOVIE_API = " https://api.themoviedb.org/4/list/1?page=1&api_key=b15f77463ee209064e6a74ac153c528c&sort_by=original_order.asc";

   useEffect(()=>{
     fetch(MOVIE_API)
       .then(res=> res.json())
       .then((data)=>{
         console.log(data);
         setMovies(data.results);
       });

   },[]);
   
   console.log(movies, 'movies');
   return (
     <div>
       {/* image à mettre */}
       <div className='banniere'></div> 
       <section className='affichage'>
         {movies.map(movie=>(<Movie key={movie.id} movie={movie}/>))} 
       </section>

       <div className='trending'>Trending movies</div>

       <div className='recent'>Recent movies</div>

       <div className='top-rated'>Top-rated movies</div>
     </div>
  
   );

  return(
    <div>page d'accueil</div>
  )

}

export default MoviesPage;
