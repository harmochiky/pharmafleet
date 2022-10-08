import React from "react";
import AltPDPictures from "../Common/AltPDPictures";
import ProductBottomTab from "../Common/ProductBottomTab";
import ProductCard from "./ProductCard";
const Img =
  "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg";

export default function PLRightSection() {
  return (
    <div className="ec-pro-rightside ec-common-rightside col-lg-9 order-lg-last col-md-12 order-md-first">
      {/* Single product content Start */}
      <div className="single-pro-block">
        <div className="single-pro-inner">
          <div className="row">
            <div className="single-pro-img">
              <div className="single-product-scroll">
                <div className="single-product-cover">
                  <div className="single-slide zoom-image-hover">
                    <img className="img-responsive" src={Img} alt="" />
                  </div>
                </div>
                <AltPDPictures />
              </div>
            </div>
            <div className="single-pro-desc">
              <div className="single-pro-content">
                <h5 className="ec-single-title">USN Hyperbolic GH</h5>
                <div className="ec-single-rating-wrap">
                  <div className="ec-single-rating">
                    <i className="ecicon eci-star fill" />
                    <i className="ecicon eci-star fill" />
                    <i className="ecicon eci-star fill" />
                    <i className="ecicon eci-star fill" />
                    <i className="ecicon eci-star-o" />
                  </div>
                  <span className="ec-read-review">
                    <a href="#ec-spt-nav-review">
                      Be the first to review this product
                    </a>
                  </span>
                </div>
                <div className="ec-single-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1990
                </div>
                <div className="ec-single-sales">
                  <div className="ec-single-sales-inner">
                    <div className="ec-single-sales-title">
                      sales accelerators
                    </div>
                    <div className="ec-single-sales-visitor">
                      real time <span>240</span> left right now
                    </div>
                    <div className="ec-single-sales-progress">
                      <span className="ec-single-progress-desc">
                        Hurry up! left 29 in stock
                      </span>
                      <span className="ec-single-progressbar" />
                    </div>
                    <div className="ec-single-sales-countdown">
                      <div className="ec-single-countdown">
                        <h5 className="mb-0">4 Hrs 3min</h5>
                      </div>
                      <div className="ec-single-count-desc">
                        Time is Running Out!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ec-single-price-stoke">
                  <div className="ec-single-price">
                    <span className="ec-single-ps-title">As low as</span>
                    <span className="new-price">$97.00</span>
                  </div>
                  <div className="ec-single-stoke">
                    <span className="ec-single-ps-title">IN STOCK</span>
                    <span className="ec-single-sku">SKU#: WH12</span>
                  </div>
                </div>
                <div className="ec-single-qty">
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="ec_qtybtn"
                      defaultValue={10}
                    />
                  </div>
                  <div className="ec-single-cart ">
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                  <div className="ec-single-wishlist">
                    <a className="ec-btn-group wishlist" title="Wishlist">
                      <img
                        src="assets/images/icons/wishlist.svg"
                        className="svg_img pro_svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="ec-single-social">
                  <ul className="mb-0">
                    <li className="list-inline-item facebook">
                      <a href="#">
                        <i className="ecicon eci-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item twitter">
                      <a href="#">
                        <i className="ecicon eci-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item instagram">
                      <a href="#">
                        <i className="ecicon eci-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item youtube-play">
                      <a href="#">
                        <i className="ecicon eci-youtube-play" />
                      </a>
                    </li>
                    <li className="list-inline-item whatsapp">
                      <a href="#">
                        <i className="ecicon eci-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Single product content End */}
      {/* Single product tab start */}
      <ProductBottomTab />
      {/* product details description area end */}
    </div>
  );
}
