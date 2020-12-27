import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container content">
        <Link className="page-link" to="/"
          ><h2 className="logo">Письма</h2>
          <span className="logo__span">к тётеньке</span>
        </Link>
        <p className="header__description">Портал гражданских инициатив</p>
        <Link to="/log-in"
          className="header__icon header__icon_type_profile page-link"
        ></Link>
      </div>
    </header>
  )
}

export default Header;