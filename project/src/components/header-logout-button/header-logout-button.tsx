import {MouseEvent} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {logout} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';

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
    <a
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onLogout();
      }}
      className="user-block__link"
      href="/signout"
    >Sign out
    </a>
  );
}
export  {HeaderLogoutButton};
export default connector(HeaderLogoutButton);
