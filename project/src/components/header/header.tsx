import {Link} from 'react-router-dom';
import HeaderLogin from '../header-login/header-login';

function Header():JSX.Element{
  return(
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to="/" title="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <HeaderLogin />
    </header>
  );
}

export default Header;
