import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2 px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-right text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel: +1 437-553-1005">
                  +1 437-553-1005
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom my-0 py-2 px-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5 menu-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/store">Our Store</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="col-2 menu-logo">
              <h3 className="text-white mb-0">INDIEWARES</h3>
            </div>
            <div className="col-5 header-links">
              <Link to="/login">
                <p className="mb-0">LOGIN</p>
              </Link>
              <Link>
                <p className="mb-0">CART</p>
                <div className="d-flex felx-column gap-10">
                  <span className="badge bg-white text-dark">0</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
