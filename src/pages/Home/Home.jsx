import React, { useState } from "react";
import Carousel from "./Carousel";
import ProductFeature from "./ProductFeature";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPostPageApi } from "../../redux/Reducers/productReducer";
import { useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  const [icon, setIcon] = useState(false);
  const { dataProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  /**
   * currentPage: trang hiện tại đang được trỏ tới
   */
  const [currentPage, setCurrentPage] = useState(1);
  /**
   * postsPerPage: là số danh sách sản phẩm được hiển thị trên page
   */
  const [postsPerPage, setPostPerPage] = useState(6);

  const getPostPage = async () => {
    const actionThunk = getPostPageApi(currentPage, postsPerPage);
    dispatch(actionThunk);
  };

  useEffect(() => {
    getPostPage();
  }, [currentPage]);

  const renderProduct = () => {
    return dataProduct?.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-6 product-item">
          <div className="card rounded-0">
            <div className="card-header">
              <img
                src={`https://shop.cyberlearn.vn/images/${item?.image}`}
                className="w-100"
                alt="..."
              />
              <div
                className="icon"
                onClick={() => {
                  // handleClick();
                }}
              >
                {icon === false ? (
                  <i class="far fa-heart text-danger"></i>
                ) : (
                  <i className="fas fa-heart text-danger"></i>
                )}
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item?.name}</h5>
              <p className="card-text">
                {item?.description.length > 70
                  ? item?.description.slice(0, 70) + "....."
                  : item?.description}
              </p>
            </div>
            <div className="footer d-flex align-items-center">
              <span>
                <NavLink to={`/detail/${item.id}`} className="btn-buyNow text-center">
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
      );
    });
  };

  console.log("dataProduct: ", dataProduct);
  return (
    <div className="container">
      {/* Carousel */}
      <Carousel />
      {/* ProductFeature */}
      <div className="product-feature-title">
        <h2
          className="pt-3 ps-4 mb-4"
          style={{ width: "698px", height: "74px", background: "#dfd8d6" }}
        >
          Product Feature{" "}
        </h2>
      </div>
      <div className="product-feature">
        <div className="product">
          <div className="row">{renderProduct()}</div>
        </div>
      </div>
      {/* Pagination */}
      <Pagination postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
