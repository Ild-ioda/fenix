import "./styles.css";
import Machine from "./../../img/news/newsMachine.png";
import LitArrow from "./../../img/news/newsLittleArrow.png";
import Arrow from "./../../img/news/newsArrow.png";

const News = () => {
  return (
    <div className="news__container">
      <div className="news__inner">
        <a href="/#" className="news__link">
          Только для вас
        </a>
        <h2 className="news__title">
          Следите <span className="news__title-elem">за новостями</span> и будьте
          <br></br> в курсе последних событий
        </h2>
          <div className="news__cards">
            <a href="/#" className="news__cards-link">Все новости</a>
            <div className="news__card">
              <img src={Machine} alt="Machine" className="news__card-img" />
              <p className="news__card-text">
              Рады приветствовать Вас! Хотим поделиться приятной новостью о запуске новой модели...
              </p>
              <a href="/#" className="news__card-link">Читать новость</a>
            </div>
            <div className="news__card">
              <img src={Machine} alt="Machine" className="news__card-img" />
              <p className="news__card-text">
              Рады приветствовать Вас! Хотим поделиться приятной новостью о запуске новой модели...
              </p>
              <a href="/#" className="news__card-link">Читать новость</a>
            </div>      <div className="news__card">
              <img src={Machine} alt="Machine" className="news__card-img" />
              <p className="news__card-text">
              Рады приветствовать Вас! Хотим поделиться приятной новостью о запуске новой модели...
              </p>
              <a href="/#" className="news__card-link">Читать новость</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default News;
