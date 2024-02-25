import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3 product-card">
      <Link to="" className="card">
        <img
          src="images/products/product-0.png"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            $44.50 CAD
          </p>
        </div>
      </Link>
      <Link to="" className="add-cart-btn">
        <button type="button" className="btn btn-outline-primary">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
