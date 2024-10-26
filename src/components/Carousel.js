import lifeImage from "../img/life.png";
import lifeImage2 from "../img/life2.png";

export const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
   <ol className="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

</ol>
      <div className="carousel-inner" style={{ textAlign: 'center' }}>
        <div className="carousel-item active">
          <img src={lifeImage} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src={lifeImage2} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
