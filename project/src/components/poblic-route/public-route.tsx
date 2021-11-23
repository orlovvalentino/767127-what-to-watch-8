import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

type PublicRouteProps = RouteProps & {
  render: () => JSX.Element;
}

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PublicRouteProps;
function PublicRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus
          ? <Redirect to="/" />
          : render()
      )}
    />
  );
}

export {PublicRoute};
export default connector(PublicRoute);
