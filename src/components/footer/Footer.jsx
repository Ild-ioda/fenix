import "./styles.css";
import logo from "./../../img/footer/footerLogo.svg";
import Line from "./../../img/footer/footerLine.svg";
import Point from "./../../img/footer/footerPoint.svg";
import Vk from "./../../img/footer/footerVk.svg";
import WhatsUp from "./../../img/footer/footerWup.svg";
import Viber from "./../../img/footer/footerViber.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inner">
        <a className="footer__logo" href="/#">
          <img className="footer__logo-img" src={logo} alt="logoImg" />
        </a>
        <div className="footer__title-container">
          <p className="footer__title">ФЕНИКС</p>
          <img className="footer__title-img" src={Line} alt="" />

          <p className="footer__title-description">
            Высокоточное металлообрабатывающее оборудование
          </p>
          <p className="footer__title-description2">
            Поставки высокоточного металлообрабатывающего оборудования «ФИНИСТ»
          </p>
        </div>

        {/* Список меню ----------- */}

        <div className="footer__list-container">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="/#" className="footer__list-link">
                главная
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/#" className="footer__list-link">
                товары
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/#" className="footer__list-link">
                новости
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/#" className="footer__list-link">
                о компании
              </a>
            </li>
            <li className="footer__list-item">
              <a href="/#" className="footer__list-link">
                контакты
              </a>
            </li>
          </ul>
          {/* Tel contacts --------------- */}
          <div className="footer__contacts-container">
            <div className="footer__contacts-tel">
              <a href="tel:8(800)222-12-22" className="footer__contacts-number">
                8(800)222-12-22
              </a>
              <p className="footer__contacts-point">
                <img className="footer__contacts-img" src={Point} alt="" />
                Москва
              </p>
            </div>

            {/* NETWORKS ------------- */}
            <div className="footer__networks-container">
              <ul className="footer__networks">
                <li className="footer__networks-item">
                  <a href="https://vk.com" className="footer__networks-link">
                    <img src={Vk} alt="Logo VK network" />
                  </a>
                </li>
                <li className="footer__networks-item">
                  <a
                    href="https://www.whatsapp.com/?lang=ru_RU"
                    className="footer__networks-link"
                  >
                    <img src={WhatsUp} alt="Logo whatsUp messendger" />
                  </a>
                </li>
                <li className="footer__networks-item">
                  <a
                    href="https://www.viber.com/ru/"
                    className="footer__networks-link"
                  >
                    <img src={Viber} alt="Logo Viber messendger" />
                  </a>
                </li>
              </ul>
              <a href="mailto:fenix@list.com" className="footer__networks-mail">
                fenix@list.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
