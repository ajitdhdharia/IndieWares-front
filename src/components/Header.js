import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

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
      <header className="header-upper my-0 py-2 px-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-3">
              <h3 className="text-white mb-0">INDIE COUTURE</h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search items"
                  aria-label="Search items"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/compare.svg" alt="compare" />
                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </Link>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/wishlist.svg" alt="wishlist" />
                  <p className="mb-0">
                    Favorite <br /> Wishlist
                  </p>
                </Link>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/user.svg" alt="user" />
                  <p className="mb-0">
                    Log In <br /> My Account
                  </p>
                </Link>
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/cart.svg" alt="cart" />
                  <div className="d-flex felx-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom mb-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 menu-bottom d-flex align-items-center">
              <div className="dropdown pl-1">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/menu.svg" alt="menu"/>
                  <span className="me-5 d-inline-block px-2">Shop Categories</span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 menu-links d-flex align-items-center gap-30 pl-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/store">Our Store</NavLink>
              <NavLink to="/">Blogs</NavLink>
              <NavLink to="/">Contact</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
