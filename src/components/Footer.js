import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-top pt-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 newsletter">
              <div className="newsletter-title">
                <img src="images/newsletter.png" alt="newsletter" />
                <span>Sign Up for Newsletter</span>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <Link>Subscribe</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 footer-links">
              <Link to="/">Shop</Link>
              <Link to="/store">About Us</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom">
        <div className="contianer-xxl">
          <div className="row">
            <div className="col-6 social_icons">
              <Link to="">
                <BsInstagram />
              </Link>
              <Link to="">
                <BsFacebook />
              </Link>
            </div>
            <div className="col-6 copyright">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy; {new Date().getFullYear()} Powered by IndieWares
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
