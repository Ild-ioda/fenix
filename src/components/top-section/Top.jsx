import "./styles.css";
import Machine from "./../../img/top/topMachine.png";
import Circle from "./../../img/top/topCircle.png";
import ArrowL from "./../../img/top/topLeftArrow.svg";
import ArrowR from "./../../img/top/topRightArrow.svg";

const Top = () => {
  return (
    <div className="top__container">
      <div className="top__inner">
        <a href="/#" className="top__link">
          Новинка
        </a>
        <h1 className="top__title">CREATIVITY F700A</h1>
        <p className="top__text">
          Вертикальный высокоскоростной <br></br> обрабатывающий центр
        </p>
        <a href="/#" className="top__link2">
          Подробнее о товаре
        </a>
      </div>
      <img src={Circle} alt="circle" className="top__img1" />
      <img src={Machine} alt="Machine" className="top__img" />
      <img className="top__arrow-right" src={ArrowL} alt="Arrow-navigation" />
      <img className="top__arrow-left" src={ArrowR} alt="Arrow-navigation" />
    </div>
  );
};

export default Top;
