import React from "react";

export default function BreadCrums({ page, from, className }) {
  return (
    <div className={"bc-container " + className}>
      <div className="container d-flex aling-items-center justify-content-between py-3">
        <div>
          <h6 className="bold">{page}</h6>
        </div>
        <div>
          {from} &rsaquo;&rsaquo; {page}
        </div>
      </div>
    </div>
  );
}
