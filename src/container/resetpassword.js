import React, { Component } from "react";

import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form"; // read new version of ReduxForm
import { resetPwd } from "../actions";
// import { connect } from "react-redux";
import Footer from "../component/HomeFooter";
import Header from "../component/HomeHeader";

// import { loginUser } from "../actions/authentication";

// import classnames from "classnames";
class Resetpassword extends Component {
  handleFormSubmit({ ResetToken, password, confirmPassword }) {
    // Call action creator to sign up the user
    this.props.verifyAccount(
      { ResetToken, password, confirmPassword },
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
                    Reset Token
                  </label>
                  <Field
                    name="ResetToken"
                    component={this.renderField}
                    type="text"
                    label="Verification Code"
                    className="form-control form-input-field"
                  />
                </div>
                <div className="form-group pt-1 pl-1 form-div">
                  <label
                    className="form-label-text"
                    for=""
                    style={{ fontSize: "14px", marginBottom: "2px" }}
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    component={this.renderField}
                    type="text"
                    label="Verification Code"
                    className="form-control form-input-field"
                  />
                </div>

                <div className="form-group pt-1 pl-1 form-div">
                  <label
                    className="form-label-text"
                    for=""
                    style={{ fontSize: "14px", marginBottom: "2px" }}
                  >
                    Confirm Password
                  </label>
                  <Field
                    name="confirmPassword"
                    component={this.renderField}
                    type="text"
                    label="Confirm Password"
                    className="form-control form-input-field"
                  />
                </div>

                <div className="form-group pt-1 pl-1">
                  <button
                    class="btn btn-block text-white"
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

  if (!formProps.ResetToken) {
    errors.phoneNumber = "Please enter Reset Token";
  }

  if (!formProps.password) {
    errors.phoneNumber = "Please enter your password";
  }

  if (formProps.password !== formProps.confirmPassword) {
    errors.passwordConfirm = "Password must match!";
  }

  return errors;
}

Resetpassword = reduxForm({
  form: "resetpassword",
  validate: validate
})(Resetpassword);

export default connect(null, { resetPwd })(Resetpassword);
