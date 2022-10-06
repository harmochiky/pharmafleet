import React from "react";
import BreadCrums from "../components/Common/BreadCrums";

export default function Contact() {
  return (
    <div>
      <BreadCrums page="Contact Us" from="Home" />
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-12 d-none">
              <h4 className="bold mb-4">Contact Us</h4>
            </div>
            <div className="ec-common-wrapper">
              <div className="ec-contact-leftside">
                <div className="ec-contact-container">
                  <div className="ec-contact-form">
                    <form action="#" method="post">
                      <span className="ec-contact-wrap">
                        <label>First Name*</label>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Enter your first name"
                          required
                        />
                      </span>
                      <span className="ec-contact-wrap">
                        <label>Last Name*</label>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter your last name"
                          required
                        />
                      </span>
                      <span className="ec-contact-wrap">
                        <label>Email*</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                        />
                      </span>
                      <span className="ec-contact-wrap">
                        <label>Phone Number*</label>
                        <input
                          type="text"
                          name="phonenumber"
                          placeholder="Enter your phone number"
                          required
                        />
                      </span>
                      <span className="ec-contact-wrap">
                        <label>Comments/Questions*</label>
                        <textarea
                          name="address"
                          placeholder="Please leave your comments here.."
                          defaultValue={""}
                        />
                      </span>
                      <span className="ec-contact-wrap ec-recaptcha">
                        <span
                          className="g-recaptcha"
                          data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        />
                        <input
                          className="form-control d-none"
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                        <span className="help-block with-errors" />
                      </span>
                      <span className="ec-contact-wrap ec-contact-btn">
                        <button className="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="ec-contact-rightside">
                <div className="ec_contact_map">
                  <div className="ec_map_canvas">
                    <iframe
                      id="ec_map_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3892389659236!2d27.995621514975365!3d-26.18401348344682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b936f07e825%3A0xe635702a737f7a4a!2sUniversity%20Of%20Johannesburg!5e0!3m2!1sen!2sza!4v1665081774199!5m2!1sen!2sza"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    <a href="https://sites.google.com/view/maps-api-v2/mapv2" />
                  </div>
                </div>
                <div className="ec_contact_info">
                  <h1 className="ec_contact_info_head">Contact us</h1>
                  <ul className="align-items-center">
                    <li className="ec-contact-item">
                      <i className="ecicon eci-map-marker" aria-hidden="true" />
                      <span>Address :</span>71 Pilgrim Avenue Chevy Chase, east
                      california. east california. MD 20815, USA
                    </li>
                    <li className="ec-contact-item align-items-center">
                      <i className="ecicon eci-phone" aria-hidden="true" />
                      <span>Call Us :</span>
                      <a href="tel:+440123456789">+44 0123 456 789</a>
                    </li>
                    <li className="ec-contact-item align-items-center">
                      <i className="ecicon eci-envelope" aria-hidden="true" />
                      <span>Email :</span>
                      <a href="mailto:example@ec-email.com">
                        example@ec-email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-offer bg-primary">
        <div className="container">
          <div className="row">
            <div className="text-center footer-off-msg">
              <span>Win a contest! Get this limited-editon</span>
              <a href="#" target="_blank">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
