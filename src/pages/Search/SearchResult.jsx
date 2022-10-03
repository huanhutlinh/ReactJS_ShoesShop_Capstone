import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SearchResult({ productSearch }) {
  console.log("searchResult: ", productSearch);
  let [select, setSelect] = useState(0);
  let icon = true;

  let handleSelect = (e) => {
    let { value, id } = e.target;
    setSelect(value);
  };

  useEffect(() => {
    if (select == 1) {
      productSearch = productSearch.sort((spTiepTheo, sp) => {
        return spTiepTheo.price - sp.price;
      });
      console.log("arrProduct after Sort 1: ", productSearch);
    }
    if (select == 0) {
      productSearch = productSearch.sort((spTiepTheo, sp) => {
        return sp.price - spTiepTheo.price;
      });
      console.log("arrProduct after Sort 0: ", productSearch);
    }
  }, [productSearch, select]);

  console.log("searchResult-select: ", select);

  let renderProductSort = () => {
    return productSearch.map((item, index) => {
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
                  <NavLink
                    className="btn-buyNow text-center"
                    to={`/detail/${item.id}`}
                  >
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
      <div className="search-result">
        <h3 className="title-search-result">Search result</h3>
        <div className="search-result-present my-4">
          <div className="search-result-select">
            <p>Price</p>
            <select
              className="form-select rounded-0"
              aria-label="text-white"
              onChange={handleSelect}
            >
              <option value="1">Descending</option>
              <option value="0">Ascending</option>
            </select>
          </div>
          <div className="search-result-items my-4 ">
            <div className="product-feature">
              <div className="product">
                <div className="row">{renderProductSort()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SearchResult);
