import {Film} from '../../types/films';
import {Link, Route, useParams} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReview from '../film-page-review/film-page-review';
import {MouseEvent, useEffect, useState} from 'react';

type PropsType = {
  film: Film
}

function FilmPageTabs({film}: PropsType): JSX.Element {
  const {id, tabs} = useParams<{ id?: string, tabs?: string }>();
  const [currentTab, setCurrntTab] = useState(tabs);

  function getActiveClass(urlParam?: string): string {
    return (urlParam === currentTab ? 'film-nav__item--active' : '');
  }

  useEffect(() => {
    if(tabs){
      return;
    }
    setCurrntTab(undefined);
  }, [id,tabs]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${getActiveClass()}`}>
            <Link
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                setCurrntTab(undefined);
              }}
              to={`/films/${id}`}
              className="film-nav__item film-nav__link"
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${getActiveClass('details')}`}>
            <Link
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                setCurrntTab('details');
              }}
              to={`/films/${id}/details`}
              className="film-nav__item film-nav__link"
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${getActiveClass('reviews')}`}>
            <Link
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                setCurrntTab('reviews');
              }}
              to={`/films/${id}/reviews`}
              className="film-nav__item film-nav__link"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/films/:id/">
        <FilmPageOverview film={film}/>
      </Route>
      <Route exact path="/films/:id/details">
        <FilmPageDetails film={film}/>
      </Route>
      <Route exact path="/films/:id/reviews">
        <FilmPageReview/>
      </Route>
    </div>
  );
}

export default FilmPageTabs;
