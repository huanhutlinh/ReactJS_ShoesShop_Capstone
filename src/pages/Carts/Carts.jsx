import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProductDeleteAction, setQuantityProductAction } from "../../redux/Reducers/productReducer";
import { postOderAPI } from "../../redux/Reducers/userReducer";
import { getStore, ACCESS_TOKEN } from "../../util/config";

export default function Carts() {
  const { productCart, quantityProduct} = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("Quantity Cart: ", quantityProduct);

  useEffect(() => {
    if(!getStore(ACCESS_TOKEN)){
      alert('Vui lòng đăng nhập ');
      navigate('/login');
    }
  }, [])

  let handleDelete = (id) => {
    let newArray = [...productCart];
    let newProductCart = newArray.filter((item) => item.id !== id);
    const actioDelete = setProductDeleteAction(newProductCart);
    dispatch(actioDelete);
  };

  const renderCart = () => {
    return productCart?.map((prodCart, index) => {
      return (
        <>
          <tr className="cart-items text-center align-middle" key={index}>
            <td scope="row" className="checkbox col-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value={prodCart?.id}
                aria-label="..."
                style={{ backgroundColor: "#6200EE", color: "white" }}
              />
            </td>
            <td className="col-1 product-id">{prodCart?.id}</td>
            <td className="col-1 product-img">
              <img src={prodCart?.image} alt="..." className="w-100" />
            </td>
            <td className="col-2 product-name">{prodCart?.name}</td>
            <td className="col-1 product-price">{prodCart?.price}</td>
            <td className="col-2 product-volume">
              <button className="btn btn-success rounded-0 py-1 control">
                +
              </button>
              <button className="btn mx-2 quantity rounded-0">
                {prodCart?.quantity}
              </button>
              <button className="btn btn-success rounded-0 pb-1 control">
                -
              </button>
            </td>
            <td className="col-1 product-total">
              {prodCart?.quantity * prodCart?.price}
            </td>
            <td className="col-2 product-action">
              <button
                className="btn rounded-0 text-white mx-3 edit"
                onClick={() => {}}
              >
                EDIT
              </button>
              <button
                className="btn rounded-0 text-white delete"
                onClick={() => {
                  handleDelete(prodCart?.id);
                }}
              >
                DELETE
              </button>
            </td>
          </tr>
        </>
      );
    });
  };

  let orderProduct = productCart.map((item, index) => ({...item, productId: item.id}));

  const orderDetail = {
    orderDetail: orderProduct,
    email: userLogin?.email
  }

  const handleOrderProduct = async () => {
    postOderAPI(orderDetail);
  };

  return (
    <div className="container pb-5">
      <div className="title px-5 mb-5">
        <h3>Cart</h3>
        <hr />
      </div>
      <div className="cart-body mx-5">
        <div class="table-responsive cart-detail">
          <table className="table">
            <thead
              className="text-center cart-item-head"
              style={{ background: "#D9D9D9" }}
            >
              <tr>
                <th scope="col">
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkboxNoLabel"
                      defaultValue
                      aria-label="..."
                      style={{
                        pointerEvents: "none",
                        backgroundColor: "#6200EE",
                        color: "white",
                      }}
                      c
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Id
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Img
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Name
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Price
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Total
                </th>
                <th
                  scope="col"
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "24.2px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="cart-item-body">{renderCart()}</tbody>
          </table>
        </div>
      </div>
      <div className="cart-footer px-5 d-flex flex-row-reverse">
        <button
          className="btn btn-warning rounded-0 text-white"
          onClick={() => {
            handleOrderProduct();
          }}
        >
          Submit order
        </button>
      </div>
    </div>
  );
}
