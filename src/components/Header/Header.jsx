import React from "react";
import logo from "../../assets/img/logo_1.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getStore, getStoreJSON, USER_LOGIN } from "../../util/config";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.userReducer.userLogin);
  const {quantityProduct} = useSelector((state) => state.productReducer)
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Man",
      path: "/",
    },
    {
      title: "Woman",
      path: "/",
    },
    {
      title: "Kid",
      path: "/",
    },
    {
      title: "Sport",
      path: "/",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="">
            <img src={logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler text-white"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
          >
            <i className="fas fa-bars menu__bar"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/search"
                >
                  <i className="fas fa-search mr-2"></i>
                  <p className="my-1">Search</p>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/carts"
                >
                  <i className="fas fa-cart-plus mr-2"></i>
                  <p className="my-1">({quantityProduct})</p>
                </NavLink>
              </li>
              <li class="nav-item">
                {/* <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/login"
                >
                  <p className="my-1">Login</p>
                </NavLink> */}
                {user ? (
                  <NavLink
                    className="nav-link d-flex align-items-center my-1"
                    to={"/profile"}
                  >
                    Hello, {user.email}!
                  </NavLink>
                ) : (
                  <NavLink
                    className="nav-link d-flex align-items-center my-1"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                )}
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/register"
                >
                  <p className="my-1">Register</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="navigation mb-3">
        <div className="container">
          <div className="nav_wrap d-flex align-items-center justify-center gap-3">
            {navLinks.map((item, index) => {
              return (
                <NavLink key={index} to={item.path}>
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
