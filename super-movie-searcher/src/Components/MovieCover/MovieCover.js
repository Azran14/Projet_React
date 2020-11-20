import './MovieCover.css';
import { imgPath } from '../../utils/constant';
import { Link } from 'react-router-dom';

function MovieCover({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className='MovieCover MovieCover-link '>
      <div></div>
      <img
        className='MovieCover-img'
        src={imgPath + movie.poster_path}
        alt={movie.original_title}
      />
      <h4 className='MovieCover-title'>{movie.title}</h4>
    </Link>
  );
}

export default MovieCover;
