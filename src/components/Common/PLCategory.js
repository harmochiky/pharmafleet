import React from "react";
import { Link } from "react-router-dom";

export default function PLCategory() {
  return (
    <div className="ec-sidebar-wrap ff-border rounded">
      <div className="ec-sidebar-block ">
        <div className="ec-sb-title">
          <h3 className="ec-sidebar-title text-primary bold">Category</h3>
        </div>
        <div className="ec-sb-block-content mb-0 pb-0 border-bottom-0">
          <ul>
            <li className="pb-0">
              <CatList />
            </li>
            <li className="pb-0">
              <CatList />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const CatList = () => {
  return (
    <>
      <div className="ec-sidebar-block-item border-bottom mb-3 bold text-black">
        Clothes
      </div>
      <ul style={{ display: "block" }}>
        <li>
          <div className="ec-sidebar-sub-item">
            <Link to="/s/es">
              Men <span>-</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="ec-sidebar-sub-item">
            <Link to="/s/es">
              Men <span>-</span>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};
