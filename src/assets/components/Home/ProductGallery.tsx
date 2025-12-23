import React from "react";
import "./ProductGallery.css";
import { NewArrivalProducts } from "../../constants/Product";

function ProductGallery() {
  return (
    <div className="ProductGallery">
      {NewArrivalProducts.map((product) => (
        <div
          key={product.id}
          className={`ProductWrapper NewProduct${product.id}`}
        >
          <img src={product.src} alt={product.alt} />
        </div>
      ))}
    </div>
  );
}

export default ProductGallery;
