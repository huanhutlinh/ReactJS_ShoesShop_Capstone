import React from "react";
import { useSelector } from "react-redux";

export default function Carousel() {
  const { dataCarousel } = useSelector((state) => state.productReducer);
  const [item1, item2, item3] = dataCarousel;

  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-content d-flex align-items-center">
              <div className="carousel-img">
                <img src={item1.image} className="d-block" alt="..." />
              </div>
              <div className="carousel-product">
                <h3>{item1.name}</h3>
                <p>
                  {item1.shortDescription}
                </p>
                <button className="btn btn-success rounded-0">BuyNow</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content d-flex align-items-center">
              <div className="carousel-img">
                <img src={item2.image} className="d-block" alt="..." />
              </div>
              <div className="carousel-product">
                <h3>{item2.name}</h3>
                <p>
                  {item2.shortDescription}
                </p>
                <button className="btn btn-danger rounded-0">BuyNow</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content d-flex align-items-center">
              <div className="carousel-img">
                <img src={item3.image} className="d-block" alt="..." />
              </div>
              <div className="carousel-product">
                <h3>{item3.name}</h3>
                <p>
                  {item3.shortDescription}
                </p>
                <button className="btn btn-warning rounded-0 text-white">
                  BuyNow
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="false" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
