import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function HeaderLogin(props: ConnectedComponentProps): JSX.Element {
  const {authorizationStatus} = props;

  return authorizationStatus ?
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" href="/signout">Sign out</a>
      </li>
    </ul> :
    <div className="user-block">
      <a href="sign-in.html" className="user-block__link">Sign in</a>
    </div>;
}

export {HeaderLogin};
export default connector(HeaderLogin);
