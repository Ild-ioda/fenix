import "./styles.css";
import like from "./../../img/company/company1.svg"
import cup from "./../../img/company/company2.svg"
import hands from "./../../img/company/company3.svg"
import check from "./../../img/company/company4.svg"



const Company = () => {
  return (
    <div className="company__container">
      <div className="company__inner">
        <a href="/#" className="company__button">
          Почему мы?
        </a>
        <h2 className="company__title">Компания <span className="company__title-elem">«ФЕНИКС»</span> ваш надёжный поставщик промышленного оборудования</h2>
        <ul className="company__list">
          <li className="company__item-img">
            <img src={like} alt="like" className="company__img" />
            <h2 className="company__item-title">
            Высокая точность и скорость деталей
            </h2>
            <p className="company__item-text">Что помогает предприятиям повысить производительность и эффективность</p>
          </li>
          <li className="company__item-img">
            <img src={cup} alt="Cup" className="company__img" />
            <h2 className="company__item-title">
            Долговечность и износостойкость
            </h2>
            <p className="company__item-text">
            Это делает экономически эффективными инвестициями с минимальным обслуживанием идолгим использованием
            </p>
          </li>
          <li className="company__item-img">
            <img src={hands} alt="shake hands" className="company__img" />
            <h2 className="company__item-title">
            большой опыт работы
            </h2>
            <p className="company__item-text">Что помогает предприятиям повысить производительность и эффективность</p>
          </li>
          <li className="company__item-img">
            <img src={check} alt="check mark" className="company__img" />
            <h2 className="company__item-title">
            Нет неразрешимых задач
            </h2>
            <p className="company__item-text">
            Бесплатно консультируем постоянных клиентов после окончания срока действия договора
            </p>
          </li>
          <li className="company__item-img">
            <img src={like} alt="like" className="company__img" />
            <h2 className="company__item-title">
            сервисное обслуживание и ремонт
            </h2>
            <p className="company__item-text">
            Выполняем сервисное обслуживание и ремонт (планово-предупредительный, текущий, капитальный с модернизацией)
            </p>
          </li>
          
          
         
        </ul>
      </div>
    </div>

    );
}
 
export default Company;