import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';
import {Link, useHistory} from 'react-router-dom';
import HeaderLogoutButton from '../header-logout-button/header-logout-button';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function HeaderLogin(props: ConnectedComponentProps): JSX.Element {
  const {authorizationStatus} = props;
  const history = useHistory();

  return authorizationStatus ?
    <ul className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => {history.push('/mylist');}}
        >
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <HeaderLogoutButton/>
      </li>
    </ul> :
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>
    </div>;
}

export {HeaderLogin};
export default connector(HeaderLogin);
