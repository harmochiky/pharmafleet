import React from "react";
import Image from "../../assets/img/hme-s-image1.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function HomeSliderSlide() {
  return (
    <div className="slide-container">
      <div>
        <img src={Image} className="" />
      </div>
      <div className="ml-3 text-white">
        <h1 className="bold">
          Flat 25% Off
          <br /> Medicine order
        </h1>
        <div>
          <div>
            <div></div>
            <div>
              <div>Win big offers</div>
              <div>Every day</div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="bottom-link-section">
            <a>
              <FaArrowAltCircleRight />
            </a>
            <div>Shop now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
