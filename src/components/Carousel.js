import Carousel1 from "../img/Carousel1.jpeg";
import Carousel2 from "../img/Carousel2.jpeg";
import Carousel3 from "../img/Carousel3.jpeg";
import Carousel4 from "../img/Carousel4.jpeg";
import Carousel5 from "../img/Carousel5.jpeg";
import Carousel6 from "../img/Graduacao.jpeg";
import Carousel7 from "../img/Graducao2.jpeg";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="5000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>

      </ol>
      <div className="carousel-inner" style={{ textAlign: "center" }}>
        <div className="carousel-item active">
          <img src={Carousel1} alt="First slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Carousel2} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Carousel3} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Carousel4} alt="Fourth slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Carousel5} alt="Fifth slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Carousel6} alt="Six slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Carousel7} alt="Seven slide" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export { Carousel };
