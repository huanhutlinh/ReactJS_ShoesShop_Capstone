import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  getProfileApi,
  setOrderHistoryAction,
} from "../../redux/Reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { userLogin, order } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogin) {
      const actionThunk = getProfileApi;
      dispatch(actionThunk);
    } else {
      navigate("/login");
    }
  }, []);

  // console.log("Debug Order: ", order.ordersHistory);
  // let newOrder = order.ordersHistory.map((item, index) => {
  //   console.log("Date: ", item.date);
  //   return item.orderDetail.map((prod, key) => {
  //     return prod;
  //   });
  // });
  // console.log("Debug newOrder: ", newOrder);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: "",
      confirmPassw: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required!")
        .email("Invalid email!"),
      name: Yup.string().required("Name is required!"),
      phone: Yup.string().required("Phone is required!"),
      password: Yup.string()
        .required("Password is required!")
        .min(8, "Password must have at least 8 characters"),
      confirmPassw: Yup.string()
        .required("Confirm password is required!")
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          ),
        }),
    }),
    onSubmit: async (values) => {
      try {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Users/signup",
          method: "POST",
          data: values,
        });
        console.log(result.data.content);
        alert("????ng K?? T??i Kho???n Th??nh C??ng!");
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });

  const renderCart = () => {
    return order?.ordersHistory?.map((item, index) => {
      return (
        <div key={index}>
          <h5 className="text-success">
            + Orders have been placed on {item?.date}
          </h5>
          <table className="table">
            <thead
              className="text-center cart-item-head"
              style={{ background: "#D9D9D9" }}
            >
              <tr>
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
              </tr>
            </thead>
            <tbody className="cart-item-body">
              {item?.orderDetail?.map((prod, index) => {
                return (
                  <>
                    <tr className="cart-items text-center align-middle" key={index}>
                      <td className="col-1 product-id">{item?.id}</td>
                      <td className="col-1 product-img">
                        <img
                          src={prod?.image}
                          alt="..."
                          className="w-100"
                        />
                      </td>
                      <td className="col-2 product-name">{prod?.name}</td>
                      <td className="col-1 product-price">{prod?.price}</td>
                      <td className="col-2 product-volume">
                        <button className="btn mx-2 quantity rounded-0">
                          {prod?.quantity}
                        </button>
                      </td>
                      <td className="col-1 product-total">{prod?.quantity * prod?.price}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <>
      <div className="container register">
        <h3 className="bg-dark text-white col-6">PROFILE</h3>
        <div className="row my-5 register-form">
          <div className="col-4">
            <img src="https://i.pravatar.cc/300" alt="avatar" />
          </div>
          <div className="col-4">
            <div className="form-group mb-3">
              <label className="user-label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="user-input my-2"
                placeholder="Email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text text-danger valid-notice">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mb-3">
              <label className="user-label" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="user-input my-2"
                placeholder="Phone"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.phone ? (
                <p className="text text-danger valid-notice">
                  {formik.errors.phone}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-4">
            <div className="form-group mb-3">
              <div className="form-group mb-3">
                <label className="user-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="user-input my-2"
                  placeholder="Name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.name ? (
                  <p className="text text-danger valid-notice">
                    {formik.errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <label className="user-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="user-input my-2"
                placeholder="Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <p className="text text-danger valid-notice">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mb-3">
              <div className="gender-title my-2">Gender</div>

              <label className="gender-label me-2" htmlFor="">
                Male
                <input
                  className="gender-input me-1"
                  name="gender"
                  defaultChecked
                  type="radio"
                  value={true}
                />
                <span className="checkmark"></span>
              </label>

              <label className="gender-label" htmlFor="">
                Female
                <input
                  className="gender-input me-1"
                  name="gender"
                  type="radio"
                  value={false}
                />
                <span className="checkmark"></span>
              </label>

              <div className="form-group">
                <button type="submit" className="submit-btn mt-2">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-6 row">
          <div className="col-5 bg-dark text-white mx-1">
            <h3>Order History</h3>
          </div>
          <div className="col-5 bg-dark text-white mx-1">
            <h3>Favourite</h3>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="cart-body mx-5">
          <div class="table-responsive cart-detail">{renderCart()}</div>
        </div>
      </div>
    </>
  );
}
