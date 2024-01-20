import "./styles.css";
import Machine from "./../../img/product/productPhotoRoom.png"

const Product = () => {
  return ( 
    <div className="product__container">
      <div className="product__inner">
        <h2 className="product__title">
        <span className="product__title-elem">Каталог продукции </span> <br></br>высококачественного оборудования
        </h2>
        <div className="product__machine-cards">
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">
            CREATIVITY F700A
            </h2>
            <p className="machine__text">Вертикальный высокоскоростной обрабатывающий центр</p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">
            CREATIVITY F700A
            </h2>
            <p className="machine__text">Вертикальный высокоскоростной обрабатывающий центр</p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">
            CREATIVITY F700A
            </h2>
            <p className="machine__text">Вертикальный высокоскоростной обрабатывающий центр</p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">
            CREATIVITY F700A
            </h2>
            <p className="machine__text">Вертикальный высокоскоростной обрабатывающий центр</p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">
            CREATIVITY F700A
            </h2>
            <p className="machine__text">Вертикальный высокоскоростной обрабатывающий центр</p>
          </div>
          <div className="product__machine-item">
            <img src={Machine} alt="Machine" className="machine__img" />
            <h2 className="machine__title">
            CREATIVITY F700A
            </h2>
            <p className="machine__text">Вертикальный высокоскоростной обрабатывающий центр</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Product;