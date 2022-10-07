import React from "react";
import BreadCrums from "../components/Common/BreadCrums";
import DepCategories from "../components/Common/DepCategories";
import DepHeader from "../components/Header/DepHeader";

import Grid from "../assets/images/icons/grid.svg";
import List from "../assets/images/icons/list.svg";

import ProductCard from "../components/ProductListing/ProductCard";
import ProductCardSlider from "../components/ProductListing/ProductCardSlider";

export default function Deals() {
  return (
    <div className="border-top">
      <BreadCrums from="Home" page="Todays Deals" />
      <DepHeader text="" />
      <section className="ec-page-content-bnr section-space-pb">
        <div className="container">
          <div className="row">
            <div className="ec-shop-rightside col-lg-9 col-md-12 order-lg-last order-md-first margin-b-30">
              {/* Shop Top Start */}
              <div className="ec-pro-list-top d-flex">
                <div className="col-md-6 ec-grid-list">
                  <div className="ec-gl-btn">
                    <button className="btn btn-grid active">
                      <img src={Grid} className="svg_img gl_svg" alt="" />
                    </button>
                    <button className="btn btn-list">
                      <img src={List} className="svg_img gl_svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="col-md-6 ec-sort-select">
                  <span className="sort-by">Sort by</span>
                  <div className="ec-select-inner">
                    <select name="ec-select" id="ec-select">
                      <option selected disabled>
                        Position
                      </option>
                      <option value={1}>Relevance</option>
                      <option value={2}>Name, A to Z</option>
                      <option value={3}>Name, Z to A</option>
                      <option value={4}>Price, low to high</option>
                      <option value={5}>Price, high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Shop Top End */}
              {/* Shop content Start */}
              <div className="shop-pro-content">
                <div className="shop-pro-inner">
                  <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
                {/* Ec Pagination Start */}
                <div className="ec-pro-pagination">
                  <span>Showing 1-12 of 21 item(s)</span>
                  <ul className="ec-pro-pagination-inner">
                    <li>
                      <a className="active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a className="next" href="#">
                        Next <i className="ecicon eci-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Ec Pagination End */}
              </div>
              {/*Shop content End */}
            </div>
            {/* Sidebar Area Start */}
            <div className="ec-shop-leftside col-lg-3 col-md-12 order-lg-first order-md-last">
              <div id="shop_sidebar">
                <div className="ec-sidebar-heading">
                  <h1>Filter Products By</h1>
                </div>
                <div className="ec-sidebar-wrap">
                  {/* Sidebar Category Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Category</h3>
                    </div>
                    <div className="ec-sb-block-content">
                      <ul>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" defaultChecked />{" "}
                            <a href="#">clothes</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" />{" "}
                            <a href="#">Suppliments</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" /> <a href="#">Health</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" /> <a href="#">Gym</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" /> <a href="#">Fat Loss</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" />{" "}
                            <a href="#">Mass gainers</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li
                          id="ec-more-toggle-content"
                          style={{ padding: 0, display: "none" }}
                        >
                          <ul>
                            <li>
                              <div className="ec-sidebar-block-item">
                                <input type="checkbox" /> <a href="#">Watch</a>
                                <span className="checked" />
                              </div>
                            </li>
                            <li>
                              <div className="ec-sidebar-block-item">
                                <input type="checkbox" /> <a href="#">Cap</a>
                                <span className="checked" />
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item ec-more-toggle">
                            <span className="checked" />
                            <span id="ec-more-toggle">More Categories</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar Size Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Flavor</h3>
                    </div>
                    <div className="ec-sb-block-content">
                      <ul>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input
                              type="checkbox"
                              defaultValue
                              defaultChecked
                            />
                            <a href="#">Chocolate</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" defaultValue />
                            <a href="#">Vanilla</a>
                            <span className="checked" />
                          </div>
                        </li>
                        <li>
                          <div className="ec-sidebar-block-item">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">Strawberry</a>
                            <span className="checked" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar Price Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Price</h3>
                    </div>
                    <div className="ec-sb-block-content es-price-slider">
                      <div className="ec-price-filter">
                        <div
                          id="ec-sliderPrice"
                          className="filter__slider-price"
                          data-min={0}
                          data-max={250}
                          data-step={10}
                        />
                        <div className="ec-price-input">
                          <label className="filter__label">
                            <input type="text" className="filter__input" />
                          </label>
                          <span className="ec-price-divider" />
                          <label className="filter__label">
                            <input type="text" className="filter__input" />
                          </label>
                        </div>
                      </div>
                    </div>
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
