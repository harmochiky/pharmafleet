import React from "react";
import ProductListType4 from "../ProductListing/ProductListType4";
import TrendingProductType1 from "../ProductListing/TrendingProductType1";

export default function TrendingProducts() {
  return (
    <div className="px-5 py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div>
              <h4 className="bold mb-4">Trending Products</h4>
            </div>
            <div>
              <ProductListType4 />
            </div>
          </div>
          <div className="col-4">
            <TrendingProductType1 />
          </div>
        </div>
      </div>
    </div>
  );
}
