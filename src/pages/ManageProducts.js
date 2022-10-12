import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrums from "../components/Common/BreadCrums";
import UserAccMenu from "../components/Common/UserAccMenu";
import WishlistProduct from "../components/ProductListing/WishlistProduct";
import ProductType4 from "../components/ProductListing/ProductType4";
import axios from "axios";

export default function ManageProducts() {
  const [loading, set_loading] = useState(true);
  const [products, set_products] = useState([]);

  useEffect(() => {
    get_products();
  }, []);

  const get_products = () => {
    axios
      .get("/get/all_products")
      .then((data) => {
        set_products(data.data);
        set_loading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BreadCrums from="Profile" page="Manage products" />
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
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
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
                          {products.map((x, index) => (
                            <ProductType4 index={index} x={x} key={x.id} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
