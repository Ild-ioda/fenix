import "./styles.css";
import Man from "./../../img/about/aboutMan.png";
import Machine from "./../../img/about/aboutMachine.png";
// import Arrows from "./../../img/about/aboutArrows.png";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__inner">
        {/* Block for background image ----*/}
        <div className="about__background">
          <img className="about__background-img" src={Machine} alt="Machine" />
        </div>

        {/*  Block for company descriptions---- */}
        <div className="about__descriptions">
          <a href="/#" className="description-link">
            О компании
          </a>

          <h2 className="description__title">
            Компания
            <span className="description__title-elem">«ФЕНИКС» -</span>{" "}
            <br></br>
            надежная, <br></br> зарекомендованная на <br></br> рынке компания
          </h2>

          <p className="description__text">
            «Феникс» реализует комплексные решения в сфере поставки оборудования
            и запуска металлообрабатывающего производства. В нашем портфеле —
            станки нескольких групп, включая крупногабаритные. Мы подберем
            оборудование под ваши задачи, запустим станок на вашем производстве
            и поможем увеличить срок его полезного использования.
          </p>
        </div>

        {/* Block objective-------- */}
        <div className="about__objectives">
          <h2 className="objectives__title">
            <span className="objectives__title-elem">Наша цель</span> -
            автоматизация <br></br> ваших рабочих процессов
          </h2>
          <p className="objectives__text">
            Зная потребности клиента и, и применяя свои знания и опыт, мы{" "}
            <br></br> предлагаем качественное и современное оборудование
          </p>
        </div>

        {/* Second image */}
        <div className="about-second-img">
          <img className="second__img" src={Man} alt="Man" />
        </div>
      </div>
    </div>
  );
};

export default About;
