import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../home-page/home-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type MoviePromo = {
  moviePromo: {
    promoName: string,
    promoGenre: string,
    promoDate: string
  }
}

function App({moviePromo}: MoviePromo): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage moviePromo={moviePromo} />
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          authorizationStatus={false}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path="/films/:id">
          <FilmPage/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview/>
        </Route>
        <Route exact path="/player/:id">
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
