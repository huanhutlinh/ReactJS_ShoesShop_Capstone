import React from "react";
import logo from "../../assets/img/logo_1.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  const navLinks = [
    {
      title: 'Home',
      path:'/'
    },
    {
      title: 'Man',
      path:'/'
    },
    {
      title: 'Woman',
      path:'/'
    },
    {
      title: 'Kid',
      path:'/'
    },
    {
      title: 'Sport',
      path:'/'
    },
  ]

  return (
    <header>
      <div className="top_header py-2">
          <div className="container">
            <div className="wrapper d-flex align-items-center justify-center justify-content-between">
              <div className="logo">
                <Link>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="user-login d-flex align-items-center justify-center gap-3">
                <Link className="d-flex align-items-center justify-center">
                  <i className="fa fa-home"></i>
                  <p>Search</p>
                </Link>
                <Link className="d-flex align-items-center justify-center">
                  <i className="fa fa-home"></i>
                  <p>Search</p>
                </Link>
                <Link>
                  Login
                </Link>
                <Link>
                  Register
                </Link>
              </div>
            </div>
          </div>
      </div>
      <div className="navigation">
      <div className="container">
        <div className="nav_wrap d-flex align-items-center justify-center gap-3">
          {
            navLinks.map((item,index)=>{
              return <NavLink key={index} to={item.path}>
                {item.title}
              </NavLink>
            })
          }
        </div>
      </div>
      </div>
    </header>
  );
}
