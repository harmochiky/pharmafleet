import React from "react";
import { Link } from "react-router-dom";
import BreadCrums from "../components/Common/BreadCrums";

export default function Login() {
  return (
    <div>
      <BreadCrums from="Home" page="Login" />
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-bg-title">Log In</h2>
                <h2 className="ec-title">Log In</h2>
                <p className="sub-title mb-3">
                  Login to buy products and see catalogue
                </p>
              </div>
            </div>
            <div className="ec-login-wrapper">
              <div className="ec-login-container">
                <div className="ec-login-form">
                  <form action="#" method="post">
                    <span className="ec-login-wrap">
                      <label>Email Address*</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your email add..."
                        required
                      />
                    </span>
                    <span className="ec-login-wrap">
                      <label>Password*</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                      />
                    </span>
                    <span className="ec-login-wrap ec-login-fp">
                      <label>
                        <a href="#">Forgot Password?</a>
                      </label>
                    </span>
                    <span className="ec-login-wrap ec-login-btn">
                      <button
                        className="btn btn-primary rounded-pill"
                        type="submit"
                      >
                        Login
                      </button>
                      <Link to="/apply" className="mt-4">
                        Apply for an account
                      </Link>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
