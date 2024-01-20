import "./styles.css";
import like from "./../../img/company/company1.svg";
import cup from "./../../img/company/company2.svg";
import hands from "./../../img/company/company3.svg";
import check from "./../../img/company/company4.svg";

const Company = () => {
  return (
    <div className="company__container">
      <div className="company__inner">
        <a href="/#" className="company__button">
          Почему мы?
        </a>
        {/* Company List ----------------- */}
        <div className="company__list">
          <div className="company__item-head">
            <h2 className="company__title">
              Компания
              <span className="company__title-elem">
                «ФЕНИКС»<br></br>
              </span>
              ваш надёжный поставщик промышленного оборудования
            </h2>
          </div>
          <div className="company__item">
            <h2 className="company__item-title">
              Высокая точность <br></br> и скорость деталей
            </h2>
            <p>
              <img src={like} alt="like" className="company__img" />
            </p>
            <p className="company__item-text">
              Что помогает предприятиям повысить производительность и
              эффективность
            </p>
          </div>
          <div className="company__item background-grey">
            <h2 className="company__item-title">
              Долговечность и износостойкость
            </h2>

            <img src={cup} alt="Cup" className="company__img" />

            <p className="company__item-text">
              Это делает экономически эффективными инвестициями с минимальным
              обслуживанием идолгим использованием
            </p>
          </div>
          <div className="company__item background-grey">
            <h2 className="company__item-title">
              большой опыт <br></br> работы
            </h2>

            <img src={hands} alt="shake hands" className="company__img" />

            <p className="company__item-text">
              Что помогает предприятиям повысить производительность и
              эффективность
            </p>
          </div>
          <div className="company__item background-grey ">
            <h2 className="company__item-title">
              Нет неразрешимых <br></br>задач
            </h2>

            <img src={check} alt="check mark" className="company__img" />

            <p className="company__item-text">
              Бесплатно консультируем постоянных клиентов после окончания срока
              действия договора
            </p>
          </div>
          <div className="company__item move-block">
            <h2 className="company__item-title">
              сервисное <br></br> обслуживание и ремонт
            </h2>

            <img src={like} alt="like" className="company__img" />

            <p className="company__item-text">
              Выполняем сервисное обслуживание и ремонт
              (планово-предупредительный, текущий, капитальный с модернизацией)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
