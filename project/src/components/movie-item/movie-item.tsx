import {Film} from '../../types/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type MovieItemProps={
  film: Film,
  onHover?:()=>void,
  onHoverLeave?:()=>void
}

function MovieItem({onHoverLeave,onHover,film}:MovieItemProps):JSX.Element{
  const {id,name} = film;

  return(
    <article className="small-film-card catalog__films-card"
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
export default MovieItem;
