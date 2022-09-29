import React from "react";

export default function Carousel() {
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
                <img src="./images/image_5.png" className="d-block" alt="..." />
              </div>
              <div className="carousel-product">
                <h3>Product Name</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati adipisci optio .....{" "}
                </p>
                <button className="btn btn-success rounded-0">BuyNow</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content d-flex align-items-center">
              <div className="carousel-img">
                <img src="./images/image_5.png" className="d-block" alt="..." />
              </div>
              <div className="carousel-product">
                <h3>Product Name</h3>
                <p>Product Description</p>
                <button className="btn btn-danger rounded-0">BuyNow</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content d-flex align-items-center">
              <div className="carousel-img">
                <img src="./images/image_5.png" className="d-block" alt="..." />
              </div>
              <div className="carousel-product">
                <h3>Product Name</h3>
                <p>Product Description</p>
                <button className="btn btn-warning rounded-0">BuyNow</button>
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
