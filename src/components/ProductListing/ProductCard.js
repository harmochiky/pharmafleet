import React from "react";
import QuickView from "../../assets/images/icons/quickview.svg";
import Compare from "../../assets/images/icons/compare.svg";
import Cart from "../../assets/images/icons/cart.svg";
import Wishlist from "../../assets/images/icons/wishlist.svg";
import { Link } from "react-router-dom";

// import Img from "../../assets/images/product-image/7_1.jpg";

const Img =
  "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg";

export default function ProductCard({ className }) {
  return (
    <div
      className={
        "col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content " + className
      }
    >
      <div className="ec-product-inner">
        <div className="ec-pro-image-outer">
          <div className="ec-pro-image">
            <a href="product-left-sidebar.html" className="image">
              <img className="main-image" src={Img} alt="Product" />
              <img className="hover-image" src={Img} alt="Product" />
            </a>
            <span className="percentage">20%</span>
            <span className="flags">
              <span className="new">New</span>
            </span>
            <a
              href="#"
              className="quickview"
              data-link-action="quickview"
              title="Quick view"
              data-bs-toggle="modal"
              data-bs-target="#ec_quickview_modal"
            >
              <img src={QuickView} className="svg_img pro_svg" alt="" />
            </a>
            <div className="ec-pro-actions">
              <a
                href="compare.html"
                className="ec-btn-group compare"
                title="Compare"
              >
                <img src={Compare} className="svg_img pro_svg" alt="" />
              </a>
              <button title="Add To Cart" className=" add-to-cart">
                <img src={Cart} className="svg_img pro_svg" alt="" /> Add To
                Cart
              </button>
              <a className="ec-btn-group wishlist" title="Wishlist">
                <img src={Wishlist} className="svg_img pro_svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="ec-pro-content">
          <h5 className="ec-pro-title">
            <Link to="/p/32/usn-hyperbolic">USN Hyperbolic</Link>
          </h5>
          <div className="ec-pro-rating">
            <i className="ecicon eci-star fill" />
            <i className="ecicon eci-star fill" />
            <i className="ecicon eci-star fill" />
            <i className="ecicon eci-star fill" />
            <i className="ecicon eci-star" />
          </div>
          <div className="ec-pro-list-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dutmmy text ever since the 1500s,
            when an unknown printer took a galley.
          </div>
          <span className="ec-price">
            <span className="old-price">R100.00</span>
            <span className="new-price">R80.00</span>
          </span>
        </div>
      </div>
    </div>
  );
}
