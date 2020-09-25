import React, { Component } from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form"; // read new version of ReduxForm
import { verifyAccount } from "../actions";
// import { connect } from "react-redux";
import Footer from "../component/HomeFooter";
import Header from "../component/HomeHeader";

// import { loginUser } from "../actions/authentication";

// import classnames from "classnames";
class Verification extends Component {
  handleFormSubmit({ verificationCode }) {
    // Call action creator to sign up the user
    this.props.verifyAccount(
      { verificationCode },
      (path, state) => {
        // callback 1: history push
        this.props.history.push(path, state);
      },
      (path, state) => {
        // callback 2: history replace
        this.props.history.replace(path, state);
      }
    );
  }

  renderField = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      {/*<label>{label}</label>*/}
      <input
        className="form-control"
        placeholder={label}
        {...input}
        type={type}
        required="required"
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </fieldset>
  );

  renderAlert() {
    const { state } = this.props.history.location;
    const { action } = this.props.history;

    // message: sign up failed
    if (state && action === "REPLACE") {
      return (
        <div className="alert alert-danger">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-md-4"></div>
            <div className="col-lg-4 col-xl-4 col-md-4 p-3">
              <form
                className="form-signin"
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
              >
                <div className="form-group pt-1 pl-1 form-div">
                  <label
                    className="form-label-text"
                    for=""
                    style={{ fontSize: "14px", marginBottom: "2px" }}
                  >
                    Verification Code
                  </label>
                  <Field
                    name="verifyCode"
                    component={this.renderField}
                    type="text"
                    label="Verification Code"
                    className="form-control form-input-field"
                  />
                </div>

                <div className="form-group pt-1 pl-1">
                  <button
                    classNameName="btn btn-block text-white"
                    style={{
                      fontWeight: "bold",
                      background: "linear-gradient(to right, red, yellow)"
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

function validate(formProps) {
  // console.log(formProps);

  const errors = {};

  if (!formProps.phoneNumber) {
    errors.phoneNumber = "Please enter your phoneNumber";
  }

  return errors;
}

Verification = reduxForm({
  form: "verifyaccount",
  validate: validate
})(Verification);

export default connect(null, { verifyAccount })(Verification);
