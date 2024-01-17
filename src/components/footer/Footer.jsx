import "./styles.css";
import logo from "./../../img/footer/footerLogo.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inner">
        <a className="logo" href="/#">
          <img className="logo__img" src={logo} alt="logoImg" />
        </a>
        <div className="header__title-container">
          <p className="header__title">ФЕНИКС</p>
          <img className="header__title-img" src={Line} alt="" />

          <p className="header__title-description">
            Высокоточное металлообрабатывающее оборудование
          </p>
          <p className="header__title-description2"></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
