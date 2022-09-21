import React from "react";
import Inputbox from "./Inputbox";

export default function RequestCallBack() {
  return (
    <div className="px-5 py-5 text-center">
      <h4 className="bold">Request Call Back</h4>
      <div className="text-secondary w-50 m-auto">
        We're here to help. Leave your number down below to easy request call
        back and we will be in touch and assist whenevr you need us
      </div>
      <div className="py-3">
        <Inputbox
          type="with-text-btn"
          placeholder="Phone number"
          buttonText="SUBMIT"
        />
      </div>
    </div>
  );
}
