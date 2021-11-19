import {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {ThunkAppDispatch} from '../../types/action';
import {getComments, getCurrentFilm, getSimilarFilms} from '../../store/api-actions';
import Header from '../header/header';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import ListMovies from '../list-movies/list-movies';
import {Link} from 'react-router-dom';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import Preloader from '../preloader/preloader';

const mapStateToProps = ({currentFilm, similarFilms,authorizationStatus}: State) => ({
  currentFilm,
  similarFilms,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  async getFilm(id: string | undefined) {
    await (dispatch as ThunkAppDispatch)(getCurrentFilm(id));
  },
  getSimilar(id: string | undefined) {
    (dispatch as ThunkAppDispatch)(getSimilarFilms(id));
  },
  getCommentsById(id: string | undefined) {
    (dispatch as ThunkAppDispatch)(getComments(id));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function FilmPage(props: ConnectedComponentProps): JSX.Element {
  const {currentFilm: film, getFilm, getSimilar, similarFilms, getCommentsById, authorizationStatus} = props;
  const history = useHistory();
  const {id} = useParams<{ id?: string }>();
  useEffect(() => {
    getFilm(id).then(() => {
      getSimilar(id);
      getCommentsById(id);
    }).catch(() => {
      history.push('/404');
    });

  }, [id]);

  if (!film) {
    return <Preloader/>;
  }

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
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => {
                    history.push(`/player/${film.id}`);
                  }}
                >
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
                {authorizationStatus ? <Link className="btn film-card__button" to={`/films/${id}/review`}>Add review</Link> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <FilmPageTabs film={film}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms ? <ListMovies films={similarFilms}/> : <Preloader/>}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
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

export {FilmPage};
export default connector(FilmPage);
