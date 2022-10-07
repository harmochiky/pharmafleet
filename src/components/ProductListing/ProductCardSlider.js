import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

export default function ProductCardSlider({
  title,
  desc,
  headerClassName = "",
  className = "",
}) {
  return (
    <section className={"container " + className}>
      <div className={"text-center " + headerClassName}>
        <h5 className="bold">{title}</h5>
        <div>{desc}</div>
      </div>
      <Swiper className="row" slidesPerView="auto">
        <SwiperSlide style={{ width: "fit-content" }}>
          <ProductCard className="w210px mr-4" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <ProductCard className="w210px mr-4" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "fit-content" }}>
          <ProductCard className="w210px mr-4" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
