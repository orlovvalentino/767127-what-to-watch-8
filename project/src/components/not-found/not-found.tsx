import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link
            to="/"
            className="logo__link"
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">404 NOT FOUND</h1>
        <p className="user-page__title" style={{transform: 'none'}}>
          <Link
            to="/"
            className="catalog__genres-link"
            style={{display: 'inline', padding: 0}}
          >Go to home page
          </Link>
        </p>

      </header>

      <footer className="page-footer">
        <div className="logo">
          <Link
            to="/"
            className="logo__link logo__link--light"
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
