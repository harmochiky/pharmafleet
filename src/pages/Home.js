import React from "react";
import TrendingProducts from "../components/Common/TrendingProducts";
import CategoryHeader from "../components/Home/CategoryHeader";
import HomeOrderingInfo from "../components/Home/HomeOrderingInfo";
import HomeSlider from "../components/Home/HomeSlider";

export default function Home() {
  return (
    <section>
      <CategoryHeader />
      <HomeSlider />
      <CategoryHeader />
      <TrendingProducts />
      <HomeOrderingInfo />
      <TrendingProducts />
    </section>
  );
}
