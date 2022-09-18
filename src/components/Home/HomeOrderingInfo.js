import React from "react";
import AboutPic from "../../assets/img/about.png";

export default function HomeOrderingInfo() {
  return (
    <div className="container-fluid px-5 py-4 home-order-about">
      <div className="row">
        <div className="col-6 px-2">
          <img src={AboutPic} alt="" className="img-fluid" />
        </div>
        <div className="col-4 px-3 details">
          <div>
            <h3 className="bold">
              How to order medicines on Medilazar? It’s Simple.
            </h3>
            <div className="my-4">
              <div className="point">
                <span className="point-number">
                  <span>1</span>
                </span>
                <span>Upload valid Prescription</span>
              </div>
              <div className="point">
                <span className="point-number">
                  <span>2</span>
                </span>
                <span>Receive a confirmation call</span>
              </div>
              <div className="point">
                <span className="point-number">
                  <span>3</span>
                </span>
                <span>Delivery at your pharmacy</span>
              </div>
            </div>
            <h5 className="bold">Don't have Prescription ?</h5>
            <div className="text-secondary">
              Simply search &amp; add the medicines OR get consultation from
              Medilazar doctor
            </div>
            <div className="mt-3">Apply here</div>
          </div>
        </div>
      </div>
    </div>
  );
}
