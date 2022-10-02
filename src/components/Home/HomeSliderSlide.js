import React from "react";
import Image from "../../assets/img/hme-s-image1.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function HomeSliderSlide() {
  return (
    <div className="ec-slide-item swiper-slide d-flex ec-slide-2 swiper-slide-active">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
            <div className="ec-slide-content slider-animation">
              <h1 className="ec-slide-title">Boat Headphone Sets</h1>
              <h2 className="ec-slide-stitle">Sale Offer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
