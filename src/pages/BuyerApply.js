import React, { useState } from "react";
import BreadCrums from "../components/Common/BreadCrums";
import FileSelector from "../components/Common/FileSelector";
import axios from "axios";

export default function BuyerApply() {
  const [tab, tab_index] = useState(0);
  const [submitted, set_submitted] = useState(0);
  const [error, set_error] = useState("");
  const [field_data, set_field_data] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone_number: "",
    role: "",
    user_id_doc: "",
    address: "",
    city: "",
    postal_code: "",
    country: "South Africa",
    state: "",
    pharmacy_name: "",
    pharmacy_website: "",
    password: "",
    password_retype: "",
  });

  const submit_application = (e) => {
    e.preventDefault();

    let udata = field_data;
    console.log({ udata });

    set_error("");
    document.getElementById("btn_load").innerHTML = "Applying..";
    document.getElementById("btn_load").disabled = true;

    if (udata.password === "") {
      return set_error("Password can't be empty");
    }

    if (udata.password !== udata.password_retype) {
      return set_error("Passwords do not match");
    }

    axios
      .post("/apply", udata)
      .then((data) => {
        if (data.data.status === "done") {
          set_submitted(true);
        } else {
          set_error(data.data.error);
          document.getElementById("btn_load").innerHTML = "Apply";
          document.getElementById("btn_load").disabled = false;
        }
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("btn_load").innerHTML = "Apply";
        document.getElementById("btn_load").disabled = false;
        set_error("Encountered an error, please try again");
      });
  };

  const on_change = (e) => {
    set_field_data({
      ...field_data,
      [e.target.name]: e.target.value,
    });
  };

  const render_form = () => {
    switch (tab) {
      case 0:
        return user_details();
      case 1:
        return address();
      default:
        return user_details();
    }
  };

  const user_details = () => {
    return (
      <>
        <span className="ec-register-wrap ec-register-full mt-5">
          <h4 className="bold mb-4">Personal info</h4>
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>First Name*</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            required
            onChange={on_change}
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Last Name*</label>
          <input
            type="text"
            name="surname"
            placeholder="Enter your last name"
            required
            onChange={on_change}
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email add..."
            required
            onChange={on_change}
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Phone Number*</label>
          <input
            type="text"
            name="phone_number"
            placeholder="Enter your phone number"
            required
            onChange={on_change}
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Role *</label>
          <span className="ec-rg-select-inner">
            <select
              name="role"
              id="ec-select-city"
              className="ec-register-select"
              onChange={on_change}
            >
              <option>Select role</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="procument">Procument</option>
            </select>
          </span>
        </span>
        <span className="ec-register-wrap file ec-register-half">
          <label>Upload</label>
          <input type="file" name="user_id" />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={on_change}
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Re-type password*</label>
          <input
            type="password"
            name="password_retype"
            placeholder="Enter your password"
            required
            onChange={on_change}
          />
        </span>
        <div
          style={{
            borderTop: "1px solid black",
          }}
        />
      </>
    );
  };

  const address = () => {
    return (
      <>
        <span className="ec-register-wrap ec-register-full mt-5">
          <h4 className="bold mb-4">Address</h4>
        </span>
        <span className="ec-register-wrap">
          <label>Address</label>
          <input
            onChange={on_change}
            type="text"
            name="address"
            placeholder="Address Line 1"
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>City *</label>
          <input
            onChange={on_change}
            type="text"
            name="city"
            placeholder="City "
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Post Code</label>
          <input
            onChange={on_change}
            type="text"
            name="postal_code"
            placeholder="Post Code"
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Country *</label>
          <input
            type="text"
            name="country"
            value="South Africa"
            placeholder="Country"
          />
        </span>
        <span className="ec-register-wrap ec-register-half">
          <label>Region State</label>
          <input
            onChange={on_change}
            type="text"
            name="state"
            placeholder="State"
          />
        </span>
      </>
    );
  };
  const pharmacy_data = () => {
    return (
      <>
        <span className="ec-register-wrap ec-register-full mt-5">
          <h4 className="bold mb-4">Company</h4>
        </span>
        <span className="ec-register-wrap ec-register-full">
          <label>Company name*</label>
          <input
            onChange={on_change}
            type="text"
            name="pharmacy_name"
            placeholder="Company name"
            required
          />
        </span>
        <span className="ec-register-wrap ec-register-full">
          <label>Website*</label>
          <input
            onChange={on_change}
            type="text"
            name="pharmacy_website"
            placeholder="Enter your company site"
            required
          />
        </span>
        <span className="ec-register-wrap ec-register-full">
          <label>Company registration doc*</label>
          <input
            type="file"
            name="lastname"
            placeholder="Enter your last name"
            required
          />
        </span>

        <span className="ec-register-wrap ec-register-btn">
          <button
            id="btn_load"
            className="btn btn-primary rounded-pill"
            type="submit"
          >
            Apply
          </button>
        </span>
      </>
    );
  };

  return (
    <div>
      <BreadCrums page="Application" from="Home" />
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-bg-title">Customer Account Application</h2>
                <h2 className="ec-title">Customer Account Application</h2>
                <p className="sub-title mb-3">
                  Best place to buy bulk supplies for your pharmacy
                </p>
              </div>
            </div>
            <div className="ec-register-wrapper">
              <div className="ec-register-container">
                <div className="ec-register-form">
                  {submitted ? (
                    <form
                      action="#"
                      onSubmit={submit_application}
                      method="post"
                    >
                      <div className="badge bg-success py-2 w-100">
                        Submitted !
                      </div>
                      <span className="ec-register-wrap text-center ec-register-full mt-5">
                        <h4 className="bold mb-4">Application received</h4>
                        <p className="">
                          Our support team will be in touch as we process your
                          application
                        </p>
                      </span>
                    </form>
                  ) : (
                    <form
                      action="#"
                      onSubmit={submit_application}
                      method="post"
                    >
                      {error && (
                        <div className="badge bg-danger py-2 w-100">
                          {error}
                        </div>
                      )}
                      {render_form()}
                      <u />
                      {address()}
                      <u />
                      {pharmacy_data()}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
