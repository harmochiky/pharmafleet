import React from "react";
import { Link } from "react-router-dom";

export default function UserAccMenu() {
  return (
    <div className="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
      <div className="ec-sidebar-wrap">
        {/* Sidebar Category Block */}
        <div className="ec-sidebar-block">
          <div className="ec-vendor-block">
            <div className="ec-vendor-block-items">
              <ul>
                <li>
                  <Link to="/profile" className="text-black">
                    User Profile
                  </Link>
                </li>
                <li>
                  <a href="user-history.html">My Addresses</a>
                </li>
                <li>
                  <a href="user-history.html">History</a>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="track-order.html">Track Order</a>
                </li>
                <li>
                  <a href="user-invoice.html">Invoice</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
