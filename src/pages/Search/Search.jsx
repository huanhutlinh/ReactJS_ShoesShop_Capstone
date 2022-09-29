import React from "react";
import {NavLink} from "react-router-dom";

export default function Search() {
  let icon = false;
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
    <div className="container">
      <div className="search my-5">
        <h4>Search</h4>
        <div className="d-flex align-items-center gap-4 search-type">
          <input type="text" placeholder="product name .... " />
          <button
            className="btn btn-outline-secondary rounded-0 text-white rounded-pill"
            type="button"
            id="button-addon2"
          >
            search
          </button>
        </div>
      </div>
      <div className="search-result">
        <h3 className="title-search-result">Search result</h3>
        <div className="search-result-present my-4">
          <div className="search-result-select">
            <p>Price</p>
            <select className="form-select rounded-0" aria-label="text-white">
              <option selected>Sort By</option>
              <option value='0'>Ascending </option>
              <option value='1'>Descending</option>
            </select>
          </div>
          <div className="search-result-items my-4 ">
            <div className="product-feature">
              {renderRelateProduct()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
