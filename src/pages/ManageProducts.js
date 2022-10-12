import React from "react";
import { Link } from "react-router-dom";
import BreadCrums from "../components/Common/BreadCrums";
import UserAccMenu from "../components/Common/UserAccMenu";
import WishlistProduct from "../components/ProductListing/WishlistProduct";
import ProductType4 from "../components/ProductListing/ProductType4";

export default function ManageProducts() {
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
                  <h5 className="text-black">Manage products</h5>
                  <div className="ec-header-btn">
                    <Link
                      to="/add-new"
                      className="btn btn-lg btn-primary badge-pill"
                      href="#"
                    >
                      Add new
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
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        <ProductType4 />
                        <ProductType4 />
                        <ProductType4 />
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
