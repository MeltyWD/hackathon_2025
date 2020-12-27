import { Link } from 'react-router-dom';
import headerLogo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container content">
        <Link className="page-link" to="/">
          <img className="logo__icon" src={headerLogo} alt="" />
        </Link>
        <h1 className="header__description">Портал гражданских инициатив</h1>
        <button className="header__icon page-link">
          <span className="logo__notification">2</span>
        </button>
      </div>
    </header>
  )
}

export default Header;