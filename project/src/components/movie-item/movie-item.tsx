import {Film} from '../../types/film';

function MovieItem({film}:Film):JSX.Element{
  const {id,name,poster}=film;
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={id}>{name}</a>
      </h3>
    </article>
  );
}
export default MovieItem;
