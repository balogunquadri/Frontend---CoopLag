import React, { Component } from "react";
// import { Link } from "react-router-dom";

class RowFour extends Component {
  render() {
    return (
      <>
        <div className="container d-none d-md-block">
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-md-4">
              <h3 className="text-muted large-screen-join-text-title">
                Join the community of business powered by fuspay
              </h3>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-4">
              <h6 className="text-muted large-screen-join-sub-text">
                Lorem ipsum dolor sit, amet conse.
                <br />
                Officiis veritatis illum consectetur
              </h6>
              <h6 className="text-muted large-screen-join-sub-text">
                Lorem ipsum dolor sit, amet consec.
                <br />
                Officiis veritatis illum consectetu
              </h6>
            </div>

            <div className="col-lg-4 col-xl-4 col-md-4">
              <h6 className="text-muted fourth-row-text-title">
                What's your industry
              </h6>
              <div style={{ overflow: "hidden" }} id="body-text">
                <h4 className="sib">Betting</h4>
                <h4 className="sib">Airlines</h4>
                <h4 className="sib">E-commerce</h4>
                <h4 className="sib">Transportation</h4>
                <h4 className="sib">Digital Solution</h4>
              </div>
            </div>

            <div className="col-lg-8 col-xl-8 col-md-8">
              <div className="row" style={{ marginTop: "-90px" }}>
                <div className="col-lg-2 col-xl-2 col-md-2">
                  <h6 className="our-client-text-title">Our Client</h6>
                </div>

                <div className="col-lg-9 col-xl-9 col-md-9">
                  <div className="owl-carousel">
                    <div className="item">
                      <img
                        src="index75434567.png"
                        alt=""
                        className="img-fluid third-row-image"
                      />
                    </div>

                    <div className="item">
                      <img
                        src="index8997.png"
                        alt=""
                        className="img-fluid third-row-image"
                      />
                    </div>

                    <div className="item">
                      <img
                        src="index09865.png"
                        alt=""
                        className="img-fluid third-row-image"
                      />
                    </div>

                    <div className="item">
                      <img
                        src="index75434567.png"
                        alt=""
                        className="img-fluid third-row-image"
                      />
                    </div>

                    <div className="item">
                      <img
                        src="index8997.png"
                        alt=""
                        className="img-fluid third-row-image"
                      />
                    </div>

                    <div className="item">
                      <img
                        src="index09865.png"
                        alt=""
                        className="img-fluid third-row-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RowFour;
