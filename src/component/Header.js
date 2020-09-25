import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { verifyJwt, signoutUser } from "../actions";

class Header extends Component {
  componentWillMount() {
    if (this.props.authenticated && !this.props.user) {
      this.props.verifyJwt(); // fetch username
    }
  }

  render() {
    if (this.props.authenticated) {
      // show a dropdown menu for authenticated user
      return (
        <div className="container-fluid d-none d-md-block">
          <div className="row">
            <div
              className="col-lg-6 col-xl-6 col-md-6"
              style={{ paddingRight: "0px" }}
            >
              <h5 className="p-3">
                Coop<span style={{ fontWeight: "bold" }}>LAG</span>
              </h5>
            </div>
            <div
              className="col-lg-6 col-xl-6 col-md-6 pt-3"
              style={{ paddingLeft: "0px", paddingRight: "100px" }}
            >
              <button
                className="btn btn-outline-primary"
                style={{ padding: "5px 20px 5px 20px" }}
              >
                Button 1
              </button>
              <button
                className="btn btn-outline-primary"
                style={{ padding: "5px 20px 5px 20px" }}
              >
                Button 2
              </button>
              <Link
                to="/"
                type="button"
                onClick={this.props.signoutUser}
                className="btn btn-outline-primary"
                style={{ float: "right", backgroundColor: "red" }}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid d-none d-md-block">
          <div className="row">
            <div
              className="col-lg-6 col-xl-6 col-md-6"
              style={{ paddingRight: "0px" }}
            >
              <h5 className="p-3">
                Coop<span style={{ fontWeight: "bold" }}>LAG</span>
              </h5>
            </div>
            <div
              className="col-lg-6 col-xl-6 col-md-6 pt-3"
              style={{ paddingLeft: "0px", paddingRight: "100px" }}
            >
              <button
                className="btn btn-outline-primary"
                style={{ padding: "5px 20px 5px 20px" }}
              >
                Button 1
              </button>
              <button
                className="btn btn-outline-primary"
                style={{ padding: "5px 20px 5px 20px" }}
              >
                Button 2
              </button>

              <button
                className="btn btn-outline-primary"
                style={{ float: "right", backgroundColor: "green" }}
              >
                Login
              </button>
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

export default connect(mapStateToProps, { verifyJwt, signoutUser })(Header);
