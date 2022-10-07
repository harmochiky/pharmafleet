import React from "react";

export default function DealofDay() {
  return (
    <section className="section ec-ser-spe-section section-space-p">
      <div className="container">
        <div className="row">
          {/*  Special Section Start */}
          <div className="ec-spe-section col-lg-9 col-md-9 col-sm-9 sectopn-spc-mb">
            <div className="col-md-12">
              <div className="section-title pl-0">
                <h3 className="bold pl-0 h3">Deal of the day</h3>
              </div>
            </div>
            <div className="ec-spe-products slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track">
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-1}
                    id
                    style={{ width: "846px" }}
                  >
                    <div>
                      <div
                        className="ec-spe-product"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="ec-spe-pro-inner">
                          <div className="ec-spe-pro-image-outer col-md-6 col-sm-12">
                            <div className="ec-spe-pro-image">
                              <img
                                className="img-responsive"
                                src="https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="ec-spe-pro-content col-md-6 col-sm-12">
                            <div className="ec-spe-pro-rating">
                              <span className="ec-spe-rating-icon">
                                <i className="ecicon eci-star fill" />
                                <i className="ecicon eci-star fill" />
                                <i className="ecicon eci-star fill" />
                                <i className="ecicon eci-star" />
                                <i className="ecicon eci-star" />
                              </span>
                            </div>
                            <h5 className="ec-spe-pro-title">
                              <a href="product-left-sidebar.html" tabIndex={-1}>
                                Fresh organic Apple 12 Pcs
                              </a>
                            </h5>
                            <div className="ec-spe-pro-desc">
                              Lorem ipsum dolor sit amet consectetur Lorem ipsum
                              dolor dolor sit amet consectetur Lorem ipsum dolor
                            </div>
                            <div className="ec-spe-price">
                              <span className="new-price">$199.00</span>
                              <span className="old-price">$200.00</span>
                            </div>
                            <div className="ec-spe-pro-btn">
                              <a
                                href="#"
                                className="btn btn-lg btn-primary"
                                tabIndex={-1}
                              >
                                Add To Cart
                              </a>
                            </div>
                            <div className="ec-spe-pro-progress">
                              <span className="ec-spe-pro-progress-desc">
                                <span>
                                  Already Sold:
                                  <b>20</b>
                                </span>
                                <span>
                                  Available: <b>40</b>
                                </span>
                              </span>
                              <span className="ec-spe-pro-progressbar" />
                            </div>
                            <div className="countdowntimer">
                              <span className="ec-spe-count-desc">
                                {" "}
                                Hurry Up! Offer ends in:
                              </span>
                              <span
                                id="ec-spe-count-1"
                                className="style colorDefinition labelformat"
                              >
                                <span className="timerDisplay label4 ec-spe-count-container">
                                  <span className="displaySection">
                                    <span className="numberDisplay">281 </span>
                                    <span className="periodDisplay">Days</span>
                                  </span>
                                  <span className="displaySection">
                                    <span className="numberDisplay">23 </span>
                                    <span className="periodDisplay">Hours</span>
                                  </span>
                                  <span className="displaySection">
                                    <span className="numberDisplay">59</span>
                                    <span className="periodDisplay">Min</span>
                                  </span>
                                  <span className="displaySection">
                                    <span className="numberDisplay">19</span>
                                    <span className="periodDisplay">Sec</span>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Testimonial & Special Section End */}
          {/*  services Section Start */}
          <div className="ec-services-section col-lg-3 col-md-3 col-sm-3">
            <div className="col-md-12">
              <div className="section-title text-left">
                <h3 className="bold text-left">...&amp; more</h3>
              </div>
            </div>
            <div className="ec_ser_block">
              <div className="ec_ser_content ec_ser_content_1 col-sm-12">
                <div className="ec_ser_inner">
                  <div className="ec-img-container">
                    <img
                      className="product-img img-fluid"
                      src="https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ec-service-desc px-2">
                    <h2>Hyperbolic Mass ss</h2>
                    <p>Health & Fitness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*services Section End */}
    </section>
  );
}
