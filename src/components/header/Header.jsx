import "./styles.css";
import logo from "./../../img/header/headerLogo.svg";
import Phone from "./../../img/header/headerPhone.svg";
import Point from "./../../img/header/HeaderPoint.svg";
import Vk from "./../../img/header/headerVK.svg";
import WhatsUp from "./../../img/header/headerWtsUp.svg";
import Viber from "./../../img/header/headerViber.svg";
import Line from "./../../img/header/headerLine.svg";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__inner">
        <a className="header__logo" href="/#">
          <img className="header__logo-img" src={logo} alt="logoImg" />
        </a>
        <div className="header__title-container">
          <p className="header__title">ФЕНИКС</p>
          <img className="header__title-img" src={Line} alt="" />

          <p className="header__title-description">
            оборудование для предприятий
          </p>
        </div>

        {/* Список меню ------------------------------ */}
        <ul className="header__list">
          <li className="header__list-item">
            <a href="/#" className="header__list-link">
              товары
            </a>
          </li>
          <li className="header__list-item">
            <a href="/#" className="header__list-link">
              новости
            </a>
          </li>
          <li className="header__list-item">
            <a href="/#" className="header__list-link">
              о компании
            </a>
          </li>
          <li className="header__list-item">
            <a href="/#" className="header__list-link">
              контакты
            </a>
          </li>
        </ul>
          <div class="create-line"></div>
          
        {/* Список контактов  ------------------------------------ */}
        
        <ul className="header__contacts">
          <li className="header__contacts-item">
          <img className="header__contacts-img" src={Phone} alt="Logo phone" />

            <a href="tel:8(800)222-12-22" className="header__contacts-tel">
              8(800)222-12-22
            </a>
          </li>

          <li className="header__contacts-item">
            <span className="mail__elem">@</span>
            <a
              href="mailto:fenix@list.com"
              className="header__contacts-mail"
            >
              fenix@list.com
            </a>
          </li>
        </ul>
        <div class="create-line"></div>

        {/* Список соц-сетей------------------------------ */}
        <div className="header__networks-container">

        <ul className="header__networks">
          <li className="header__networks-item">
            <a href="https://vk.com" className="header__networks-link">
              <img src={Vk} alt="Logo VK network" />
            </a>
          </li>
          <li className="header__networks-item">
            <a href="https://www.whatsapp.com/?lang=ru_RU" className="header__networks-link">
              <img src={WhatsUp} alt="Logo whatsUp messendger" />
            </a>
          </li>
          <li className="header__networks-item">
            <a href="https://www.viber.com/ru/" className="header__networks-link">
              <img src={Viber} alt="Logo Viber messendger" />
            </a>
          </li>
        </ul>
          <div className="header__networks-point">
            <img className="header__networks-img" src={Point} alt="logo map-point" />
            <p className="header__networks-point-text">Москва</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
