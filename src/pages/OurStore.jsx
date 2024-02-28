import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OurStore;
