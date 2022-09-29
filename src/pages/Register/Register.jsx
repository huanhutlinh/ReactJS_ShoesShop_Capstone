import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { values } from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
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
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });
  return (
    <form className="container register py-5" onSubmit={formik.handleSubmit}>
      <h1 className="mb-4">Register</h1>
      <hr />
      <div className="row register-form">
        <div className="col-6">
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
            <label className="user-label" htmlFor="confirmPassw">
              Password Confirm
            </label>
            <input
              type="password"
              id="confirmPassw"
              className="user-input my-2"
              placeholder="Password Confirm"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassw ? (
              <p className="text text-danger valid-notice">
                {formik.errors.confirmPassw}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-6">
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
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
