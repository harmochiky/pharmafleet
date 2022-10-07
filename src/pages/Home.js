import React from "react";
import RequestCallBack from "../components/Common/RequestCallBack";
import Services from "../components/Common/Services";
import TrendingProducts from "../components/Common/TrendingProducts";
import Banner2 from "../components/Home/Banner2";
import CategoryHeader from "../components/Home/CategoryHeader";
import DealofDay from "../components/Home/DealofDay";
import HomeOrderingInfo from "../components/Home/HomeOrderingInfo";
import HomeSlider from "../components/Home/HomeSlider";
import ProductCardSlider from "../components/ProductListing/ProductCardSlider";

export default function Home() {
  return (
    <section>
      <HomeSlider />
      <Services />
      <HomeOrderingInfo />
      <DealofDay />
      <Banner2 />
      <ProductCardSlider
        headerClassName="mb-5 pb-4 border-bottom w-75 m-auto"
        title="Recently added"
        titleClassName="h3 bold"
        desc="Be the first to make an order on the following products"
      />
    </section>
  );
}
