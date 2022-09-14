import React from "react";
import PaymentImg from "../../assets/img/payment-methods.png";
import Logo from "../../assets/img/logo.png";

export default function index() {
  let year = new Date().getUTCFullYear();
  return (
    <footer className="container-fluid p-5">
      <div className="first-container p-3">
        <div className="footer-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 border-right-1 p-3">
                <div>
                  <img className="footer-logo" src={Logo} />
                  <div className="promo-text py-4">
                    PharmaFleet is proud of being a best Pharmacy supplier in SA
                    with high-quality medicines, supplements, healthcare
                    products
                  </div>
                </div>
              </div>
              <div className="col-9"></div>
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
  );
}
