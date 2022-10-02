import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";

function SearchResult({ productSearch }) {

  let icon = true;
  let renderSearchResult = () => {
    return productSearch?.map((item, index) => {
      return (
        <>
          <div className="col-lg-4 col-md-6 product-item" key={index}>
            <div className="card rounded-0">
              <div className="card-header">
                <img src={item?.image} className="w-100" alt="..." />
                <div className="icon" onClick={() => {}}>
                  {icon === false ? (
                    <i class="far fa-heart text-danger"></i>
                  ) : (
                    <i className="fas fa-heart text-danger"></i>
                  )}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{item?.name}</h5>
                <p className="card-text">{item?.shortDescription}</p>
              </div>
              <div className="footer d-flex align-items-center">
                <span>
                  <NavLink className="btn-buyNow text-center" to={`/detail/${item.id}`}>
                    Buy Now
                  </NavLink>
                </span>
                <span>
                  <NavLink className="btn-price text-center" to="/">
                    {item?.price} $
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <div>
      <div className="product">
        <div className="row">{renderSearchResult()}</div>
      </div>
      
    </div>
  );
}
export default memo(SearchResult);
