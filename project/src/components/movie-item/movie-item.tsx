import {Film} from '../../types/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState} from 'react';

type MovieItemProps={
  film: Film,
  onHover?:()=>void,
  onHoverLeave?:()=>void
}
let timeOut: ReturnType<typeof setTimeout>;

function MovieItem({onHoverLeave,onHover,film}:MovieItemProps):JSX.Element{
  const [isActive,letsVideoPlay] = useState(false);
  const {id,name} = film;

  function handleVideoHover(){
    if(onHover){
      onHover();
    }
    timeOut = setTimeout( ()=> {
      letsVideoPlay(true);
    }, 1000);
  }

  function handleVideoHoverLeave(){
    if(onHoverLeave){
      onHoverLeave();
    }
    clearTimeout(timeOut);
    letsVideoPlay(false);
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
