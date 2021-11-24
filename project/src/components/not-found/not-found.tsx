import {MouseEvent} from 'react';
import {useHistory} from 'react-router-dom';

function NotFound():JSX.Element{
  const history = useHistory();
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

        <h1 className="page-title user-page__title">404 NOT FOUND</h1>
        <p className="user-page__title" style={{transform: 'none'}}>
          <a className="catalog__genres-link"
            href="/"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              history.push('/');}}
            style={{display:'inline',padding:0}}
          >Go to home page
          </a>
        </p>

      </header>

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
export default NotFound;
