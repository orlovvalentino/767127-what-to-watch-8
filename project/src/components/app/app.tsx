import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import HomePage from '../home-page/home-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Films} from '../../types/films';

type MoviePromo = {
  moviePromo: {
    promoName: string,
    promoGenre: string,
    promoDate: string
  },
  films:Films[]
}

function App({moviePromo, films}: MoviePromo): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <HomePage moviePromo={moviePromo} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Mylist}
          authorizationStatus={false}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FilmPage}>
          <FilmPage/>
        </Route>
        <Route exact path={AppRoute.FilmAddReview}>
          <AddReview/>
        </Route>
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
