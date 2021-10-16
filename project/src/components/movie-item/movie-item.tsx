import {Film} from '../../types/film';
import {Link} from 'react-router-dom';

type MovieItemProps={
  film: Film,
  onHover?:()=>void,
  onHoverLeave?:()=>void
}

function MovieItem({onHoverLeave,onHover,film}:MovieItemProps):JSX.Element{
  const {id,name,poster}=film;
  return(
    <article className="small-film-card catalog__films-card"
             onMouseEnter={onHover}
             onMouseLeave={onHoverLeave}
    >
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
export default MovieItem;
