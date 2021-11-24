import {MouseEvent} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {logout} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});
const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function HeaderLogoutButton({onLogout}:ConnectedComponentProps):JSX.Element{
  return (
    <Link
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onLogout();
      }}
      to="/"
      className="user-block__link"
    >
      Sign out
    </Link>
  );
}
export  {HeaderLogoutButton};
export default connector(HeaderLogoutButton);
