import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DepCategories() {
  return (
    <div className="container dep-menu-categories py-4 shadow-sm mb-4 mt-4">
      <div className="category-header">
        <h5 className="bold">Categories</h5>
        <div>
          You can dive deeper into a category but selecting where you want to go
          here
        </div>
      </div>
      <Swiper slidesPerView={"auto"}>
        <SwiperSlide style={{ width: "fit-content" }}>
          <Category />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <Category />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <Category />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <Category />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const Category = () => {
  return (
    <Link to="/s/test/es" className="category-item text-center">
      <div>Clothes</div>
    </Link>
  );
};
