import {Film} from '../../types/films';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReview from '../film-page-review/film-page-review';

type PropsType = {
  film: Film
}
function GetActiveClass (urlParam:string,path:string): string{
  return (useRouteMatch({path:`${path}/${urlParam}`,exact: true}) ? 'film-nav__item--active' : '');
}

function FilmPageTabs({film}: PropsType): JSX.Element {
  const {path, url } = useRouteMatch();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${GetActiveClass('',path)}`}>
            <Link
              to={url}
              className="film-nav__item film-nav__link"
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${GetActiveClass('details',path)}`}>
            <Link
              to={`${url}/details`}
              className="film-nav__item film-nav__link"
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${GetActiveClass('reviews',path)}`}>
            <Link
              to={`${url}/reviews`}
              className="film-nav__item film-nav__link"
            >
              Reviews
            </Link>
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
