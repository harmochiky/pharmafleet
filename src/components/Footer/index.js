import React from "react";
import PaymentImg from "../../assets/img/payment-methods.png";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function index() {
  let year = new Date().getUTCFullYear();
  return (
    <>
      <div className="footer-offer bg-primary">
        <div className="container">
          <div className="row">
            <div className="text-center footer-off-msg">
              <span>Treat headaches with the most trusted brand</span>
              <Link to="/p/eJ8DVULTlmxWABpO4oet/paracetamol-500mg-24-tablets">
                View Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid p-5">
        <div className="first-container p-3">
          <div className="footer-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3 border-right p-3">
                  <div>
                    <img className="footer-logo" src={Logo} />
                    <div className="promo-text py-4">
                      PharmaFleet is proud of being a best Pharmacy supplier in
                      SA with high-quality medicines, supplements, healthcare
                      products
                    </div>
                  </div>
                </div>
                <div className="col-9 px-3">
                  <div className="container-fluid h-100">
                    <div className="row h-100">
                      <div className="col-3">
                        <div className="bold">Business</div>
                        <ul>
                          <li>Become a customer</li>
                          <li>Verify licence</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <div className="bold">Categories</div>
                        <ul>
                          <li>Devices</li>
                          <li>Family Care</li>
                          <li>Fitness</li>
                          <li>Lifestyle</li>
                          <li>Personal care</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <div className="bold">Our service</div>
                        <ul>
                          <li>Shipping</li>
                          <li>Returns</li>
                          <li>Contact Us</li>
                          <li>Site Map</li>
                        </ul>
                      </div>
                      <div className="col-3 border-left pl-3">
                        <div className="bold">Socials</div>
                        <ul>
                          <li>Facebook</li>
                          <li>Twitter</li>
                          <li>Email</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-methods py-2 ">
            <img src={PaymentImg} className="mt-3" />
          </div>
        </div>
        <div className="botton-container">
          <div className="t14">
            Copyright © {year} PharmaFleet. All Rights Reserved.
          </div>
          <ul>
            <li>Profile</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
