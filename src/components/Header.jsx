import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <header className="flex justify-center font-light bg-eton-blue py-2">
        <p>Free shipping over $100 & Free Returns</p>
      </header>
      <header className="grid grid-cols-3 gap-x-20 bg-dark-slate-gray py-3">
        <nav className="flex justify-around items-center">
          <NavLink
            className="font-Poppins text-base text-tea-green font-extralight"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-Poppins text-base text-tea-green font-extralight"
            to="/store"
          >
            Our Store
          </NavLink>
          <NavLink
            className="font-Poppins text-base text-tea-green font-extralight"
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className="font-Poppins text-base text-tea-green font-extralight"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex justify-center">
          <h3 className="font-Poiret text-2xl text-tea-green font-medium tracking-widest">
            INDIEWARES
          </h3>
        </div>
        <div className="flex justify-around items-center">
          <select
            className="bg-dark-slate-gray text-base text-tea-green font-light border-0"
            name="currency"
            id="currency"
          >
            <option value="CAD">Canada(CAD $)</option>
            <option value="USD">United States(US $)</option>
          </select>
          <Link className="font-Poppins text-base text-tea-green font-extralight">
            Search
          </Link>
          <Link
            className="font-Poppins text-base text-tea-green font-extralight"
            to="/login"
          >
            Login
          </Link>
          <Link className="font-Poppins text-base text-tea-green font-extralight">
            Cart
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
