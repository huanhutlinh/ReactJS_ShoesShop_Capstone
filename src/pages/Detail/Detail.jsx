import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailApiAction, setProductCartAction } from "../../redux/Reducers/productReducer";

export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  let productCart = {...productDetail};
  let [quantity, setQuantity] = useState(1);
  productCart.quantity = quantity;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProductDetailApi = async () => {
    const actionThunk = getProductDetailApiAction(params.id);
    dispatch(actionThunk);
  };

  useEffect(() => {
    getProductDetailApi();
  }, [params.id]);
  
  let icon = false;
  console.log('Số lượng trước khi sửa: ', productCart.quantity);
  
  productCart = {...productCart,...productCart.quantity};
  console.log('Số lượng sau khi sửa: ', productCart.quantity);
  const renderButton = () => {
    return productDetail?.size?.map((size, index) => {
      return (
        <button className="btn btn-success me-2 rounded-0 btnSize" key={index}>
          {size}
        </button>
      );
    });
  };

  const handleAddCart = () => {
    const actionAddCart = setProductCartAction(productCart);
    dispatch(actionAddCart);
  };

  useEffect(() => {
    // handleAddCart();
    setQuantity(1)
  },[params.id])

  const renderProduct = () => {
    return (
      <>
        <div className="product-img col-lg-7 col-md-12">
          <div className="product-img-around">
            <img src={productDetail?.image} />
          </div>
        </div>
        <div className="product-info col-lg-5 col-md-12">
          <div className="product-item">
            <h5 className="title">{productDetail?.name}</h5>
            <p className="description">{productDetail?.description}</p>
            <p className="status">Available</p>
            <div className="size">{renderButton()}</div>
            <p className="price mt-2">{productDetail.price} $</p>
          </div>
          <div className="quantity my-2 d-flex">
            <button className="btn btn-primary rounded-0 btnNumber" onClick={() => {
              setQuantity(quantity + 1);
            }}>+</button>
            <p className="volume text-center">{productCart.quantity}</p>
            <button className="btn btn-primary rounded-0 btnNumber" onClick={() => {
              setQuantity(quantity > 1 ? quantity - 1 : quantity);
            }}>-</button>
          </div>
          <button className="btn btn-primary rounded-0 text-white btnAdd" onClick={handleAddCart}>
            Add to cart
          </button>
        </div>
      </>
    );
  };

  const renderRelateProduct = () => {
    return productDetail?.relatedProducts?.map((item, index) => {
      return (
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
              <h5 className="card-title">{item?.name}</h5>
              <p className="card-text">
                {item?.description.length > 70 ? item?.description.slice(1,70) + '...' : item?.description}
              </p>
            </div>
            <div className="footer d-flex align-items-center">
              <span>
                <NavLink className="btn-buyNow text-center" to={`/detail/${item.id}`}>
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
      );
    });
  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="product-detail">
          <div className="row">{renderProduct()}</div>
        </div>
        <div className="relate-product">
          <div className="title-product">
            <h3
              className="text-center"
              style={{
                fontSize: "40px",
                fontWeight: "400",
                lineHeight: "48px",
              }}
            >
              - Relate Product -
            </h3>
          </div>
          <div className="product-feature mt-3">
            <div className="product">
              <div className="row">
                {renderRelateProduct()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
