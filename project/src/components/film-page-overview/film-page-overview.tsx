import {Film} from '../../types/films';

type PropsType = {
  film: Film
}
function ratingGrade(rating:number){

  switch (true) {
    case rating >= 0 && rating < 3:
      return 'Bad';
    case rating >= 3 && rating < 5:
      return 'Normal';
    case rating >= 5 && rating < 8:
      return 'Good';
    case rating >= 8 && rating < 10:
      return 'Very good';
    default:
      return 'Awesome';
  }
}

function FilmPageOverview({film}:PropsType): JSX.Element {
  const grade = ratingGrade(film.rating);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toString().replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{grade}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
          Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        </p>

        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including
          satisfying
          the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
          murder.
        </p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {film.starring.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmPageOverview;
