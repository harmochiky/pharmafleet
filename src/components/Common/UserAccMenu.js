import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.core.user,
  };
};
function UserAccMenu({ user }) {
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

                {user.account_type === "admin" && (
                  <li>
                    <Link to="/manage-products">Manage products</Link>
                  </li>
                )}
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

export default connect(mapStateToProps, null)(UserAccMenu);
