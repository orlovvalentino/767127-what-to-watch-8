import {Films} from '../../types/films';

import {getCurrentFilm} from '../../tools';

import {useParams} from 'react-router-dom';

import Header from '../header/header';
import ListMovies from '../list-movies/list-movies';

import {Link} from 'react-router-dom';

type PropsType = {
  films: Films
}
function ratingGrade(rating:number){

  switch (true) {
    case rating >= 0 && rating < 3:
      return `Bad`;
      break;
    case rating >= 3 && rating < 5:
      return `Normal`;
      break;
    case rating >= 5 && rating < 8:
      return `Good`;
      break;
    case rating >= 8 && rating < 10:
      return `Very good`;
      break;
    default:
      return `Awesome`;
  }
}

function FilmPage({films}: PropsType): JSX.Element {
  const {id} = useParams<{id?: string}>();
  const film = getCurrentFilm(films, id);
  const grade = ratingGrade(film.rating)

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={`/films/${film.id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.poster_image} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link className="film-nav__link" to={`/films/${film.id}`}>Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to={`/films/${film.id}/details`}>Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to={`/films/${film.id}/reviews`}>Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating.toString().replace(".", ",")}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{grade}</span>
                  <span className="film-rating__count">{film.scores_count} ratings</span>
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
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <ListMovies films={films}/>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmPage;
