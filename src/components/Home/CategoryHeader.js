import React from "react";
import { GiMedicines } from "react-icons/gi";

export default function CategoryHeader() {
  return (
    <div className="category-header py-4 px-5">
      <CH_Item />
      <CH_Item />
      <CH_Item />
      <CH_Item />
      <CH_Item />
    </div>
  );
}

const CH_Item = () => {
  return (
    <div className="category-header-item">
      <div className="icon-container">
        <GiMedicines />
      </div>
      <div>
        <div className="title">Medicine</div>
        <div className="desc">Health products</div>
      </div>
    </div>
  );
};
