import {comments} from '../../mocks/comments';

import {Films} from '../../types/films';
import {Comments, Comment} from '../../types/comments';

import {getCurrentFilm} from '../../tools';

import {useParams} from 'react-router-dom';

import Header from '../header/header';
import CommentItem from '../coment-item/comment-item';
import {Link} from 'react-router-dom';
import ListMovies from '../list-movies/list-movies';

function calculateCommentsInColumn(cm: Comments): number {
  return Math.ceil(cm.length / 2);
}

type PropsType = {
  films: Films
}

function FilmPageReview({films}: PropsType): JSX.Element {
  const {id} = useParams<{ id?: string }>();
  const film = getCurrentFilm(films, id);

  const commentsInColumn = calculateCommentsInColumn(comments);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
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
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to={`/films/${film.id}`}>Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to={`/films/${film.id}/details`}>Details</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link className="film-nav__link" to={`/films/${film.id}/reviews`}>Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  {comments.slice(0, commentsInColumn).map((comment: Comment) =>
                    (<CommentItem key={comment.id} comment={comment}/>))}
                </div>
                <div className="film-card__reviews-col">
                  {comments.slice(commentsInColumn).map((comment: Comment) =>
                    (<CommentItem key={comment.id} comment={comment}/>))}
                </div>
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
            <a className="logo__link logo__link--light" href="/home">
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

export default FilmPageReview;
