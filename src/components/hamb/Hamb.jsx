import "./styles.css";
import close from "./../../img/hamb-menu/Krestiksvgpng.ru_.svg";
import menu from "./menu";

const Hamb = () => {
  return (
    <div className="menu" onClick={menu}>
      <button className="menu__btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="menu__list">
        <li className="menu__close">
          <button className="menu__close-btn">
            <img src={close} alt="" />
          </button>
        </li>
        <li className="menu__item">
          <a href="/#" className="menu__link">
            Товары
          </a>
        </li>
        <li className="menu__item">
          <a href="/#" className="menu__link">
            Новости
          </a>
        </li>
        <li className="menu__item">
          <a href="/#" className="menu__link">
            О компании
          </a>
        </li>
        <li className="menu__item">
          <a href="/#" className="menu__link">
            Контакты
          </a>
        </li>
        <li className="menu__item">
          <a href="tel:8(800)222-12-22" className="menu__link">
            8(800)222-12-22
          </a>
        </li>
        <li className="menu__item">
          <a href="mailto:fenix@list.com" className="menu__link">
            fenix@list.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamb;
