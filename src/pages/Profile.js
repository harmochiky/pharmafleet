import React from "react";
import BreadCrums from "../components/Common/BreadCrums";
import UserAccMenu from "../components/Common/UserAccMenu";

import User from "../assets/img/logo.png";

import EditIcon from "../assets/images/icons/edit.svg";
import store from "../store/store";
import { logOutUser } from "../store/actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    core: state.core,
  };
};
function Profile({ core }) {
  const logout = () => {
    store.dispatch(logOutUser());
  };

  return (
    <div>
      <BreadCrums from="Home" page="Profile" />
      <section className="ec-page-content ec-vendor-uploads ec-user-account section-space-p">
        <div className="container">
          <div className="row">
            <UserAccMenu />
            <div className="ec-shop-rightside col-lg-9 col-md-12">
              <div className="ec-vendor-dashboard-card ec-vendor-setting-card">
                <div className="ec-vendor-card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="ec-vendor-block-profile">
                        <div className="ec-vendor-block-img space-bottom-30">
                          <div className="ec-vendor-block-bg">
                            <a
                              onClick={logout}
                              href="#"
                              className="btn btn-lg btn-primary"
                              data-link-action="editmodal"
                              title="Edit Detail"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_modal"
                            >
                              Logout
                            </a>
                          </div>
                          <div className="ec-vendor-block-detail">
                            <img
                              className="v-img"
                              src={User}
                              style={{
                                objectFit: "contain",
                              }}
                              alt="vendor image"
                            />
                            <h5 className="name">
                              {core.user.firstname} {core.user.surname}
                            </h5>
                            <p>( {core.user.account_type} user)</p>
                          </div>
                          <p>
                            Hello <span> {core.user.firstname} !</span>
                          </p>
                          <p>
                            From your account you can easily view and track
                            orders. You can also see your past orders and
                            information
                          </p>
                        </div>
                        <h5>Account Information</h5>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="ec-vendor-detail-block ec-vendor-block-email space-bottom-30">
                              <h6>
                                E-mail address{" "}
                                <a
                                  href="javasript:void(0)"
                                  data-link-action="editmodal"
                                  title="Edit Detail"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_modal"
                                ></a>
                              </h6>
                              <ul>
                                <li>
                                  <strong>Email : </strong>
                                  {core.user.email}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="ec-vendor-detail-block ec-vendor-block-contact space-bottom-30">
                              <h6>
                                Contact nubmer
                                <a
                                  href="javasript:void(0)"
                                  data-link-action="editmodal"
                                  title="Edit Detail"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_modal"
                                ></a>
                              </h6>
                              <ul>
                                <li>
                                  <strong>Phone Number : </strong>{" "}
                                  {core.user.phone_number}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStateToProps, null)(Profile);
