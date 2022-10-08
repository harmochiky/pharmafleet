import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Img =
  "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/2/62ecd46061ddb_6009705668724.jpg";

export default function AltPDPictures() {
  return (
    <div>
      <div className="ff-img-nav-thumb">
        <Swiper slidesPerView="auto">
          <SwiperSlide style={{ width: "fit-content" }}>
            <Slide />
          </SwiperSlide>
          <SwiperSlide style={{ width: "fit-content" }}>
            <Slide />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

const Slide = () => {
  return (
    <div className="single-slide mr-3">
      <img className="img-responsive" src={Img} alt="" />
    </div>
  );
};
