import ListMovies from '../list-movies/list-movies';
import {State} from '../../types/state';
import Preloader from '../preloader/preloader';
import {connect, ConnectedProps} from 'react-redux';
import HeaderLogoutButton from '../header-logout-button/header-logout-button';
import {useHistory} from 'react-router-dom';
import {MouseEvent} from 'react';

const mapStateToProps = ({favoriteFilms}: State) => ({
  favoriteFilms,
});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MyList(props: ConnectedComponentProps): JSX.Element {
  const {favoriteFilms} = props;
  const history = useHistory();

  if (!favoriteFilms) {
    return <Preloader/>;
  }
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/"
            className="logo__link"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              history.push('/');}}
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <HeaderLogoutButton/>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <ListMovies films={favoriteFilms}/>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              history.push('/');}}
            className="logo__link logo__link--light"
          >
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
  );
}
export {MyList};
export default connector(MyList);
