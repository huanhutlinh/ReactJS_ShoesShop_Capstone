import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProductFeature = ({datProduct}) => {
  let [icon, setIcon] = useState();
  let handleClick = () => {
    
  }

  return (
    <div className="product-feature container">
      <div className="product-feature-title">
        <h2
          className="border border-dark pt-3"
          style={{ width: "698px", height: "74px", background: "#dfd8d6" }}
        >
          Product Feature{" "}
        </h2>
      </div>
      <div className="product">
        {/* <div className="row">
          <div className="col-lg-4 col-md-6 product-item">
            <div className="card rounded-0">
              <div className="card-header">
                <img src="./images/image_5.png" className="w-100" alt="..." />
                <div className="icon" onClick={() => {
                    handleClick();
                }}>
                    {icon === false ? <i class="far fa-heart text-danger"></i> : <i className="fas fa-heart text-danger"></i>}
                </div>
              </div>
              <div className="card-body text-success">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
              <div className="footer d-flex align-items-center">
                <span><NavLink className="btn-buyNow text-center" to='/detail'>Buy Now</NavLink></span>
                <span><NavLink className="btn-price text-center" to='/'>85$</NavLink></span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProductFeature;