import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ index, item }) => {
  return (
    <div key={index} className="h-full rounded overflow-hidden px-5">
      <img className="max-h-96 w-full" src={item.imageURL} alt="Girl in kurti"/>
      <div className="flex flex-col items-center">
        <h3 className="text-dark-slate-gray font-semibold text-xl my-2">{item.title}</h3>
        <span className="text-dark-slate-gray font-light">{item.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;