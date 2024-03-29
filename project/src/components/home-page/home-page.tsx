import ListMovies from '../list-movies/list-movies';
import {useHistory} from 'react-router-dom';
import ListGenres from '../list-genres/list-genres';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';
import Header from '../header/header';
import AddToFavorite from '../add-to-favorite/add-to-favorite';
import Preloader from '../preloader/preloader';

const mapStateToProps = ({genre,films,filteredFilms,countFilmsInList,filmPromo}: State) => ({
  genre,
  films,
  filmPromo,
  filteredFilms,
  countFilmsInList,
});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function HomePage(props: ConnectedComponentProps): JSX.Element {
  const {filteredFilms,countFilmsInList,filmPromo:moviePromo}= props;

  const history = useHistory();
  if (!moviePromo) {
    return <Preloader/>;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={moviePromo?.backgroundImage} alt={moviePromo?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={moviePromo?.posterImage}
                alt={moviePromo?.name}
                width="218" height="327"
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{moviePromo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{moviePromo?.genre}</span>
                <span className="film-card__year">{moviePromo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => {history.push(`/player/${moviePromo?.id}`);}}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddToFavorite id={moviePromo?.id}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListGenres />
          <div className="catalog__films-list">
            <ListMovies films={filteredFilms.slice(0,countFilmsInList)}/>
          </div>
          {filteredFilms.length > countFilmsInList ? <ShowMoreButton />:''}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light" href="/">
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

export {HomePage};
export default connector(HomePage);
