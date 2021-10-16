import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import HomePage from '../home-page/home-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import FilmPageDetails from '../film-page-details/film-page-details';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Films} from '../../types/films';
import FilmPageReview from '../film-page-review/film-page-review';

type MainType = {
  moviePromo: {
    promoName: string,
    promoGenre: string,
    promoDate: string
  },
  films:Films
}

function App({moviePromo, films}: MainType): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <HomePage moviePromo={moviePromo} films={films} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Mylist}
          authorizationStatus
          render={() => <MyList films={films}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FilmPage} component={FilmPage} />
        <Route exact path={AppRoute.FilmPageDetails} component={FilmPageDetails} />
        <Route exact path={AppRoute.FilmPageReview} component={FilmPageReview} />
        <Route exact path={AppRoute.FilmAddReview} component={AddReview} />
        <Route exact path={AppRoute.Player}>
          <Player/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
