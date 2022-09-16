import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSliderSlide from "./HomeSliderSlide";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeSlider() {
  return (
    <div className="px-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        className="slider-container"
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <HomeSliderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
