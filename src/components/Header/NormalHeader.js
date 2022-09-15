import React from "react";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/img/logo.png";

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
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>Apply</li>
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
