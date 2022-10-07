import React from "react";
import Image from "../../assets/img/hme-s-image1.png";
import PetPharmacy from "../../assets/images/banner/pet-pharmacy.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function HomeSliderSlide() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://www.alphapharmacies.co.za/wp-content/uploads/2021/01/Alpha-Pharm-Franchise-Banner.jpg"})`,
      }}
      className="ec-slide-item d-flex ec-slide-2 mt-1"
    >
      <div className="container align-self-center">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
            <div className="ec-slide-content text-white slider-animation">
              <h1 className="ec-slide-title text-white">
                Welcome to PharmaFleet
              </h1>
              <h2 className="ec-slide-stitle text-white">Trusted Supplier</h2>
              <p className="text-white">
                Stock up for your pharmacy with a trusted supplier today
              </p>
              <a href="#" className="btn btn-lg btn-secondary">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
