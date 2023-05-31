import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer-newsletter py-3 px-3">
        <div className="container-xxl">
          <div className="row align-items-center mb-0">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-itmes-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email address"
                  aria-label="Your Email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className="text-white mb-2">Contact Us</h5>
              <div className="text-white">
                <address className="mb-1">
                  33-10 Esterbroke Avenue, North York, Ontario, Canada - M2J 2C2
                </address>
                <a
                  href="tel: +1 437-553-1005"
                  className="text-white mt-1 d-block mb-1"
                >
                  +1 437-553-1005
                </a>
                <a
                  href="mailto:ajitdhdhariaaa@gmail.com"
                  className="text-white mt-1 d-block mb-4"
                >
                  ajitdhdhariaaa@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-15">
                  <a className="text-white" href="">
                    <BsLinkedin />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-2">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1">Privacy Policy</Link>
                <Link className="text-white py-1">Refund Policy</Link>
                <Link className="text-white py-1">Shipping Policy</Link>
                <Link className="text-white py-1">Terms & Conditions</Link>
                <Link className="text-white py-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-2">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1">About Us</Link>
                <Link className="text-white py-1">FAQs</Link>
                <Link className="text-white py-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-2">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1">Laptops</Link>
                <Link className="text-white py-1">Headphones</Link>
                <Link className="text-white py-1">Tablet</Link>
                <Link className="text-white py-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 px-3">
        <div className="contianer-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy; {new Date().getFullYear()}; Powered by Indie Couture
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
