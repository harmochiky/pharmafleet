import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrums from "../components/Common/BreadCrums";
import axios from "axios";
import { userCreated } from "../store/actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = (disaptch) => {
  return {
    userCreated: (data) => disaptch(userCreated(data)),
  };
};

function Login({ userCreated }) {
  const [l_data, set_data] = useState({
    email: "",
    password: "",
  });

  const [err, set_err] = useState("");

  const on_change = (e) => {
    set_data({ ...l_data, [e.target.name]: e.target.value });
  };

  const on_submit = (e) => {
    e.preventDefault();

    document.getElementById("btn_submit").innerHTML = "Logging in..";
    set_err("");

    axios
      .post("/login", l_data)
      .then((data) => {
        if (data.data.error) {
          document.getElementById("btn_submit").disabled = false;
          document.getElementById("btn_submit").innerHTML = "Log in";
          return set_err(data.data.error);
        } else {
          if (data.data.token) {
            console.log(data.data);
            userCreated(data.data);
          } else {
            return set_err("Unexpected response");
          }
          document.getElementById("btn_submit").disabled = false;
        }
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("btn_submit").innerHTML = "Log in";
        document.getElementById("btn_submit").disabled = false;
      });
  };

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
                  <form onSubmit={on_submit} action="#" method="post">
                    {err && <div className="badge bg-danger mb-4">{err}</div>}
                    <span className="ec-login-wrap">
                      <label>Email Address*</label>
                      <input
                        onChange={on_change}
                        name="email"
                        type="text"
                        placeholder="Enter your email add..."
                        required
                      />
                    </span>
                    <span className="ec-login-wrap">
                      <label>Password*</label>
                      <input
                        onChange={on_change}
                        name="password"
                        type="password"
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
                        id="btn_submit"
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

export default connect(null, mapDispatchToProps)(Login);
