import React from "react";
import AboutPic from "../../assets/img/about.png";

export default function HomeOrderingInfo() {
  return (
    <div className="container px-5 py-4 home-order-about">
      <div className="row">
        <div className="col-6 px-2">
          <img src={AboutPic} alt="" className="img-fluid" />
        </div>
        <div className="col-6 px-3 details">
          <div>
            <h3 className="bold">
              How to order medicine ?<br />{" "}
              <span className="text-primary">It’s simple.</span>
            </h3>
            <div className="my-4">
              <div className="point">
                <span className="point-number">
                  <span>1</span>
                </span>
                <span>Log into your account</span>
              </div>
              <div className="point">
                <span className="point-number">
                  <span>2</span>
                </span>
                <span>Select products that you want and checkout</span>
              </div>
              <div className="point">
                <span className="point-number">
                  <span>3</span>
                </span>
                <span>Delivery at your pharmacy</span>
              </div>
            </div>
            <h6 className="bold">Don't have account ?</h6>
            <div className="text-secondary w-75">
              Simply press the button below and sign up then wait for us to
              approve your pharmacy
            </div>
            <div className="mt-3 btn btn-primary rounded-pill">Apply here</div>
          </div>
        </div>
      </div>
    </div>
  );
}
