import React from "react";
import Breadcrums from "../components/Common/BreadCrums";
import PLCategory from "../components/Common/PLCategory";
import BestSellers from "../components/ProductListing/BestSellers";
import PLRightSection from "../components/ProductListing/PLRightSection";
import ProductCardSlider from "../components/ProductListing/ProductCardSlider";

export default function ProductPage() {
  return (
    <div>
      <Breadcrums from="Health & Fitness" page="USN Hyperbolic" />
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <PLRightSection />
            <div className="ec-pro-leftside ec-common-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
              <PLCategory />
              <BestSellers />
            </div>
          </div>
        </div>
      </section>
      <ProductCardSlider
        headerClassName="mb-4"
        title="Related Products"
        desc="You might also be interested in these products"
      />
    </div>
  );
}
