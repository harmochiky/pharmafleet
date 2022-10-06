import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import NormalHeader from "./NormalHeader";
import Logo from "../../assets/img/logo.png";
import User from "../../assets/img/icons/user.svg";
import Search from "../../assets/img/icons/search.svg";
import Wishlist from "../../assets/img/icons/wishlist.svg";
import Cart from "../../assets/img/icons/cart.svg";
import ScrollIcon from "../../assets/img/icons/scroll.svg";
import MenuIcon from "../../assets/img/icons/menu.svg";
import CategoryIcon from "../../assets/img/icons/category_icon.svg";

import { Link } from "react-router-dom";

export default function index() {
  return (
    <header className="ec-header">
      {/*Ec Header Top Start */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            {/* Header Top social Start */}
            <div className="col text-left header-top-left d-none d-lg-block">
              <div className="header-top-social">
                <span className="social-text text-upper">Follow us on:</span>
                <ul className="mb-0">
                  <li className="list-inline-item">
                    <a className="hdr-facebook" href="#">
                      <i className="ecicon eci-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-twitter" href="#">
                      <i className="ecicon eci-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-instagram" href="#">
                      <i className="ecicon eci-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-linkedin" href="#">
                      <i className="ecicon eci-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Header Top social End */}
            {/* Header Top Message Start */}
            <div className="col text-center header-top-center">
              <div className="header-top-message text-upper">
                <span>Free Shipping</span>This Week Order Over - R1 000
              </div>
            </div>
            {/* Header Top Message End */}
            {/* Header Top Language Currency */}
            <div className="col header-top-right d-none d-lg-block">
              <div className="header-top-lan-curr d-flex justify-content-end">
                {/* Currency Start */}
                <div className="header-top-curr dropdown">
                  <button
                    className="dropdown-toggle text-upper"
                    data-bs-toggle="dropdown"
                  >
                    Currency{" "}
                    <i className="ecicon eci-caret-down" aria-hidden="true" />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="active">
                      <a className="dropdown-item" href="#">
                        USD $
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        EUR €
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Currency End */}
                {/* Language Start */}
                <div className="header-top-lan dropdown">
                  <button
                    className="dropdown-toggle text-upper"
                    data-bs-toggle="dropdown"
                  >
                    Language{" "}
                    <i className="ecicon eci-caret-down" aria-hidden="true" />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="active">
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Italiano
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Language End */}
              </div>
            </div>
            {/* Header Top Language Currency */}
            {/* Header Top responsive Action */}
            <div className="col d-lg-none ">
              <div className="ec-header-bottons">
                {/* Header User Start */}
                <div className="ec-header-user dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    <img src={User} className="svg_img header_svg" alt="" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a className="dropdown-item" href="register.html">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="checkout.html">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Header User End */}
                {/* Header Cart Start */}
                <a
                  href="wishlist.html"
                  className="ec-header-btn ec-header-wishlist"
                >
                  <div className="header-icon">
                    <img src={Wishlist} className="svg_img header_svg" alt="" />
                  </div>
                  <span className="ec-header-count">4</span>
                </a>
                {/* Header Cart End */}
                {/* Header Cart Start */}
                <a
                  href="#ec-side-cart"
                  className="ec-header-btn ec-side-toggle"
                >
                  <div className="header-icon">
                    <img src={Cart} className="svg_img header_svg" alt="" />
                  </div>
                  <span className="ec-header-count cart-count-lable">3</span>
                </a>
                {/* Header Cart End */}
                <a href="" className="ec-header-btn ec-sidebar-toggle">
                  <img
                    src={CategoryIcon}
                    className="svg_img header_svg"
                    alt="icon"
                  />
                </a>
                {/* Header menu Start */}
                <a
                  href="#ec-mobile-menu"
                  className="ec-header-btn ec-side-toggle d-lg-none"
                >
                  <img
                    src={MenuIcon}
                    className="svg_img header_svg"
                    alt="icon"
                  />
                </a>
                {/* Header menu End */}
              </div>
            </div>
            {/* Header Top responsive Action */}
          </div>
        </div>
      </div>
      {/* Ec Header Top  End */}
      {/* Ec Header Bottom  Start */}
      <div className="ec-header-bottom d-none d-lg-block">
        <div className="container position-relative">
          <div className="row">
            <div className="ec-flex">
              {/* Ec Header Logo Start */}
              <div className="align-self-center">
                <div className="header-logo">
                  <a href="index.html">
                    <img src={Logo} alt="Site Logo" />
                    <img
                      className="dark-logo"
                      src={Logo}
                      alt="Site Logo"
                      style={{ display: "none" }}
                    />
                  </a>
                </div>
              </div>
              {/* Ec Header Logo End */}
              {/* Ec Header Search Start */}
              <div className="align-self-center">
                <div className="header-search">
                  <form className="ec-btn-group-form" action="#">
                    <input
                      className="form-control ec-search-bar"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button className="submit" type="submit">
                      <img src={Search} className="svg_img header_svg" alt="" />
                    </button>
                  </form>
                </div>
              </div>
              {/* Ec Header Search End */}
              {/* Ec Header Button Start */}
              <div className="align-self-center">
                <div className="ec-header-bottons">
                  {/* Header User Start */}
                  <Link to="/user" className="ec-header-btn ec-header-user">
                    <div className="header-icon">
                      <img src={User} className="svg_img header_svg" alt="" />
                    </div>
                    <div className="ec-btn-desc">
                      <span className="ec-btn-title">Account</span>
                      <span className="ec-btn-stitle">Login</span>
                    </div>
                  </Link>
                  {/* Header User End */}
                  {/* Header wishlist Start */}
                  <a href="#" className="ec-header-btn ec-header-wishlist">
                    <div className="header-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -28 512.001 512"
                        src="assets/images/icons/wishlist.svg"
                        className="svg_img header_svg"
                        alt=""
                      >
                        <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
                      </svg>
                    </div>
                    <div className="ec-btn-desc">
                      <span className="ec-btn-title">Wishlist</span>
                      <span className="ec-btn-stitle">
                        <b className="ec-wishlist-count">0</b>-items
                      </span>
                    </div>
                  </a>
                  {/* Header wishlist End */}
                  {/* Header Cart Start */}
                  <a
                    href="#ec-side-cart"
                    className="ec-header-btn ec-side-toggle"
                  >
                    <div className="header-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="512pt"
                        viewBox="-35 0 512 512.00102"
                        width="512pt"
                        src="assets/images/icons/cart.svg"
                        className="svg_img header_svg"
                        alt=""
                      >
                        <path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0" />
                      </svg>
                    </div>
                    <div className="ec-btn-desc">
                      <span className="ec-btn-title">Cart</span>
                      <span className="ec-btn-stitle">
                        <b className="ec-cart-count">3</b>-items
                      </span>
                    </div>
                  </a>
                  {/* Header Cart End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ec Header Button End */}
      {/* Header responsive Bottom  Start */}
      <div className="ec-header-bottom d-lg-none">
        <div className="container position-relative">
          <div className="row ">
            {/* Ec Header Logo Start */}
            <div className="col">
              <div className="header-logo">
                <a href="index.html">
                  <img src={Logo} alt="Site Logo" />
                  <img
                    className="dark-logo"
                    src="assets/images/logo/dark-logo.png"
                    alt="Site Logo"
                    style={{ display: "none" }}
                  />
                </a>
              </div>
            </div>
            {/* Ec Header Logo End */}
            {/* Ec Header Search Start */}
            <div className="col">
              <div className="header-search">
                <form className="ec-btn-group-form" action="#">
                  <input
                    className="form-control ec-search-bar"
                    placeholder="Search products..."
                    type="text"
                  />
                  <button className="submit" type="submit">
                    <img
                      src={Search}
                      className="svg_img header_svg"
                      alt="icon"
                    />
                  </button>
                </form>
              </div>
            </div>
            {/* Ec Header Search End */}
          </div>
        </div>
      </div>
      {/* Header responsive Bottom  End */}
      {/* EC Main Menu Start */}
      <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <div className="ec-main-menu">
                <a
                  href="javascript:void(0)"
                  className="ec-header-btn ec-sidebar-toggle"
                >
                  <button className="btn btn-menu-pr-btn">Start order</button>
                </a>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)">Categories</a>
                    <ul className="sub-menu">
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product page
                          <i className="ecicon eci-angle-right" />
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-left-sidebar.html">
                              Product left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-right-sidebar.html">
                              Product right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product 360
                          <i className="ecicon eci-angle-right" />
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-360-left-sidebar.html">
                              360 left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-360-right-sidebar.html">
                              360 right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product video
                          <i className="ecicon eci-angle-right" />
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-video-left-sidebar.html">
                              Video left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-video-right-sidebar.html">
                              Video right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product gallery
                          <i className="ecicon eci-angle-right" />
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-gallery-left-sidebar.html">
                              Gallery left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-gallery-right-sidebar.html">
                              Gallery right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="product-full-width.html">Product full width</a>
                      </li>
                      <li>
                        <a href="product-360-full-width.html">360 full width</a>
                      </li>
                      <li>
                        <a href="product-video-full-width.html">
                          Video full width
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery-full-width.html">
                          Gallery full width
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="offer.html">See products</a>
                  </li>
                  <li>
                    <Link to="/apply">Apply</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                  <li className="dropdown scroll-to">
                    <a href="javascript:void(0)">
                      <img
                        src={ScrollIcon}
                        className="svg_img header_svg scroll"
                        alt=""
                      />
                    </a>
                    <ul className="sub-menu">
                      <li className="menu_title">Scroll To Section</li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-scroll="collection"
                          className="nav-scroll"
                        >
                          Top Collection
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-scroll="arrivals"
                          className="nav-scroll"
                        >
                          New Arrivals
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ec Main Menu End */}
      {/* ekka Mobile Menu Start */}
      <div id="ec-mobile-menu" className="ec-side-cart ec-mobile-menu">
        <div className="ec-menu-title">
          <span className="menu_title">My Menu</span>
          <button className="ec-close">×</button>
        </div>
        <div className="ec-menu-inner">
          <div className="ec-menu-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="javascript:void(0)">Categories</a>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:void(0)">Classic Variation</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-left-sidebar-col-3.html">
                          Left sidebar 3 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar-col-4.html">
                          Left sidebar 4 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-right-sidebar-col-3.html">
                          Right sidebar 3 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-right-sidebar-col-4.html">
                          Right sidebar 4 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-full-width.html">Full width 4 column</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Classic Variation</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-banner-left-sidebar-col-3.html">
                          Banner left sidebar 3 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-left-sidebar-col-4.html">
                          Banner left sidebar 4 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-right-sidebar-col-3.html">
                          Banner right sidebar 3 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-right-sidebar-col-4.html">
                          Banner right sidebar 4 column
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-full-width.html">
                          Banner Full width 4 column
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Columns Variation</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-full-width-col-3.html">
                          3 Columns full width
                        </a>
                      </li>
                      <li>
                        <a href="shop-full-width-col-4.html">
                          4 Columns full width
                        </a>
                      </li>
                      <li>
                        <a href="shop-full-width-col-5.html">
                          5 Columns full width
                        </a>
                      </li>
                      <li>
                        <a href="shop-full-width-col-6.html">
                          6 Columns full width
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-full-width-col-3.html">
                          Banner 3 Columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">List Variation</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-list-left-sidebar.html">
                          Shop left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-right-sidebar.html">
                          Shop right sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-banner-left-sidebar.html">
                          Banner left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-banner-right-sidebar.html">
                          Banner right sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-full-col-2.html">
                          Full width 2 columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="p-0" href="shop-left-sidebar-col-3.html">
                      <img
                        className="img-responsive"
                        src="assets/images/menu-banner/1.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Products</a>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:void(0)">Product page</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="product-left-sidebar.html">
                          Product left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-right-sidebar.html">
                          Product right sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Product 360</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="product-360-left-sidebar.html">
                          360 left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-360-right-sidebar.html">
                          360 right sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Product vodeo</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="product-video-left-sidebar.html">
                          vodeo left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-video-right-sidebar.html">
                          vodeo right sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Product gallery</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="product-gallery-left-sidebar.html">
                          Gallery left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery-right-sidebar.html">
                          Gallery right sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product-full-width.html">Product full width</a>
                  </li>
                  <li>
                    <a href="product-360-full-width.html">360 full width</a>
                  </li>
                  <li>
                    <a href="product-video-full-width.html">Video full width</a>
                  </li>
                  <li>
                    <a href="product-gallery-full-width.html">
                      Gallery full width
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Others</a>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:void(0)">Mail Confirmation</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="email-template-confirm-1.html">
                          Mail Confirmation 1
                        </a>
                      </li>
                      <li>
                        <a href="email-template-confirm-2.html">
                          Mail Confirmation 2
                        </a>
                      </li>
                      <li>
                        <a href="email-template-confirm-3.html">
                          Mail Confirmation 3
                        </a>
                      </li>
                      <li>
                        <a href="email-template-confirm-4.html">
                          Mail Confirmation 4
                        </a>
                      </li>
                      <li>
                        <a href="email-template-confirm-5.html">
                          Mail Confirmation 5
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Mail Reset password</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="email-template-forgot-password-1.html">
                          Reset password 1
                        </a>
                      </li>
                      <li>
                        <a href="email-template-forgot-password-2.html">
                          Reset password 2
                        </a>
                      </li>
                      <li>
                        <a href="email-template-forgot-password-3.html">
                          Reset password 3
                        </a>
                      </li>
                      <li>
                        <a href="email-template-forgot-password-4.html">
                          Reset password 4
                        </a>
                      </li>
                      <li>
                        <a href="email-template-forgot-password-5.html">
                          Reset password 5
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Mail Promotional</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="email-template-offers-1.html">Offer Mail 1</a>
                      </li>
                      <li>
                        <a href="email-template-offers-2.html">Offer Mail 2</a>
                      </li>
                      <li>
                        <a href="email-template-offers-3.html">Offer Mail 3</a>
                      </li>
                      <li>
                        <a href="email-template-offers-4.html">Offer Mail 4</a>
                      </li>
                      <li>
                        <a href="email-template-offers-5.html">Offer Mail 5</a>
                      </li>
                      <li>
                        <a href="email-template-offers-6.html">Offer Mail 6</a>
                      </li>
                      <li>
                        <a href="email-template-offers-7.html">Offer Mail 7</a>
                      </li>
                      <li>
                        <a href="email-template-offers-8.html">Offer Mail 8</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Vendor Account Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="vendor-dashboard.html">Vendor Dashboard</a>
                      </li>
                      <li>
                        <a href="vendor-profile.html">Vendor Profile</a>
                      </li>
                      <li>
                        <a href="vendor-uploads.html">Vendor Uploads</a>
                      </li>
                      <li>
                        <a href="vendor-settings.html">Vendor Settings</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">User Account Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="user-profile.html">User Profile</a>
                      </li>
                      <li>
                        <a href="user-history.html">User History</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="track-order.html">Track Order</a>
                      </li>
                      <li>
                        <a href="user-invoice.html">User Invoice</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Construction Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="404-error-page.html">404 Error Page</a>
                      </li>
                      <li>
                        <a href="under-maintenance.html">Maintenance Page</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Comming Soon Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Vendor Catalog Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="catalog-single-vendor.html">
                          Catalog Single Vendor
                        </a>
                      </li>
                      <li>
                        <a href="catalog-multi-vendor.html">
                          Catalog Multi Vendor
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="compare.html">Compare</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="track-order.html">Track Order</a>
                  </li>
                  <li>
                    <a href="terms-condition.html">Terms Condition</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-left-sidebar.html">Blog left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">Blog right sidebar</a>
                  </li>
                  <li>
                    <a href="blog-detail-left-sidebar.html">
                      Blog detail left sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail-right-sidebar.html">
                      Blog detail right sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-full-width.html">Blog full width</a>
                  </li>
                  <li>
                    <a href="blog-detail-full-width.html">
                      Blog detail full width
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)">Elements</a>
                <ul className="sub-menu">
                  <li>
                    <a href="elemets-products.html">Products</a>
                  </li>
                  <li>
                    <a href="elemets-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elemets-title.html">Titles</a>
                  </li>
                  <li>
                    <a href="elemets-categories.html">Categories</a>
                  </li>
                  <li>
                    <a href="elemets-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elemets-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elemets-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elemets-blog.html">Blogs</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="offer.html">Hot Offers</a>
              </li>
            </ul>
          </div>
          <div className="header-res-lan-curr">
            <div className="header-top-lan-curr">
              {/* Language Start */}
              <div className="header-top-lan dropdown">
                <button
                  className="dropdown-toggle text-upper"
                  data-bs-toggle="dropdown"
                >
                  Language{" "}
                  <i className="ecicon eci-caret-down" aria-hidden="true" />
                </button>
                <ul className="dropdown-menu">
                  <li className="active">
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Italiano
                    </a>
                  </li>
                </ul>
              </div>
              {/* Language End */}
              {/* Currency Start */}
              <div className="header-top-curr dropdown">
                <button
                  className="dropdown-toggle text-upper"
                  data-bs-toggle="dropdown"
                >
                  Currency{" "}
                  <i className="ecicon eci-caret-down" aria-hidden="true" />
                </button>
                <ul className="dropdown-menu">
                  <li className="active">
                    <a className="dropdown-item" href="#">
                      USD $
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      EUR €
                    </a>
                  </li>
                </ul>
              </div>
              {/* Currency End */}
            </div>
            {/* Social Start */}
            <div className="header-res-social">
              <div className="header-top-social">
                <ul className="mb-0">
                  <li className="list-inline-item">
                    <a className="hdr-facebook" href="#">
                      <i className="ecicon eci-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-twitter" href="#">
                      <i className="ecicon eci-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-instagram" href="#">
                      <i className="ecicon eci-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-linkedin" href="#">
                      <i className="ecicon eci-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Social End */}
          </div>
        </div>
      </div>
      {/* ekka mobile Menu End */}
    </header>
  );
}
