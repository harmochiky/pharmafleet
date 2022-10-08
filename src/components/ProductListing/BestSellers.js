import React from "react";

const Img =
  "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg";

export default function BestSellers() {
  return (
    <div className="ec-pp-sidebar-side mt-3">
      <div className="ec-sb-slider-title">Best Sellers</div>
      <div className="ec-sb-pro-sl">
        <div>
          <div className="ec-sb-pro-sl-item">
            <a href="product-left-sidebar.html" className="sidekka_pro_img">
              <img src={Img} alt="product" className="img-fluid" />
            </a>
            <div className="ec-pro-content">
              <h5 className="ec-pro-title">
                <a href="product-left-sidebar.html">Beautiful Teddy Bear</a>
              </h5>
              <div className="ec-pro-rating">
                <i className="ecicon eci-star fill" />
                <i className="ecicon eci-star fill" />
                <i className="ecicon eci-star fill" />
                <i className="ecicon eci-star fill" />
                <i className="ecicon eci-star" />
              </div>
              <span className="ec-price">
                <span className="old-price">$100.00</span>
                <span className="new-price">$80.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
