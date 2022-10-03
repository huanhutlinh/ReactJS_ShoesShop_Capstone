import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function Profile() {
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
        alert("Đăng Ký Tài Khoản Thành Công!");
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });

  const renderCart = () => {
    return (
      <>
        <tr className="cart-items text-center align-middle">
          <td className="col-1 product-id">1</td>
          <td className="col-1 product-img">
            <img src="./images/image_5.png" alt="..." className="w-100" />
          </td>
          <td className="col-2 product-name">Product name 1</td>
          <td className="col-1 product-price">1000</td>
          <td className="col-2 product-volume">
            <button className="btn mx-2 quantity rounded-0">1</button>
          </td>
          <td className="col-1 product-total">100</td>
        </tr>
      </>
    );
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
          <div class="table-responsive cart-detail">
            <h5 className="text-success">
              + Orders have been placed on 09 - 19 - 2020
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
              <tbody className="cart-item-body">{renderCart()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
