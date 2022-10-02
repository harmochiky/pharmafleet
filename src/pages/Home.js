import React from "react";
import RequestCallBack from "../components/Common/RequestCallBack";
import TrendingProducts from "../components/Common/TrendingProducts";
import Banner2 from "../components/Home/Banner2";
import CategoryHeader from "../components/Home/CategoryHeader";
import DealofDay from "../components/Home/DealofDay";
import HomeOrderingInfo from "../components/Home/HomeOrderingInfo";
import HomeSlider from "../components/Home/HomeSlider";

export default function Home() {
  return (
    <section>
      <HomeSlider />
      <DealofDay />
      <Banner2 />
    </section>
  );
}
