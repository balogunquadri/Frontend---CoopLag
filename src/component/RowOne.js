import React, { Component } from "react";
// import { Link } from "react-router-dom";

class RowOne extends Component {
  render() {
    return (
      <>
        <div
          className="container-fluid d-none d-md-block"
          style={{ marginBottom: "50px" }}
        >
          <div className="row first-row">
            <div className="col-lg-6 col-xl-6 col-md-6 first-row-col-body">
              <span className="card-payment-text">Card Payment</span>
              <span className="first-row-text-sucks">
                {" "}
                sucks, let your customers pay you with
              </span>
              <span className="card-payment-text"> Bank Transfer</span>
              <br />
              <span
                style={{ fontStyle: "italic", fontWeight: "bold" }}
                className="text-muted"
              >
                Fuspay inter-bank transfer payment automation;
              </span>
              <span>
                With Fuspay, ypur customers can pay you with ease through an
                inter-bank transfer
              </span>
              <br />
              <div className="row mt-3">
                <div className="col-lg-6 col-xl-6 col-md-6">
                  <button className="btn btn-primary btn-block">
                    Get Started
                  </button>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6">
                  <button className="btn btn-outline-warning btn-block">
                    Test Fuspay
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
              <img
                id="image-rotate"
                src="godofwar4.jpg"
                alt=""
                style={{
                  borderRadius: "50px",
                  width: "50%",
                  position: "absolute"
                }}
              />
            </div>
          </div>
        </div>

        <div className="row d-none d-sm-block d-block d-md-none d-lg-none d-xl-none">
          <div className="col-sm-12 col-12 small-screen-second-row-col-body">
            <span className="small-screen-second-row-text-caption-title">
              Card Payment
            </span>
            <span className="small-screen-second-row-text-basic">
              {" "}
              sucks, let your customers pay you with
            </span>
            <span className="small-screen-second-row-text-caption-title">
              {" "}
              Bank Transfer
            </span>
            <br />
            <span className="small-screen-text-ital text-muted">
              Fuspay inter-bank transfer payment automation;
            </span>
            <span>
              With Fuspay, ypur customers can pay you with ease through an
              inter-bank transfer
            </span>
            <br />
            <div className="row mt-3">
              <div className="col-sm-6 col-6">
                <button className="btn btn-primary btn-block">
                  Get Started
                </button>
              </div>
              <div className="col-sm-6 col-6">
                <button className="btn btn-outline-warning btn-block">
                  Test Fuspay
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RowOne;
