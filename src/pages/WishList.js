import React from "react";
import { Link } from "react-router-dom";
import BreadCrums from "../components/Common/BreadCrums";
import UserAccMenu from "../components/Common/UserAccMenu";
import WishlistProduct from "../components/ProductListing/WishlistProduct";

export default function WishList() {
  return (
    <div>
      <BreadCrums from="Profile" page="Wishlist" />
      <section className="ec-page-content ec-vendor-uploads ec-user-account wishlist-2 section-space-p">
        <div className="container">
          <div className="row">
            <UserAccMenu />
            <div className="ec-shop-rightside col-lg-9 col-md-12">
              <div className="ec-vendor-dashboard-card">
                <div className="ec-vendor-card-header">
                  <h5 className="text-black">Wishlist</h5>
                  <div className="ec-header-btn">
                    <Link
                      to="/deals"
                      className="btn btn-lg btn-primary badge-pill"
                      href="#"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="ec-vendor-card-body">
                  <div className="ec-vendor-card-table">
                    <table className="table ec-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        <WishlistProduct />
                        <WishlistProduct />
                        <WishlistProduct />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
