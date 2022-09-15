import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import NormalHeader from "./NormalHeader";

export default function index() {
  return (
    <header>
      <div className="top-container px-5">
        <div>Free Shipping for orders over R2000</div>
        <div className="t-header-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <NormalHeader />
    </header>
  );
}
