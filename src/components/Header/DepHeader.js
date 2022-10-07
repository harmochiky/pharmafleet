import React from "react";

export default function DepHeader({ text }) {
  return (
    <div className="container my-2">
      <img
        className="img-fluid w-100"
        src="https://www.dischem.co.za/media/wysiwyg/5fca25295bfcc_5fa6786614089_5f58d255bf1f0_MEN-1280-X-320-px.jpg"
        alt=""
      />
      <div className="text-secondary text-center py-3">{text}</div>
    </div>
  );
}
