import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import HomePage from '../home-page/home-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {State} from '../../types/state';
import Preloader from '../preloader/preloader';
import browserHistory from '../../browser-history';

const mapStateToProps = ({films}: State) => ({
  films,
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {films} = props;

  return films.length > 0 ?
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <HomePage />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Mylist}
          render={() => <MyList films={films}/>}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.FilmAddReview}
          render={() => <AddReview />}
        >
        </PrivateRoute>
        <Route  path={AppRoute.FilmPage}>
          <FilmPage />
        </Route>

        <Route exact path={AppRoute.Player}>
          <Player films={films}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
    : <Preloader/>;
}

export {App};
export default connector(App);
