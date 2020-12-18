import imageGoogle from '../images/google.png';
import imageApple from '../images/apple.png';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container content">
        <div className="footer__info">
          <p className="footer__company">info@ciceron.com</p>
          <p className="footer__company">© НКО “Письма”</p>
        </div>
        <div className="footer__contact">
          <p className="footer__number">+7 (000) 123 4567</p>
          <p className="footer__number">Заказать звонок</p>
        </div>
        <nav className="footer__nav">
          <div className="footer__about">
            <h4 className="footer__title">О сервисе</h4>
            <a href="#" className="page-link">
              <img
                src={imageGoogle}
                alt="гуглплэй"
                className="footer__img"
              />
            </a>
          </div>
          <div className="footer__about">
            <h4 className="footer__title">Партнерам</h4>
            <a href="#" className="page-link">
              <img
                src={imageApple}
                alt="аппстор"
                className="footer__img"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;