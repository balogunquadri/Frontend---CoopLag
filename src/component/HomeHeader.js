/* tslint:disable */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { verifyJwt, signoutUser } from "../actions";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// // import { registerUser } from '../actions/authentication';
// import { loginUser } from '../actions/authentication';
// import classnames from "classnames";
// // import ReactDOM from "react-dom";
// //   import Background from "../img/anon.png";

class HomeHeader extends Component {
  render() {
    if (!this.props.authenticated) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-4 col-xl-4 col-md-4"
              style={{ paddingRight: "0px" }}
            >
              <h5 className="p-3">
                Coop<span style={{ fontWeight: "bold" }}>LAG</span>
              </h5>
            </div>
            <div className="col-lg-8 col-xl-8 col-md-8 pt-3 pl-0 text-right">
              <ul>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Pricing
                  </a>
                </li>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Documentation
                  </a>
                </li>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Terms of Service
                  </a>
                </li>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Contact
                  </a>
                </li>
                <li className="large-screen-btn">
                  <Link
                    to="/login"
                    role="button"
                    className="btn btn-success"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      padding: "2px 30px 2px 30px"
                    }}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-4 col-xl-4 col-md-4"
              style={{ paddingRight: "0px" }}
            >
              <h5 className="p-3">
                Coop<span style={{ fontWeight: "bold" }}>LAG</span>
              </h5>
            </div>
            <div className="col-lg-8 col-xl-8 col-md-8 pt-3 pl-0 text-right">
              <ul>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Pricing
                  </a>
                </li>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Documentation
                  </a>
                </li>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Terms of Service
                  </a>
                </li>
                <li className="large-screen-tab-items">
                  <a className="large-screen-tab-links" href="!#">
                    Contact
                  </a>
                </li>
                <li className="large-screen-btn">
                  <Link
                    to="/login"
                    role="button"
                    className="btn btn-success"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: "red",
                      padding: "2px 30px 2px 30px"
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    username: state.auth.username
  };
}

export default connect(mapStateToProps, { verifyJwt, signoutUser })(HomeHeader);
