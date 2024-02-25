import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-4 bg-eton-blue py-12">
        <div className="flex justify-center items-center">
          <h3 className="font-Poiret text-2xl text-dark-slate-gray font-semibold tracking-widest">
            INDIEWARES
          </h3>
        </div>
        <div className="flex flex-col">
          <Link className="font-light py-1">Shop</Link>
          <Link className="font-light py-1">Blogs</Link>
          <Link className="font-light py-1">About Us</Link>
          <Link className="font-light py-1">Contact Us</Link>
        </div>
        <div className="flex flex-col">
          <Link className="font-light py-1" to="/">
            Store Policy
          </Link>
          <Link className="font-light py-1">Payment Methods</Link>
          <Link className="font-light py-1">FAQ</Link>
        </div>
        <div className="flex flex-col">
          <Link className="font-light py-1">Facebook</Link>
          <Link className="font-light py-1">Instagram</Link>
        </div>
      </footer>
      <footer className="flex justify-center py-2">
        <p className="">
          {" "}
          &copy; {new Date().getFullYear()} Powered and secured by IndieWares
        </p>
      </footer>
    </>
  );
};

export default Footer;
