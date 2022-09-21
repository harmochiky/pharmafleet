import React from "react";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export default function NormalHeader() {
  return (
    <div className="px-5 py-2 pt-4 normal-header">
      <div className="left-section">
        <div>
          <img src={Logo} className="logo-container" />
        </div>
        <div>
          <div className="search-container">
            <input placeholder="Search PharmaFleet..." className="search-bar" />
            <button>
              <BiSearch />
            </button>
          </div>
          <div>
            <ul className="header-under-search-links secondary-text">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/apply">Apply to order</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="sign-in-text">SIGN IN / SIGN UP</div>
        <div className="summary-section">
          <div className="sum-item">
            <IoHeartOutline className="icon" />
          </div>
          <div className="sum-item">
            <IoBagOutline className="mr-1 icon" />
            <div className="cart-counter">R0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
