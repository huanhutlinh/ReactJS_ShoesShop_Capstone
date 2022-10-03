import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { values } from "lodash";
import { useDispatch } from "react-redux";
import { signInAPI } from "../../redux/Reducers/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginFacebook from "../../components/LoginFacebook/LoginFacebook";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required!")
        .email("Invalid email!"),
      password: Yup.string()
        .required("Password is required!")
        .min(1, "Password must have at least 8 characters"),
    }),
    onSubmit: (values) => {
      const action = signInAPI(values);
      dispatch(action);
    },
  });
  return (
    <form className="container register py-5" onSubmit={formik.handleSubmit}>
      <h1 className="mb-4">Login</h1>
      <hr />

      <div className="row register-form justify-content-center">
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
          <NavLink to="/register">Register Now?</NavLink>
          <div className="form-group">
            <button type="submit" className="submit-btn mt-2">
              Login
            </button>
          </div>
          <div className="mt-2">
            <LoginFacebook />
          </div>
        </div>
      </div>
    </form>
  );
}
