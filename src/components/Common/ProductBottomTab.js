import React from "react";

export default function ProductBottomTab() {
  return (
    <div className="ec-single-pro-tab">
      <div className="ec-single-pro-tab-wrapper">
        <div className="ec-single-pro-tab-nav">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#ec-spt-nav-details"
                role="tablist"
              >
                Detail
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#ec-spt-nav-info"
                role="tablist"
              >
                More Information
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#ec-spt-nav-review"
                role="tablist"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content  ec-single-pro-tab-content">
          <div id="ec-spt-nav-details" className="tab-pane fade show">
            <div className="ec-single-pro-tab-desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul>
                <li>Any Product types that You want - Simple, Configurable</li>
                <li>Downloadable/Digital Products, Virtual Products</li>
                <li>Inventory Management with Backordered items</li>
                <li>Flatlock seams throughout.</li>
              </ul>
            </div>
          </div>
          <div id="ec-spt-nav-info" className="tab-pane fade ">
            <div className="ec-single-pro-tab-moreinfo">
              <ul>
                <li>
                  <span>Weight</span> 1000 g
                </li>
                <li>
                  <span>Dimensions</span> 35 × 30 × 7 cm
                </li>
                <li>
                  <span>Color</span> Black, Pink, Red, White
                </li>
              </ul>
            </div>
          </div>
          <div id="ec-spt-nav-review" className="tab-pane fade active">
            <div className="row">
              <div className="ec-t-review-wrapper">
                <div className="ec-t-review-item">
                  <div className="ec-t-review-avtar">
                    <img src="assets/images/review-image/1.jpg" alt="" />
                  </div>
                  <div className="ec-t-review-content">
                    <div className="ec-t-review-top">
                      <div className="ec-t-review-name">Jeny Doe</div>
                      <div className="ec-t-review-rating">
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star-o" />
                      </div>
                    </div>
                    <div className="ec-t-review-bottom">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ec-t-review-item">
                  <div className="ec-t-review-avtar">
                    <img src="assets/images/review-image/2.jpg" alt="" />
                  </div>
                  <div className="ec-t-review-content">
                    <div className="ec-t-review-top">
                      <div className="ec-t-review-name">Linda Morgus</div>
                      <div className="ec-t-review-rating">
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star-o" />
                        <i className="ecicon eci-star-o" />
                      </div>
                    </div>
                    <div className="ec-t-review-bottom">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ec-ratting-content">
                <h3>Add a Review</h3>
                <div className="ec-ratting-form">
                  <form action="#">
                    <div className="ec-ratting-star">
                      <span>Your rating:</span>
                      <div className="ec-t-review-rating">
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star-o" />
                        <i className="ecicon eci-star-o" />
                        <i className="ecicon eci-star-o" />
                      </div>
                    </div>
                    <div className="ec-ratting-input">
                      <input name="your-name" placeholder="Name" type="text" />
                    </div>
                    <div className="ec-ratting-input">
                      <input
                        name="your-email"
                        placeholder="Email*"
                        type="email"
                        required
                      />
                    </div>
                    <div className="ec-ratting-input form-submit">
                      <textarea
                        name="your-commemt"
                        placeholder="Enter Your Comment"
                        defaultValue={""}
                      />
                      <button
                        className="btn btn-primary"
                        type="submit"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
