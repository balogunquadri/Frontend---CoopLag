import React, { Component } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Background from "../img/anon.png";

class Fairthree extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="m-2">
            <h4>Step 3</h4>
            <span id="sub-step-three" class="modal-step-one-sub-text">
              Vendor's Settings
            </span>
          </div>
          <div class="row modal-step-one-second-row">
            <div class="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">
              <h6 class="mb-4 text-muted vendor-sign-up-title">
                Vendors Signup Link
              </h6>
              <div class="d-flex">
                <div class="vendor-signup-default-link-con">
                  <h6 class="vendor-signup-default-link pl-4 pt-3 pb-3 pr-3">
                    https://vcfair.com
                  </h6>
                </div>
                <div class="vendor-signup-custom-link-con pl-3 pt-2 pb-2 pr-4">
                  <input
                    type="text"
                    placeholder="Customize fair URL"
                    class="form-control vendor-signup-input"
                  />
                </div>
              </div>

              <h6 class="vendor-name-text mt-5 mb-3">
                <input type="radio" class="vendor-radio-name" />
                Collect Name & Phone Number
              </h6>
              <h5 class="text-muted mt-2 mb-3 vendor-additional-info">
                Collect Additional information from Vendors
              </h5>
              <div class="d-flex">
                <div class="pt-3 pr-3">
                  <h6 class="add-field-text">
                    <span class="fa fa-plus add-vendor-field-icon"></span>Add
                    New Field
                  </h6>
                </div>
                <div>
                  <div class="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label class="step-one-modal-form-label-text" for="">
                      Field Type
                    </label>
                    <select
                      name=""
                      class="form-control step-one-modal-form-input custom-select"
                    >
                      <option value="">Input/File etc</option>
                      <option value="">Electronics Fair</option>
                      <option value="">Game Fair</option>
                      <option value="">Sports Fair</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xl-6 col-md-6 pt-4">
              <h6 class="text-muted mb-3 vendor-signup-free">
                Set Vendor's Sign Up Free
              </h6>

              <div class="row">
                <div class="col-lg-7 col-xl-7 col-md-7">
                  <div class="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label class="step-one-modal-form-label-text" for="">
                      Vendor's Category
                    </label>
                    <input
                      type="text"
                      class="form-control step-one-modal-form-input"
                    />
                  </div>

                  <div class="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label class="step-one-modal-form-label-text" for="">
                      Vendor's Sign up price
                    </label>
                    <input
                      type="text"
                      class="form-control step-one-modal-form-input"
                    />
                  </div>

                  <div class="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label class="step-one-modal-form-label-text" for="">
                      Select Category Features
                    </label>
                    <input
                      type="text"
                      class="form-control step-one-modal-form-input"
                    />
                  </div>
                </div>

                <div class="col-lg-5 col-xl-5 col-md-5 add-feature-con">
                  <h6 class="add-feature-text">
                    <span class="fa fa-plus add-vendor-field-icon"></span>Add
                    Another Feature
                  </h6>
                </div>
              </div>

              <h5 class="add-field-text mt-4">
                <span class="fa fa-plus add-vendor-field-icon"></span>Add
                Another Category
              </h5>
            </div>
          </div>
          <div class="row step-three-second-row">
            <div class="col-lg-2 col-xl-2 col-md-2">
              <a href="fair-step-four.html" class="btn btn-success btn-block">
                Proceed
              </a>
            </div>

            <div class="col-lg-2 col-xl-2 col-md-2">
              <a
                href="fair-step-two.html"
                class="btn btn-outline-success btn-block"
              >
                Back
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Fairthree;
