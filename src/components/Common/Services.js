import React from "react";
import S1 from "../../assets/images/icons/service_1.svg";
import S2 from "../../assets/images/icons/service_2.svg";
import S3 from "../../assets/images/icons/service_3.svg";
import S4 from "../../assets/images/icons/service_4.svg";

export default function Services() {
  return (
    <section
      className="section ec-services-section pt-0 section-space-p"
      id="services"
    >
      <div className="container">
        <div className="row">
          <div className="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3">
            <div className="ec_ser_inner">
              <div className="ec-service-image">
                <img src={S1} className="svg_img" alt="" />
              </div>
              <div className="ec-service-desc">
                <h2>Free Shipping</h2>
                <p>Free shipping on all US order or order above $200</p>
              </div>
            </div>
          </div>
          <div className="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3">
            <div className="ec_ser_inner">
              <div className="ec-service-image">
                <img src={S2} className="svg_img" alt="" />
              </div>
              <div className="ec-service-desc">
                <h2>24X7 Support</h2>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <div className="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3">
            <div className="ec_ser_inner">
              <div className="ec-service-image">
                <img src={S3} className="svg_img" alt="" />
              </div>
              <div className="ec-service-desc">
                <h2>30 Days Return</h2>
                <p>Simply return it within 30 days for an exchange</p>
              </div>
            </div>
          </div>
          <div className="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3">
            <div className="ec_ser_inner">
              <div className="ec-service-image">
                <img src={S4} className="svg_img" alt="" />
              </div>
              <div className="ec-service-desc">
                <h2>Payment Secure</h2>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
