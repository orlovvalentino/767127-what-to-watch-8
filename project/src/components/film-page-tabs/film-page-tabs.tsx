import {Film} from '../../types/films';
import {NavLink, Route, useRouteMatch} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReview from '../film-page-review/film-page-review';

type PropsType = {
  film: Film
}

function FilmPageTabs({film}: PropsType): JSX.Element {
  const {path, url } = useRouteMatch();
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <NavLink
              exact
              to={url}
              className="film-nav__item film-nav__link"
              activeClassName="film-nav__item--active"
            >
              Overview
            </NavLink>
          </li>
          <li className="film-nav__item">
            <NavLink
              exact
              to={`${url}/details`}
              className="film-nav__item film-nav__link"
              activeClassName="film-nav__item--active"
            >
              Details
            </NavLink>
          </li>
          <li className="film-nav__item">
            <NavLink
              exact
              to={`${url}/reviews`}
              className="film-nav__item film-nav__link"
              activeClassName="film-nav__item--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>

      <Route exact path={path}>
        <FilmPageOverview film={film}/>
      </Route>
      <Route exact path={`${path}/details`}>
        <FilmPageDetails film={film}/>
      </Route>
      <Route exact path={`${path}/reviews`}>
        <FilmPageReview />
      </Route>
    </div>
  );
}

export default FilmPageTabs;
