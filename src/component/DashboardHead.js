import React, { Component } from "react";
// import { Link } from "react-router-dom";

class DashboardHead extends Component {
  render() {
    return (
      <>
        <section className="container-fluid section-one-main-header-con">
          <div className="row section-one-first-row">
            <div className="col-lg-2 col-xl-2 col-md-2 col-sm-4 col-4 p-3 section-one-row-one-first-col">
              <span className="section-one-row-one-fair-text">fair</span>
              <span className="section-one-row-one-square-text">Square</span>
              <span className="pl-2 d-none d-md-block d-sm-block d-block d-md-none d-lg-none d-xl-none section-one-row-one-small-screen-menu fa fa-bars"></span>
            </div>
            <div className="col-lg-10 col-xl-10 col-md-10 col-sm-8 col-8 p-3 pr-5 section-one-row-one-second-col">
              <span className="fa fa-angle-down row-one-header-icon"></span>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DashboardHead;
