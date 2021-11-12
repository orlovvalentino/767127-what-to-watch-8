import {Film} from '../../types/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState} from 'react';

type MovieItemProps={
  film: Film,
}
let timeOut: ReturnType<typeof setTimeout>;

function MovieItem({film}:MovieItemProps):JSX.Element{
  const [isActive,setIsActive] = useState(false);
  const {id,name} = film;

  function handleVideoHover(){
    timeOut = setTimeout( ()=> {
      setIsActive(true);
    }, 1000);
  }

  function handleVideoHoverLeave(){
    clearTimeout(timeOut);
    setIsActive(false);
  }

  return(
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleVideoHover}
      onMouseLeave={handleVideoHoverLeave}
    >

      <div className="small-film-card__image">
        <VideoPlayer
          film={film}
          play={isActive}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
export default MovieItem;
