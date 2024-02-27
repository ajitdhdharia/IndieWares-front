import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <Dropdown />
        </div>
        <div className="col-span-3">Ishita Choudhary</div>
      </div>
    </>
  );
};

export default OurStore;
