import {Film} from '../../types/films';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReview from '../film-page-review/film-page-review';
import { MouseEvent, useState} from 'react';

type PropsType = {
  film: Film
}

function FilmPageTabs({film}: PropsType): JSX.Element {
  const {path, url } = useRouteMatch();
  const [currentTab, setCurrntTab] = useState('');

  function getActiveClass (urlParam:string): string{
    return (urlParam===currentTab ? 'film-nav__item--active' : '');
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${getActiveClass('')}`}>
            <Link
              onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
                setCurrntTab('');
              }}
              to={url}
              className="film-nav__item film-nav__link"
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${getActiveClass('details')}`}>
            <Link
              onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
                setCurrntTab('details');
              }}
              to={`${url}/details`}
              className="film-nav__item film-nav__link"
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${getActiveClass('reviews')}`}>
            <Link
              onClick={(e:MouseEvent<HTMLAnchorElement>)=>{
                setCurrntTab('reviews');
              }}
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
