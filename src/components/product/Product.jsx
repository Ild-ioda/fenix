import "./styles.css";
import Machine from "./../../img/product/productPhotoRoom.png";
import transmission from "./../../img/product/productTransmission.png";

const Product = () => {
  return (
    <div className="product__container">
      <div className="product__inner">
        <h2 className="product__title">
          <span className="product__title-elem">Каталог продукции </span>{" "}
          <br></br>высококачественного оборудования
        </h2>
        <div className="product__machine-cards">
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">CREATIVITY F700A</h2>
            <p className="machine__text">
              Вертикальный высокоскоростной обрабатывающий центр
            </p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">CREATIVITY F700A</h2>
            <p className="machine__text">
              Вертикальный высокоскоростной обрабатывающий центр
            </p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">CREATIVITY F700A</h2>
            <p className="machine__text">
              Вертикальный высокоскоростной обрабатывающий центр
            </p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">CREATIVITY F700A</h2>
            <p className="machine__text">
              Вертикальный высокоскоростной обрабатывающий центр
            </p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">CREATIVITY F700A</h2>
            <p className="machine__text">
              Вертикальный высокоскоростной обрабатывающий центр
            </p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">CREATIVITY F700A</h2>
            <p className="machine__text">
              Вертикальный высокоскоростной обрабатывающий центр
            </p>
          </div>
        </div>
        {/* Product parts --------------- */}
        <div className="product__parts-container">
          <a href="/#" className="products__parts-link">
            Наша компания поставляет
          </a>
          <div className="product__flex-container">
            <p className="product__parts-text">
              Запасные части, оснаска и <br></br> комплектующие для станков
            </p>
            <button className="product__parts-button">
              Получить консультацию
            </button>
          </div>
          <img
            src={transmission}
            alt="transmission"
            className="product__parts-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
