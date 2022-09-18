import React from "react";
import ProductImg from "../../assets/img/product-sample-300x300.jpg";

export default function ProductCard2() {
  return (
    <div className="col-6 pb-3 pr-3">
      <div className="product-card-2-container p-3">
        <div>
          <img className="product-image" src={ProductImg} alt="" />
        </div>
        <div>
          <div className="product-category">Devices, Heart treatments</div>
          <div className="product-name">Zahler Real Calm Multivitamin</div>
          <div className="product-price">R104.00</div>
        </div>
      </div>
    </div>
  );
}
