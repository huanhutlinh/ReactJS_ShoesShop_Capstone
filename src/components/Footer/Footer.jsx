import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top_footer">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 card_custom">
              <div className="card_item_1 ms-5">
                <h5 className="fs-5 fw-bold">GET HELP</h5>
                <ul className="list">
                  <li className="list_items">
                    <NavLink to="">Home</NavLink>
                  </li>
                  <li className="list_items">Nike</li>
                  <li className="list_items">Adidas</li>
                  <li className="list_items">Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card_custom">
              <div className="card_item_2 ms-5">
                <h5 className="fs-5 fw-bold">SUPPORT</h5>
                <ul className="list">
                  <li className="list_items">About</li>
                  <li className="list_items">Contact</li>
                  <li className="list_items">Help</li>
                  <li className="list_items">Phone</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card_custom">
              <div className="card_item_3 ms-5">
                <h5 className="fs-5 fw-bold">REGISTER</h5>
                <ul className="list">
                  <li>
                    <NavLink className="list_items" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="list_items" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer d-flex justify-content-center align-items-center">
          <p >© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</p>
        </div>
      </div>
    </footer>
  );
}
