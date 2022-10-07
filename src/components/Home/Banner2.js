import React from "react";
// import Bannerimg2 from "../../assets/images/banner/2.jpg";

const Bannerimg2 =
  "https://www.dischem.co.za/media/wysiwyg/Homepage/5e28328b213a6_beauty_resized.jpg";
const Bannerimg1 =
  "https://www.dischem.co.za/media/wysiwyg/63246d9cc0f21_HEALTHY-LIVING-736-x-520.jpg";

export default function Banner2() {
  return (
    <section className="ec-banner section section-space-p">
      <h3 className="text-center bold">Here's more</h3>
      <div className="text-center mb-4">
        Quickly check out these featured categories
      </div>
      <div className="container">
        {/* ec Banners Start */}
        <div className="ec-banner-inner">
          {/*ec Banner Start */}
          <div className="ec-banner-block ec-banner-block-2">
            <div className="row">
              <div
                className="banner-block col-lg-6 col-md-12 margin-b-30 slideInRight"
                data-animation="slideInRight"
                data-animated="true"
              >
                <div className="bnr-overlay">
                  <img src={Bannerimg2} alt="" />
                  <div className="banner-text d-none">
                    <span className="ec-banner-stitle">New Arrivals</span>
                    <span className="ec-banner-title">
                      mens
                      <br /> Sport shoes
                    </span>
                    <span className="ec-banner-discount">30% Discount</span>
                  </div>
                  <div className="banner-content">
                    <span className="ec-banner-btn">
                      <a href="#">Shop Now</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="banner-block col-lg-6 col-md-12 slideInLeft"
                data-animation="slideInLeft"
                data-animated="true"
              >
                <div className="bnr-overlay">
                  <img src={Bannerimg1} alt="" />
                  <div className="banner-text d-none">
                    <span className="ec-banner-stitle">New Trending</span>
                    <span className="ec-banner-title">
                      Smart
                      <br /> watches
                    </span>
                    <span className="ec-banner-discount">
                      Buy any 3 Items &amp; get <br />
                      20% Discount
                    </span>
                  </div>
                  <div className="banner-content">
                    <span className="ec-banner-btn">
                      <a href="#">Shop Now</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* ec Banner End */}
          </div>
          {/* ec Banners End */}
        </div>
      </div>
    </section>
  );
}
