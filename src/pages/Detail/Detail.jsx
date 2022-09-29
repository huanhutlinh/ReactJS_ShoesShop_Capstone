import React from "react";
import { NavLink } from "react-router-dom";
export default function Detail() {
  let icon = false;
  const renderProduct = () => {
    return (
      <>
        <div className="product-img col-lg-7 col-md-12">
          <div className="product-img-around">
            <img src="../images/image_5.png" />
          </div>
        </div>
        <div className="product-info col-lg-5 col-md-12">
          <div className="product-item">
            <h5 className="title">Product Name</h5>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quis tempora quibusdam obcaecati ex provident, impedit pariatur
              maiores facilis eligendi, tenetur deleniti? Voluptatibus
              voluptatum facilis iusto fugiat, error veniam odio.
            </p>
            <p className="status">Product Status</p>
            <div className="size">
              <button className="btn btn-success me-2 rounded-0 btnSize">
                43
              </button>
            </div>
            <p className="price mt-2">85$</p>
          </div>
          <div className="quantity my-2 d-flex">
            <button className="btn btn-primary rounded-0 btnNumber">+</button>
            <p className="volume text-center">1</p>
            <button className="btn btn-primary rounded-0 btnNumber">-</button>
          </div>
          <button className="btn btn-primary rounded-0 text-white btnAdd">
            Add to cart
          </button>
        </div>
      </>
    );
  };
  const renderRelateProduct = () => {
    return (
      <>
        <div className="product">
          <div className="row">
            <div className="col-lg-4 col-md-6 product-item">
              <div className="card rounded-0">
                <div className="card-header">
                  <img
                    src="../images/image_5.png"
                    className="w-100"
                    alt="..."
                  />
                  <div className="icon" onClick={() => {}}>
                    {icon === false ? (
                      <i class="far fa-heart text-danger"></i>
                    ) : (
                      <i className="fas fa-heart text-danger"></i>
                    )}
                  </div>
                </div>
                <div className="card-body text-success">
                  <h5 className="card-title">Product Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="footer d-flex align-items-center">
                  <span>
                    <NavLink className="btn-buyNow text-center" to="/detail">
                      Buy Now
                    </NavLink>
                  </span>
                  <span>
                    <NavLink className="btn-price text-center" to="/">
                      85$
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container mt-5">
        <div className="product-detail">
          <div className="row">{renderProduct()}</div>
        </div>
        <div className="relate-product">
          <div className="title-product">
            <h3 className="text-center" style={{fontSize:'40px', fontWeight:'400', lineHeight:'48px'}}>- Relate Product -</h3>
          </div>
          <div className="product-feature mt-3">
            {renderRelateProduct()}
          </div>
        </div>
      </div>
    </>
  );
}
