import { Link } from 'react-router-dom';

import imageVk from '../images/ic-vk.svg'
import imageFacebook from '../images/ic-facebook.svg'
import imageOk from '../images/ic-ok.svg'
import imageTwitter from '../images/ic-twitter.svg'
import imageInsagram from '../images/ic-instagram.svg'
import mailSvg from '../images/ion_mail-open-outline.svg'


function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container content">
        <div className="footer__info">
          <p className="footer__company">О сервисе</p>
          <p className="footer__company">© НКО “Письма”</p>
        </div>
        <div className="footer__contact">
          <p className="footer__number">+7 (000) 123 4567</p>
          <p className="footer__number">Заказать звонок</p>
        </div>
        <nav className="footer__nav">
          <div className="footer__box">
            <img 
              className="footer__link footer__link_post" 
              src={mailSvg} 
              alt="почта" />
            <h4 className="footer__title">info@letters.com</h4>
          </div>
          <ul className="footer__about">
            <li>
              <Link className="page-link" to="/">
                <img className="footer__link" src={imageVk} alt="вк" />
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/">
                <img className="footer__link" src={imageFacebook} alt="фейсбук" />
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/">
                <img className="footer__link" src={imageOk} alt="одноклассники" />
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/">
                <img className="footer__link" src={imageTwitter} alt="твиттер" />
              </Link>
            </li>
            <li>
              <Link className="page-link" to="/">
                <img className="footer__link" src={imageInsagram} alt="инста" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;