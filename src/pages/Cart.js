import React from "react";
import BreadCrums from "../components/Common/BreadCrums";
import CartProduct from "../components/ProductListing/CartProduct";
import ProductCardSlider from "../components/ProductListing/ProductCardSlider";

export default function Cart() {
  return (
    <div>
      <BreadCrums from="Home" page="Cart" />
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="ec-cart-leftside col-lg-8 col-md-12 ">
              {/* cart content Start */}
              <div className="ec-cart-content">
                <div className="ec-cart-inner">
                  <div className="row">
                    <form action="#">
                      <div className="table-content cart-table-content">
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th style={{ textAlign: "center" }}>Quantity</th>
                              <th>Total</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <CartProduct />
                            <CartProduct />
                          </tbody>
                        </table>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="ec-cart-update-bottom">
                            <a href="#">Continue Shopping</a>
                            <button className="btn btn-primary badge-pill rounded">
                              Check Out
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*cart content End */}
            </div>
            {/* Sidebar Area Start */}
            <div className="ec-cart-rightside col-lg-4 col-md-12">
              <div className="ec-sidebar-wrap">
                {/* Sidebar Summary Block */}
                <div className="ec-sidebar-block">
                  <div className="ec-sb-title">
                    <h3 className="ec-sidebar-title">Summary</h3>
                  </div>
                  <div className="ec-sb-block-content">
                    <h4 className="ec-ship-title">Estimate Shipping</h4>
                    <div className="ec-cart-form">
                      <p>Enter your destination to get a shipping estimate</p>
                      <form action="#" method="post">
                        <span className="ec-cart-wrap">
                          <label>Country</label>
                          <div className="">South Africa</div>
                        </span>
                        <span className="ec-cart-wrap mt-4 d-block">
                          <label>Province</label>
                          <div className="ec-cart-select-inner">
                            <select
                              name="ec_cart_state"
                              id="ec-cart-select-state"
                              className="ec-cart-select"
                            >
                              <option selected disabled>
                                Please Select a region, state
                              </option>
                              <option value={1}>Guateng</option>
                            </select>
                          </div>
                        </span>
                      </form>
                    </div>
                  </div>
                  <div className="ec-sb-block-content">
                    <div className="ec-cart-summary-bottom">
                      <div className="ec-cart-summary">
                        <div>
                          <span className="text-left">Sub-Total</span>
                          <span className="text-right">$80.00</span>
                        </div>
                        <div>
                          <span className="text-left">Delivery Charges</span>
                          <span className="text-right">$80.00</span>
                        </div>
                        <div>
                          <span className="text-left">Coupan Discount</span>
                          <span className="text-right">
                            <a className="ec-cart-coupan">Apply Coupan</a>
                          </span>
                        </div>
                        <div className="ec-cart-coupan-content">
                          <form
                            className="ec-cart-coupan-form"
                            name="ec-cart-coupan-form"
                            method="post"
                            action="#"
                          >
                            <input
                              className="ec-coupan"
                              type="text"
                              required
                              placeholder="Enter Your Coupan Code"
                              name="ec-coupan"
                              defaultValue
                            />
                            <button
                              className="ec-coupan-btn button btn-primary"
                              type="submit"
                              name="subscribe"
                              value
                            >
                              Apply
                            </button>
                          </form>
                        </div>
                        <div className="ec-cart-summary-total">
                          <span className="text-left">Total Amount</span>
                          <span className="text-right">$80.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sidebar Summary Block */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCardSlider
        className="py-4"
        headerClassName="mb-4"
        titleClassName="h4 text-primary bold"
        title="You might also like"
        desc="We picked these products for you, we thought we might also like them"
      />
    </div>
  );
}
