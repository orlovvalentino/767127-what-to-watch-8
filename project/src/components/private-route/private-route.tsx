import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === true
          ? render()
          : <Redirect to="/login" />
      )}
    />
  );
}

export default PrivateRoute;
